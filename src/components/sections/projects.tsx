"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/portfolio";

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="scroll-mt-28 py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Mini case studies built around real operational problems."
          description="Setiap project disusun sebagai cerita problem, solution, tech stack, dan impact agar recruiter bisa melihat konteks engineering di balik hasil akhirnya."
        />

        <motion.div
          className="grid gap-5 xl:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="premium-border scroll-reveal group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(59,130,246,0.14)] sm:p-7"
              style={{ animationDelay: `${index * 70}ms` } as CSSProperties}
            >
              <div className="gradient-rail absolute inset-x-0 top-0 h-1 opacity-80" aria-hidden="true" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                    <span className="text-primary">0{index + 1}</span>
                    {project.subtitle}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-slate-50">{project.title}</h3>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-glass-border bg-background text-secondary transition group-hover:border-secondary/60 group-hover:bg-primary/10">
                  <ArrowUpRight size={20} aria-hidden="true" />
                </div>
              </div>

              <p className="mt-4 rounded-xl border border-glass-border bg-background/38 p-4 text-base leading-7 text-muted-copy">{project.description}</p>

              <div className="mt-5 grid gap-3">
                <CaseStudyBlock label="Problem solved" text={project.problem} />
                <CaseStudyBlock label="Solution" text={project.solution} />
                <CaseStudyBlock label="Impact" text={project.impact} />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-glass-border bg-surface/70 px-3 py-1.5 text-xs font-semibold text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-success" aria-hidden="true" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 border-t border-glass-border pt-5">
                {project.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={`${project.title}-${link.label}`}
                      href={link.href}
                      className="focus-ring inline-flex items-center gap-2 rounded-lg border border-glass-border bg-background/60 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:scale-[1.02] hover:border-secondary/60 hover:text-secondary"
                    >
                      <Icon size={16} aria-hidden="true" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudyBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl border border-glass-border bg-background/34 p-4">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">{label}</p>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}
