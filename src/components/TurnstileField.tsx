"use client";

import { useEffect, useId, useRef } from "react";

const SCRIPT_ID = "cf-turnstile-script";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: { sitekey: string; callback: (token: string) => void; size?: string },
  ) => string;
  reset: (id: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export default function TurnstileField({ resetKey }: { resetKey: string }) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const inputId = useId();

  useEffect(() => {
    if (!siteKey || !widgetRef.current) return;

    function renderWidget() {
      if (!siteKey || !widgetRef.current || !window.turnstile) return;
      if (widgetId.current) {
        window.turnstile.reset(widgetId.current);
        return;
      }
      widgetId.current = window.turnstile.render(widgetRef.current, {
        sitekey: siteKey,
        size: "normal",
        callback: (token) => {
          const input = document.getElementById(inputId) as HTMLInputElement | null;
          if (input) input.value = token;
        },
      });
    }

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (window.turnstile) {
      renderWidget();
      return;
    }
    if (existing) {
      existing.addEventListener("load", renderWidget, { once: true });
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", renderWidget, { once: true });
    document.head.appendChild(script);
  }, [siteKey, inputId, resetKey]);

  if (!siteKey) {
    return (
      <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg p-3">
        Message sending is temporarily unavailable.
      </p>
    );
  }

  return (
    <div className="space-y-2">
      <input id={inputId} type="hidden" name="cf-turnstile-response" required />
      <div ref={widgetRef} />
    </div>
  );
}
