"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  delay?: number;
}>;

export function AnimatedSection({ id, className, delay = 0, children }: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -96px 0px" }}
      transition={{ duration: 0.64, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("scroll-reveal scroll-mt-28 py-16 sm:py-20", className)}
    >
      {children}
    </motion.section>
  );
}
