"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GameItem, gameAccentStyles } from "@/app/lib/games";
import { defaultRevealTransition, fadeUp } from "@/app/lib/motion";
import { GameCardMedia } from "@/app/ui/sections/OurGamesSection/GameCardMedia";

interface GameCardProps {
  game: GameItem;
}

export const GameCard = ({ game }: GameCardProps) => {
  const prefersReducedMotion = useReducedMotion();
  const accent = gameAccentStyles[game.accent];

  return (
    <motion.article
      className="flex flex-col overflow-hidden rounded-custom border border-primary/10 bg-white shadow-sm"
      variants={fadeUp}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -40px 0px" }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : { y: -6, boxShadow: "0 12px 40px rgba(21, 31, 79, 0.12)" }
      }
      transition={{ ...defaultRevealTransition, duration: 0.5 }}
    >
      <div className="relative w-full overflow-hidden">
        <GameCardMedia title={game.title} media={game.media} />

        <span
          className={`absolute bottom-5 left-5 rounded-custom px-3 py-1 text-xs font-bold uppercase tracking-wide ${accent.badge}`}
        >
          {game.genre}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 laptop:p-8">
        <h3 className="font-display text-2xl font-bold text-primary laptop:text-3xl">
          {game.title}
        </h3>
        <p className="mt-3 flex-1 text-base leading-relaxed text-gray-50 laptop:text-lg">
          {game.description}
        </p>
        <span
          className={`mt-6 inline-flex w-fit cursor-default items-center justify-center rounded-custom px-6 py-2.5 text-sm font-bold text-white ${accent.button}`}
          aria-disabled="true"
        >
          Play Now
        </span>
      </div>
    </motion.article>
  );
};
