import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { get, put } from "@vercel/blob";
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
  // OIDC (default on Vercel): BLOB_STORE_ID + runtime VERCEL_OIDC_TOKEN
  // Legacy/local fallback: BLOB_READ_WRITE_TOKEN
  return Boolean(
    process.env.BLOB_STORE_ID?.trim() ||
      process.env.BLOB_READ_WRITE_TOKEN?.trim(),
  );
};

const readStreamAsText = async (
  stream: ReadableStream<Uint8Array>,
): Promise<string> => {
  return new Response(stream).text();
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
  const blobResult = await get(getBlobPathname(fileId), {
    access: "private",
    useCache: false,
  });

  if (!blobResult?.stream) {
    return defaultAdsFileConfig(fileId);
  }

  const rawContent = await readStreamAsText(blobResult.stream);

  return parseAdsFileConfig(fileId, rawContent);
};

const writeAdsFileConfigToBlob = async (
  fileId: AdsFileId,
  config: AdsFileConfig,
): Promise<AdsFileConfig> => {
  await put(getBlobPathname(fileId), JSON.stringify(config, null, 2), {
    access: "private",
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

  // Local/dev fallback. On Vercel without Blob this will fail.
  if (process.env.VERCEL) {
    throw new Error(
      "Storage is not configured. Connect a Vercel Blob store to this project (BLOB_STORE_ID / BLOB_READ_WRITE_TOKEN) and redeploy.",
    );
  }

  return writeAdsFileConfigToDisk(fileId, nextConfig);
};

export const getAdsFilePublicPath = (fileId: AdsFileId): string => {
  return getAdsFileOption(fileId).publicPath;
};
