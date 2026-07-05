"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/public/content/error-404.json";
import { useIsMounted } from "@/app/lib/hooks/useIsMounted";

export const NotFoundLottie = () => {
  const isMounted = useIsMounted();
  const prefersReducedMotion = useReducedMotion();

  if (!isMounted) {
    return (
      <div
        className="mx-auto aspect-1000/692 w-full"
        aria-hidden="true"
      />
    );
  }

  if (prefersReducedMotion) {
    return (
      <Image
        src="/content/error-404.gif"
        alt=""
        width={1000}
        height={692}
        className="mx-auto h-auto w-full"
        unoptimized
      />
    );
  }

  return (
    <div className="mx-auto w-full" aria-hidden="true">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="h-auto w-full"
        rendererSettings={{
          preserveAspectRatio: "xMidYMid meet",
        }}
      />
    </div>
  );
};
