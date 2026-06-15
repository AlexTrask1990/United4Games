export const siteConfig = {
  name: "United4Games",
  shortName: "U4G",
  defaultTitle: "United4Games",
  description:
    "United4Games — gaming solutions, mobile games, and digital monetization powered by United4Digital.",
  keywords: [
    "United4Games",
    "United 4 Games",
    "U4G",
    "mobile games",
    "game publishing",
    "game monetization",
    "digital advertising",
    "United4Digital",
    "marketing partners",
    "user acquisition",
  ],
  url: process.env.BASE_URL ?? "https://united4games.com",
  locale: "en_US",
  twitterHandle: process.env.TWITTER_HANDLE,
  ogImagePath: "/opengraph-image",
  themeColor: "#151f4f",
  parentOrganization: {
    name: "United4Digital",
    url: "https://united4digital.com",
  },
} as const;

export const getSiteUrl = (path = ""): string => {
  if (!path || path === "/") {
    return siteConfig.url;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteConfig.url}${normalizedPath}`;
};

export const getOgImageUrl = (): string => {
  return `${siteConfig.url}${siteConfig.ogImagePath}`;
};
