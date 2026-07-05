"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SuccessMessageProps {
  message: string;
  success: boolean;
  onClose: (value: boolean) => void;
}

export const SuccessMessage = ({
  message,
  success,
  onClose,
}: SuccessMessageProps) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (!success) {
      return;
    }

    const timerId = setTimeout(() => setIsFadingOut(true), 4000);
    return () => clearTimeout(timerId);
  }, [success]);

  useEffect(() => {
    if (!isFadingOut) {
      return;
    }

    const timerId = setTimeout(() => onClose(false), 200);
    return () => clearTimeout(timerId);
  }, [isFadingOut, onClose]);

  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: isFadingOut ? "-100vw" : 0, opacity: isFadingOut ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-10 left-0 w-full px-6 laptop:px-10"
      role="alert"
    >
      <div className="flex items-center gap-3 rounded-custom bg-primary px-5 py-4 text-white shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 shrink-0 text-accent-blue"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-base laptop:text-lg">{message}</span>
      </div>
    </motion.div>
  );
};
