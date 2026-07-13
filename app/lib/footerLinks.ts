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
  { label: "Careers", href: "/careers" },
];

export const footerLegalLinks: FooterLink[] = [
  { label: "Cookie Policy", href: COOKIE_POLICY_URL },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
];

export const footerContactLink: FooterLink = {
  label: "Contact Us",
  href: externalLinks.contactUs,
};

export const footerCopyright =
  "© 2026 United4Games studio — part of United4Digital Ltd. All rights reserved.";
