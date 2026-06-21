import { NextRequest, NextResponse } from "next/server";
import {
  isAppAdsPubliclyAvailable,
  readAppAdsConfig,
  writeAppAdsConfig,
} from "@/app/lib/appAds/storage";

const getAdminSecret = (): string | undefined => {
  return process.env.APP_ADS_ADMIN_SECRET?.trim();
};

const isAuthorized = (request: NextRequest): boolean => {
  const adminSecret = getAdminSecret();

  if (!adminSecret) {
    return false;
  }

  const authorizationHeader = request.headers.get("authorization");
  const bearerToken = authorizationHeader?.startsWith("Bearer ")
    ? authorizationHeader.slice("Bearer ".length)
    : undefined;

  return bearerToken === adminSecret;
};

export const runtime = "nodejs";

export const GET = async (request: NextRequest) => {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const config = await readAppAdsConfig();

  return NextResponse.json(config);
};

export const PUT = async (request: NextRequest) => {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    isVisible?: boolean;
    content?: string;
  };

  const config = await writeAppAdsConfig({
    isVisible: Boolean(body.isVisible),
    content: typeof body.content === "string" ? body.content : "",
  });

  return NextResponse.json(config);
};
