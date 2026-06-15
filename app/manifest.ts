import { MetadataRoute } from "next";
import { brandColors } from "@/app/lib/brandColors";
import { siteConfig } from "@/app/lib/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: brandColors.primary,
    theme_color: brandColors.primary,
    lang: "en",
  };
}
