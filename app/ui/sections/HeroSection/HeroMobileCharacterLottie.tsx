"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import idleMobileAnimationData from "@/public/content/hero-idle-mobile.json";
import hookMobileAnimationData from "@/public/content/hero-hook-mobile.json";
import { heroHookImpactFrame } from "@/app/lib/motion";
import { useIsMounted } from "@/app/lib/hooks/useIsMounted";

type HeroMobileCharacterLottieProps = {
  hookTrigger?: number;
  className?: string;
  onHookComplete?: () => void;
  onHookImpact?: () => void;
};

const rendererSettings = {
  preserveAspectRatio: "xMidYMid meet",
};

export const HeroMobileCharacterLottie = ({
  hookTrigger = 0,
  className = "",
  onHookComplete,
  onHookImpact,
}: HeroMobileCharacterLottieProps) => {
  const isMounted = useIsMounted();
  const prefersReducedMotion = useReducedMotion();
  const idleLottieRef = useRef<LottieRefCurrentProps>(null);
  const hookLottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationMode, setAnimationMode] = useState<"idle" | "hook">("idle");
  const isHookPlayingRef = useRef(false);
  const hasHookImpactFiredRef = useRef(false);
  const onHookImpactRef = useRef(onHookImpact);
  const onHookCompleteRef = useRef(onHookComplete);

  useEffect(() => {
    onHookImpactRef.current = onHookImpact;
  }, [onHookImpact]);

  useEffect(() => {
    onHookCompleteRef.current = onHookComplete;
  }, [onHookComplete]);

  useEffect(() => {
    if (prefersReducedMotion || hookTrigger === 0 || isHookPlayingRef.current) {
      return;
    }

    isHookPlayingRef.current = true;
    hasHookImpactFiredRef.current = false;
    setAnimationMode("hook");
  }, [hookTrigger, prefersReducedMotion]);

  useEffect(() => {
    if (animationMode !== "hook") {
      return;
    }

    hookLottieRef.current?.goToAndPlay(0, true);

    let frameId = 0;
    let isCancelled = false;

    const pollHookImpactFrame = () => {
      if (isCancelled || hasHookImpactFiredRef.current) {
        return;
      }

      const animationItem = hookLottieRef.current?.animationItem;

      if (!animationItem) {
        frameId = requestAnimationFrame(pollHookImpactFrame);
        return;
      }

      if (animationItem.currentFrame >= heroHookImpactFrame) {
        hasHookImpactFiredRef.current = true;
        onHookImpactRef.current?.();
        return;
      }

      frameId = requestAnimationFrame(pollHookImpactFrame);
    };

    frameId = requestAnimationFrame(pollHookImpactFrame);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(frameId);
    };
  }, [animationMode, hookTrigger]);

  const handleHookComplete = () => {
    hookLottieRef.current?.goToAndStop(0, true);
    isHookPlayingRef.current = false;
    setAnimationMode("idle");
    onHookCompleteRef.current?.();
  };

  if (!isMounted) {
    return <div className={className} aria-hidden="true" />;
  }

  const isIdle = animationMode === "idle";
  const shouldAutoplay = !prefersReducedMotion;
  const lottieClassName = "absolute inset-0 h-full w-full";

  if (prefersReducedMotion) {
    return (
      <div className={className} aria-hidden="true">
        <div className="relative h-full w-full">
          <Lottie
            animationData={idleMobileAnimationData}
            loop={false}
            autoplay={false}
            className="h-full w-full"
            rendererSettings={rendererSettings}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={className} aria-hidden="true">
      <div className="hero-glow hero-glow-orange pointer-events-none absolute bottom-[6%] left-1/2 h-40 w-40 -translate-x-1/2 opacity-35" />

      <div className="relative h-full w-full">
        <Lottie
          lottieRef={idleLottieRef}
          animationData={idleMobileAnimationData}
          loop
          autoplay={shouldAutoplay}
          className={`${lottieClassName} ${isIdle ? "opacity-100" : "opacity-0"}`}
          rendererSettings={rendererSettings}
        />

        <Lottie
          lottieRef={hookLottieRef}
          animationData={hookMobileAnimationData}
          loop={false}
          autoplay={false}
          onComplete={handleHookComplete}
          className={`${lottieClassName} ${isIdle ? "opacity-0" : "opacity-100"}`}
          rendererSettings={rendererSettings}
        />
      </div>
    </div>
  );
};
