import Link from "next/link";
import { getProfile } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { logoutAction } from "@/app/actions/auth";

export async function SiteHeader() {
  const profile = await getProfile();

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold tracking-tight text-zinc-900">
            StudentStay
          </Link>
          <nav className="hidden items-center gap-3 text-sm text-zinc-600 md:flex">
            <Link href="/listings" className="hover:text-zinc-900">
              Browse
            </Link>
            <Link href="/scam-safety" className="hover:text-zinc-900">
              Scam safety
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {profile ? (
            <>
              <Badge className="hidden md:inline-flex">
                {profile.role.toUpperCase()}
              </Badge>
              {profile.role === "admin" ? (
                <Link href="/admin" className="text-sm text-zinc-600 hover:text-zinc-900">
                  Admin
                </Link>
              ) : profile.role === "landlord" ? (
                <Link
                  href="/dashboard/landlord"
                  className="text-sm text-zinc-600 hover:text-zinc-900"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/dashboard/student"
                  className="text-sm text-zinc-600 hover:text-zinc-900"
                >
                  Dashboard
                </Link>
              )}
              <form action={logoutAction}>
                <Button variant="secondary" size="sm" type="submit">
                  Log out
                </Button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm text-zinc-600 hover:text-zinc-900">
                Log in
              </Link>
              <Link href="/signup">
                <Button size="sm">Sign up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

