import { Send } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { contactLinks, profile } from "@/lib/portfolio";

export function ContactSection() {
  return (
    <AnimatedSection id="contact">
      <div className="section-shell">
        <div className="premium-border grid gap-8 overflow-hidden rounded-[24px] p-6 sm:p-8 xl:grid-cols-[0.9fr_1.1fr] xl:p-10">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-secondary">Contact</div>
            <h2 className="gradient-text text-balance text-3xl font-black sm:text-4xl">Let&apos;s build reliable digital solutions together.</h2>
            <p className="mt-5 text-base leading-7 text-muted-copy">
              Open for Fullstack Developer, Mobile Developer, and Software Developer roles. Reach out for hiring opportunities, collaboration, or project discussions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button key={link.label} href={link.href} variant={link.label === "Email" ? "primary" : "secondary"}>
                    <Icon size={18} aria-hidden="true" />
                    {link.label}
                  </Button>
                );
              })}
            </div>

            <div className="glass-card mt-8 rounded-xl p-5">
              <div className="gradient-rail mb-4 h-1 w-20 rounded-full" aria-hidden="true" />
              <p className="text-sm font-semibold text-slate-100">{profile.email}</p>
              <p className="mt-2 text-sm text-muted-copy">{profile.phone} · {profile.location}</p>
            </div>
          </div>

          <form className="glass-card rounded-2xl p-5 sm:p-6" aria-label="Contact form preview">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-200">Name</span>
                <input
                  className="focus-ring h-12 w-full rounded-lg border border-glass-border bg-background/75 px-4 text-sm text-slate-50 placeholder:text-slate-500"
                  type="text"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-200">Email</span>
                <input
                  className="focus-ring h-12 w-full rounded-lg border border-glass-border bg-background/75 px-4 text-sm text-slate-50 placeholder:text-slate-500"
                  type="email"
                  placeholder="your@email.com"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold text-slate-200">Message</span>
              <textarea
                className="focus-ring min-h-36 w-full resize-y rounded-lg border border-glass-border bg-background/75 px-4 py-3 text-sm text-slate-50 placeholder:text-slate-500"
                placeholder="Tell me about the role or project"
              />
            </label>
            <button
              className="focus-ring mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,#3B82F6_0%,#8B5CF6_100%)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_14px_44px_rgba(59,130,246,0.2)] transition hover:scale-[1.01]"
              type="button"
            >
              <Send size={18} aria-hidden="true" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
