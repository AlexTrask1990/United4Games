import { getSiteUrl, siteConfig } from "@/app/lib/siteConfig";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  parentOrganization: {
    "@type": "Organization",
    name: siteConfig.parentOrganization.name,
    url: siteConfig.parentOrganization.url,
  },
};

export const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

export const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: siteConfig.defaultTitle,
  url: getSiteUrl("/"),
  description: siteConfig.description,
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};
