"use client";

import { motion } from "framer-motion";

interface MenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MenuToggle = ({ isOpen, onToggle }: MenuToggleProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className={`flex h-11 w-11 items-center justify-center rounded-custom border transition-colors duration-300 ${
        isOpen
          ? "border-secondary bg-secondary/15 shadow-[0_0_20px_rgba(255,104,57,0.35)]"
          : "border-accent-blue/25 bg-primary-light/40"
      }`}
    >
      <span className="relative block h-5 w-5" aria-hidden="true">
        <motion.span
          className="absolute left-1/2 top-1/2 block h-0.5 w-5 origin-center -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
          transition={{ duration: 0.22 }}
        />
        <motion.span
          className="absolute left-1/2 top-1/2 block h-0.5 w-5 origin-center -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary"
          animate={
            isOpen
              ? { opacity: 0, scaleX: 0, y: 0 }
              : { opacity: 1, scaleX: 1, y: 0 }
          }
          transition={{ duration: 0.15 }}
        />
        <motion.span
          className="absolute left-1/2 top-1/2 block h-0.5 w-5 origin-center -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
          transition={{ duration: 0.22 }}
        />
      </span>
    </button>
  );
};
