import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/ui/Header/Header";
import Footer from "@/app/ui/Footer/Footer";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: "/cookie-policy",
  title: "Cookie Policy",
  description: "United4Games cookie policy.",
});

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="grow bg-base-100 px-6 py-24 pt-40">
        <div className="container mx-auto w-11/12 max-w-6xl">
          <h1 className="font-display text-4xl font-bold text-primary">
            Cookie Policy
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-50">
            This page is a placeholder. The full Cookie Policy will be published
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
