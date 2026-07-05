"use client";

import { motion } from "framer-motion";
import { defaultRevealTransition, fadeUp } from "@/app/lib/motion";
import { ContactForm } from "@/app/ui/ContactForm/ContactForm";

export const ContactUsSection = () => {
  return (
    <section
      id="contact-us"
      aria-labelledby="contact-us-heading"
      className="scroll-anchor-offset bg-base-100 px-6 py-24"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto w-full max-w-[792px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={defaultRevealTransition}
          >
            <h2
              id="contact-us-heading"
              className="section-heading-accent font-display text-4xl font-bold text-primary"
            >
              Contact us
            </h2>
          </motion.div>

          <motion.div
            className="pt-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...defaultRevealTransition, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
