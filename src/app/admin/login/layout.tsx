import type { Metadata } from "next";

export const metadata: Metadata = { title: "Content Admin" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
