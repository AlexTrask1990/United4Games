const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export const isRecaptchaEnabled =
  Boolean(recaptchaSiteKey) && process.env.NODE_ENV !== "development";

export const recaptchaSiteKeyForClient = isRecaptchaEnabled
  ? recaptchaSiteKey
  : "";
