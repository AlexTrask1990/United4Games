"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import _ from "lodash";
import { easeOutExpo } from "@/app/lib/motion";

const autoPlayIntervalMs = 4000;
const swipeThresholdPx = 40;

type GameScreenshotCoverflowProps = {
  title: string;
  screenshots: string[];
};

export const GameScreenshotCoverflow = ({
  title,
  screenshots,
}: GameScreenshotCoverflowProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const touchStartXRef = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setSlideDirection(1);
    setActiveIndex(
      (currentIndex) => (currentIndex + 1) % screenshots.length,
    );
  }, [screenshots.length]);

  const goToPrevious = useCallback(() => {
    setSlideDirection(-1);
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + screenshots.length) % screenshots.length,
    );
  }, [screenshots.length]);

  const goToSlide = (slideIndex: number) => {
    setSlideDirection(slideIndex > activeIndex ? 1 : -1);
    setActiveIndex(slideIndex);
  };

  useEffect(() => {
    if (prefersReducedMotion || screenshots.length <= 1 || isPaused) {
      return;
    }

    const intervalId = window.setInterval(goToNext, autoPlayIntervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [goToNext, isPaused, prefersReducedMotion, screenshots.length]);

  useEffect(() => {
    if (screenshots.length <= 1) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNext, goToPrevious, screenshots.length]);

  const handleTouchStart = (clientX: number) => {
    touchStartXRef.current = clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (clientX: number) => {
    const touchStartX = touchStartXRef.current;
    touchStartXRef.current = null;

    if (touchStartX === null) {
      setIsPaused(false);
      return;
    }

    const deltaX = clientX - touchStartX;

    if (Math.abs(deltaX) >= swipeThresholdPx) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    window.setTimeout(() => {
      setIsPaused(false);
    }, 1200);
  };

  if (screenshots.length === 0) {
    return null;
  }

  const activeScreenshot = screenshots[activeIndex];

  const renderDots = () => {
    if (screenshots.length <= 1) {
      return null;
    }

    return (
      <div className="mt-4 flex justify-center gap-2">
        {_.map(screenshots, (screenshot, screenshotIndex) => {
          const isActive = screenshotIndex === activeIndex;

          return (
            <button
              key={screenshot}
              type="button"
              aria-label={`Show screenshot ${screenshotIndex + 1}`}
              aria-pressed={isActive}
              onClick={() => goToSlide(screenshotIndex)}
              className={`h-2.5 rounded-full transition-all ${
                isActive
                  ? "w-7 bg-secondary"
                  : "w-2.5 bg-primary/20 hover:bg-primary/35"
              }`}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Mobile / tablet: larger full-bleed slide + autoplay + swipe */}
      {/* Mobile / tablet: one full-width slide + autoplay + swipe */}
      <div className="laptop:hidden">
        <div
          className="relative overflow-hidden rounded-[1.25rem] shadow-[0_18px_36px_rgba(21,31,79,0.16)] ring-1 ring-inset ring-white/70"
          onTouchStart={(event) => {
            handleTouchStart(event.changedTouches[0]?.clientX ?? 0);
          }}
          onTouchEnd={(event) => {
            handleTouchEnd(event.changedTouches[0]?.clientX ?? 0);
          }}
        >
          <div className="relative aspect-1280/606 w-full">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeScreenshot}
                className="absolute inset-0"
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, x: slideDirection * 36 }
                }
                animate={{ opacity: 1, x: 0 }}
                exit={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 0, x: slideDirection * -36 }
                }
                transition={{ duration: 0.4, ease: easeOutExpo }}
              >
                <Image
                  src={activeScreenshot}
                  alt={`${title} gameplay screenshot ${activeIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={activeIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {renderDots()}
      </div>

      {/* Laptop+: coverflow */}
      <div
        className="relative hidden laptop:block"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative mx-auto flex items-center justify-center overflow-visible px-4 py-8 perspective-distant tablet:px-8">
          <div
            aria-hidden="true"
            className="invisible aspect-1280/606 w-[min(92%,40rem)] tablet:w-176 laptop:w-3xl"
          />

          {_.map(screenshots, (screenshot, screenshotIndex) => {
            const rawOffset = screenshotIndex - activeIndex;
            const wrapDistance = screenshots.length;
            let offset = rawOffset;

            if (wrapDistance > 2) {
              if (rawOffset > wrapDistance / 2) {
                offset = rawOffset - wrapDistance;
              } else if (rawOffset < -wrapDistance / 2) {
                offset = rawOffset + wrapDistance;
              }
            }

            const isActive = offset === 0;
            const isSide = Math.abs(offset) === 1;
            const isVisible = isActive || isSide || screenshots.length === 1;

            if (!isVisible) {
              return null;
            }

            return (
              <motion.button
                key={screenshot}
                type="button"
                aria-label={`${title} screenshot ${screenshotIndex + 1}`}
                aria-current={isActive}
                onClick={() => goToSlide(screenshotIndex)}
                className={`absolute rounded-[1.25rem] bg-transparent transform-3d focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                  isActive
                    ? "shadow-[0_24px_48px_rgba(21,31,79,0.18),0_0_0_1px_rgba(21,31,79,0.06)]"
                    : "shadow-[0_12px_28px_rgba(21,31,79,0.1),0_0_0_1px_rgba(21,31,79,0.05)]"
                }`}
                style={{ zIndex: isActive ? 20 : 10 - Math.abs(offset) }}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 36, rotateY: offset * 12 }
                }
                animate={{
                  x: offset === 0 ? "0%" : offset < 0 ? "-38%" : "38%",
                  scale: isActive ? 1 : 0.78,
                  opacity: isActive ? 1 : 0.5,
                  rotateY: prefersReducedMotion ? 0 : offset * -10,
                  y: isActive ? 0 : 16,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  ease: easeOutExpo,
                }}
              >
                <span className="relative block aspect-1280/606 w-[min(92vw,40rem)] overflow-hidden rounded-[1.25rem] ring-1 ring-inset ring-white/70 tablet:w-176 laptop:w-3xl">
                  <Image
                    src={screenshot}
                    alt={`${title} gameplay screenshot ${screenshotIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="768px"
                    priority={screenshotIndex === 0}
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[1.25rem] shadow-[inset_0_0_24px_rgba(255,255,255,0.35)]"
                  />
                  {!isActive ? (
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-0 rounded-[1.25rem] ${
                        offset < 0
                          ? "bg-linear-to-r from-base-100/55 via-transparent to-transparent"
                          : "bg-linear-to-l from-base-100/55 via-transparent to-transparent"
                      }`}
                    />
                  ) : null}
                </span>
              </motion.button>
            );
          })}
        </div>

        {renderDots()}
      </div>
    </div>
  );
};
