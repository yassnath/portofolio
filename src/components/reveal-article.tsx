"use client";

import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealArticleProps = PropsWithChildren<{
  id?: string;
  className?: string;
  delay?: number;
  direction?: "up" | "left";
  hover?: boolean;
}>;

export function RevealArticle({ id, children, className, delay = 0, direction = "up", hover = false }: RevealArticleProps) {
  const reduceMotion = useReducedMotion();
  const hiddenState = direction === "left" ? { opacity: 0, x: -22 } : { opacity: 0, y: 22, scale: 0.985 };
  const visibleState = direction === "left" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0, scale: 1 };

  return (
    <motion.article
      id={id}
      initial={reduceMotion ? false : hiddenState}
      whileInView={reduceMotion ? undefined : visibleState}
      whileHover={!reduceMotion && hover ? { y: -4 } : undefined}
      viewport={{ once: true, amount: 0.22, margin: "0px 0px -72px 0px" }}
      transition={{ duration: 0.56, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("reveal-card", direction === "left" && "reveal-left", className)}
    >
      {children}
    </motion.article>
  );
}
