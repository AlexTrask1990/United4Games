"use client";

import { useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  buildHeroPartnerButtonAnimate,
  defaultRevealTransition,
  easeOutExpo,
  fadeUp,
  heroPartnerButtonAnimations,
  heroPartnerButtonIdleState,
  type HeroPartnerButtonAnimationMode,
} from "@/app/lib/motion";
import { HeroPartnerButton } from "@/app/ui/sections/HeroSection/HeroPartnerButton";
import { HeroCharacterLottie } from "@/app/ui/sections/HeroSection/HeroCharacterLottie";

const animationModeOptions = (
  Object.keys(heroPartnerButtonAnimations) as HeroPartnerButtonAnimationMode[]
).map((mode) => ({
  value: mode,
  label: heroPartnerButtonAnimations[mode].label,
  description: heroPartnerButtonAnimations[mode].description,
}));

export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [hookTrigger, setHookTrigger] = useState(0);
  const [isHookPlaying, setIsHookPlaying] = useState(false);
  const [isButtonReacting, setIsButtonReacting] = useState(false);
  const [buttonAnimationMode, setButtonAnimationMode] =
    useState<HeroPartnerButtonAnimationMode>("snatch");

  const handlePartnerHover = () => {
    if (prefersReducedMotion || isHookPlaying) {
      return;
    }

    setIsHookPlaying(true);
    setHookTrigger((currentTrigger) => currentTrigger + 1);
  };

  const handleHookImpact = useCallback(() => {
    if (prefersReducedMotion) {
      return;
    }

    setIsButtonReacting(true);
  }, [prefersReducedMotion]);

  const handleButtonReactionComplete = useCallback(() => {
    setIsButtonReacting(false);
  }, []);

  const handleHookComplete = useCallback(() => {
    setIsHookPlaying(false);
  }, []);

  const partnerButtonReaction =
    heroPartnerButtonAnimations[buttonAnimationMode];

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-primary px-6 pt-86 pb-12 text-white hero-gaming-bg laptop:pb-10"
    >
      <div className="hero-glow hero-glow-red" aria-hidden="true" />
      <div className="hero-glow hero-glow-orange" aria-hidden="true" />
      <div className="hero-glow hero-glow-blue" aria-hidden="true" />

      <div className="container relative z-10 mx-auto w-11/12 max-w-6xl desktop:max-w-7xl">
        <div className="relative laptop:flex laptop:min-h-[calc(100svh-6rem)] laptop:items-center laptop:py-4">
          <motion.div
            className="relative z-20 flex flex-col items-center overflow-visible text-center laptop:max-w-[540px] laptop:items-start laptop:text-left"
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

            <div
              className="mt-6 flex flex-wrap justify-center gap-2 laptop:justify-start"
              role="group"
              aria-label="Partner button animation mode"
            >
              {animationModeOptions.map((option) => {
                const isSelected = buttonAnimationMode === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setButtonAnimationMode(option.value)}
                    className={`rounded-custom border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                      isSelected
                        ? "border-accent-blue bg-accent-blue/20 text-accent-blue"
                        : "border-white/25 text-white/70 hover:border-white/45 hover:text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            <p className="mt-2 text-center text-xs text-white/45 laptop:text-left">
              {heroPartnerButtonAnimations[buttonAnimationMode].description}
            </p>

            <motion.div
              className="relative z-30 mt-6 overflow-visible"
              style={{
                transformOrigin:
                  partnerButtonReaction.transformOrigin,
              }}
              animate={
                isButtonReacting &&
                !prefersReducedMotion &&
                !partnerButtonReaction.letterScatter
                  ? buildHeroPartnerButtonAnimate(partnerButtonReaction)
                  : heroPartnerButtonIdleState
              }
              transition={
                isButtonReacting &&
                !prefersReducedMotion &&
                !partnerButtonReaction.letterScatter
                  ? partnerButtonReaction.transition
                  : { duration: 0.2, ease: easeOutExpo }
              }
              onAnimationComplete={() => {
                if (
                  isButtonReacting &&
                  !partnerButtonReaction.letterScatter
                ) {
                  handleButtonReactionComplete();
                }
              }}
            >
              <HeroPartnerButton
                isReacting={isButtonReacting && !prefersReducedMotion}
                reaction={partnerButtonReaction}
                onHover={handlePartnerHover}
                onReactionComplete={handleButtonReactionComplete}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto mt-10 flex w-full justify-center laptop:pointer-events-none laptop:absolute laptop:inset-y-0 laptop:right-[-2%] laptop:mt-0 laptop:items-center laptop:justify-end desktop:right-0"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.65, ease: easeOutExpo }}
          >
            <HeroCharacterLottie
              hookTrigger={hookTrigger}
              onHookImpact={handleHookImpact}
              onHookComplete={handleHookComplete}
              className="hero-character-size"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
