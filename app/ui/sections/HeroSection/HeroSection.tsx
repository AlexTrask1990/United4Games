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
import { useHeroMobileScrollHook } from "@/app/lib/hooks/useHeroMobileScrollHook";
import { BrandLogo } from "@/app/ui/BrandLogo/BrandLogo";
import { HeroPartnerButton } from "@/app/ui/sections/HeroSection/HeroPartnerButton";
import { HeroCharacterLottie } from "@/app/ui/sections/HeroSection/HeroCharacterLottie";

export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [hookTrigger, setHookTrigger] = useState(0);
  const [isHookPlaying, setIsHookPlaying] = useState(false);
  const [isButtonReacting, setIsButtonReacting] = useState(false);

  const triggerHook = useCallback(() => {
    if (prefersReducedMotion || isHookPlaying) {
      return;
    }

    setIsHookPlaying(true);
    setHookTrigger((currentTrigger) => currentTrigger + 1);
  }, [isHookPlaying, prefersReducedMotion]);

  useHeroMobileScrollHook({
    enabled: true,
    prefersReducedMotion,
    isHookPlaying,
    onScrollHook: triggerHook,
  });

  const handlePartnerHover = () => {
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      return;
    }

    triggerHook();
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

  const renderPartnerButton = (onHover: () => void) => (
    <motion.div
      className="relative z-30 overflow-visible"
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
        onHover={onHover}
        onReactionComplete={handleButtonReactionComplete}
      />
    </motion.div>
  );

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
        <div className="relative min-h-[calc(100svh-6rem)] py-4 laptop:flex laptop:items-center">
          <motion.div
            className="relative z-20 flex flex-col items-center overflow-visible pt-8.5 text-center laptop:max-w-135 laptop:items-start laptop:pt-16.5 laptop:text-left"
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

            {/* Mobile/tablet: button locked to character so the hook always hits */}
            <div className="hero-hook-pair mt-8 w-full laptop:hidden">
              <div className="hero-hook-pair-button">
                {renderPartnerButton(() => {})}
              </div>
              <div className="hero-hook-pair-character" aria-hidden="true">
                <HeroCharacterLottie
                  hookTrigger={hookTrigger}
                  onHookImpact={handleHookImpact}
                  onHookComplete={handleHookComplete}
                  className="hero-hook-pair-lottie"
                />
              </div>
            </div>

            {/* Desktop button */}
            <div className="mt-6 hidden laptop:block">
              {renderPartnerButton(handlePartnerHover)}
            </div>
          </motion.div>

          {/* Desktop character — hide wrapper is not motion (avoids display override) */}
          <div className="pointer-events-none absolute inset-y-0 right-[-2%] hidden items-center justify-end laptop:flex desktop:right-0">
            <motion.div
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
      </div>
    </section>
  );
};
