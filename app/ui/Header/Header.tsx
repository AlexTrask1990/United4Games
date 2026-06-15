"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import _ from "lodash";
import { externalLinks, sectionLinks } from "@/app/lib/links";
import { BrandLogo } from "@/app/ui/BrandLogo/BrandLogo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-accent-blue/20 bg-primary shadow-[0_8px_32px_rgba(13,21,56,0.35)] backdrop-blur-md"
          : "bg-primary"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <nav
        aria-label="Main navigation"
        className="container mx-auto flex h-86 w-11/12 items-center justify-between gap-6 px-4 laptop:gap-10 laptop:px-0"
      >
        <Link
          href="/"
          aria-label="United4Games home"
          className="shrink-0 transition-opacity hover:opacity-85"
        >
          <BrandLogo />
        </Link>

        <div className="hidden items-center gap-8 laptop:flex">
          {_.map(sectionLinks, (link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-white transition-colors hover:text-accent-blue"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white transition-colors hover:text-accent-blue"
              >
                {link.name}
              </Link>
            ),
          )}

          <a
            href={externalLinks.united4Digital}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-custom bg-secondary px-5 py-2.5 text-base font-bold text-white transition-all hover:bg-accent-red hover:shadow-[0_0_20px_rgba(255,71,87,0.35)]"
          >
            United4Digital.com
          </a>
        </div>
      </nav>
    </header>
  );
}
