import { GameStoreLinks, gameAccentStyles } from "@/app/lib/games";

interface GameStoreButtonsProps {
  storeLinks: GameStoreLinks;
  accent: keyof typeof gameAccentStyles;
  gameTitle: string;
}

interface StoreButtonConfig {
  platform: "android" | "ios";
  label: string;
  href?: string;
}

export const GameStoreButtons = ({
  storeLinks,
  accent,
  gameTitle,
}: GameStoreButtonsProps) => {
  const accentStyles = gameAccentStyles[accent];

  const storeButtons: StoreButtonConfig[] = [
    {
      platform: "android",
      label: "Play on Android",
      href: storeLinks.android,
    },
    {
      platform: "ios",
      label: "Play on iOS",
      href: storeLinks.ios,
    },
  ];

  return (
    <div className="mt-6 flex flex-col gap-3 tablet:flex-row tablet:flex-wrap">
      {storeButtons.map((storeButton) => {
        const sharedClassName = `inline-flex items-center justify-center rounded-custom px-5 py-2.5 text-sm font-bold transition-colors ${accentStyles.button} text-white`;

        if (storeButton.href) {
          return (
            <a
              key={storeButton.platform}
              href={storeButton.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${storeButton.label} — ${gameTitle}`}
              className={`${sharedClassName} hover:opacity-90`}
            >
              {storeButton.label}
            </a>
          );
        }

        return (
          <span
            key={storeButton.platform}
            aria-disabled="true"
            className={`${sharedClassName} cursor-default opacity-60`}
          >
            {storeButton.label}
          </span>
        );
      })}
    </div>
  );
};
