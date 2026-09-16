"use client";

import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const SUGGESTED = [
  "What AWS services does CloudHight specialize in?",
  "How can CloudHight help with cloud migration?",
  "What case studies does CloudHight have?",
  "How do I get started with a project with CloudHight?",
];

type Msg = { id: string; role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setInput("");
    setMessages((m) => [
      ...m,
      { id: crypto.randomUUID(), role: "user", content: trimmed },
    ]);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setMessages((m) => [
      ...m,
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Thanks for reaching out! Our team will get back to you shortly. In the meantime, feel free to explore our Overview and Services pages, or reach us directly via the Contact page.",
      },
    ]);
    setLoading(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="mb-4 w-[min(100vw-2rem,380px)] h-[480px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          >
            <div className="bg-ocu-blue text-white px-4 py-3 flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">CloudHight Assistant</p>
                <p className="text-xs text-white/70">We typically reply instantly</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-ocu-bg/40">
              {messages.length === 0 && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 mb-3">
                    Hi — how can we help with your cloud journey?
                  </p>
                  {SUGGESTED.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="block w-full text-left text-xs px-3 py-2 rounded-lg bg-white border border-gray-100 text-ocu-blue hover:border-ocu-cyan transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`text-sm px-3 py-2 rounded-xl max-w-[85%] ${
                    m.role === "user"
                      ? "ml-auto bg-ocu-cyan text-white"
                      : "bg-white border border-gray-100 text-gray-700"
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <p className="text-xs text-gray-400">Thinking…</p>
              )}
            </div>
            <form
              className="p-3 border-t border-gray-100 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ocu-cyan/30"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-ocu-blue text-white"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-ocu-cyan text-white shadow-[0_0_20px_rgba(47,111,237,0.45)] flex items-center justify-center hover:-translate-y-0.5 transition-transform"
        aria-label="Open chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
