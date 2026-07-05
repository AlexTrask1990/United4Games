"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/public/content/marketing-partners.json";
import { useIsMounted } from "@/app/lib/hooks/useIsMounted";

export const MarketingPartnersLottie = () => {
  const isMounted = useIsMounted();
  const prefersReducedMotion = useReducedMotion();

  if (!isMounted) {
    return (
      <div
        className="marketing-partners-lottie mx-auto"
        aria-hidden="true"
      />
    );
  }

  if (prefersReducedMotion) {
    return (
      <Image
        src="/content/marketing-partners.gif"
        alt=""
        width={1250}
        height={550}
        className="marketing-partners-lottie mx-auto h-auto w-full"
        unoptimized
      />
    );
  }

  return (
    <div className="marketing-partners-lottie mx-auto" aria-hidden="true">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="h-full w-full"
        rendererSettings={{
          preserveAspectRatio: "xMidYMid meet",
        }}
      />
    </div>
  );
};
