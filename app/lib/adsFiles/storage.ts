import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { list, put } from "@vercel/blob";
import {
  AdsFileConfig,
  AdsFileId,
  defaultAdsFileConfig,
  getAdsFileOption,
} from "@/app/lib/adsFiles/types";

const dataDirectoryPath = path.join(process.cwd(), "data");

const getConfigFilePath = (fileId: AdsFileId) => {
  return path.join(dataDirectoryPath, `${fileId}.config.json`);
};

const getBlobPathname = (fileId: AdsFileId) => {
  return `ads-files/${fileId}.json`;
};

const hasBlobStorage = () => {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN?.trim());
};

const parseAdsFileConfig = (
  fileId: AdsFileId,
  rawContent: string,
): AdsFileConfig => {
  const parsed = JSON.parse(rawContent) as Partial<AdsFileConfig>;
  const defaults = defaultAdsFileConfig(fileId);

  return {
    content:
      typeof parsed.content === "string" ? parsed.content : defaults.content,
    updatedAt:
      typeof parsed.updatedAt === "string"
        ? parsed.updatedAt
        : defaults.updatedAt,
  };
};

const readAdsFileConfigFromDisk = async (
  fileId: AdsFileId,
): Promise<AdsFileConfig> => {
  try {
    const rawContent = await readFile(getConfigFilePath(fileId), "utf8");

    return parseAdsFileConfig(fileId, rawContent);
  } catch {
    return defaultAdsFileConfig(fileId);
  }
};

const writeAdsFileConfigToDisk = async (
  fileId: AdsFileId,
  config: AdsFileConfig,
): Promise<AdsFileConfig> => {
  await mkdir(dataDirectoryPath, { recursive: true });

  await writeFile(
    getConfigFilePath(fileId),
    `${JSON.stringify(config, null, 2)}\n`,
    "utf8",
  );

  return config;
};

const readAdsFileConfigFromBlob = async (
  fileId: AdsFileId,
): Promise<AdsFileConfig> => {
  const { blobs } = await list({
    prefix: getBlobPathname(fileId),
    limit: 1,
  });

  const blob = blobs[0];

  if (!blob) {
    return defaultAdsFileConfig(fileId);
  }

  const response = await fetch(blob.url, {
    cache: "no-store",
  });

  if (!response.ok) {
    return defaultAdsFileConfig(fileId);
  }

  const rawContent = await response.text();

  return parseAdsFileConfig(fileId, rawContent);
};

const writeAdsFileConfigToBlob = async (
  fileId: AdsFileId,
  config: AdsFileConfig,
): Promise<AdsFileConfig> => {
  await put(getBlobPathname(fileId), JSON.stringify(config, null, 2), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });

  return config;
};

export const readAdsFileConfig = async (
  fileId: AdsFileId,
): Promise<AdsFileConfig> => {
  if (hasBlobStorage()) {
    return readAdsFileConfigFromBlob(fileId);
  }

  return readAdsFileConfigFromDisk(fileId);
};

export const writeAdsFileConfig = async (
  fileId: AdsFileId,
  config: Pick<AdsFileConfig, "content">,
): Promise<AdsFileConfig> => {
  const nextConfig: AdsFileConfig = {
    content: config.content,
    updatedAt: new Date().toISOString(),
  };

  if (hasBlobStorage()) {
    return writeAdsFileConfigToBlob(fileId, nextConfig);
  }

  // Local/dev fallback. On Vercel without Blob this will fail — configure BLOB_READ_WRITE_TOKEN.
  if (process.env.VERCEL) {
    throw new Error(
      "Storage is not configured. Add a Vercel Blob store and set BLOB_READ_WRITE_TOKEN.",
    );
  }

  return writeAdsFileConfigToDisk(fileId, nextConfig);
};

export const getAdsFilePublicPath = (fileId: AdsFileId): string => {
  return getAdsFileOption(fileId).publicPath;
};
