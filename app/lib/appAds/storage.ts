import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import {
  AppAdsConfig,
  defaultAppAdsConfig,
} from "@/app/lib/appAds/types";

const dataDirectoryPath = path.join(process.cwd(), "data");
const configFilePath = path.join(dataDirectoryPath, "app-ads.config.json");

const parseAppAdsConfig = (rawContent: string): AppAdsConfig => {
  const parsed = JSON.parse(rawContent) as Partial<AppAdsConfig>;

  return {
    isVisible: Boolean(parsed.isVisible),
    content: typeof parsed.content === "string" ? parsed.content : "",
    updatedAt:
      typeof parsed.updatedAt === "string"
        ? parsed.updatedAt
        : new Date().toISOString(),
  };
};

export const readAppAdsConfig = async (): Promise<AppAdsConfig> => {
  try {
    const rawContent = await readFile(configFilePath, "utf8");

    return parseAppAdsConfig(rawContent);
  } catch {
    return defaultAppAdsConfig();
  }
};

export const writeAppAdsConfig = async (
  config: Pick<AppAdsConfig, "isVisible" | "content">,
): Promise<AppAdsConfig> => {
  await mkdir(dataDirectoryPath, { recursive: true });

  const nextConfig: AppAdsConfig = {
    isVisible: config.isVisible,
    content: config.content,
    updatedAt: new Date().toISOString(),
  };

  await writeFile(configFilePath, `${JSON.stringify(nextConfig, null, 2)}\n`, "utf8");

  return nextConfig;
};

export const isAppAdsPubliclyAvailable = (config: AppAdsConfig): boolean => {
  return config.isVisible;
};
