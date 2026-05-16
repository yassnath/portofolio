"use client";

import { BadgeCheck } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { RevealArticle } from "@/components/reveal-article";
import { SectionHeading } from "@/components/section-heading";
import { certifications, education } from "@/lib/portfolio";

export function CertificationsSection() {
  return (
    <AnimatedSection id="certifications">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certifications & Education"
          title="Formal foundation with continuous technical learning."
          description="Kombinasi pendidikan Sistem Informasi dan sertifikasi mendukung fokus Andreas pada software engineering, security awareness, AI fundamentals, dan developer workflow."
        />

        <div className="grid gap-5 xl:grid-cols-[1fr_0.78fr]">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
            {certifications.map((certification, index) => (
              <RevealArticle
                key={certification.issuer}
                delay={index * 0.05}
                className="glass-card group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-0.5 hover:border-secondary/60"
              >
                <div className="gradient-rail absolute inset-x-0 top-0 h-1 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                <h3 className="text-xl font-bold text-slate-50">{certification.issuer}</h3>
                <ul className="mt-5 space-y-3">
                  {certification.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <BadgeCheck size={17} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealArticle>
            ))}
          </div>

          <RevealArticle
            id="education"
            delay={0.08}
            className="premium-border rounded-2xl p-7 xl:sticky xl:top-28 xl:self-start"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Education</p>
            <h3 className="mt-3 text-2xl font-bold text-slate-50">{education.institution}</h3>
            <p className="mt-3 text-lg text-slate-200">{education.degree}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-xl border border-glass-border bg-background/58 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Period</p>
                <p className="mt-2 text-lg font-bold text-slate-50">{education.period}</p>
              </div>
              <div className="rounded-xl border border-glass-border bg-background/58 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">IPK</p>
                <p className="mt-2 text-lg font-bold text-primary">{education.gpa}</p>
              </div>
            </div>
          </RevealArticle>
        </div>
      </div>
    </AnimatedSection>
  );
}
