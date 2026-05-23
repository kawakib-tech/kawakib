import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  kicker,
  title,
  subtitle,
  light,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", className)}>
      {kicker && (
        <span
          className={cn(
            "inline-block font-mono text-xs tracking-[0.08em] uppercase mb-6",
            light ? "text-white/50" : "text-muted"
          )}
        >
          {kicker}
        </span>
      )}
      <h2
        className={cn(
          "font-display font-bold text-[clamp(40px,5.4vw,84px)] leading-[0.98] tracking-tight max-w-[18ch]",
          light ? "text-bg" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-6 text-[clamp(16px,1.2vw,19px)] leading-relaxed max-w-[60ch]",
            light ? "text-white/70" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
