export type GameMediaKind = "screenshot" | "video";

export interface GameMedia {
  kind: GameMediaKind;
  src?: string;
  screenshots?: string[];
  posterSrc?: string;
}

export interface GameStoreLinks {
  android?: string;
  ios?: string;
}

export const hookWarsGooglePlayUrl =
  "https://play.google.com/store/apps/details?id=com.united4digital.u4g.hookwars";

export interface GameItem {
  id: string;
  title: string;
  genre: string;
  accent: "red" | "orange" | "blue";
  media: GameMedia;
  storeLinks: GameStoreLinks;
}

export const games: GameItem[] = [
  {
    id: "hook-wars",
    title: "Hook Wars",
    genre: "PvP",
    accent: "orange",
    media: {
      kind: "screenshot",
      screenshots: [
        "/content/IMAGE1.jpg",
        "/content/IMAGE2.jpg",
        "/content/IMAGE3.jpg",
      ],
    },
    storeLinks: {
      android: hookWarsGooglePlayUrl,
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
