import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  delay?: number;
}>;

export function AnimatedSection({ id, className, delay = 0, children }: AnimatedSectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-reveal scroll-mt-28 py-16 sm:py-20", className)}
      style={{ animationDelay: `${delay * 1000}ms` }}
    >
      {children}
    </section>
  );
}
