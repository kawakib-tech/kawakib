import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-dark text-bg py-12 px-[clamp(20px,4vw,56px)]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-6 pb-9 border-b border-white/10">
          <span className="font-display font-bold text-xl tracking-tight">
            Kawakib
          </span>
          <p className="text-sm text-white/65 max-w-[36ch] text-center">
            Independent engineering studio building web, mobile, and cloud
            products end-to-end.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.04em] uppercase text-white/85 px-4 py-2.5 border border-white/18 rounded-full transition-all hover:bg-white/6"
          >
            Back to top
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-4 pt-7 font-mono text-xs text-white/50">
          <span>&copy; {new Date().getFullYear()} Kawakib Studio</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
