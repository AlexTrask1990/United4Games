"use client";

import _ from "lodash";
import { motion } from "framer-motion";
import { externalLinks } from "@/app/lib/links";
import { marketingContent } from "@/app/lib/marketingContent";
import {
  defaultRevealTransition,
  fadeUp,
  staggerGrid,
} from "@/app/lib/motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const MarketingSection = () => {
  return (
    <section
      id="marketing-partners"
      aria-labelledby="marketing-partners-heading"
      className="scroll-mt-86 bg-white px-6 py-24"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={defaultRevealTransition}
        >
          <h2
            id="marketing-partners-heading"
            className="inline-block border-b-[3px] border-secondary pb-3 font-display text-4xl font-bold text-primary"
          >
            Marketing &amp; Partners
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-50 laptop:text-xl">
            {marketingContent.intro}
          </p>
        </motion.div>

        <motion.div
          className="mt-10 space-y-5"
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {_.map(marketingContent.paragraphs, (paragraph) => (
            <motion.p
              key={paragraph}
              variants={itemVariants}
              transition={defaultRevealTransition}
              className="max-w-3xl text-base leading-relaxed text-gray-50 laptop:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 rounded-custom border border-primary/10 bg-base-100 p-8 laptop:p-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...defaultRevealTransition, delay: 0.1 }}
        >
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent-blue">
            Partner types
          </p>

          <ul className="mt-4 flex flex-wrap gap-3">
            {_.map(marketingContent.partnerTypes, (partnerType) => (
              <li
                key={partnerType}
                className="rounded-custom border border-primary/10 bg-white px-4 py-2 text-sm font-medium text-primary"
              >
                {partnerType}
              </li>
            ))}
          </ul>

          <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent-blue">
            Focus areas
          </p>

          <ul className="mt-4 flex flex-wrap gap-3">
            {_.map(marketingContent.focusAreas, (focusArea) => (
              <li
                key={focusArea}
                className="rounded-custom bg-primary px-4 py-2 text-sm font-medium text-white"
              >
                {focusArea}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...defaultRevealTransition, delay: 0.15 }}
        >
          <a
            href={externalLinks.contactUs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-custom bg-secondary px-8 py-3.5 text-base font-bold text-white shadow-[0_0_24px_rgba(255,104,57,0.25)] transition-all hover:bg-accent-red hover:shadow-[0_0_28px_rgba(255,71,87,0.35)]"
          >
            {marketingContent.ctaLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
