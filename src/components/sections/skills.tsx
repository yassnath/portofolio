import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/lib/portfolio";

export function SkillsSection() {
  return (
    <AnimatedSection id="skills">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A practical stack for shipping business-ready applications."
          description="Skillset Andreas berfokus pada aplikasi web, mobile, REST API, database, deployment workflow, dan sistem berbasis role serta proses."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title} className="glass-card group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-secondary/60">
                <div className="gradient-rail absolute inset-x-0 top-0 h-1 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/12 text-secondary">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-50">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-glass-border bg-background/65 px-3 py-1.5 text-sm text-slate-300 transition group-hover:border-primary/35">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
