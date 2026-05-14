import { BadgeCheck } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
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
            {certifications.map((certification) => (
              <article key={certification.issuer} className="rounded-2xl border border-slate-800 bg-slate-950/55 p-6">
                <h3 className="text-xl font-bold text-slate-50">{certification.issuer}</h3>
                <ul className="mt-5 space-y-3">
                  {certification.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <BadgeCheck size={17} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <article id="education" className="premium-border rounded-2xl p-7 xl:sticky xl:top-28 xl:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Education</p>
            <h3 className="mt-3 text-2xl font-bold text-slate-50">{education.institution}</h3>
            <p className="mt-3 text-lg text-slate-200">{education.degree}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-xl border border-slate-800 bg-slate-950/58 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Period</p>
                <p className="mt-2 text-lg font-bold text-slate-50">{education.period}</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/58 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">IPK</p>
                <p className="mt-2 text-lg font-bold text-primary">{education.gpa}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </AnimatedSection>
  );
}
