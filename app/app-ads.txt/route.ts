import { NextResponse } from "next/server";
import {
  isAppAdsPubliclyAvailable,
  readAppAdsConfig,
} from "@/app/lib/appAds/storage";

export const runtime = "nodejs";

export const GET = async () => {
  const config = await readAppAdsConfig();

  if (!isAppAdsPubliclyAvailable(config)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return new NextResponse(config.content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=60",
    },
  });
};
