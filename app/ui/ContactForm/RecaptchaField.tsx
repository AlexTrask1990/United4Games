"use client";

import dynamic from "next/dynamic";
import type { ReCAPTCHAProps } from "react-google-recaptcha";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

type RecaptchaFieldProps = Omit<ReCAPTCHAProps, "sitekey">;

const RecaptchaMissingMessage = () => (
  <p className="pt-6 text-sm leading-relaxed text-gray-50">
    reCAPTCHA is not configured. Add{" "}
    <code className="rounded bg-primary/5 px-1 py-0.5 text-primary">
      NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    </code>{" "}
    to <code className="rounded bg-primary/5 px-1 py-0.5 text-primary">.env.local</code>{" "}
    and restart the dev server.
  </p>
);

export const RecaptchaField = ({
  onChange,
  className,
  ...props
}: RecaptchaFieldProps) => {
  if (!recaptchaSiteKey) {
    if (process.env.NODE_ENV === "development") {
      return <RecaptchaMissingMessage />;
    }

    return null;
  }

  return (
    <div className={className}>
      <ReCAPTCHA
        sitekey={recaptchaSiteKey}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export const hasRecaptchaSiteKey = Boolean(recaptchaSiteKey);
