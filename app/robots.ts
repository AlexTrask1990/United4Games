import { MetadataRoute } from "next";
import { getSiteUrl, siteConfig } from "@/app/lib/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: getSiteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
