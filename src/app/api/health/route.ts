import "server-only";
import { NextResponse } from "next/server";
import { SES_REGION } from "@/lib/ses";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    ok: true,
    runtime: "nodejs",
    region: process.env.AWS_REGION || SES_REGION,
    node: process.version,
    time: new Date().toISOString(),
  });
}
