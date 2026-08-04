export const ADMIN_SECRET_STORAGE_KEY = "u4g-admin-secret";

export const readAdminSecretFromSession = (): string | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const secret = window.sessionStorage.getItem(ADMIN_SECRET_STORAGE_KEY)?.trim();

  return secret || null;
};

export const writeAdminSecretToSession = (secret: string) => {
  window.sessionStorage.setItem(ADMIN_SECRET_STORAGE_KEY, secret);
};

export const clearAdminSecretFromSession = () => {
  window.sessionStorage.removeItem(ADMIN_SECRET_STORAGE_KEY);
};
