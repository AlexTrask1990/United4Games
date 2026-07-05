"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import idleAnimationData from "@/public/content/hero-idle.json";
import hookAnimationData from "@/public/content/hero-hook.json";
import { heroHookImpactFrame } from "@/app/lib/motion";
import { useIsMounted } from "@/app/lib/hooks/useIsMounted";

type HeroCharacterLottieProps = {
  hookTrigger?: number;
  className?: string;
  onHookComplete?: () => void;
  onHookImpact?: () => void;
};

export const HeroCharacterLottie = ({
  hookTrigger = 0,
  className = "",
  onHookComplete,
  onHookImpact,
}: HeroCharacterLottieProps) => {
  const isMounted = useIsMounted();
  const prefersReducedMotion = useReducedMotion();
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationMode, setAnimationMode] = useState<"idle" | "hook">("idle");
  const [alignHookLeft, setAlignHookLeft] = useState(false);
  const isHookPlayingRef = useRef(false);
  const hasHookImpactFiredRef = useRef(false);
  const onHookImpactRef = useRef(onHookImpact);

  useEffect(() => {
    onHookImpactRef.current = onHookImpact;
  }, [onHookImpact]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const updateAlignment = () => {
      setAlignHookLeft(mediaQuery.matches);
    };

    updateAlignment();
    mediaQuery.addEventListener("change", updateAlignment);

    return () => {
      mediaQuery.removeEventListener("change", updateAlignment);
    };
  }, []);

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

    let frameId = 0;
    let isCancelled = false;

    const pollHookImpactFrame = () => {
      if (isCancelled || hasHookImpactFiredRef.current) {
        return;
      }

      const animationItem = lottieRef.current?.animationItem;

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
    isHookPlayingRef.current = false;
    setAnimationMode("idle");
    onHookComplete?.();
  };

  if (!isMounted) {
    return <div className={className} aria-hidden="true" />;
  }

  const isIdle = animationMode === "idle";
  const shouldAutoplay = !prefersReducedMotion;
  const animationData = isIdle ? idleAnimationData : hookAnimationData;

  const lottieClassName = "h-full w-full";

  if (prefersReducedMotion) {
    return (
      <div className={className} aria-hidden="true">
        <div className="relative h-full w-full">
          <Lottie
            animationData={idleAnimationData}
            loop={false}
            autoplay={false}
            className={lottieClassName}
            rendererSettings={{
              preserveAspectRatio: alignHookLeft
                ? "xMaxYMid meet"
                : "xMidYMid meet",
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={className} aria-hidden="true">
      <div className="hero-glow hero-glow-orange pointer-events-none absolute bottom-[10%] right-[18%] h-48 w-48 opacity-40 laptop:h-72 laptop:w-72" />

      <div className="relative h-full w-full">
        <Lottie
          lottieRef={lottieRef}
          key={animationMode}
          animationData={animationData}
          loop={isIdle}
          autoplay={shouldAutoplay}
          onComplete={isIdle ? undefined : handleHookComplete}
          className={lottieClassName}
          rendererSettings={{
            preserveAspectRatio: alignHookLeft
              ? "xMaxYMid meet"
              : "xMidYMid meet",
          }}
        />
      </div>
    </div>
  );
};
