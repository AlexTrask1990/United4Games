import Image from "next/image";

export const BrandLogo = () => {
  return (
    <>
      <Image
        src="/content/United4Games_logo.svg"
        alt="United4Games"
        width={914}
        height={202}
        className="h-10 w-auto object-contain laptop:h-12"
        priority
      />
    </>
  );
};

export const U4GWordmark = () => {
  return (
    <span className="font-display text-4xl font-black leading-none tracking-tight laptop:text-4xl">
      <span className="text-white">U</span>
      <span className="text-secondary">4</span>
      <span className="text-accent-blue">G</span>
    </span>
  );
};

export const United4GamesWordmark = () => {
  return (
    <span className="font-display text-2xl font-black leading-none tracking-tight laptop:text-3xl">
      <span className="text-white">United</span>
      <span className="text-secondary">4</span>
      <span className="text-accent-blue">Games</span>
    </span>
  );
};

export const ParentBrandLogo = () => {
  return (
    <span className="font-display text-2xl font-black leading-none tracking-tight laptop:text-3xl">
      <span className="text-white">U</span>
      <span className="text-secondary">4</span>
      <span className="text-white">D</span>
    </span>
  );
};
