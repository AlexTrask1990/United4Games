import type { Transition, Variants } from "framer-motion";

export const easeOutExpo: Transition["ease"] = [0.22, 1, 0.36, 1];
export const easeHookDangle: Transition["ease"] = [0.45, 0, 0.55, 1];
export const easeHookSnap: Transition["ease"] = [0.85, 0, 0.15, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerGrid: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerGameCards: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08,
    },
  },
};

export const gameCardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 56,
    rotateX: 12,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
  },
};

export const defaultRevealTransition: Transition = {
  duration: 0.55,
  ease: easeOutExpo,
};

export const gameCardRevealTransition: Transition = {
  duration: 0.7,
  ease: easeOutExpo,
};

export const heroHookAnimationDuration = 1.7;
export const heroHookImpactFrame = 15;

export const HERO_PARTNER_BUTTON_LABEL = "Partner With Us";

export type HeroPartnerButtonLetterScatter = "none" | "light" | "heavy";

export type HeroPartnerButtonLetterTarget = {
  x: number;
  y: number;
  rotate: number;
  opacity: number;
  scale: number;
};

export const heroPartnerButtonLetterIdle: HeroPartnerButtonLetterTarget = {
  x: 0,
  y: 0,
  rotate: 0,
  opacity: 1,
  scale: 1,
};

const pseudoRandom = (seed: number) => {
  const value = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return value - Math.floor(value);
};

export const heroPartnerButtonLetterScatterTiming = {
  light: {
    duration: 0.22,
    returnDuration: 0.2,
    stagger: 0.004,
  },
  heavy: {
    duration: 0.16,
    returnDuration: 0.18,
    stagger: 0.002,
  },
} as const;

export const getHeroPartnerButtonLetterTarget = (
  letterIndex: number,
  scatter: HeroPartnerButtonLetterScatter,
): HeroPartnerButtonLetterTarget => {
  if (scatter === "none") {
    return heroPartnerButtonLetterIdle;
  }

  if (HERO_PARTNER_BUTTON_LABEL[letterIndex] === " ") {
    return heroPartnerButtonLetterIdle;
  }

  const strength = scatter === "light" ? 0.55 : 1;
  const seed = letterIndex + 1;
  const angle = pseudoRandom(seed) * Math.PI * 2;
  const minDistance = scatter === "light" ? 36 : 64;
  const maxDistance = scatter === "light" ? 78 : 148;
  const distance =
    (minDistance + pseudoRandom(seed + 7) * (maxDistance - minDistance)) *
    strength;

  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  const rotate = (pseudoRandom(seed + 13) - 0.5) * 95 * strength;
  const opacity =
    scatter === "light" ? 0.7 : 0.2 + pseudoRandom(seed + 3) * 0.45;
  const scale =
    scatter === "light" ? 0.86 : 0.5 + pseudoRandom(seed + 5) * 0.4;

  return { x, y, rotate, opacity, scale };
};

export const getHeroPartnerButtonReactionDuration = (
  reaction: HeroPartnerButtonReaction,
) => {
  return typeof reaction.transition.duration === "number"
    ? reaction.transition.duration
    : 0.65;
};

type HeroPartnerButtonKeyframeState = {
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  x?: number;
  y?: number;
  rotate?: number;
};

export type HeroPartnerButtonReaction = {
  label: string;
  description: string;
  transformOrigin: string;
  letterScatter?: HeroPartnerButtonLetterScatter;
  keyframes: HeroPartnerButtonKeyframeState[];
  transition: Transition;
};

export const heroPartnerButtonReaction: HeroPartnerButtonReaction = {
  label: "Dangle",
  description: "Hang and swing under hook",
  transformOrigin: "88% 18%",
  keyframes: [
    { scale: 1, x: 0, y: 0, rotate: 0 },
    { scale: 0.97, x: 3, y: -8, rotate: -8 },
    { scale: 1, x: -4, y: 10, rotate: 7 },
    { scale: 1, x: 2, y: 2, rotate: -2.5 },
    { scale: 1, x: 0, y: 0, rotate: 0 },
  ],
  transition: {
    duration: 0.9,
    ease: easeHookDangle,
    times: [0, 0.18, 0.48, 0.76, 1],
  },
};

export const heroPartnerButtonIdleState: HeroPartnerButtonKeyframeState = {
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  x: 0,
  y: 0,
  rotate: 0,
};

export const buildHeroPartnerButtonAnimate = (
  reaction: HeroPartnerButtonReaction,
) => {
  const animate: Record<string, number[]> = {};

  for (const property of ["scale", "scaleX", "scaleY", "x", "y", "rotate"] as const) {
    const values = reaction.keyframes.map((frame) => frame[property] ?? 1);

    if (property === "x" || property === "y" || property === "rotate") {
      animate[property] = reaction.keyframes.map((frame) => frame[property] ?? 0);
      continue;
    }

    animate[property] = values;
  }

  return animate;
};
