export interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

export const externalLinks = {
  united4Digital: "https://united4digital.com",
  contactUs: "https://united4digital.com/#contact-us",
} as const;

export const sectionLinks: NavLink[] = [
  { name: "Our Games", href: "/#our-games" },
  { name: "Marketing & Partners", href: "/#marketing-partners" },
  { name: "Contact Us", href: externalLinks.contactUs, external: true },
];
