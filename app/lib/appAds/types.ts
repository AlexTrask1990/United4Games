export interface AppAdsConfig {
  isVisible: boolean;
  content: string;
  updatedAt: string;
}

export const defaultAppAdsConfig = (): AppAdsConfig => ({
  isVisible: false,
  content: "",
  updatedAt: new Date(0).toISOString(),
});
