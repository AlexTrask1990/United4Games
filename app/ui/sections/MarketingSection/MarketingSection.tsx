"use client";

import { motion } from "framer-motion";
import { externalLinks } from "@/app/lib/links";
import { defaultRevealTransition, fadeUp } from "@/app/lib/motion";
import { SectionLink } from "@/app/ui/SectionLink/SectionLink";
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

        <motion.div
          className="mt-12 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...defaultRevealTransition, delay: 0.1 }}
        >
          <SectionLink
            href={externalLinks.contactUs}
            className="inline-flex rounded-custom bg-secondary px-8 py-3.5 text-base font-bold text-white shadow-[0_0_24px_rgba(255,104,57,0.25)] transition-all hover:bg-accent-red hover:shadow-[0_0_28px_rgba(255,71,87,0.35)]"
          >
            Partner With Us
          </SectionLink>
        </motion.div>
      </div>
    </section>
  );
};
