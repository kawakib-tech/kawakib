import { services } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Services() {
  return (
    <section
      id="services"
      className="bg-bg-dark text-bg py-[clamp(80px,12vw,160px)]"
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)]">
        <SectionHeader
          kicker="Services"
          title="What we do."
          subtitle="From concept to deployment, we cover every stage of the product development lifecycle."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/10 border-l border-white/10">
          {services.map((service) => (
            <div
              key={service.num}
              className="p-11 border-r border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.025]"
            >
              <div className="flex items-center justify-between mb-7">
                <span className="font-mono text-xs tracking-[0.08em] text-white/50">
                  {service.num}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight mb-3.5">
                {service.title}
              </h3>
              <p className="text-white/65 leading-relaxed text-[14.5px]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
