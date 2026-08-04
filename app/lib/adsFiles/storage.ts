import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
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

export const readAdsFileConfig = async (
  fileId: AdsFileId,
): Promise<AdsFileConfig> => {
  try {
    const rawContent = await readFile(getConfigFilePath(fileId), "utf8");

    return parseAdsFileConfig(fileId, rawContent);
  } catch {
    return defaultAdsFileConfig(fileId);
  }
};

export const writeAdsFileConfig = async (
  fileId: AdsFileId,
  config: Pick<AdsFileConfig, "content">,
): Promise<AdsFileConfig> => {
  await mkdir(dataDirectoryPath, { recursive: true });

  const nextConfig: AdsFileConfig = {
    content: config.content,
    updatedAt: new Date().toISOString(),
  };

  await writeFile(
    getConfigFilePath(fileId),
    `${JSON.stringify(nextConfig, null, 2)}\n`,
    "utf8",
  );

  return nextConfig;
};

export const getAdsFilePublicPath = (fileId: AdsFileId): string => {
  return getAdsFileOption(fileId).publicPath;
};
