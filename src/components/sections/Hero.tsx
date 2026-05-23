import { stats } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-35 pb-20 overflow-hidden bg-[radial-gradient(ellipse_80%_40%_at_70%_30%,rgba(37,99,255,0.06),transparent_60%),linear-gradient(180deg,var(--color-bg)_0%,var(--color-bg-2)_100%)]"
    >
      {/* Orbital SVG */}
      <div className="absolute inset-0 pointer-events-none text-ink">
        <svg
          viewBox="0 0 1200 800"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <ellipse
            cx="850"
            cy="350"
            rx="240"
            ry="90"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.25"
            transform="rotate(-18 850 350)"
          />
          <ellipse
            cx="850"
            cy="350"
            rx="160"
            ry="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.35"
            transform="rotate(-18 850 350)"
          />
          <circle cx="850" cy="350" r="32" fill="#2563ff" />
          <circle cx="1050" cy="305" r="10" fill="currentColor" opacity="0.85" />
          <circle cx="650" cy="395" r="8" fill="currentColor" opacity="0.65" />
          <circle cx="960" cy="280" r="5" fill="currentColor" opacity="0.45" />
          <circle cx="740" cy="420" r="6" fill="currentColor" opacity="0.55" />
        </svg>
      </div>

      <div className="relative z-2 max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)]">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.04em] text-muted px-3.5 py-[7px] border border-rule rounded-full bg-white/55 backdrop-blur-[6px] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-[pulse_2.4s_ease-in-out_infinite]" />
          Independent engineering studio
        </div>

        <h1 className="font-display font-bold text-[clamp(56px,9vw,132px)] leading-[0.92] tracking-[-0.035em] max-w-[14ch] mb-9">
          We build{" "}
          <span className="relative inline-block">
            digital
            <span className="absolute left-0 right-0 bottom-[0.06em] h-[0.08em] bg-accent/25 rounded-sm" />
          </span>{" "}
          products.
        </h1>

        <p className="text-[clamp(17px,1.4vw,21px)] leading-relaxed text-muted max-w-[56ch] mb-11">
          A two-person engineering team building web, mobile, and cloud products
          end-to-end. From idea to launch, we handle it all.
        </p>

        <div className="flex flex-wrap gap-3.5 mb-22">
          <Button href="#contact">Start a project</Button>
          <Button variant="ghost" href="#work">
            View our work
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-b border-rule">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-7 pr-2 ${i < 3 ? "border-r border-rule" : ""} ${i < 2 ? "border-b sm:border-b-0 border-rule" : ""}`}
            >
              <div className="font-display text-[clamp(34px,4vw,52px)] font-bold tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="mt-2.5 font-mono text-[11.5px] tracking-[0.04em] uppercase text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Marquee />
    </section>
  );
}
