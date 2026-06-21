import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/ui/Header/Header";
import Footer from "@/app/ui/Footer/Footer";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: "/privacy-policy",
  title: "Privacy Policy",
  description: "United4Games privacy policy.",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="grow bg-base-100 px-6 py-24 pt-40">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-primary">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-50">
            This page is a placeholder. The full Privacy Policy will be published
            here before launch.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block font-bold text-secondary transition-colors hover:text-accent-red"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
