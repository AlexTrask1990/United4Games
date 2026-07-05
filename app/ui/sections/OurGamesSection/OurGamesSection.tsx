"use client";

import { motion } from "framer-motion";
import _ from "lodash";
import { games } from "@/app/lib/games";
import {
  defaultRevealTransition,
  fadeUp,
  staggerGrid,
} from "@/app/lib/motion";
import { GameCard } from "@/app/ui/sections/OurGamesSection/GameCard";

export const OurGamesSection = () => {
  return (
    <section
      id="our-games"
      aria-labelledby="our-games-heading"
      className="scroll-anchor-offset bg-base-100 px-6 py-24"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={defaultRevealTransition}
        >
          <h2
            id="our-games-heading"
            className="inline-block border-b-[3px] border-secondary pb-3 font-display text-4xl font-bold text-primary"
          >
            Our Games
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-50">
            Hook Wars is a dynamic mobile PvP game where every hook can change
            the outcome of a match.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {_.map(games, (game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
