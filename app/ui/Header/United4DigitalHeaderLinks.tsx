"use client";

import { motion, useReducedMotion } from "framer-motion";
import { externalLinks } from "@/app/lib/links";
import { easeOutExpo } from "@/app/lib/motion";

const united4DigitalUrl = externalLinks.united4Digital;

const logoLetterVariants = {
  rest: { y: 0, opacity: 1 },
  hover: (index: number) => ({
    y: [0, -4, 0],
    opacity: 1,
    transition: {
      delay: index * 0.05,
      duration: 0.35,
      ease: easeOutExpo,
    },
  }),
};

export const United4DigitalLogoLink = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={united4DigitalUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="United4Digital home"
      className="group flex shrink-0 items-center"
      initial="rest"
      whileHover={prefersReducedMotion ? undefined : "hover"}
    >
      <span className="font-display text-4xl font-black leading-none tracking-tight laptop:text-3xl">
        {[
          { char: "U", className: "text-white" },
          { char: "4", className: "text-secondary" },
          { char: "D", className: "text-white" },
        ].map((letter, index) => (
          <motion.span
            key={letter.char}
            custom={index}
            variants={logoLetterVariants}
            className={`inline-block ${letter.className}`}
          >
            {letter.char}
          </motion.span>
        ))}
      </span>
      <span className="mt-1 hidden h-0.5 max-w-0 bg-accent-blue transition-all duration-300 group-hover:max-w-full group-focus-visible:max-w-full laptop:block" />
    </motion.a>
  );
};

export const United4DigitalNavButton = () => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <a
        href={united4DigitalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-custom bg-secondary px-5 py-2.5 text-base font-bold text-white transition-colors hover:bg-accent-red"
      >
        United4Digital.com
      </a>
    );
  }

  return (
    <a
      href={united4DigitalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-custom bg-secondary px-5 py-2.5 text-base font-bold text-white transition-all hover:bg-accent-red hover:shadow-[0_0_20px_rgba(255,71,87,0.35)]"
    >
      <span className="relative block h-6 overflow-hidden">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-6 group-focus-visible:-translate-y-6">
          United4Digital.com
        </span>
        <span className="absolute inset-x-0 top-6 block transition-transform duration-300 ease-out group-hover:-translate-y-6 group-focus-visible:-translate-y-6">
          Visit United4Digital →
        </span>
      </span>
    </a>
  );
};
