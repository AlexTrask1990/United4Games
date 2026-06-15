import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/ui/Button/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-around container mx-auto laptop:px-4 h-screen bg-base-100 pt-8 pb-16">
      <div className="flex justify-center items-center laptop:justify-between">
        <Image
          src="/content/united4games_logo.svg"
          width={0}
          height={0}
          alt="United4Games logo"
          className="w-auto h-auto"
        />
        <div className="hidden laptop:flex">
          <Button label={"Contact us"} className="btn-secondary" />
        </div>
      </div>
      <div className="flex flex-col h-full justify-end items-center px-2 laptop:justify-center">
        <Image
          src="/content/error404_u4g.svg"
          width={0}
          height={0}
          alt="Not found page image"
          className="w-auto h-auto"
        />
        <div className="flex flex-col items-center text-center pt-4 laptop:pt-16">
          <p className="text-2xl laptop:text-3xl font-normal">
            Oops! The page you&apos;re looking for couldn&apos;t be found.
          </p>
          <Link
            aria-label="Home page link"
            href="/"
            className="mt-4 inline-block text-2xl laptop:text-3xl font-bold text-secondary"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
