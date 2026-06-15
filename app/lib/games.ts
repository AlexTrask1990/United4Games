export interface GameItem {
  id: string;
  title: string;
  description: string;
  genre: string;
  accent: "red" | "orange" | "blue";
}

export const games: GameItem[] = [
  {
    id: "neon-drift",
    title: "Neon Drift",
    description:
      "Arcade racing through glowing city circuits. Drift, boost, and chase high scores in fast sessions.",
    genre: "Racing",
    accent: "blue",
  },
  {
    id: "pixel-siege",
    title: "Pixel Siege",
    description:
      "Tower defense with retro charm. Build, upgrade, and hold the line against endless waves.",
    genre: "Strategy",
    accent: "orange",
  },
  {
    id: "skyforge-legends",
    title: "Skyforge Legends",
    description:
      "Action RPG set in floating realms. Collect gear, unlock skills, and conquer sky dungeons.",
    genre: "Action RPG",
    accent: "red",
  },
  {
    id: "merge-kingdom",
    title: "Merge Kingdom",
    description:
      "Casual merge puzzle with kingdom building. Combine items, expand lands, and restore the realm.",
    genre: "Puzzle",
    accent: "blue",
  },
  {
    id: "turbo-strike",
    title: "Turbo Strike",
    description:
      "One-thumb shooter with explosive combos. Clear arenas, upgrade weapons, and climb leagues.",
    genre: "Shooter",
    accent: "orange",
  },
  {
    id: "word-arena",
    title: "Word Arena",
    description:
      "Competitive word battles in real time. Outsmart opponents with sharp vocabulary and speed.",
    genre: "Word",
    accent: "red",
  },
  {
    id: "idle-factory-tycoon",
    title: "Idle Factory Tycoon",
    description:
      "Build an industrial empire while offline progress keeps your production running 24/7.",
    genre: "Simulation",
    accent: "blue",
  },
  {
    id: "mystic-cards",
    title: "Mystic Cards",
    description:
      "Collectible card battler with spell chains. Draft decks and duel in ranked seasonal events.",
    genre: "Card",
    accent: "orange",
  },
  {
    id: "jungle-runners",
    title: "Jungle Runners",
    description:
      "Endless runner through ancient ruins. Dodge traps, grab relics, and beat your best distance.",
    genre: "Runner",
    accent: "red",
  },
  {
    id: "cosmic-miners",
    title: "Cosmic Miners",
    description:
      "Space mining adventure with crew management. Explore asteroids and trade rare resources.",
    genre: "Adventure",
    accent: "blue",
  },
];

export const gameAccentStyles = {
  red: {
    tile: "bg-linear-to-br from-primary via-primary-light to-accent-red/40",
    badge: "bg-accent-red/15 text-accent-red",
    button: "bg-accent-red",
  },
  orange: {
    tile: "bg-linear-to-br from-primary via-primary-light to-secondary/50",
    badge: "bg-secondary/15 text-secondary",
    button: "bg-secondary",
  },
  blue: {
    tile: "bg-linear-to-br from-primary via-primary-light to-accent-blue/50",
    badge: "bg-accent-blue/15 text-primary",
    button: "bg-accent-blue",
  },
} as const;
