"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GameItem, gameAccentStyles } from "@/app/lib/games";
import { defaultRevealTransition, fadeUp } from "@/app/lib/motion";

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
      <div
        className={`relative flex aspect-video items-end p-5 ${accent.tile}`}
      >
        <span
          className={`rounded-custom px-3 py-1 text-xs font-bold uppercase tracking-wide ${accent.badge}`}
        >
          {game.genre}
        </span>
        <span
          className="font-display absolute top-4 right-4 text-5xl font-black text-white/15"
          aria-hidden="true"
        >
          {game.title.charAt(0)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-bold text-primary">
          {game.title}
        </h3>
        <p className="mt-3 flex-1 text-base leading-relaxed text-gray-50">
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
