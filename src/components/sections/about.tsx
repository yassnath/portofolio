import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { quickFacts } from "@/lib/portfolio";

export function AboutSection() {
  return (
    <AnimatedSection id="about">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <SectionHeading
          eyebrow="About"
          title="A systems-minded developer who likes turning messy workflows into usable products."
          description="Saya lulusan Sistem Informasi dengan IPK 3.86 dan pengalaman hands-on dalam full-stack development, mobile development, digital operations, serta workflow berbasis sistem."
        />

        <div className="space-y-6">
          <div className="premium-border overflow-hidden rounded-2xl p-6 sm:p-8">
            <div className="gradient-rail mb-6 h-1 w-24 rounded-full" aria-hidden="true" />
            <p className="text-lg leading-8 text-slate-200">
              Saya membangun aplikasi web dan mobile yang menyelesaikan masalah operasional nyata: POS realtime, dashboard monitoring, ERP multi-tenant, REST API, authentication/RBAC, dan workflow automation. Fokus saya bukan hanya membuat UI terlihat bagus, tetapi memastikan alur data, akses pengguna, dan proses bisnisnya rapi.
            </p>
            <p className="mt-5 text-base leading-7 text-muted-copy">
              Pengalaman di content, website administration, cybersecurity, multimedia, teaching assistant, dan live production membuat saya terbiasa melihat produk dari sisi teknis sekaligus pengguna. Saya cepat belajar, detail-oriented, komunikatif, dan punya ownership tinggi sampai solusi benar-benar bisa dipakai.
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
