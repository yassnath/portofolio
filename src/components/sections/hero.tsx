"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Activity, ArrowDownRight, ArrowRight, CheckCircle2, Download, GitBranch, Lock, Mail, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dashboardHighlights, heroBadges, heroSignals, profile, stats, workflowSteps } from "@/lib/portfolio";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="section-shell flex scroll-mt-28 items-center pt-24 md:pt-28 xl:min-h-[760px] xl:pt-20">
      <div className="hero-frame grid w-full grid-cols-[minmax(0,1fr)] items-center gap-8 border border-glass-border/70 bg-background/35 px-5 py-8 shadow-[0_28px_120px_rgba(2,6,23,0.34)] sm:px-6 md:px-8 md:py-10 xl:grid-cols-[minmax(0,1.08fr)_minmax(400px,0.92fr)] xl:gap-14">
        <div className="min-w-0 max-w-3xl">
          <div
            className="motion-fade-up mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-left text-sm font-semibold text-sky-100 shadow-[0_0_32px_rgba(59,130,246,0.12)]"
            style={{ "--delay": "0ms" } as CSSProperties}
          >
            <span className="status-pulse h-2.5 w-2.5 rounded-full bg-success" aria-hidden="true" />
            <Sparkles size={16} aria-hidden="true" />
            <span className="min-w-0 leading-5">Available for production-focused software roles</span>
          </div>

          <h1
            style={{ "--delay": "80ms" } as CSSProperties}
            className="motion-fade-up gradient-text text-balance text-[2.32rem] font-black leading-[1.1] sm:text-5xl md:text-[3.15rem] md:leading-[1.06] xl:text-[3.65rem] xl:leading-[1.03]"
          >
            Fullstack Developer building scalable web, mobile, and operational systems.
          </h1>

          <p
            style={{ "--delay": "160ms" } as CSSProperties}
            className="motion-fade-up mt-6 max-w-2xl text-base leading-7 text-muted-copy sm:text-lg sm:leading-8"
          >
            I design and develop production-ready applications using Next.js, Laravel, Flutter, PostgreSQL, Docker, and modern workflow-driven architecture.
          </p>

          <div
            style={{ "--delay": "220ms" } as CSSProperties}
            className="motion-fade-up mt-7 hidden gap-3 sm:grid md:grid-cols-3"
          >
            {heroSignals.map((signal) => (
              <div key={signal.label} className="glass-card rounded-xl p-3.5 transition hover:border-secondary/60">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">{signal.label}</p>
                <p className="mt-2 text-sm font-semibold leading-5 text-slate-100">{signal.value}</p>
              </div>
            ))}
          </div>

          <div
            style={{ "--delay": "300ms" } as CSSProperties}
            className="motion-fade-up mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Button href="#projects">
              View Projects
              <ArrowDownRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="secondary">
              <Mail size={18} aria-hidden="true" />
              Contact Me
            </Button>
          </div>

          <div
            style={{ "--delay": "380ms" } as CSSProperties}
            className="motion-fade-up mt-6 flex flex-wrap gap-3"
          >
            {heroBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-glass-border bg-surface/70 px-3.5 py-2 text-sm font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(248,250,252,0.04)]">
                {badge}
              </span>
            ))}
          </div>

          <div
            style={{ "--delay": "460ms" } as CSSProperties}
            className="motion-fade-up mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-4 transition hover:-translate-y-0.5 hover:border-primary/60">
                <p className="text-xl font-bold text-slate-50">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-copy">{stat.label}</p>
              </div>
            ))}
          </div>

          <div
            style={{ "--delay": "540ms" } as CSSProperties}
            className="motion-fade-up mt-5 hidden items-center gap-2 rounded-2xl border border-glass-border bg-surface/45 p-3 md:flex"
            aria-label="Delivery workflow"
          >
            {workflowSteps.map((step, index) => (
              <div key={step} className="flex flex-1 items-center gap-2">
                <div className="flex min-h-10 flex-1 items-center justify-center rounded-lg bg-background/70 px-3 text-xs font-bold uppercase tracking-[0.13em] text-slate-200">
                  {step}
                </div>
                {index < workflowSteps.length - 1 ? <ArrowRight size={16} className="shrink-0 text-secondary" aria-hidden="true" /> : null}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          whileHover={reduceMotion ? undefined : { y: -4 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="motion-fade-up relative mx-auto w-full max-w-[760px] xl:max-w-[500px] xl:justify-self-end"
          style={{ "--delay": "260ms" } as CSSProperties}
        >
          <div className="premium-border overflow-hidden rounded-[24px] p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-glass-border pb-4">
              <div>
                <p className="text-sm font-semibold text-slate-50">Command Center</p>
                <p className="text-xs text-muted-copy">Portfolio signal for hiring teams</p>
              </div>
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="glass-card flex items-center gap-4 rounded-2xl p-3">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-primary/30 bg-surface">
                  <Image
                    src="/images/andreas-profile.png"
                    alt="Professional avatar placeholder for Andreas Natanael Irawan"
                    fill
                    sizes="64px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-50">Andreas Nath</p>
                  <p className="mt-1 text-xs text-muted-copy">Fullstack, mobile, and systems developer</p>
                </div>
                <div className="ml-auto hidden rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-bold text-emerald-300 sm:block">
                  Available
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "API", icon: Terminal },
                  { label: "RBAC", icon: Lock },
                  { label: "Sync", icon: Activity },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="glass-card rounded-xl p-3 text-center">
                      <Icon size={18} className="mx-auto text-secondary" aria-hidden="true" />
                      <p className="mt-2 text-xs font-bold text-slate-100">{item.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-3">
                {dashboardHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="group flex items-center gap-3 rounded-xl border border-glass-border bg-background/58 p-4 transition hover:border-secondary/60 hover:bg-surface/80"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-secondary">
                        <Icon size={20} aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-50">{item.label}</p>
                        <p className="mt-1 text-sm text-muted-copy">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-[1fr_0.9fr]">
              <div className="glass-card rounded-xl p-4">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-200">System readiness</span>
                  <span className="font-semibold text-secondary">Production-ready</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-glass-border">
                  <div className="gradient-rail h-full w-[88%] rounded-full" />
                </div>
              </div>
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <GitBranch size={17} className="text-primary" aria-hidden="true" />
                  Build path
                </div>
                <div className="mt-3 space-y-2 text-xs text-muted-copy">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-success" aria-hidden="true" />
                    Auth, RBAC, audit flow
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-success" aria-hidden="true" />
                    Dashboard + reports
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
