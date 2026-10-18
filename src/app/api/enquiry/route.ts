import "server-only";
import { handleContactPost } from "@/lib/contact/handler";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** @deprecated Prefer POST /api/contact. Kept as an alias for existing forms. */
export async function POST(request: Request) {
  return handleContactPost(request);
}
