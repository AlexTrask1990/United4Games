"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { gameScreenshotSpecs } from "@/app/lib/games";
import { useIsMounted } from "@/app/lib/hooks/useIsMounted";

const autoPlayIntervalMs = 4500;

type GameScreenshotCarouselProps = {
  title: string;
  screenshots: string[];
};

export const GameScreenshotCarousel = ({
  title,
  screenshots,
}: GameScreenshotCarouselProps) => {
  const isMounted = useIsMounted();
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const goToNext = useCallback(() => {
    setActiveIndex(
      (currentIndex) => (currentIndex + 1) % screenshots.length,
    );
  }, [screenshots.length]);

  const goToPrevious = useCallback(() => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + screenshots.length) % screenshots.length,
    );
  }, [screenshots.length]);

  const goToSlide = (slideIndex: number) => {
    setActiveIndex(slideIndex);
  };

  const openLightbox = () => {
    setIsPaused(true);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  useEffect(() => {
    if (
      prefersReducedMotion ||
      screenshots.length <= 1 ||
      isPaused ||
      isLightboxOpen
    ) {
      return;
    }

    const intervalId = window.setInterval(goToNext, autoPlayIntervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [
    goToNext,
    isLightboxOpen,
    isPaused,
    prefersReducedMotion,
    screenshots.length,
  ]);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNext, goToPrevious, isLightboxOpen]);

  const activeScreenshot = screenshots[activeIndex];

  const lightboxOverlay =
    isMounted && isLightboxOpen
      ? createPortal(
          <div
            className="fixed inset-0 z-120 flex items-center justify-center bg-primary-dark/90 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshot preview`}
            onClick={closeLightbox}
          >
            <button
              type="button"
              aria-label="Close screenshot preview"
              className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl leading-none text-white transition-colors hover:bg-white/20"
              onClick={closeLightbox}
            >
              ×
            </button>

            {screenshots.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous screenshot"
                  className="absolute top-1/2 left-4 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition-colors hover:bg-white/20 laptop:flex"
                  onClick={(event) => {
                    event.stopPropagation();
                    goToPrevious();
                  }}
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next screenshot"
                  className="absolute top-1/2 right-4 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition-colors hover:bg-white/20 laptop:flex"
                  onClick={(event) => {
                    event.stopPropagation();
                    goToNext();
                  }}
                >
                  ›
                </button>
              </>
            )}

            <div
              className="relative h-[min(88vh,900px)] w-[min(92vw,1200px)]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeScreenshot}
                alt={`${title} gameplay screenshot ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="92vw"
                priority
              />
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <div
        className="relative aspect-video w-full overflow-hidden bg-primary/5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeScreenshot}
            className="absolute inset-0"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          >
            <button
              type="button"
              className="group absolute inset-0 cursor-zoom-in"
              aria-label={`Enlarge ${title} screenshot ${activeIndex + 1}`}
              onClick={openLightbox}
            >
              <Image
                src={activeScreenshot}
                alt={`${title} gameplay screenshot ${activeIndex + 1}`}
                width={gameScreenshotSpecs.artboardWidth}
                height={gameScreenshotSpecs.artboardHeight}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 672px"
                priority={activeIndex === 0}
              />
              <span className="pointer-events-none absolute top-4 right-4 rounded-custom bg-primary-dark/55 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
                View full size
              </span>
            </button>
          </motion.div>
        </AnimatePresence>

        {screenshots.length > 1 && (
          <div className="pointer-events-auto absolute inset-x-0 bottom-4 flex justify-center gap-2">
            {screenshots.map((screenshot, slideIndex) => {
              const isActive = slideIndex === activeIndex;

              return (
                <button
                  key={screenshot}
                  type="button"
                  aria-label={`Show screenshot ${slideIndex + 1}`}
                  aria-pressed={isActive}
                  onClick={() => goToSlide(slideIndex)}
                  className={`h-2.5 rounded-full transition-all ${
                    isActive
                      ? "w-7 bg-white"
                      : "w-2.5 bg-white/45 hover:bg-white/70"
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>

      {lightboxOverlay}
    </>
  );
};
