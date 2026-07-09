"use client";

import { useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  buildHeroPartnerButtonAnimate,
  defaultRevealTransition,
  easeOutExpo,
  fadeUp,
  heroPartnerButtonIdleState,
  heroPartnerButtonReaction,
} from "@/app/lib/motion";
import { BrandLogo } from "@/app/ui/BrandLogo/BrandLogo";
import { HeroPartnerButton } from "@/app/ui/sections/HeroSection/HeroPartnerButton";
import { HeroCharacterLottie } from "@/app/ui/sections/HeroSection/HeroCharacterLottie";

export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [hookTrigger, setHookTrigger] = useState(0);
  const [isHookPlaying, setIsHookPlaying] = useState(false);
  const [isButtonReacting, setIsButtonReacting] = useState(false);

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
            className="relative z-20 flex flex-col items-center overflow-visible pt-[34px] text-center laptop:max-w-[540px] laptop:items-start laptop:pt-[66px] laptop:text-left"
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

            <div className="[&_img]:h-14 [&_img]:laptop:h-16">
              <BrandLogo />
            </div>

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
              className="relative z-30 mt-6 overflow-visible"
              style={{
                transformOrigin: heroPartnerButtonReaction.transformOrigin,
              }}
              animate={
                isButtonReacting && !prefersReducedMotion
                  ? buildHeroPartnerButtonAnimate(heroPartnerButtonReaction)
                  : heroPartnerButtonIdleState
              }
              transition={
                isButtonReacting && !prefersReducedMotion
                  ? heroPartnerButtonReaction.transition
                  : { duration: 0.2, ease: easeOutExpo }
              }
              onAnimationComplete={() => {
                if (isButtonReacting) {
                  handleButtonReactionComplete();
                }
              }}
            >
              <HeroPartnerButton
                isReacting={isButtonReacting && !prefersReducedMotion}
                reaction={heroPartnerButtonReaction}
                onHover={handlePartnerHover}
                onReactionComplete={handleButtonReactionComplete}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto mt-10 hidden w-full justify-center laptop:pointer-events-none laptop:absolute laptop:inset-y-0 laptop:right-[-2%] laptop:mt-0 laptop:flex laptop:items-center laptop:justify-end desktop:right-0"
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
