"use client";

import { projects, projectFilters } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function Work() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="bg-bg-tinted py-[clamp(80px,12vw,160px)]">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)]">
        <SectionHeader
          kicker="Work"
          title="Selected projects."
          subtitle="A curated selection of projects we have delivered across industries and platforms."
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-14 items-center">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4.5 py-2.5 rounded-full text-[13.5px] font-medium border transition-all ${
                active === f
                  ? "bg-ink text-bg border-ink"
                  : "border-rule text-ink hover:border-ink"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto font-mono text-xs text-muted tracking-[0.04em]">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="cursor-pointer transition-transform duration-300 hover:-translate-y-1 group"
            >
              <div
                className="relative aspect-[4/3] rounded overflow-hidden mb-4.5"
                style={{
                  background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div
                  className="absolute w-28 h-28 rounded-full -bottom-8 -right-8 opacity-30 blur-xl"
                  style={{ background: project.color }}
                />
                <span className="absolute top-4 left-4 font-mono text-[11px] tracking-[0.08em] uppercase text-white/85 px-2.5 py-1 bg-white/10 border border-white/15 rounded-full backdrop-blur-[6px]">
                  {project.category}
                </span>
                <span className="absolute bottom-4 left-4 font-display text-[38px] font-bold text-white/92 tracking-tight leading-none">
                  {project.year}
                </span>
              </div>
              <div className="px-1">
                <h3 className="font-display text-[18.5px] font-semibold tracking-tight leading-snug mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">
                    {project.category} &middot; {project.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                    View
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
