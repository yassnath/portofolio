import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { quickFacts } from "@/lib/portfolio";

export function AboutSection() {
  return (
    <AnimatedSection id="about">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <SectionHeading
          eyebrow="About"
          title="Information Systems graduate with a builder mindset."
          description="Saya memiliki latar belakang Sistem Informasi dengan IPK 3.86 dan pengalaman membangun aplikasi web, mobile, dashboard operasional, POS, ERP, serta sistem workflow."
        />

        <div className="space-y-6">
          <div className="premium-border overflow-hidden rounded-2xl p-6 sm:p-8">
            <div className="gradient-rail mb-6 h-1 w-24 rounded-full" aria-hidden="true" />
            <p className="text-lg leading-8 text-slate-200">
              Saya terbiasa bekerja mandiri maupun kolaboratif, cepat belajar, detail-oriented, dan memiliki ownership tinggi dalam menyelesaikan solusi digital. Fokus saya adalah membangun sistem yang bisa dipakai di dunia nyata: jelas alurnya, aman akses datanya, dan mudah dikembangkan.
            </p>
            <p className="mt-5 text-base leading-7 text-muted-copy">
              Di luar full-stack dan mobile development, saya juga memiliki pengalaman content, website administration, cybersecurity, multimedia, dan live production. Kombinasi ini membentuk cara kerja yang kuat di sisi teknis sekaligus peka terhadap kebutuhan pengguna dan operasional.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="glass-card rounded-xl p-4 transition hover:-translate-y-0.5 hover:border-secondary/60">
                  <div className="mb-3 flex items-center gap-2 text-secondary">
                    <Icon size={18} aria-hidden="true" />
                    <p className="text-sm font-semibold text-slate-100">{fact.label}</p>
                  </div>
                  <p className="text-sm leading-6 text-muted-copy">{fact.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
