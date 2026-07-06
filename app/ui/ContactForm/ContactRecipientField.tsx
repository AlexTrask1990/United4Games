"use client";

import { Controller, Control, FieldErrors } from "react-hook-form";
import {
  contactRecipientOptions,
  ContactRecipient,
} from "@/app/lib/contactRecipients";
import { ContactFormData, ContactFormKeys } from "@/app/types/contactForm";

interface ContactRecipientFieldProps {
  control: Control<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
}

const recipientWordmarks: Record<
  string,
  Array<{ char: string; className: string }>
> = {
  [ContactRecipient.UNITED4GAMES]: [
    { char: "U", className: "text-primary" },
    { char: "4", className: "text-secondary" },
    { char: "G", className: "text-accent-blue" },
  ],
  [ContactRecipient.UNITED4DIGITAL]: [
    { char: "U", className: "text-primary" },
    { char: "4", className: "text-secondary" },
    { char: "D", className: "text-primary" },
  ],
};

export const ContactRecipientField = ({
  control,
  errors,
}: ContactRecipientFieldProps) => {
  return (
    <fieldset className="form-field">
      <legend className="form-label">
        Write to<span className="text-accent-red">*</span>
      </legend>

      <Controller
        name={ContactFormKeys.RECIPIENT}
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <div
            className="grid grid-cols-1 gap-3 tablet:grid-cols-2"
            role="radiogroup"
            aria-label="Choose United4Games or United4Digital"
          >
            {contactRecipientOptions.map((contactRecipient) => {
              const isSelected = value === contactRecipient.value;
              const wordmark = recipientWordmarks[contactRecipient.value];

              return (
                <button
                  key={contactRecipient.value}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => {
                    onChange(contactRecipient.value);
                  }}
                  className={`rounded-custom border px-4 py-3 text-left transition-all ${
                    isSelected
                      ? "border-secondary bg-secondary/10 shadow-[0_0_0_1px_rgba(255,104,57,0.35)]"
                      : "border-primary/15 bg-white hover:border-accent-blue/60 hover:bg-accent-blue/5"
                  }`}
                >
                  <span className="font-display text-2xl font-black leading-none tracking-tight">
                    {wordmark.map((letter) => (
                      <span key={letter.char} className={letter.className}>
                        {letter.char}
                      </span>
                    ))}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-gray-50">
                    {contactRecipient.label}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      />

      {errors.recipient && (
        <p className="form-error">{errors.recipient.message}</p>
      )}
    </fieldset>
  );
};
