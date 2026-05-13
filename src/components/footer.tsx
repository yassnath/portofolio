import { profile } from "@/lib/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-muted-copy sm:flex-row sm:items-center sm:justify-between">
        <p className="item-center">© 2026 {profile.name}.</p>
      </div>
    </footer>
  );
}
