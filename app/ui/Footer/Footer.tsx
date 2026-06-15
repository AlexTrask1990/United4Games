import Link from "next/link";
import _ from "lodash";
import { BrandLogo } from "@/app/ui/BrandLogo/BrandLogo";
import {
  footerContactLink,
  footerLegalLinks,
  footerNavLinks,
} from "@/app/lib/footerLinks";
import { externalLinks } from "@/app/lib/links";

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
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="text-gray-100 transition-colors hover:text-accent-blue"
      >
        {label}
      </a>
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
              <BrandLogo />
            </Link>
            <p className="mt-6 text-balance text-base leading-relaxed text-gray-100">
              We build and publish games with the monetization power of the
              United4Digital network.
            </p>
            <div className="mt-6 flex gap-1.5" aria-hidden="true">
              <span className="block h-1 w-8 rounded-full bg-accent-red" />
              <span className="block h-1 w-8 rounded-full bg-secondary" />
              <span className="block h-1 w-8 rounded-full bg-accent-blue" />
            </div>
          </div>

          <nav
            aria-label="Footer navigation"
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
            <a
              href={footerContactLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-custom bg-secondary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-accent-red"
            >
              Contact Us
            </a>
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
            <nav
              aria-label="Legal links"
              className="flex flex-wrap gap-x-6 gap-y-3"
            >
              {_.map(footerLegalLinks, (link) => (
                <FooterNavItem key={link.label} {...link} />
              ))}
            </nav>

            <p className="max-w-md text-sm text-gray-100/70">
              71-75 Shelton Street, Covent Garden, London, England, WC2H 9JQ
            </p>
          </div>

          <p className="mt-8 text-sm text-gray-100/50 laptop:text-right">
            © {new Date().getFullYear()} United4Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
