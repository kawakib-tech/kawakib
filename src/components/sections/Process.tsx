import { processSteps } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  return (
    <section id="process" className="py-[clamp(80px,12vw,160px)]">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)]">
        <SectionHeader
          kicker="Process"
          title="How we work."
          subtitle="A streamlined process that keeps projects on track and clients informed at every stage."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-15">
          {processSteps.map((step) => (
            <div key={step.num} className="pr-7 relative">
              <div className="font-display text-[56px] font-bold tracking-tight leading-none mb-4.5">
                {step.num}
              </div>
              <div className="w-9 h-0.5 bg-ink mb-5.5" />
              <h3 className="font-display text-[22px] font-semibold tracking-tight mb-3.5">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed text-[14.5px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
