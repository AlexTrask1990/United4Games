"use client";

import { motion, useReducedMotion } from "framer-motion";
import _ from "lodash";
import { games } from "@/app/lib/games";
import { ourGamesParagraphs } from "@/app/lib/ourGamesContent";
import { defaultRevealTransition, fadeUp } from "@/app/lib/motion";
import { GameScreenshotCoverflow } from "@/app/ui/sections/OurGamesSection/GameScreenshotCoverflow";
import { GameStoreButtons } from "@/app/ui/sections/OurGamesSection/GameStoreButtons";

export const OurGamesSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const featuredGame = games[0];

  if (!featuredGame) {
    return null;
  }

  const screenshots = featuredGame.media.screenshots ?? [];

  return (
    <section
      id="our-games"
      aria-labelledby="our-games-heading"
      className="scroll-anchor-offset bg-base-100 px-6 py-24"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          transition={defaultRevealTransition}
        >
          <h2
            id="our-games-heading"
            className="inline-block border-b-[3px] border-secondary pb-3 font-display text-4xl font-bold text-primary"
          >
            Our Games
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 laptop:grid-cols-2 laptop:gap-10">
            {_.map(ourGamesParagraphs, (paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-relaxed text-gray-50"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12"
          variants={fadeUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...defaultRevealTransition, delay: 0.05 }}
        >
          <GameScreenshotCoverflow
            title={featuredGame.title}
            screenshots={screenshots}
          />
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center"
          variants={fadeUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...defaultRevealTransition, delay: 0.08 }}
        >
          <GameStoreButtons
            storeLinks={featuredGame.storeLinks}
            gameTitle={featuredGame.title}
          />
        </motion.div>
      </div>
    </section>
  );
};
