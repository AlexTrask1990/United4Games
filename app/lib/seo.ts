import type { Metadata } from "next";
import { getOgImageUrl, getSiteUrl, siteConfig } from "@/app/lib/siteConfig";

interface PageMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

export const createPageMetadata = ({
  title,
  description,
  path = "",
  noIndex = false,
}: PageMetadataOptions = {}): Metadata => {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle;
  const pageDescription = description ?? siteConfig.description;
  const pageUrl = getSiteUrl(path);
  const ogImageUrl = getOgImageUrl();

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: siteConfig.name,
      title: pageTitle,
      description: pageDescription,
      locale: siteConfig.locale,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
      ...(siteConfig.twitterHandle ? { site: siteConfig.twitterHandle } : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
};

export const createRootMetadata = (): Metadata => ({
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  ...createPageMetadata(),
});
