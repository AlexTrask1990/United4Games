"use client";

import { useEffect, useState } from "react";
import { SectionLink } from "@/app/ui/SectionLink/SectionLink";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import { externalLinks, sectionLinks } from "@/app/lib/links";
import { easeOutExpo, staggerGrid } from "@/app/lib/motion";
import { ParentBrandLogo } from "@/app/ui/BrandLogo/BrandLogo";
import { MenuToggle } from "@/app/ui/Header/MobileMenu/MenuToggle";

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const accentBars = [
  "from-accent-red to-accent-red/40",
  "from-secondary to-secondary/40",
  "from-accent-blue to-accent-blue/40",
];

interface MobileMenuProps {
  onOpenChange?: (isOpen: boolean) => void;
}

export const MobileMenu = ({ onOpenChange }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    onOpenChange?.(isOpen);
  }, [isOpen, onOpenChange]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((previous) => !previous);
  };

  const menuOverlay = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            className="mobile-menu-backdrop bg-primary-dark/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMenu}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="mobile-menu-panel flex flex-col px-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: easeOutExpo }}
          >
            <div
              className="hero-glow hero-glow-orange pointer-events-none absolute right-0 top-0 scale-75 opacity-70"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col">
              <div
                className="mb-6 h-1 w-full rounded-full bg-linear-to-r from-accent-red via-secondary to-accent-blue"
                aria-hidden="true"
              />

              <div className="brand-accent-line mb-3" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent-blue">
                Navigate
              </p>

              <motion.nav
                aria-label="Mobile section links"
                className="mt-6"
                variants={staggerGrid}
                initial="hidden"
                animate="visible"
              >
                <ul className="flex flex-col gap-3">
                  {_.map(sectionLinks, (link, index) => {
                    const linkClassName =
                      "group flex items-center gap-4 rounded-custom bg-white/5 px-4 py-4 ring-1 ring-white/10 transition-all active:bg-white/10 active:ring-accent-blue/35";

                    const linkContent = (
                      <>
                        <span
                          className={`h-9 w-1 shrink-0 rounded-full bg-linear-to-b ${accentBars[index % accentBars.length]}`}
                          aria-hidden="true"
                        />
                        <span className="font-display text-xl font-bold text-white transition-colors group-active:text-accent-blue">
                          {link.name}
                        </span>
                      </>
                    );

                    return (
                      <motion.li
                        key={link.name}
                        variants={linkVariants}
                        transition={{ duration: 0.35, ease: easeOutExpo }}
                      >
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className={linkClassName}
                          >
                            {linkContent}
                          </a>
                        ) : (
                          <SectionLink
                            href={link.href}
                            onNavigate={closeMenu}
                            className={linkClassName}
                          >
                            {linkContent}
                          </SectionLink>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.nav>

              <div className="mt-10 pt-4">
                <div
                  className="mb-6 h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent"
                  aria-hidden="true"
                />

                <a
                  href={externalLinks.united4Digital}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mb-5 flex justify-center transition-opacity active:opacity-80"
                  aria-label="United4Digital home"
                >
                  <ParentBrandLogo />
                </a>

                <a
                  href={externalLinks.united4Digital}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center rounded-custom bg-secondary px-6 py-3.5 text-base font-bold text-white shadow-[0_0_24px_rgba(255,104,57,0.3)] transition-all active:bg-accent-red"
                >
                  United4Digital.com
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="laptop:hidden">
      <MenuToggle isOpen={isOpen} onToggle={toggleMenu} />
      {isMounted ? createPortal(menuOverlay, document.body) : null}
    </div>
  );
};
