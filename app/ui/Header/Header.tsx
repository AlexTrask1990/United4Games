"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import _ from "lodash";
import { sectionLinks } from "@/app/lib/links";
import { BrandLogo } from "@/app/ui/BrandLogo/BrandLogo";
import { MobileMenu } from "@/app/ui/Header/MobileMenu/MobileMenu";
import {
  United4DigitalLogoLink,
  United4DigitalNavButton,
} from "@/app/ui/Header/United4DigitalHeaderLinks";
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
          <United4DigitalLogoLink />
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

          <United4DigitalNavButton />
        </div>

        <MobileMenu onOpenChange={setIsMobileMenuOpen} />
      </nav>
    </header>
  );
}
