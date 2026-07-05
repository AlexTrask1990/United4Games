export const getSectionIdFromHref = (href: string): string | null => {
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) {
    return null;
  }

  const sectionId = href.slice(hashIndex + 1);

  return sectionId || null;
};

export const scrollToSection = (
  sectionId: string,
  behavior: ScrollBehavior = "smooth",
) => {
  const section = document.getElementById(sectionId);

  if (!section) {
    return false;
  }

  section.scrollIntoView({ behavior, block: "start" });
  return true;
};

export const scrollToHashFromLocation = (
  behavior: ScrollBehavior = "auto",
  maxAttempts = 8,
) => {
  const sectionId = window.location.hash.replace(/^#/, "");

  if (!sectionId) {
    return;
  }

  const attemptScroll = (attemptsLeft: number) => {
    if (scrollToSection(sectionId, behavior)) {
      return;
    }

    if (attemptsLeft > 0) {
      window.setTimeout(() => attemptScroll(attemptsLeft - 1), 50);
    }
  };

  requestAnimationFrame(() => attemptScroll(maxAttempts));
};
