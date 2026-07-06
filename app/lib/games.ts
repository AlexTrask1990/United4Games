export type GameMediaKind = "screenshot" | "video";

export interface GameMedia {
  kind: GameMediaKind;
  src?: string;
  posterSrc?: string;
}

export interface GameStoreLinks {
  android?: string;
  ios?: string;
}

export interface GameItem {
  id: string;
  title: string;
  description: string;
  genre: string;
  accent: "red" | "orange" | "blue";
  media: GameMedia;
  storeLinks: GameStoreLinks;
}

const readStoreUrl = (environmentKey: string): string | undefined => {
  const value = process.env[environmentKey]?.trim();

  return value || undefined;
};

export const games: GameItem[] = [
  {
    id: "hook-wars",
    title: "Hook Wars",
    description:
      "Hook Wars is a dynamic mobile PvP game where every hook can change the outcome of a match. Compete with other players, hone your skills, and prove your mastery in intense multiplayer battles.",
    genre: "PvP",
    accent: "orange",
    media: {
      kind: "screenshot",
    },
    storeLinks: {
      android: readStoreUrl("NEXT_PUBLIC_HOOK_WARS_ANDROID_URL"),
      ios: readStoreUrl("NEXT_PUBLIC_HOOK_WARS_IOS_URL"),
    },
  },
];

export const gameAccentStyles = {
  red: {
    badge: "bg-accent-red/15 text-accent-red",
    button: "bg-accent-red",
  },
  orange: {
    badge: "bg-secondary/15 text-secondary",
    button: "bg-secondary",
  },
  blue: {
    badge: "bg-accent-blue/15 text-primary",
    button: "bg-accent-blue",
  },
} as const;

export const gameScreenshotSpecs = {
  displayWidth: 560,
  displayHeight: 315,
  artboardWidth: 1120,
  artboardHeight: 630,
  maxFileSizeKb: 150,
} as const;
