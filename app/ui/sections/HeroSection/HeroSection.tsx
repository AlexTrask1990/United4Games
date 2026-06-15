"use client";

import { motion, useReducedMotion } from "framer-motion";
import { externalLinks } from "@/app/lib/links";
import {
  defaultRevealTransition,
  easeOutExpo,
  fadeUp,
} from "@/app/lib/motion";

export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col items-center justify-center bg-primary px-6 pt-86 text-center text-white hero-gaming-bg"
    >
      <div className="hero-glow hero-glow-red" aria-hidden="true" />
      <div className="hero-glow hero-glow-orange" aria-hidden="true" />
      <div className="hero-glow hero-glow-blue" aria-hidden="true" />

      <motion.div
        className="relative z-10 flex max-w-4xl flex-col items-center"
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
          Gaming Division
        </p>

        <h1
          id="hero-heading"
          className="font-display mt-4 text-5xl font-black text-white text-shadow-heading laptop:text-7xl"
        >
          United
          <span className="text-secondary">4</span>
          Games
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg text-white/80 laptop:text-xl">
          Mobile games, publishing, and monetization — built on United4Digital
          expertise with a bold gaming identity.
        </p>

        <motion.div
          className="mt-10 flex flex-col gap-4 tablet:flex-row"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: easeOutExpo }}
        >
          <a
            href="#our-games"
            className="rounded-custom bg-secondary px-8 py-3 font-bold text-white transition-all hover:bg-accent-red"
          >
            Explore Our Games
          </a>
          <a
            href={externalLinks.united4Digital}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-custom border border-accent-blue/60 px-8 py-3 font-bold text-accent-blue transition-colors hover:bg-accent-blue/10"
          >
            United4Digital.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
