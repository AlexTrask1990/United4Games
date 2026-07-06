import Link from "next/link";
import _ from "lodash";
import {
  footerContactLink,
  footerCopyright,
  footerLegalLinks,
  footerNavLinks,
} from "@/app/lib/footerLinks";
import { getSectionIdFromHref } from "@/app/lib/scrollToSection";
import { externalLinks } from "@/app/lib/links";
import { socialLinks, supportEmail } from "@/app/lib/socialLinks";
import { United4GamesWordmark } from "@/app/ui/BrandLogo/BrandLogo";
import { SectionLink } from "@/app/ui/SectionLink/SectionLink";
import { SocialLinks } from "@/app/ui/Social/SocialLinks";

const FooterNavItem = ({
  label,
  href,
  external,
}: {
  label: string;
  href?: string;
  external?: boolean;
}) => {
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 transition-colors hover:text-accent-blue"
        >
          {label}
        </a>
      );
    }

    if (href && getSectionIdFromHref(href)) {
      return (
        <SectionLink
          href={href}
          className="text-gray-100 transition-colors hover:text-accent-blue"
        >
          {label}
        </SectionLink>
      );
    }

    return (
      <Link
        href={href}
        className="text-gray-100 transition-colors hover:text-accent-blue"
      >
        {label}
      </Link>
    );
  }

  return (
    <span className="cursor-default text-gray-100/50" aria-disabled="true">
      {label}
    </span>
  );
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div
        className="h-[3px] bg-linear-to-r from-accent-red via-secondary to-accent-blue"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto w-11/12 px-4 py-16 laptop:px-0 laptop:py-20">
        <div className="flex flex-col gap-12 laptop:flex-row laptop:items-start laptop:justify-between">
          <div className="max-w-sm">
            <Link href="/" aria-label="United4Games home">
              <United4GamesWordmark />
            </Link>
            <p className="mt-6 text-balance text-base leading-relaxed text-gray-100">
              Games that inspire — built and published with the United4Digital
              Ltd.
            </p>
            <div className="mt-6 flex gap-1.5" aria-hidden="true">
              <span className="block h-1 w-8 rounded-full bg-accent-red" />
              <span className="block h-1 w-8 rounded-full bg-secondary" />
              <span className="block h-1 w-8 rounded-full bg-accent-blue" />
            </div>
            <a
              href={`mailto:${supportEmail}`}
              className="mt-6 inline-block text-sm text-accent-blue transition-opacity hover:opacity-80"
            >
              {supportEmail}
            </a>
          </div>

          <nav
            aria-label="Footer sitemap"
            className="grid grid-cols-2 gap-x-8 gap-y-4 tablet:grid-cols-3"
          >
            {_.map(footerNavLinks, (link) => (
              <FooterNavItem key={link.label} {...link} />
            ))}
            <FooterNavItem {...footerContactLink} />
          </nav>

          <div className="flex flex-col gap-6 laptop:max-w-xs">
            <p className="font-display text-lg font-bold leading-snug text-white">
              Ready to partner on the next hit game?
            </p>
            <SectionLink
              href={footerContactLink.href ?? externalLinks.contactUs}
              className="inline-flex w-fit items-center justify-center rounded-custom bg-secondary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-accent-red"
            >
              Contact Us
            </SectionLink>
            <a
              href={externalLinks.united4Digital}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent-blue transition-opacity hover:opacity-80"
            >
              united4digital.com →
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8">
          <div className="flex flex-col gap-6 laptop:flex-row laptop:items-center laptop:justify-between">
            <div className="flex flex-col gap-4 laptop:flex-row laptop:items-center laptop:gap-8">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-100">Follow us:</span>
                <SocialLinks links={socialLinks} />
              </div>

              <nav
                aria-label="Legal links"
                className="flex flex-wrap gap-x-6 gap-y-3"
              >
                {_.map(footerLegalLinks, (link) => (
                  <FooterNavItem key={link.label} {...link} />
                ))}
              </nav>
            </div>

            <p className="max-w-md text-sm text-gray-100/70">
              71-75 Shelton Street, Covent Garden, London, England, WC2H 9JQ
            </p>
          </div>

          <p className="mt-8 text-sm text-gray-100/50 laptop:text-right">
            {footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
