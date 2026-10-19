import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const unpublishedMetadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false, nocache: true },
};

export function unpublished(): never {
  notFound();
}
