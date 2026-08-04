import { NextRequest, NextResponse } from "next/server";
import {
  readAdsFileConfig,
  writeAdsFileConfig,
} from "@/app/lib/adsFiles/storage";
import { isAdsFileId } from "@/app/lib/adsFiles/types";

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

const resolveFileId = (value: unknown) => {
  if (!isAdsFileId(value)) {
    return null;
  }

  return value;
};

export const runtime = "nodejs";

export const GET = async (request: NextRequest) => {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const fileId = resolveFileId(request.nextUrl.searchParams.get("file"));

  if (!fileId) {
    return NextResponse.json(
      { error: 'Query param "file" must be "ads" or "app-ads".' },
      { status: 400 },
    );
  }

  try {
    const config = await readAdsFileConfig(fileId);

    return NextResponse.json({
      file: fileId,
      ...config,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to load configuration.",
      },
      { status: 500 },
    );
  }
};

export const PUT = async (request: NextRequest) => {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    file?: unknown;
    content?: string;
  };

  const fileId = resolveFileId(body.file);

  if (!fileId) {
    return NextResponse.json(
      { error: 'Body field "file" must be "ads" or "app-ads".' },
      { status: 400 },
    );
  }

  try {
    const config = await writeAdsFileConfig(fileId, {
      content: typeof body.content === "string" ? body.content : "",
    });

    return NextResponse.json({
      file: fileId,
      ...config,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to save configuration.",
      },
      { status: 500 },
    );
  }
};
