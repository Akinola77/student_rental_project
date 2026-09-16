"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/data";

function NavDropdown({
  label,
  items,
  inverted,
  active,
}: {
  label: string;
  items: { label: string; path: string }[];
  inverted: boolean;
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  const idle = inverted ? "text-white" : "text-ocu-light-blue";
  const color = active ? "text-ocu-cyan" : idle;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center space-x-1 text-sm font-medium transition-all duration-300 hover:text-ocu-cyan relative group ${color}`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 pt-3"
          >
            <div className="min-w-[260px] rounded-2xl bg-white shadow-2xl border border-gray-100 py-2 overflow-hidden">
              {items.map((item) => {
                const external = item.path.startsWith("http");
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="block px-5 py-2.5 text-sm text-ocu-light-blue hover:text-ocu-blue hover:bg-ocu-bg/80 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const isHome = pathname === "/";
  const inverted = isHome && !scrolled && !mobile;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const aboutActive = nav.about.some((i) => pathname.startsWith(i.path));
  const academyActive =
    pathname.startsWith("/motivalogic-academy") ||
    pathname.startsWith("/academic-alliance/aws");
  const experiencesActive = nav.experiences.some((i) =>
    pathname.startsWith(i.path),
  );
  const partnerActive = pathname === "/academic-alliance";
  const linkBase =
    "flex items-center space-x-1 text-sm font-medium transition-all duration-300 hover:text-ocu-cyan relative group";
  const idle = inverted ? "text-white" : "text-ocu-light-blue";

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
        className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${
          scrolled || mobile
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-ocu-blue/5 rounded-2xl border border-white/60"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group py-2">
            <img
              src="/photos/cloudhightlogo.png"
              alt="CloudHight Consulting Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 bg-white rounded-md p-0.5"
            />
            <span
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                inverted ? "text-white" : "text-ocu-blue"
              }`}
            >
              {site.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${linkBase} ${pathname === "/" ? "text-ocu-cyan" : idle}`}
            >
              <span>Home</span>
            </Link>
            <NavDropdown
              label="About"
              items={nav.about}
              inverted={inverted}
              active={aboutActive}
            />
            <NavDropdown
              label="MotivaLogic Academy"
              items={nav.academy}
              inverted={inverted}
              active={academyActive}
            />
            <NavDropdown
              label="Experiences"
              items={nav.experiences}
              inverted={inverted}
              active={experiencesActive}
            />
            <Link
              href="/academic-alliance"
              className={`${linkBase} ${partnerActive ? "text-ocu-cyan" : idle}`}
            >
              <span>Partner Program</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-ocu-blue text-white rounded-full text-sm font-semibold shadow-lg shadow-ocu-blue/20 hover:shadow-ocu-blue/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Contact</span>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobile((v) => !v)}
            aria-label="Toggle menu"
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
              className="md:hidden overflow-hidden"
            >
              <div className="p-4 space-y-2">
                <Link
                  href="/"
                  onClick={() => setMobile(false)}
                  className="block py-3 text-base font-medium text-ocu-blue hover:text-ocu-cyan"
                >
                  Home
                </Link>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide pt-2">
                  About
                </p>
                {nav.about.map((i) => (
                  <Link
                    key={i.path}
                    href={i.path}
                    onClick={() => setMobile(false)}
                    className="block py-2 pl-4 text-sm text-ocu-light-blue hover:text-ocu-cyan"
                  >
                    {i.label}
                  </Link>
                ))}
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide pt-2">
                  MotivaLogic Academy
                </p>
                {nav.academy.map((i) => (
                  <Link
                    key={i.path}
                    href={i.path}
                    onClick={() => setMobile(false)}
                    className="block py-2 pl-4 text-sm text-ocu-light-blue hover:text-ocu-cyan"
                  >
                    {i.label}
                  </Link>
                ))}
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide pt-2">
                  Experiences
                </p>
                {nav.experiences.map((i) => (
                  <Link
                    key={i.path}
                    href={i.path}
                    onClick={() => setMobile(false)}
                    className="block py-2 pl-4 text-sm text-ocu-light-blue hover:text-ocu-cyan"
                  >
                    {i.label}
                  </Link>
                ))}
                <Link
                  href="/academic-alliance"
                  onClick={() => setMobile(false)}
                  className="block py-3 text-base font-medium text-ocu-blue hover:text-ocu-cyan"
                >
                  Partner Program
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobile(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-ocu-blue text-white rounded-full text-sm font-bold shadow-lg mt-4"
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
