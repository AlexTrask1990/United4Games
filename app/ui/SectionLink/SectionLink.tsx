"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import {
  getSectionIdFromHref,
  scrollToSection,
} from "@/app/lib/scrollToSection";

interface SectionLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: ReactNode;
  onNavigate?: () => void;
}

export const SectionLink = ({
  href,
  children,
  className,
  onNavigate,
  onClick,
  ...props
}: SectionLinkProps) => {
  const pathname = usePathname();
  const sectionId = getSectionIdFromHref(href);
  const hrefPath = href.split("#")[0] || "/";
  const isHomeSectionLink =
    Boolean(sectionId) && (hrefPath === "/" || hrefPath === "");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    onNavigate?.();

    if (event.defaultPrevented) {
      return;
    }

    if (pathname === "/" && isHomeSectionLink && sectionId) {
      event.preventDefault();
      scrollToSection(sectionId);
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  if (isHomeSectionLink) {
    return (
      <Link href={href} className={className} onClick={handleClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={className} onClick={onNavigate} {...props}>
      {children}
    </Link>
  );
};
