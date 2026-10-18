import "server-only";
import { handleContactPost } from "@/lib/contact/handler";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  return handleContactPost(request);
}
