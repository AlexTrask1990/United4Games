import { type GameStoreLinks } from "@/app/lib/games";

interface GameStoreButtonsProps {
  storeLinks: GameStoreLinks;
  gameTitle: string;
}

interface StoreBadgeConfig {
  platform: "android" | "ios";
  label: string;
  href?: string;
  badgeSrc: string;
}

const STORE_BADGE_WIDTH = 564;
const STORE_BADGE_HEIGHT = 168;

export const GameStoreButtons = ({
  storeLinks,
  gameTitle,
}: GameStoreButtonsProps) => {
  const storeBadges: StoreBadgeConfig[] = [
    {
      platform: "android",
      label: "Get it on Google Play",
      href: storeLinks.android,
      badgeSrc: "/content/store-badges/google-play.png",
    },
    {
      platform: "ios",
      label: "Download on the App Store",
      href: storeLinks.ios,
      badgeSrc: "/content/store-badges/app-store.png",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 laptop:gap-4">
      {storeBadges.map((storeBadge) => {
        const badgeImage = (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={storeBadge.badgeSrc}
            alt={storeBadge.label}
            width={STORE_BADGE_WIDTH}
            height={STORE_BADGE_HEIGHT}
            style={{
              display: "block",
              width: 188,
              height: 56,
            }}
            className="laptop:!h-16 laptop:!w-[215px]"
          />
        );

        if (storeBadge.href) {
          return (
            <a
              key={storeBadge.platform}
              href={storeBadge.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${storeBadge.label} — ${gameTitle}`}
              className="inline-flex shrink-0 transition-opacity hover:opacity-90"
            >
              {badgeImage}
            </a>
          );
        }

        return (
          <span
            key={storeBadge.platform}
            aria-disabled="true"
            className="inline-flex shrink-0 cursor-default opacity-50"
          >
            {badgeImage}
          </span>
        );
      })}
    </div>
  );
};
