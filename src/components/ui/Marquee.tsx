import { marqueeItems } from "@/data/content";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="mt-20 border-t border-b border-white/10 bg-ink text-bg py-5 overflow-hidden relative">
      <div
        className="flex whitespace-nowrap font-mono text-sm tracking-[0.02em]"
        style={{ animation: "marquee 38s linear infinite" }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-7 px-7">
            {item}
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
