import type { Metadata } from "next";
import Header from "@/app/ui/Header/Header";
import Footer from "@/app/ui/Footer/Footer";
import { createPageMetadata } from "@/app/lib/seo";
import { termsOfUseContent } from "@/app/lib/legal/termsOfUseContent";
import { LegalDocument } from "@/app/ui/LegalDocument/LegalDocument";

export const metadata: Metadata = createPageMetadata({
  path: "/terms",
  title: "Terms of Use",
  description:
    "Terms of Use for Hook Wars by UNITED4DIGITAL LTD — rules for accessing and using the App.",
});

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="grow bg-base-100 px-6 py-24 pt-40">
        <div className="container mx-auto w-11/12 max-w-6xl">
          <LegalDocument content={termsOfUseContent} />
        </div>
      </main>
      <Footer />
    </>
  );
}
