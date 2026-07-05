import type { Metadata } from "next";
import { createRootMetadata } from "@/app/lib/seo";
import { organizationJsonLd, webSiteJsonLd } from "@/app/lib/jsonLd";
import { siteConfig } from "@/app/lib/siteConfig";
import { AnalyticsWithConsent } from "@/app/ui/CookieConsent/AnalyticsWithConsent";
import { CookieBanner } from "@/app/ui/CookieConsent/CookieBanner";
import { JsonLd } from "@/app/ui/JsonLd/JsonLd";
import { exo2, openSans } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = createRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content={siteConfig.themeColor} />
      </head>
      <body
        className={`${openSans.variable} ${exo2.variable} flex min-h-full flex-col antialiased`}
        suppressHydrationWarning
      >
        <JsonLd data={[organizationJsonLd, webSiteJsonLd]} />
        {children}
        <CookieBanner />
        <AnalyticsWithConsent />
      </body>
    </html>
  );
}
