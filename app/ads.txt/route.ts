import { NextResponse } from "next/server";
import { readAdsFileConfig } from "@/app/lib/adsFiles/storage";

export const runtime = "nodejs";

export const GET = async () => {
  const config = await readAdsFileConfig("ads");

  return new NextResponse(config.content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=60",
    },
  });
};
