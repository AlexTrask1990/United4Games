import type { Metadata } from "next";
import Header from "@/app/ui/Header/Header";
import Footer from "@/app/ui/Footer/Footer";
import { HeroSection } from "@/app/ui/sections/HeroSection/HeroSection";
import { OurGamesSection } from "@/app/ui/sections/OurGamesSection/OurGamesSection";
import { MarketingSection } from "@/app/ui/sections/MarketingSection/MarketingSection";
import { ContactUsSection } from "@/app/ui/sections/ContactUsSection/ContactUsSection";
import { HashScrollOnLoad } from "@/app/ui/HashScroll/HashScrollOnLoad";
import { JsonLd } from "@/app/ui/JsonLd/JsonLd";
import { createPageMetadata } from "@/app/lib/seo";
import { homePageJsonLd } from "@/app/lib/jsonLd";

export const metadata: Metadata = createPageMetadata({
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={homePageJsonLd} />
      <HashScrollOnLoad />
      <Header />
      <main className="grow">
        <HeroSection />
        <OurGamesSection />
        <MarketingSection />
        <ContactUsSection />
      </main>
      <Footer />
    </>
  );
}
