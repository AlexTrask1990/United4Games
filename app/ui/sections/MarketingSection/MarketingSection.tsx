"use client";

import { motion } from "framer-motion";
import { defaultRevealTransition, fadeUp } from "@/app/lib/motion";
import { MarketingPartnersLottie } from "@/app/ui/sections/MarketingSection/MarketingPartnersLottie";

export const MarketingSection = () => {
  return (
    <section
      id="marketing-partners"
      aria-labelledby="marketing-partners-heading"
      className="scroll-anchor-offset bg-white px-6 py-24"
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
            id="marketing-partners-heading"
            className="inline-block border-b-[3px] border-secondary pb-3 font-display text-4xl font-bold text-primary"
          >
            Marketing &amp; Partners
          </h2>
        </motion.div>

        <motion.div
          className="mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...defaultRevealTransition, delay: 0.05 }}
        >
          <MarketingPartnersLottie />
        </motion.div>
      </div>
    </section>
  );
};
