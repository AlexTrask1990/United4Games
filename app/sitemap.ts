import { MetadataRoute } from "next";
import { getSiteUrl } from "@/app/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getSiteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
