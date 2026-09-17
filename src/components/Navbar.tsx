"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/data";

type SimpleItem = { label: string; path: string };
type AiItem = { label: string; description: string; path: string };

function isActivePath(pathname: string, path: string) {
  if (path.startsWith("/#") || path.startsWith("http")) return false;
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

function NavDropdown({
  label,
  items,
  inverted,
  active,
}: {
  label: string;
  items: SimpleItem[];
  inverted: boolean;
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const idle = inverted ? "text-white" : "text-ocu-light-blue";
  const color = active ? "text-ocu-cyan" : idle;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:text-ocu-cyan min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50 focus-visible:ring-offset-2 rounded-sm ${color}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute top-full left-0 pt-2 z-50"
          >
            <div className="min-w-[280px] rounded-2xl bg-white shadow-2xl border border-gray-100 py-2 overflow-hidden">
              {items.map((item) => (
                <Link
                  key={item.label + item.path}
                  href={item.path}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="block px-5 py-2.5 text-sm text-ocu-light-blue hover:text-ocu-blue hover:bg-ocu-bg/80 transition-colors focus-visible:outline-none focus-visible:bg-ocu-bg focus-visible:text-ocu-blue"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AiMegaMenu({
  inverted,
  active,
}: {
  inverted: boolean;
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const idle = inverted ? "text-white" : "text-ocu-light-blue";
  const color = active ? "text-ocu-cyan" : idle;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-1">
        <Link
          href="/services/ai-automation"
          className={`text-sm font-medium transition-all duration-300 hover:text-ocu-cyan min-h-[44px] inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50 focus-visible:ring-offset-2 rounded-sm ${color}`}
        >
          AI &amp; Automation
        </Link>
        <button
          type="button"
          className={`inline-flex items-center min-h-[44px] min-w-[32px] justify-center transition-all duration-300 hover:text-ocu-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50 focus-visible:ring-offset-2 rounded-sm ${color}`}
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={menuId}
          aria-label="Open AI and Automation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
          >
            <div className="w-[min(720px,calc(100vw-2rem))] rounded-2xl bg-white shadow-2xl border border-gray-100 p-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {nav.ai.map((group) => (
                  <div key={group.group}>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-ocu-cyan mb-2 px-2">
                      {group.group}
                    </p>
                    <ul>
                      {group.items.map((item: AiItem) => (
                        <li key={item.label}>
                          <Link
                            href={item.path}
                            role="menuitem"
                            onClick={() => setOpen(false)}
                            className="block rounded-xl px-2 py-2 hover:bg-ocu-bg/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40"
                          >
                            <span className="block text-sm font-semibold text-ocu-blue">
                              {item.label}
                            </span>
                            <span className="block text-xs text-gray-500 leading-relaxed mt-0.5">
                              {item.description}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  href="/services/ai-automation"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center text-sm font-semibold text-ocu-blue hover:text-ocu-cyan underline decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm"
                >
                  Explore AI &amp; Automation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 text-base font-medium text-ocu-blue min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open && (
        <div id={panelId} className="pb-2 pl-3 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const isHome = pathname === "/";
  const isServicePage = pathname.startsWith("/services/");
  const inverted = (isHome || isServicePage) && !scrolled && !mobile;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  useEffect(() => {
    if (!mobile) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobile(false);
        menuBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobile]);

  const servicesActive = nav.services.some((i) => isActivePath(pathname, i.path));
  const workActive = nav.work.some((i) => isActivePath(pathname, i.path));
  const aboutActive = nav.about.some((i) => isActivePath(pathname, i.path));
  const insightsActive = pathname.startsWith("/blogs");
  const linkBase =
    "flex items-center text-sm font-medium transition-all duration-300 hover:text-ocu-cyan min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50 rounded-sm";
  const idle = inverted ? "text-white" : "text-ocu-light-blue";

  const closeMobile = () => setMobile(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobile ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-300 ${
          scrolled || mobile
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-ocu-blue/5 rounded-2xl border border-white/60"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center space-x-3 group py-2 shrink-0">
            <img
              src="/photos/cloudhightlogo.png"
              alt="CloudHight Consulting Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 bg-white rounded-md p-0.5"
            />
            <span
              className={`text-lg xl:text-xl font-bold tracking-tight transition-colors duration-300 ${
                inverted ? "text-white" : "text-ocu-blue"
              }`}
            >
              {site.name}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <Link
              href="/"
              className={`${linkBase} ${pathname === "/" ? "text-ocu-cyan" : idle}`}
            >
              Home
            </Link>
            <NavDropdown
              label="Services"
              items={nav.services}
              inverted={inverted}
              active={servicesActive}
            />
            <AiMegaMenu
              inverted={inverted}
              active={pathname.startsWith("/services/ai-automation")}
            />
            <Link
              href="/overview#industries"
              className={`${linkBase} ${idle}`}
            >
              Industries
            </Link>
            <NavDropdown
              label="Our Work"
              items={nav.work}
              inverted={inverted}
              active={workActive}
            />
            <NavDropdown
              label="About"
              items={nav.about}
              inverted={inverted}
              active={aboutActive}
            />
            <Link
              href="/blogs"
              className={`${linkBase} ${insightsActive ? "text-ocu-cyan" : idle}`}
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-ocu-blue text-white rounded-full text-sm font-semibold shadow-lg shadow-ocu-blue/20 hover:shadow-ocu-blue/40 hover:-translate-y-0.5 transition-all duration-300 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              Contact
            </Link>
          </div>

          <button
            ref={menuBtnRef}
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50"
            onClick={() => setMobile((v) => !v)}
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
          >
            {mobile ? (
              <X className={`w-6 h-6 ${inverted ? "text-white" : "text-ocu-blue"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${inverted ? "text-white" : "text-ocu-blue"}`} />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobile && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="p-4 pb-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
                <Link
                  href="/"
                  onClick={closeMobile}
                  className="block py-3 text-base font-medium text-ocu-blue hover:text-ocu-cyan min-h-[44px]"
                >
                  Home
                </Link>
                <MobileAccordion label="Services">
                  {nav.services.map((i) => (
                    <Link
                      key={i.path}
                      href={i.path}
                      onClick={closeMobile}
                      className="block py-2.5 text-sm text-ocu-light-blue hover:text-ocu-cyan min-h-[44px]"
                    >
                      {i.label}
                    </Link>
                  ))}
                </MobileAccordion>
                <MobileAccordion label="AI & Automation">
                  {nav.ai.flatMap((group) =>
                    group.items.map((i) => (
                      <Link
                        key={i.label}
                        href={i.path}
                        onClick={closeMobile}
                        className="block py-2.5 text-sm text-ocu-light-blue hover:text-ocu-cyan min-h-[44px]"
                      >
                        {i.label}
                      </Link>
                    )),
                  )}
                  <Link
                    href="/services/ai-automation"
                    onClick={closeMobile}
                    className="block py-2.5 text-sm font-semibold text-ocu-blue hover:text-ocu-cyan min-h-[44px]"
                  >
                    Explore AI &amp; Automation
                  </Link>
                </MobileAccordion>
                <Link
                  href="/overview#industries"
                  onClick={closeMobile}
                  className="block py-3 text-base font-medium text-ocu-blue hover:text-ocu-cyan min-h-[44px]"
                >
                  Industries
                </Link>
                <MobileAccordion label="Our Work">
                  {nav.work.map((i) => (
                    <Link
                      key={i.path}
                      href={i.path}
                      onClick={closeMobile}
                      className="block py-2.5 text-sm text-ocu-light-blue hover:text-ocu-cyan min-h-[44px]"
                    >
                      {i.label}
                    </Link>
                  ))}
                </MobileAccordion>
                <MobileAccordion label="About">
                  {nav.about.map((i) => (
                    <Link
                      key={i.path}
                      href={i.path}
                      onClick={closeMobile}
                      className="block py-2.5 text-sm text-ocu-light-blue hover:text-ocu-cyan min-h-[44px]"
                    >
                      {i.label}
                    </Link>
                  ))}
                </MobileAccordion>
                <Link
                  href="/blogs"
                  onClick={closeMobile}
                  className="block py-3 text-base font-medium text-ocu-blue hover:text-ocu-cyan min-h-[44px]"
                >
                  Insights
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="flex items-center justify-center w-full px-6 py-3.5 bg-ocu-blue text-white rounded-full text-sm font-bold shadow-lg mt-4 min-h-[44px]"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
