"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  contactRecipientOptions,
  ContactRecipient,
} from "@/app/lib/contactRecipients";
import { easeOutExpo } from "@/app/lib/motion";

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

const decorativeTags: Record<string, string> = {
  [ContactRecipient.UNITED4GAMES]: "Game studio",
  [ContactRecipient.UNITED4DIGITAL]: "digital agency",
};

const cardBounceVariants = {
  rest: { scale: 1 },
  active: {
    scale: [1, 1.02, 1],
    transition: { duration: 0.3, ease: easeOutExpo },
  },
};

export const ContactRecipientField = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeCard, setActiveCard] = useState<string>(
    ContactRecipient.UNITED4GAMES,
  );

  return (
    <fieldset className="form-field">
      <legend className="form-label">Write to</legend>

      <div
        className="grid grid-cols-1 gap-3 tablet:grid-cols-2"
        role="group"
        aria-label="Brand selection"
      >
        {contactRecipientOptions.map((contactRecipient) => {
          const isActive = activeCard === contactRecipient.value;
          const wordmark = recipientWordmarks[contactRecipient.value];
          const decorativeTag = decorativeTags[contactRecipient.value];

          return (
            <motion.button
              key={contactRecipient.value}
              type="button"
              aria-pressed={isActive}
              variants={cardBounceVariants}
              animate={isActive && !prefersReducedMotion ? "active" : "rest"}
              onClick={() => {
                setActiveCard(contactRecipient.value);
              }}
              className={`rounded-custom border px-4 py-3 text-left transition-all ${
                isActive
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
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
                {decorativeTag}
              </span>
            </motion.button>
          );
        })}
      </div>
    </fieldset>
  );
};
