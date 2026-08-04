import { NextRequest, NextResponse } from "next/server";

const getAdminSecret = (): string | undefined => {
  return process.env.APP_ADS_ADMIN_SECRET?.trim();
};

export const runtime = "nodejs";

export const POST = async (request: NextRequest) => {
  const adminSecret = getAdminSecret();

  if (!adminSecret) {
    return NextResponse.json(
      { error: "Admin secret is not configured on the server." },
      { status: 503 },
    );
  }

  const body = (await request.json()) as { password?: unknown };
  const password =
    typeof body.password === "string" ? body.password.trim() : "";

  if (!password || password !== adminSecret) {
    return NextResponse.json({ error: "Invalid password." }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
};
