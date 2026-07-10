import type { Metadata } from "next";
import Header from "@/app/ui/Header/Header";
import Footer from "@/app/ui/Footer/Footer";
import { createPageMetadata } from "@/app/lib/seo";
import { privacyPolicyContent } from "@/app/lib/legal/privacyPolicyContent";
import { LegalDocument } from "@/app/ui/LegalDocument/LegalDocument";

export const metadata: Metadata = createPageMetadata({
  path: "/privacy-policy",
  title: "Privacy Policy",
  description:
    "Privacy Policy for Hook Wars by UNITED4DIGITAL LTD — how we collect, use, and protect personal data.",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="grow bg-base-100 px-6 py-24 pt-40">
        <div className="container mx-auto w-11/12 max-w-6xl">
          <LegalDocument content={privacyPolicyContent} />
        </div>
      </main>
      <Footer />
    </>
  );
}
