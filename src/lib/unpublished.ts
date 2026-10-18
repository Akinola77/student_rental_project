import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const unpublishedMetadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export function unpublished(): never {
  notFound();
}
