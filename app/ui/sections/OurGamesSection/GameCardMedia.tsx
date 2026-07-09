"use client";

import Image from "next/image";
import { GameMedia, gameScreenshotSpecs } from "@/app/lib/games";
import { GameScreenshotCarousel } from "@/app/ui/sections/OurGamesSection/GameScreenshotCarousel";

interface GameCardMediaProps {
  title: string;
  media: GameMedia;
}

const GameMediaPlaceholder = ({ media }: { media: GameMedia }) => {
  const isVideo = media.kind === "video";

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center border-b border-dashed border-primary/15 bg-linear-to-br from-base-100 via-white to-accent-blue/10 p-6 text-center">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue">
        {isVideo ? "Video placeholder" : "Screenshot placeholder"}
      </p>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-50">
        {isVideo
          ? "Gameplay video preview will be placed here — main visual accent of the card."
          : "Gameplay screenshot will be placed here — main visual accent of the card."}
      </p>

      {!isVideo && (
        <dl className="mt-4 space-y-2 text-xs text-gray-50/80">
          <div>
            <dt className="font-semibold text-primary">Display (16:9)</dt>
            <dd>
              {gameScreenshotSpecs.displayWidth} ×{" "}
              {gameScreenshotSpecs.displayHeight} px
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-primary">Artboard @2x</dt>
            <dd>
              {gameScreenshotSpecs.artboardWidth} ×{" "}
              {gameScreenshotSpecs.artboardHeight} px
            </dd>
          </div>
        </dl>
      )}

      <p className="mt-4 text-[11px] text-gray-50/60">
        {isVideo
          ? "MP4 or WebM · poster image optional · same 16:9 frame"
          : `WebP or PNG · max ${gameScreenshotSpecs.maxFileSizeKb} KB`}
      </p>
    </div>
  );
};

export const GameCardMedia = ({ title, media }: GameCardMediaProps) => {
  if (media.kind === "screenshot" && media.screenshots?.length) {
    return (
      <GameScreenshotCarousel
        title={title}
        screenshots={media.screenshots}
      />
    );
  }

  if (media.kind === "video" && media.src) {
    return (
      <video
        className="aspect-video w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={media.posterSrc}
      >
        <source src={media.src} />
      </video>
    );
  }

  if (media.kind === "screenshot" && media.src) {
    return (
      <Image
        src={media.src}
        alt={`${title} gameplay screenshot`}
        width={gameScreenshotSpecs.artboardWidth}
        height={gameScreenshotSpecs.artboardHeight}
        className="aspect-video w-full object-cover"
        sizes="(max-width: 1024px) 100vw, 672px"
      />
    );
  }

  return <GameMediaPlaceholder media={media} />;
};
