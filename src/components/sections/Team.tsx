import { teamMembers } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Team() {
  return (
    <section id="team" className="py-[clamp(80px,12vw,160px)]">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)]">
        <SectionHeader
          kicker="Team"
          title="Two people, one mission."
          subtitle="We are a small team that moves fast and cares deeply about craft. Every project gets our full attention."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className="bg-bg-2 border border-rule rounded overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,24,52,0.10)]"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-ink to-ink-2 overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-25deg, transparent 0, transparent 14px, rgba(255,255,255,0.04) 14px, rgba(255,255,255,0.04) 15px)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white/55 text-sm font-mono">
                  Photo
                </div>
                <div className="absolute top-[18px] right-[22px] font-display text-6xl font-bold leading-none tracking-tight text-accent/90">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-8 pb-9">
                <div className="font-mono text-[11.5px] tracking-[0.08em] uppercase mb-3">
                  {member.role}
                </div>
                <h3 className="font-display text-[clamp(28px,3vw,38px)] font-bold tracking-tight mb-4">
                  {member.name}
                </h3>
                <p className="text-muted leading-relaxed text-[15.5px] mb-7">
                  {member.bio}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-5 border-t border-rule">
                  <div>
                    <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-2 mb-1.5">
                      Location
                    </div>
                    <div className="text-[13.5px] font-medium">{member.location}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-2 mb-1.5">
                      Focus
                    </div>
                    <div className="text-[13.5px] font-medium">{member.focus}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
