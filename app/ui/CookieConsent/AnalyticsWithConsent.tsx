"use client";

import { Analytics } from "@vercel/analytics/react";
import { hasAnalyticsConsent } from "@/app/lib/cookies";
import { useCookieConsent } from "@/app/lib/hooks/useCookieConsent";

export const AnalyticsWithConsent = () => {
  const consentValue = useCookieConsent();
  const isConsentGranted = hasAnalyticsConsent(String(consentValue ?? ""));

  if (!isConsentGranted) {
    return null;
  }

  return <Analytics />;
};
