import * as React from "react";
import { cn } from "@/lib/cn";

export function Alert({
  className,
  variant = "info",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "info" | "warning" | "danger" | "success";
}) {
  const variants: Record<NonNullable<typeof variant>, string> = {
    info: "border-zinc-200 bg-white text-zinc-900",
    warning: "border-amber-200 bg-amber-50 text-amber-950",
    danger: "border-red-200 bg-red-50 text-red-950",
    success: "border-emerald-200 bg-emerald-50 text-emerald-950",
  };

  return (
    <div
      className={cn(
        "rounded-lg border px-4 py-3 text-sm leading-6",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

