"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const KEY = "ocu-cookie-consent";

export default function CookieBanner() {
  const [consent, setConsent] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    const stored = localStorage.getItem(KEY) || null;
    const id = window.setTimeout(() => setConsent(stored), 0);
    return () => window.clearTimeout(id);
  }, []);

  if (consent !== null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-0 inset-x-0 z-[60] glass-effect border-t border-white/40 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex items-start md:items-center gap-3 flex-1">
            <div className="w-9 h-9 rounded-lg bg-ocu-blue/10 flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-ocu-blue" />
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              We use cookies to understand site traffic and improve your experience. See our{" "}
              <Link
                href="/privacy-policy"
                className="text-ocu-blue font-semibold underline underline-offset-2 hover:text-ocu-cyan"
              >
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                localStorage.setItem(KEY, "denied");
                setConsent("denied");
              }}
              className="px-5 py-2.5 rounded-lg font-semibold text-sm text-ocu-blue border border-ocu-blue/20 hover:bg-ocu-blue/5 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={() => {
                localStorage.setItem(KEY, "granted");
                setConsent("granted");
              }}
              className="px-5 py-2.5 rounded-lg font-semibold text-sm bg-ocu-cyan text-white shadow-[0_0_15px_rgba(47,111,237,0.3)] hover:shadow-[0_0_25px_rgba(47,111,237,0.5)] transition-all"
            >
              Accept
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
