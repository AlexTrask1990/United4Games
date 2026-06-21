import Link from "next/link";
import { Button } from "@/app/ui/Button/Button";

const SiteWordmark = () => (
  <span className="font-display text-2xl font-black tracking-tight text-primary laptop:text-3xl">
    United
    <span className="text-secondary">4</span>
    Games
  </span>
);

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-screen flex-col justify-around bg-base-100 pt-8 pb-16 laptop:px-4">
      <div className="flex items-center justify-center laptop:justify-between">
        <Link href="/" aria-label="United4Games home">
          <SiteWordmark />
        </Link>
        <div className="hidden laptop:flex">
          <Button label={"Contact us"} className="btn-secondary" />
        </div>
      </div>
      <div className="flex h-full flex-col items-center justify-end px-2 laptop:justify-center">
        <p
          className="font-display select-none text-[10rem] font-black leading-none text-primary/10 laptop:text-[14rem]"
          aria-hidden="true"
        >
          404
        </p>
        <div className="flex flex-col items-center pt-4 text-center laptop:pt-16">
          <p className="text-2xl font-normal laptop:text-3xl">
            Oops! The page you&apos;re looking for couldn&apos;t be found.
          </p>
          <Link
            aria-label="Home page link"
            href="/"
            className="mt-4 inline-block text-2xl font-bold text-secondary laptop:text-3xl"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
