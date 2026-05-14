"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-300",
        scrolled
          ? "border-glass-border/90 bg-background/82 shadow-[0_18px_48px_rgba(2,6,23,0.24)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <a className="focus-ring rounded-lg text-base font-bold tracking-wide text-slate-50" href="#home" aria-label="Go to home">
          {profile.shortName}
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-surface/80 hover:text-slate-50"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Button href="#contact">Contact Me</Button>
        </div>

        <button
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-glass-border bg-surface/70 text-slate-100 xl:hidden"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <div
        className={cn(
          "section-shell overflow-hidden transition-[max-height,opacity] duration-300 xl:hidden",
          open ? "max-h-[560px] pb-5 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="rounded-xl border border-glass-border bg-background/95 p-2 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-surface hover:text-slate-50"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-glass-border pt-2">
            <Button href={profile.cv} variant="secondary" className="px-3" download>
              IT CV
            </Button>
            <Button href="#contact" className="px-3" onClick={() => setOpen(false)}>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
