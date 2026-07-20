import { useEffect, useRef } from "react";

type UseHeroMobileScrollHookOptions = {
  enabled: boolean;
  prefersReducedMotion: boolean | null;
  isHookPlaying: boolean;
  onScrollHook: () => void;
  scrollThreshold?: number;
  cooldownMs?: number;
};

export const useHeroMobileScrollHook = ({
  enabled,
  prefersReducedMotion,
  isHookPlaying,
  onScrollHook,
  scrollThreshold = 80,
  cooldownMs = 2500,
}: UseHeroMobileScrollHookOptions) => {
  const isHookPlayingRef = useRef(isHookPlaying);
  const lastScrollYRef = useRef(0);
  const accumulatedScrollRef = useRef(0);
  const lastHookAtRef = useRef(0);
  const onScrollHookRef = useRef(onScrollHook);

  useEffect(() => {
    onScrollHookRef.current = onScrollHook;
  }, [onScrollHook]);

  useEffect(() => {
    isHookPlayingRef.current = isHookPlaying;
  }, [isHookPlaying]);

  useEffect(() => {
    if (!enabled || prefersReducedMotion) {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const requestHook = () => {
      if (!mediaQuery.matches) {
        return;
      }

      if (isHookPlayingRef.current) {
        return;
      }

      const timeSinceLastHook = Date.now() - lastHookAtRef.current;

      if (timeSinceLastHook < cooldownMs) {
        return;
      }

      lastHookAtRef.current = Date.now();
      accumulatedScrollRef.current = 0;
      onScrollHookRef.current();
    };

    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      if (!mediaQuery.matches) {
        return;
      }

      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollYRef.current);
      lastScrollYRef.current = currentScrollY;

      accumulatedScrollRef.current += scrollDelta;

      if (accumulatedScrollRef.current >= scrollThreshold) {
        requestHook();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cooldownMs, enabled, prefersReducedMotion, scrollThreshold]);
};
