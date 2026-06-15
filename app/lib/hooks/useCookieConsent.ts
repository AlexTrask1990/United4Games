"use client";

import { getCookie } from "cookies-next";
import { useSyncExternalStore } from "react";
import { ACCEPT_COOKIES_KEY, COOKIE_CONSENT_CHANGED_EVENT } from "@/app/lib/cookies";

const getConsentSnapshot = (): string | null => {
  const value = getCookie(ACCEPT_COOKIES_KEY);

  if (!value) {
    return null;
  }

  return String(value);
};

const subscribeToConsent = (onStoreChange: () => void) => {
  window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, onStoreChange);

  return () => {
    window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, onStoreChange);
  };
};

export const useCookieConsent = (): string | null => {
  return useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    () => null,
  );
};
