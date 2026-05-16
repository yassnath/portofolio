import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 max-w-3xl sm:mb-10", className)}>
      <div className="mb-4 flex items-center gap-3">
        <p className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-secondary sm:text-xs sm:tracking-[0.24em]">{eyebrow}</p>
        <span className="gradient-rail h-px flex-1 opacity-60" aria-hidden="true" />
      </div>
      <h2 className="text-balance text-[1.75rem] font-bold leading-tight text-slate-50 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted-copy sm:text-lg">{description}</p> : null}
    </div>
  );
}
