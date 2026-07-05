"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { scrollToHashFromLocation } from "@/app/lib/scrollToSection";

export const HashScrollOnLoad = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    scrollToHashFromLocation("auto");

    const handleHashChange = () => {
      scrollToHashFromLocation("smooth");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return null;
};
