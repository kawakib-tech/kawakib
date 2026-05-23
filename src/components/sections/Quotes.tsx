import { quotes } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Quotes() {
  return (
    <section className="py-[clamp(80px,12vw,160px)]">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)]">
        <SectionHeader
          kicker="Testimonials"
          title="What clients say."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-15">
          {quotes.map((quote, i) => (
            <div
              key={i}
              className="bg-bg border border-rule rounded p-9 relative"
            >
              <span className="font-display text-[80px] leading-[0.5] absolute top-9 left-7 opacity-25">
                &ldquo;
              </span>
              <p className="text-base leading-relaxed mt-7 mb-5.5 relative pt-3.5">
                {quote.text}
              </p>
              <span className="font-mono text-xs tracking-[0.04em] text-muted">
                {quote.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
