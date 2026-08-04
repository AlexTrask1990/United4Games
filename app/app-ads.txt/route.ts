import { NextResponse } from "next/server";
import { readAdsFileConfig } from "@/app/lib/adsFiles/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = async () => {
  const config = await readAdsFileConfig("app-ads");

  return new NextResponse(config.content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      Pragma: "no-cache",
    },
  });
};
