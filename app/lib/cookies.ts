export const ACCEPT_COOKIES_KEY = "acceptCookies";

export const COOKIE_CONSENT_ACCEPTED = "true";
export const COOKIE_CONSENT_REJECTED = "false";

export const COOKIE_CONSENT_CHANGED_EVENT = "cookie-consent-changed";

export const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export const COOKIE_POLICY_URL = "/cookie-policy";

export const hasAnalyticsConsent = (consentValue?: string): boolean => {
  return consentValue === COOKIE_CONSENT_ACCEPTED;
};
