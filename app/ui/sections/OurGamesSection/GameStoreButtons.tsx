import { GameStoreLinks } from "@/app/lib/games";

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
      badgeSrc: "/content/store-badges/app-store.svg",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {storeBadges.map((storeBadge) => {
        const badgeImage = (
          // Official store badges — keep intrinsic aspect ratio
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={storeBadge.badgeSrc}
            alt={storeBadge.label}
            className="h-11 w-auto object-contain"
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
              className="transition-opacity hover:opacity-90"
            >
              {badgeImage}
            </a>
          );
        }

        return (
          <span
            key={storeBadge.platform}
            aria-disabled="true"
            className="cursor-default opacity-50"
          >
            {badgeImage}
          </span>
        );
      })}
    </div>
  );
};
