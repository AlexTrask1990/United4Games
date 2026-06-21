export interface SocialLink {
  id: string;
  label: string;
  href?: string;
}

const readSocialUrl = (environmentKey: string): string | undefined => {
  const value = process.env[environmentKey]?.trim();

  return value || undefined;
};

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: readSocialUrl("NEXT_PUBLIC_SOCIAL_LINKEDIN_URL"),
  },
  {
    id: "instagram",
    label: "Instagram",
    href: readSocialUrl("NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL"),
  },
  {
    id: "twitter",
    label: "Twitter/X",
    href: readSocialUrl("NEXT_PUBLIC_SOCIAL_TWITTER_URL"),
  },
  {
    id: "facebook",
    label: "Facebook",
    href: readSocialUrl("NEXT_PUBLIC_SOCIAL_FACEBOOK_URL"),
  },
];

export const supportEmail = "support@united4games.com";
