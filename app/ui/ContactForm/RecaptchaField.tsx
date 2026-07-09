"use client";

import dynamic from "next/dynamic";
import type { ReCAPTCHAProps } from "react-google-recaptcha";
import {
  isRecaptchaEnabled,
  recaptchaSiteKeyForClient,
} from "@/app/lib/recaptcha";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

type RecaptchaFieldProps = Omit<ReCAPTCHAProps, "sitekey">;

export const RecaptchaField = ({
  onChange,
  className,
  ...props
}: RecaptchaFieldProps) => {
  if (!isRecaptchaEnabled) {
    return null;
  }

  return (
    <div className={className}>
      <ReCAPTCHA
        sitekey={recaptchaSiteKeyForClient}
        hl="en"
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export { isRecaptchaEnabled as hasRecaptchaSiteKey };
