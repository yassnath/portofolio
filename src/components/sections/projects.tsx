"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { RevealArticle } from "@/components/reveal-article";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/portfolio";

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="py-14 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work that shows how I think, build, and ship."
          description="Setiap project ditulis sebagai mini case study: konteks masalah, keputusan teknis, dan dampak yang ingin dicapai. Tujuannya agar recruiter bisa membaca kualitas problem-solving, bukan hanya daftar teknologi."
        />

        <div
          className="grid gap-4 sm:gap-5 xl:grid-cols-2"
        >
          {projects.map((project, index) => (
            <RevealArticle
              key={project.title}
              delay={index * 0.05}
              hover
              className="premium-border group relative flex h-full flex-col overflow-hidden rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(59,130,246,0.18)] sm:p-7"
            >
              <div className="gradient-rail absolute inset-x-0 top-0 h-1 opacity-80" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-secondary/14" aria-hidden="true" />
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div className="min-w-0">
                  <div className="mb-3 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                    <span className="text-primary">0{index + 1}</span>
                    {project.subtitle}
                  </div>
                  <h3 className="mt-2 text-[1.45rem] font-bold leading-tight text-slate-50 sm:text-2xl">{project.title}</h3>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-glass-border bg-background text-secondary transition group-hover:border-secondary/60 group-hover:bg-primary/10">
                  <ArrowUpRight size={20} aria-hidden="true" />
                </div>
              </div>

              <p className="mt-4 rounded-xl border border-glass-border bg-background/46 p-3.5 text-sm leading-6 text-muted-copy sm:p-4 sm:text-base sm:leading-7">{project.description}</p>

              <div className="mt-5 grid gap-3">
                <CaseStudyBlock label="Challenge" text={project.problem} />
                <CaseStudyBlock label="What I built" text={project.solution} />
                <CaseStudyBlock label="Outcome" text={project.impact} />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-slate-200">
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

              <div className="mt-auto flex flex-col gap-3 border-t border-glass-border pt-5 sm:flex-row sm:flex-wrap">
                {project.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={`${project.title}-${link.label}`}
                      href={link.href}
                      className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-glass-border bg-background/60 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:scale-[1.02] hover:border-secondary/60 hover:text-secondary"
                    >
                      <Icon size={16} aria-hidden="true" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </RevealArticle>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function CaseStudyBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl border border-glass-border bg-background/42 p-4 transition group-hover:border-primary/35">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">{label}</p>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}
