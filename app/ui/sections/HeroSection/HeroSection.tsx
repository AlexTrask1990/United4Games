"use client";

import { motion, useReducedMotion } from "framer-motion";
import { externalLinks } from "@/app/lib/links";
import {
  defaultRevealTransition,
  easeOutExpo,
  fadeUp,
} from "@/app/lib/motion";
import { SectionLink } from "@/app/ui/SectionLink/SectionLink";

export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col justify-center bg-primary px-6 pt-86 pb-16 text-white hero-gaming-bg"
    >
      <div className="hero-glow hero-glow-red" aria-hidden="true" />
      <div className="hero-glow hero-glow-orange" aria-hidden="true" />
      <div className="hero-glow hero-glow-blue" aria-hidden="true" />

      <div className="container relative z-10 mx-auto grid w-11/12 max-w-6xl items-center gap-12 laptop:grid-cols-2 laptop:gap-16">
        <motion.div
          className="flex flex-col items-center text-center laptop:items-start laptop:text-left"
          variants={fadeUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          transition={{ ...defaultRevealTransition, duration: 0.7 }}
        >
          <div className="brand-accent-line mb-8" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <p className="font-display text-sm font-semibold uppercase tracking-[0.35em] text-accent-blue">
            United4Games
          </p>

          <h1
            id="hero-heading"
            className="font-display mt-4 text-5xl font-black text-white text-shadow-heading laptop:text-6xl desktop:text-7xl"
          >
            Games that{" "}
            <span className="text-secondary">Inspire!</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg text-white/80 laptop:text-xl">
            A mobile games studio dedicated to building, supporting, and growing
            titles for players worldwide.
          </p>

          <motion.div
            className="mt-10"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: easeOutExpo }}
          >
            <SectionLink
              id="hero-partner-cta"
              href={externalLinks.contactUs}
              className="inline-flex rounded-custom bg-secondary px-8 py-3.5 text-base font-bold text-white shadow-[0_0_24px_rgba(255,104,57,0.3)] transition-all hover:bg-accent-red hover:shadow-[0_0_28px_rgba(255,71,87,0.35)]"
            >
              Partner With Us
            </SectionLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[360px] laptop:max-w-[800px]"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.65, ease: easeOutExpo }}
        >
          <div className="hero-character-slot relative flex aspect-6/7 w-full flex-col items-center justify-center overflow-hidden rounded-custom border border-dashed border-accent-blue/35 bg-linear-to-b from-accent-blue/10 via-white/5 to-secondary/10 p-6 text-center ring-1 ring-white/10 laptop:p-8">
            <div
              className="hero-glow hero-glow-orange pointer-events-none absolute bottom-1/4 left-1/2 h-48 w-48 -translate-x-1/2 scale-125 opacity-50"
              aria-hidden="true"
            />

            <p className="relative font-display text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue">
              Animation placeholder
            </p>

            <p className="relative mt-3 font-display text-xl font-bold text-white laptop:text-2xl">
              Hook Wars Character
            </p>

            <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-white/75 laptop:text-base">
              Lottie animation will be placed here — idle loop on load and a
              one-shot hover interaction when the user hovers Partner With Us.
            </p>

            <dl className="relative mt-6 w-full max-w-sm space-y-3 text-left text-xs text-white/70 laptop:text-sm">
              <div>
                <dt className="font-semibold text-accent-blue">Desktop display</dt>
                <dd className="mt-1">600–800 × 700–900 px</dd>
                <dd className="text-white/55">Artboard @2x: 1200 × 1400 px</dd>
              </div>
              <div>
                <dt className="font-semibold text-accent-blue">Mobile display</dt>
                <dd className="mt-1">280–360 × 320–420 px</dd>
                <dd className="text-white/55">Artboard @2x: 720 × 840 px</dd>
              </div>
            </dl>

            <p className="relative mt-6 text-[11px] leading-relaxed text-white/45 laptop:text-xs">
              Lottie JSON · 30 fps · transparent background · idle ≤500 KB · hover
              ≤300 KB
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
