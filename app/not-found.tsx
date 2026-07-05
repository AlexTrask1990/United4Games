import Link from "next/link";
import { Button } from "@/app/ui/Button/Button";
import { NotFoundLottie } from "@/app/ui/NotFound/NotFoundLottie";

const SiteWordmark = () => (
  <span className="font-display text-2xl font-black tracking-tight text-primary laptop:text-3xl">
    United
    <span className="text-secondary">4</span>
    Games
  </span>
);

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base-100">
      <div className="container mx-auto flex min-h-screen w-11/12 max-w-5xl flex-col py-8 laptop:py-10">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="United4Games home">
            <SiteWordmark />
          </Link>
          <div className="hidden laptop:block">
            <Button label="Contact us" className="btn-secondary" />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-10 laptop:py-14">
          <div className="relative w-full max-w-sm laptop:max-w-[760px]">
            <p
              className="pointer-events-none absolute inset-x-0 top-1/2 translate-y-[-58%] select-none text-center font-display text-[7rem] font-black leading-none text-primary/5 laptop:text-[11rem]"
              aria-hidden="true"
            >
              404
            </p>

            <div className="relative px-2 laptop:px-4">
              <NotFoundLottie />
            </div>
          </div>

          <div className="mt-8 max-w-lg text-center laptop:mt-10">
            <h1 className="font-display text-2xl font-bold text-primary laptop:text-3xl">
              Level not found
            </h1>
            <p className="mt-3 text-base leading-relaxed text-gray-50 laptop:text-lg">
              Oops! The page you&apos;re looking for couldn&apos;t be found. Head
              back to base camp and keep playing.
            </p>
            <Link
              aria-label="Home page link"
              href="/"
              className="mt-6 inline-flex rounded-custom bg-secondary px-8 py-3 text-base font-bold text-white transition-all hover:bg-accent-red hover:shadow-[0_0_20px_rgba(255,71,87,0.3)] laptop:text-lg"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
