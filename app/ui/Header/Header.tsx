"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import _ from "lodash";
import { externalLinks, sectionLinks } from "@/app/lib/links";
import { BrandLogo, ParentBrandLogo } from "@/app/ui/BrandLogo/BrandLogo";
import { MobileMenu } from "@/app/ui/Header/MobileMenu/MobileMenu";
import { SectionLink } from "@/app/ui/SectionLink/SectionLink";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let scrollStopTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
      setIsScrolling(true);

      clearTimeout(scrollStopTimeout);
      scrollStopTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollStopTimeout);
    };
  }, []);

  const isGlassHeader = isScrolled && isScrolling && !isMobileMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 w-full transition-all duration-300 ${
        isMobileMenuOpen ? "z-110" : "z-50"
      } ${
        isMobileMenuOpen
          ? "border-b border-accent-blue/20 bg-primary shadow-[0_8px_32px_rgba(13,21,56,0.35)]"
          : isGlassHeader
            ? "border-b border-accent-blue/20 bg-primary/60 shadow-[0_8px_32px_rgba(13,21,56,0.2)] backdrop-blur-md"
            : isScrolled
              ? "border-b border-accent-blue/20 bg-primary shadow-[0_8px_32px_rgba(13,21,56,0.35)]"
              : "bg-primary"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <nav
        aria-label="Main navigation"
        className="container mx-auto flex h-86 w-11/12 items-center justify-between gap-6 px-4 laptop:gap-10 laptop:px-0"
      >
        <div className="flex shrink-0 items-center gap-4 laptop:gap-6">
          <Link
            href="/"
            aria-label="United4Games home"
            className="transition-opacity hover:opacity-85"
          >
            <BrandLogo />
          </Link>
          <a
            href={externalLinks.united4Digital}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="United4Digital home"
            className="hidden transition-opacity hover:opacity-85 laptop:block"
          >
            <ParentBrandLogo />
          </a>
        </div>

        <div className="hidden items-center gap-8 laptop:flex">
          {_.map(sectionLinks, (link) => (
            <SectionLink
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white transition-colors hover:text-accent-blue"
            >
              {link.name}
            </SectionLink>
          ))}

          <a
            href={externalLinks.united4Digital}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-custom bg-secondary px-5 py-2.5 text-base font-bold text-white transition-all hover:bg-accent-red hover:shadow-[0_0_20px_rgba(255,71,87,0.35)]"
          >
            United4Digital.com
          </a>
        </div>

        <MobileMenu onOpenChange={setIsMobileMenuOpen} />
      </nav>
    </header>
  );
}
