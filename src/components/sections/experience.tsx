"use client";

import { CalendarDays } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { RevealArticle } from "@/components/reveal-article";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/lib/portfolio";

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Experience shaped by software delivery and live operational responsibility."
          description="Timeline ini menunjukkan pengalaman teknis dan non-teknis yang membentuk cara kerja Andreas: cepat memahami proses, rapi mengeksekusi, dan bertanggung jawab pada hasil akhir."
        />

        <div className="relative">
          <div className="timeline-line absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px sm:block" aria-hidden="true" />
          <div className="space-y-5">
            {experiences.map((experience, index) => (
              <RevealArticle
                key={`${experience.company}-${experience.period}`}
                delay={index * 0.04}
                direction="left"
                className="relative sm:pl-12"
              >
                <div className="absolute left-0 top-6 hidden h-8 w-8 rounded-full border border-primary/50 bg-slate-950 p-1 sm:block">
                  <span className="block h-full rounded-full bg-gradient-to-br from-primary via-secondary to-accent" />
                </div>
                <div className="rounded-2xl border border-glass-border bg-surface/55 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-primary/50 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-50">{experience.company}</h3>
                      <p className="mt-2 text-sm font-semibold text-primary">{experience.role}</p>
                    </div>
                    <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-glass-border bg-background/70 px-3 py-1.5 text-xs font-semibold leading-5 text-slate-300">
                      <CalendarDays size={14} className="shrink-0" aria-hidden="true" />
                      <span className="min-w-0">{experience.period}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted-copy">{experience.description}</p>
                </div>
              </RevealArticle>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
