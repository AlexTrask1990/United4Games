"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import {
  defaultRevealTransition,
  fadeUp,
} from "@/app/lib/motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...defaultRevealTransition, delay }}
    >
      {children}
    </motion.div>
  );
};
