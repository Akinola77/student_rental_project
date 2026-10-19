"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollToHash() {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash) return;
  const el = document.getElementById(hash);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const timeout = window.setTimeout(scrollToHash, 80);
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;
      const url = new URL(href, window.location.href);
      if (url.pathname !== pathname || !url.hash) return;
      const el = document.getElementById(url.hash.slice(1));
      if (!el) return;
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      window.setTimeout(() => {
        el.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "start",
        });
      }, 50);
    };
    window.addEventListener("hashchange", scrollToHash);
    document.addEventListener("click", onClick);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("hashchange", scrollToHash);
      document.removeEventListener("click", onClick);
    };
  }, [pathname]);

  return null;
}
