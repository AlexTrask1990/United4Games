import { COOKIE_POLICY_URL } from "@/app/lib/cookies";

export interface FooterLink {
  label: string;
  href?: string;
  external?: boolean;
}

export const footerNavLinks: FooterLink[] = [
  { label: "Our Games" },
  { label: "Marketing & Partners" },
  { label: "Press Kit" },
  { label: "Careers" },
];

export const footerLegalLinks: FooterLink[] = [
  { label: "Cookie Policy", href: COOKIE_POLICY_URL, external: true },
  { label: "Terms" },
  { label: "Privacy Policy" },
];

export const footerContactLink: FooterLink = {
  label: "Contact Us",
  href: "https://united4digital.com/#contact-us",
  external: true,
};
