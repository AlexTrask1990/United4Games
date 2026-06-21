import _ from "lodash";
import { SocialLink } from "@/app/lib/socialLinks";

interface SocialIconProps {
  className?: string;
}

const iconClassName = "h-5 w-5";

export const LinkedInIcon = ({ className = iconClassName }: SocialIconProps) => (
  <svg
    viewBox="0 0 25 25"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22.0674 0.876953H2.99599C1.82522 0.876953 0.876953 1.82522 0.876953 2.99599V22.0674C0.876953 23.2381 1.82522 24.1864 2.99599 24.1864H22.0674C23.2381 24.1864 24.1864 23.2381 24.1864 22.0674V2.99599C24.1864 1.82522 23.2381 0.876953 22.0674 0.876953ZM8.24486 19.9483H5.11927V9.89136H8.24486V19.9483ZM6.65028 8.45359C5.64268 8.45359 4.82791 7.63669 4.82791 6.63121C4.82791 5.62572 5.64374 4.80989 6.65028 4.80989C7.65471 4.80989 8.4716 5.62678 8.4716 6.63121C8.4716 7.63669 7.65471 8.45359 6.65028 8.45359ZM19.9526 19.9483H16.8291V15.0576C16.8291 13.891 16.8079 12.3908 15.2049 12.3908C13.5785 12.3908 13.3284 13.6611 13.3284 14.9728V19.9483H10.205V9.89136H13.2034V11.2656H13.2458C13.6632 10.4752 14.6825 9.64131 16.2029 9.64131C19.3677 9.64131 19.9526 11.7243 19.9526 14.4325V19.9483Z" />
  </svg>
);

export const InstagramIcon = ({ className = iconClassName }: SocialIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
  </svg>
);

export const TwitterIcon = ({ className = iconClassName }: SocialIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

export const FacebookIcon = ({ className = iconClassName }: SocialIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M13.5 3H10a4 4 0 00-4 4v3H3v4h3v8h4v-8h3.1L14 10h-4V7.2c0-.663.537-1.2 1.2-1.2H14V3z" />
  </svg>
);

const socialIcons = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
} as const;

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {_.map(links, (socialLink) => {
        const Icon = socialIcons[socialLink.id as keyof typeof socialIcons];

        if (!Icon) {
          return null;
        }

        const sharedClassName =
          "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors";

        if (socialLink.href) {
          return (
            <li key={socialLink.id}>
              <a
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLink.label}
                className={`${sharedClassName} hover:border-accent-blue hover:text-accent-blue`}
              >
                <Icon />
              </a>
            </li>
          );
        }

        return (
          <li key={socialLink.id}>
            <span
              aria-label={`${socialLink.label} (coming soon)`}
              className={`${sharedClassName} cursor-default text-white/35`}
            >
              <Icon />
            </span>
          </li>
        );
      })}
    </ul>
  );
};
