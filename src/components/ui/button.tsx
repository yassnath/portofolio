import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-[linear-gradient(135deg,#3B82F6_0%,#8B5CF6_100%)] text-white shadow-[0_14px_44px_rgba(59,130,246,0.26)] hover:shadow-[0_18px_54px_rgba(34,211,238,0.22)]",
  secondary:
    "border border-glass-border bg-surface/68 text-slate-100 hover:border-secondary/70 hover:bg-surface",
  ghost:
    "text-slate-300 hover:bg-surface/80 hover:text-slate-50",
};

export function Button({ className, variant = "primary", children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-200 hover:scale-[1.02] active:scale-[0.99]",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
