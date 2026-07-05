"use client";

import { motion } from "framer-motion";
import { externalLinks } from "@/app/lib/links";
import {
  buildHeroPartnerButtonAnimate,
  easeHookSnap,
  easeOutExpo,
  getHeroPartnerButtonLetterTarget,
  HERO_PARTNER_BUTTON_LABEL,
  heroPartnerButtonIdleState,
  heroPartnerButtonLetterIdle,
  heroPartnerButtonLetterScatterTiming,
  type HeroPartnerButtonReaction,
} from "@/app/lib/motion";
import { SectionLink } from "@/app/ui/SectionLink/SectionLink";

type HeroPartnerButtonProps = {
  isReacting: boolean;
  reaction: HeroPartnerButtonReaction;
  onHover: () => void;
  onReactionComplete?: () => void;
};

export const HeroPartnerButton = ({
  isReacting,
  reaction,
  onHover,
  onReactionComplete,
}: HeroPartnerButtonProps) => {
  const letterScatter = reaction.letterScatter ?? "none";
  const hasLetterScatter = letterScatter !== "none";
  const scatterTiming =
    letterScatter === "heavy"
      ? heroPartnerButtonLetterScatterTiming.heavy
      : letterScatter === "light"
        ? heroPartnerButtonLetterScatterTiming.light
        : null;

  const shellAnimate =
    isReacting && hasLetterScatter
      ? buildHeroPartnerButtonAnimate(reaction)
      : heroPartnerButtonIdleState;

  const shellTransition =
    isReacting && hasLetterScatter
      ? reaction.transition
      : { duration: 0.2, ease: easeOutExpo };

  return (
    <SectionLink
      id="hero-partner-cta"
      href={externalLinks.contactUs}
      onMouseEnter={onHover}
      onFocus={onHover}
      aria-label={HERO_PARTNER_BUTTON_LABEL}
      className={`group relative inline-flex overflow-visible px-8 py-3.5 text-base font-bold text-white transition-colors ${
        hasLetterScatter
          ? "bg-transparent shadow-none hover:bg-transparent hover:shadow-none"
          : "rounded-custom bg-secondary shadow-[0_0_24px_rgba(255,104,57,0.3)] hover:bg-accent-red hover:shadow-[0_0_28px_rgba(255,71,87,0.35)]"
      }`}
    >
      {hasLetterScatter ? (
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-custom bg-secondary shadow-[0_0_24px_rgba(255,104,57,0.3)] transition-colors group-hover:bg-accent-red group-hover:shadow-[0_0_28px_rgba(255,71,87,0.35)]"
          style={{ transformOrigin: reaction.transformOrigin }}
          animate={shellAnimate}
          transition={shellTransition}
          onAnimationComplete={() => {
            if (isReacting) {
              onReactionComplete?.();
            }
          }}
        />
      ) : null}

      <span className="relative z-10 inline-flex overflow-visible" aria-hidden="true">
        {HERO_PARTNER_BUTTON_LABEL.split("").map((character, index) => {
          const letterTarget =
            isReacting && hasLetterScatter
              ? getHeroPartnerButtonLetterTarget(index, letterScatter)
              : heroPartnerButtonLetterIdle;

          return (
            <motion.span
              key={`${character}-${index}`}
              className="inline-block overflow-visible will-change-transform"
              animate={letterTarget}
              transition={{
                duration: isReacting
                  ? (scatterTiming?.duration ?? 0.22)
                  : (scatterTiming?.returnDuration ?? 0.2),
                ease: easeHookSnap,
                delay: isReacting ? index * (scatterTiming?.stagger ?? 0) : 0,
              }}
            >
              {character === " " ? "\u00A0" : character}
            </motion.span>
          );
        })}
      </span>
    </SectionLink>
  );
};
