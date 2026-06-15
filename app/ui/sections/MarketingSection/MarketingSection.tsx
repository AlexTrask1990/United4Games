"use client";

import { ScrollReveal } from "@/app/ui/motion/ScrollReveal";

export const MarketingSection = () => {
  return (
    <section
      id="marketing-partners"
      aria-labelledby="marketing-partners-heading"
      className="scroll-mt-86 bg-white px-6 py-24"
    >
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2
            id="marketing-partners-heading"
            className="inline-block border-b-[3px] border-secondary pb-3 font-display text-4xl font-bold text-primary"
          >
            Marketing &amp; Partners
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-10 rounded-custom border border-primary/10 bg-base-100 p-8 laptop:p-10">
            <p className="text-lg text-gray-50">
              Section placeholder — user acquisition, partnerships, and
              monetization strategies powered by the United4Digital network.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
