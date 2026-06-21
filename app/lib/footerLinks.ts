import { COOKIE_POLICY_URL } from "@/app/lib/cookies";
import { externalLinks } from "@/app/lib/links";

export interface FooterLink {
  label: string;
  href?: string;
  external?: boolean;
}

export const footerNavLinks: FooterLink[] = [
  { label: "Our Games", href: "/#our-games" },
  { label: "Marketing & Partners", href: "/#marketing-partners" },
  { label: "Press Kit" },
  { label: "Careers" },
];

export const footerLegalLinks: FooterLink[] = [
  { label: "Cookie Policy", href: COOKIE_POLICY_URL, external: true },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
];

export const footerContactLink: FooterLink = {
  label: "Contact Us",
  href: externalLinks.contactUs,
  external: true,
};

export const footerCopyright =
  "© 2026 United4Games Ltd. Part of United4Digital Ltd. All rights reserved.";
