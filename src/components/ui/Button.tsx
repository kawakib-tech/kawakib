import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  href?: string;
}

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200";
  const variants = {
    primary:
      "bg-accent text-white px-6 py-4 text-[15px] shadow-[0_6px_18px_rgba(37,99,255,0.18)] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(37,99,255,0.28)] hover:brightness-106",
    ghost:
      "border border-ink px-6 py-4 text-[15px] text-ink hover:bg-ink hover:text-bg",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        <ArrowRight className="w-4 h-4" />
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
