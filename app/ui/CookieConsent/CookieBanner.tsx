"use client";

import { setCookie } from "cookies-next";
import Link from "next/link";
import {
  ACCEPT_COOKIES_KEY,
  COOKIE_CONSENT_ACCEPTED,
  COOKIE_CONSENT_CHANGED_EVENT,
  COOKIE_CONSENT_REJECTED,
  COOKIE_MAX_AGE_SECONDS,
  COOKIE_POLICY_URL,
} from "@/app/lib/cookies";
import { useCookieConsent } from "@/app/lib/hooks/useCookieConsent";
import { useIsMounted } from "@/app/lib/hooks/useIsMounted";

export const CookieBanner = () => {
  const isMounted = useIsMounted();
  const consentValue = useCookieConsent();
  const isVisible = isMounted && consentValue === null;

  const saveConsent = (value: string) => {
    setCookie(ACCEPT_COOKIES_KEY, value, {
      maxAge: COOKIE_MAX_AGE_SECONDS,
      path: "/",
      sameSite: "lax",
    });
    window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGED_EVENT));
  };

  const handleAcceptAll = () => {
    saveConsent(COOKIE_CONSENT_ACCEPTED);
  };

  const handleRejectAll = () => {
    saveConsent(COOKIE_CONSENT_REJECTED);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      className="fixed inset-x-0 bottom-0 z-60 border-t border-gray-200 bg-white p-4 shadow-[0_-4px_24px_rgba(0,0,0,0.12)] laptop:p-6"
    >
      <div className="container mx-auto flex w-11/12 flex-col gap-4 laptop:flex-row laptop:items-center laptop:justify-between laptop:gap-8">
        <div className="max-w-3xl">
          <p
            id="cookie-banner-title"
            className="text-lg font-bold text-primary"
          >
            We value your privacy
          </p>
          <p
            id="cookie-banner-description"
            className="mt-2 text-sm leading-relaxed text-gray-700 laptop:text-base"
          >
            We use cookies to enhance your browsing experience, serve
            personalized ads or content, and analyze our traffic. By clicking
            &quot;Accept All&quot;, you consent to our use of cookies.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 tablet:flex-row tablet:flex-wrap tablet:justify-end">
          <Link
            href={COOKIE_POLICY_URL}
            className="rounded-custom border border-secondary bg-white px-5 py-2.5 text-center text-sm font-bold text-secondary transition-colors hover:bg-secondary/5"
          >
            Customize
          </Link>
          <button
            type="button"
            onClick={handleRejectAll}
            className="rounded-custom border border-secondary bg-white px-5 py-2.5 text-sm font-bold text-secondary transition-colors hover:bg-secondary/5"
          >
            Reject All
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="rounded-custom bg-secondary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-red"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};
