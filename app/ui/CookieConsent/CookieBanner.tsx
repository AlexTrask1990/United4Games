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

export const CookieBanner = () => {
  const consentValue = useCookieConsent();
  const isVisible = consentValue === null;

  const saveConsent = (value: string) => {
    setCookie(ACCEPT_COOKIES_KEY, value, {
      maxAge: COOKIE_MAX_AGE_SECONDS,
      path: "/",
      sameSite: "lax",
    });
    window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGED_EVENT));
  };

  const handleAccept = () => {
    saveConsent(COOKIE_CONSENT_ACCEPTED);
  };

  const handleReject = () => {
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
      className="fixed inset-x-0 bottom-0 z-60 border-t border-accent-blue/20 bg-primary p-4 shadow-[0_-8px_32px_rgba(13,21,56,0.35)] laptop:p-6"
    >
      <div className="container mx-auto flex w-11/12 flex-col gap-4 laptop:flex-row laptop:items-center laptop:justify-between laptop:gap-8">
        <div className="max-w-3xl">
          <p
            id="cookie-banner-title"
            className="font-display text-lg font-bold text-white"
          >
            We use cookies
          </p>
          <p
            id="cookie-banner-description"
            className="mt-2 text-sm leading-relaxed text-gray-100 laptop:text-base"
          >
            We use technical cookies to remember your preferences and analytics
            cookies to improve our website. You can accept or reject analytics
            cookies. Read our{" "}
            <Link
              href={COOKIE_POLICY_URL}
              className="text-accent-blue underline underline-offset-2 hover:opacity-80"
            >
              Cookie Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 tablet:flex-row">
          <button
            type="button"
            onClick={handleReject}
            className="rounded-custom border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:border-accent-blue hover:text-accent-blue"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-custom bg-secondary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-accent-red"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
