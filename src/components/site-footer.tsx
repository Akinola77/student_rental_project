import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} StudentStay (MVP)</div>
        <div className="flex items-center gap-4">
          <Link href="/scam-safety" className="hover:text-zinc-900">
            Scam safety
          </Link>
        </div>
      </div>
    </footer>
  );
}

