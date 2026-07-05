import type { Transition, Variants } from "framer-motion";

export const easeOutExpo: Transition["ease"] = [0.22, 1, 0.36, 1];
export const easeHookSnatch: Transition["ease"] = [0.55, 0, 0.15, 1];
export const easeHookRecoil: Transition["ease"] = [0.34, 1.45, 0.64, 1];
export const easeHookDangle: Transition["ease"] = [0.45, 0, 0.55, 1];
export const easeHookLift: Transition["ease"] = [0.33, 0, 0.2, 1];
export const easeHookSnap: Transition["ease"] = [0.85, 0, 0.15, 1];
export const easeHookSkid: Transition["ease"] = [0.25, 0.8, 0.35, 1];

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

export const defaultRevealTransition: Transition = {
  duration: 0.55,
  ease: easeOutExpo,
};

export type HeroPartnerButtonAnimationMode =
  | "snatch"
  | "recoil"
  | "dangle"
  | "yank"
  | "lift"
  | "twist"
  | "skid"
  | "snap"
  | "crush"
  | "scatter";

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

export const heroPartnerButtonAnimations: Record<
  HeroPartnerButtonAnimationMode,
  HeroPartnerButtonReaction
> = {
  // One clean grab: bite - single tug - brief taut hold → release
  snatch: {
    label: "Snatch",
    description: "One clean bite and tug",
    transformOrigin: "100% 50%",
    keyframes: [
      { scaleX: 1, scaleY: 1, x: 0, y: 0, rotate: 0 },
      { scaleX: 0.72, scaleY: 1.12, x: -2, y: -1, rotate: -1 },
      { scaleX: 1, scaleY: 1, x: 54, y: -3, rotate: 2 },
      { scaleX: 1, scaleY: 1, x: 48, y: -1, rotate: 1 },
      { scaleX: 1, scaleY: 1, x: 0, y: 0, rotate: 0 },
    ],
    transition: {
      duration: 0.52,
      ease: easeHookSnatch,
      times: [0, 0.12, 0.38, 0.55, 1],
    },
  },
  // Force from the right — button flings left, squashes, springs back
  recoil: {
    label: "Recoil",
    description: "Impact push, elastic return",
    transformOrigin: "100% 50%",
    keyframes: [
      { scale: 1, x: 0, y: 0, rotate: 0 },
      { scale: 0.88, x: -24, y: 3, rotate: 5 },
      { scale: 1.05, x: 6, y: -2, rotate: -1.5 },
      { scale: 0.98, x: -2, y: 0, rotate: 0.5 },
      { scale: 1, x: 0, y: 0, rotate: 0 },
    ],
    transition: {
      duration: 0.54,
      ease: easeHookRecoil,
      times: [0, 0.16, 0.42, 0.72, 1],
    },
  },
  // Caught on the hook - heavy weight drops and swings once
  dangle: {
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
  },
  // Hook skitters on the edge, then snap pull with rope bounces
  yank: {
    label: "Yank",
    description: "Edge stutter, snap, rope bounce",
    transformOrigin: "100% 28%",
    keyframes: [
      { scaleX: 1, scaleY: 1, x: 0, y: 0, rotate: 0 },
      { scaleX: 0.96, scaleY: 1.02, x: -7, y: 1, rotate: 2 },
      { scaleX: 0.94, scaleY: 1.03, x: 5, y: -1, rotate: -2.5 },
      { scaleX: 0.95, scaleY: 1.02, x: -4, y: 0, rotate: 1.5 },
      { scaleX: 0.93, scaleY: 1.04, x: 3, y: 0, rotate: -1 },
      { scaleX: 1.1, scaleY: 0.9, x: 88, y: -8, rotate: 8 },
      { scaleX: 1, scaleY: 1, x: 44, y: -2, rotate: 3 },
      { scaleX: 1, scaleY: 1, x: 62, y: -4, rotate: 5 },
      { scaleX: 1, scaleY: 1, x: 36, y: -1, rotate: 2 },
      { scaleX: 1, scaleY: 1, x: 0, y: 0, rotate: 0 },
    ],
    transition: {
      duration: 1.05,
      ease: easeOutExpo,
      times: [0, 0.07, 0.13, 0.19, 0.25, 0.4, 0.55, 0.68, 0.84, 1],
    },
  },
  // Hook reels the button upward before it drops back
  lift: {
    label: "Lift",
    description: "Reel up, then drop",
    transformOrigin: "92% 62%",
    keyframes: [
      { scale: 1, x: 0, y: 0, rotate: 0 },
      { scale: 0.94, x: 8, y: -6, rotate: -3 },
      { scale: 0.98, x: 18, y: -32, rotate: -6 },
      { scale: 1, x: 22, y: -24, rotate: -4 },
      { scale: 1, x: 10, y: -8, rotate: -1.5 },
      { scale: 1, x: 0, y: 0, rotate: 0 },
    ],
    transition: {
      duration: 0.88,
      ease: easeHookLift,
      times: [0, 0.14, 0.36, 0.52, 0.76, 1],
    },
  },
  // Hook catches the corner and twists the button
  twist: {
    label: "Twist",
    description: "Corner grab and twist",
    transformOrigin: "100% 22%",
    keyframes: [
      { scale: 1, x: 0, y: 0, rotate: 0 },
      { scale: 0.95, x: 2, y: -2, rotate: -12 },
      { scale: 0.97, x: 6, y: 1, rotate: 14 },
      { scale: 0.98, x: 4, y: 0, rotate: -6 },
      { scale: 1, x: 1, y: 0, rotate: 2 },
      { scale: 1, x: 0, y: 0, rotate: 0 },
    ],
    transition: {
      duration: 0.62,
      ease: easeOutExpo,
      times: [0, 0.18, 0.38, 0.58, 0.82, 1],
    },
  },
  // Button slides toward the character with friction bumps
  skid: {
    label: "Skid",
    description: "Slide right with friction",
    transformOrigin: "50% 100%",
    keyframes: [
      { scaleX: 1, scaleY: 1, x: 0, y: 0, rotate: 0 },
      { scaleX: 1.03, scaleY: 0.97, x: 14, y: 2, rotate: 1.5 },
      { scaleX: 1.04, scaleY: 0.96, x: 30, y: -1, rotate: -1 },
      { scaleX: 1.03, scaleY: 0.97, x: 46, y: 1, rotate: 0.8 },
      { scaleX: 1.02, scaleY: 0.98, x: 58, y: 0, rotate: -0.5 },
      { scaleX: 1, scaleY: 1, x: 0, y: 0, rotate: 0 },
    ],
    transition: {
      duration: 0.78,
      ease: easeHookSkid,
      times: [0, 0.2, 0.4, 0.6, 0.78, 1],
    },
  },
  // Hit-stop on impact, then elastic snap toward the hook
  snap: {
    label: "Snap",
    description: "Freeze, then snap pull",
    transformOrigin: "100% 50%",
    keyframes: [
      { scale: 1, x: 0, y: 0, rotate: 0 },
      { scale: 0.82, x: 0, y: 0, rotate: 0 },
      { scale: 0.82, x: 0, y: 0, rotate: 0 },
      { scale: 1.06, x: 74, y: -6, rotate: 4 },
      { scale: 0.98, x: 38, y: -2, rotate: 1.5 },
      { scale: 1, x: 0, y: 0, rotate: 0 },
    ],
    transition: {
      duration: 0.68,
      ease: easeHookSnap,
      times: [0, 0.12, 0.22, 0.34, 0.62, 1],
    },
  },
  // Heavy crush — shell squashes while letters peel off
  crush: {
    label: "Crush",
    description: "Squash with peeling letters",
    transformOrigin: "100% 50%",
    letterScatter: "light",
    keyframes: [
      { scaleX: 1, scaleY: 1, x: 0, y: 0, rotate: 0 },
      { scaleX: 0.5, scaleY: 1.32, x: -10, y: 2, rotate: -4 },
      { scaleX: 0.62, scaleY: 1.24, x: -6, y: 1, rotate: -2.5 },
      { scaleX: 1.1, scaleY: 0.88, x: 10, y: -3, rotate: 2 },
      { scaleX: 0.96, scaleY: 1.05, x: 2, y: 0, rotate: 0.5 },
      { scaleX: 1, scaleY: 1, x: 0, y: 0, rotate: 0 },
    ],
    transition: {
      duration: 0.56,
      ease: easeHookRecoil,
      times: [0, 0.12, 0.22, 0.4, 0.68, 1],
    },
  },
  // Shell ruptures while letters burst outward
  scatter: {
    label: "Scatter",
    description: "Shell ruptures, letters burst",
    transformOrigin: "100% 50%",
    letterScatter: "heavy",
    keyframes: [
      { scaleX: 1, scaleY: 1, x: 0, y: 0, rotate: 0 },
      { scaleX: 0.48, scaleY: 1.36, x: -12, y: 3, rotate: -5 },
      { scaleX: 0.72, scaleY: 1.18, x: -5, y: 1, rotate: -2 },
      { scaleX: 1.12, scaleY: 0.86, x: 6, y: -2, rotate: 2.5 },
      { scaleX: 1, scaleY: 1, x: 0, y: 0, rotate: 0 },
    ],
    transition: {
      duration: 0.52,
      ease: easeHookRecoil,
      times: [0, 0.1, 0.2, 0.44, 1],
    },
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
