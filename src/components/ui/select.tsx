import * as React from "react";
import { cn } from "@/lib/cn";

type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, ...props }: Props) {
  return (
    <select
      className={cn(
        "h-10 w-full rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10",
        className,
      )}
      {...props}
    />
  );
}

