"use client";

import Image from "next/image";
import { projects, projectFilters } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Globe, LayoutDashboard, X, ArrowUpRight, Rocket } from "lucide-react";
import { useState, useCallback } from "react";

type DialogState = { projectTitle: string; type: "links" | "coming-soon" } | null;

type LinkIcon = "apple" | "play" | "globe" | "dashboard";
type ProjectLink = { label: string; url: string | null; icon: LinkIcon; pending?: boolean };

type PendingKey = "appStore" | "playStore" | "website" | "adminDashboard";

const pendingMeta: Record<PendingKey, { label: string; icon: LinkIcon }> = {
  appStore: { label: "App Store", icon: "apple" },
  playStore: { label: "Play Store", icon: "play" },
  website: { label: "Website", icon: "globe" },
  adminDashboard: { label: "Admin Dashboard", icon: "dashboard" },
};

export function Work() {
  const [active, setActive] = useState("All");
  const [dialog, setDialog] = useState<DialogState>(null);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const getLinks = useCallback(
    (title: string) => {
      const p = projects.find((proj) => proj.title === title);
      if (!p) return [];
      const links: ProjectLink[] = [];
      if ("appStore" in p && p.appStore) links.push({ label: "App Store", url: p.appStore as string, icon: "apple" });
      if ("playStore" in p && p.playStore) links.push({ label: "Play Store", url: p.playStore as string, icon: "play" });
      if ("website" in p && p.website) links.push({ label: "Website", url: p.website as string, icon: "globe" });
      if ("adminDashboard" in p && p.adminDashboard) links.push({ label: "Admin Dashboard", url: p.adminDashboard as string, icon: "dashboard" });
      if ("pending" in p && p.pending) {
        for (const key of p.pending as PendingKey[]) {
          links.push({ ...pendingMeta[key], url: null, pending: true });
        }
      }
      return links;
    },
    []
  );

  const handleCardClick = useCallback(
    (title: string) => {
      const links = getLinks(title);
      const real = links.filter((l) => !l.pending);
      if (links.length === 0) {
        setDialog({ projectTitle: title, type: "coming-soon" });
      } else if (links.length === 1 && real.length === 1) {
        window.open(real[0].url as string, "_blank", "noopener,noreferrer");
      } else {
        setDialog({ projectTitle: title, type: "links" });
      }
    },
    [getLinks]
  );

  const dialogProject = dialog ? projects.find((p) => p.title === dialog.projectTitle) : null;
  const dialogLinks = dialog ? getLinks(dialog.projectTitle) : [];

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
              onClick={() => handleCardClick(project.title)}
              className="cursor-pointer transition-transform duration-300 hover:-translate-y-1 group"
            >
              <div className="relative aspect-[4/3] rounded overflow-hidden mb-4.5">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div
                    className="absolute inset-0"
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
                  </div>
                )}
              </div>
              <div className="px-1">
                <h3 className="font-display text-[18.5px] font-semibold tracking-tight leading-snug mb-2">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog */}
      {dialog && dialogProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[4px]"
          onClick={() => setDialog(null)}
        >
          <div
            className="bg-bg-2 border border-rule rounded-2xl shadow-[0_24px_60px_rgba(10,24,52,0.18)] w-[90vw] max-w-[380px] p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setDialog(null)}
              className="absolute top-4 right-4 text-muted hover:text-ink transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {dialog.type === "links" ? (
              <>
                <h3 className="font-display text-xl font-bold tracking-tight mb-1 pr-8">
                  {dialogProject.title}
                </h3>
                <p className="text-muted text-sm mb-5">Choose where to view this project</p>
                <div className="flex flex-col gap-2">
                  {dialogLinks.map((link) => {
                    const inner = (
                    <>
                      {link.icon === "apple" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.4 4.8C17.07 4.83 18.89 5.08 20.06 6.78C19.95 6.85 17.62 8.24 17.65 11.1C17.69 14.52 20.62 15.63 20.65 15.64C20.62 15.73 20.17 17.32 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                        </svg>
                      )}
                      {link.icon === "play" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                          <path d="M3.18 23.54C2.87 23.35 2.67 23.01 2.67 22.61V1.39C2.67 0.99 2.87 0.65 3.18 0.46L14.12 12L3.18 23.54ZM17.46 15.34L5.64 22.33L15.4 12.57L17.46 15.34ZM20.16 12.79L17.89 14.1L15.59 12L17.89 9.9L20.16 11.21C20.91 11.64 20.91 12.36 20.16 12.79ZM5.64 1.67L17.46 8.66L15.4 11.43L5.64 1.67Z"/>
                        </svg>
                      )}
                      {link.icon === "globe" && <Globe className="w-5 h-5 shrink-0" />}
                      {link.icon === "dashboard" && <LayoutDashboard className="w-5 h-5 shrink-0" />}
                      <span className="font-medium text-[14.5px]">{link.label}</span>
                      {link.pending ? (
                        <span className="ml-auto inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 rounded-full px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          In Development
                        </span>
                      ) : (
                        <ArrowUpRight className="w-4 h-4 ml-auto text-muted group-hover/link:text-ink transition-colors" />
                      )}
                    </>
                    );

                    return link.pending ? (
                      <div
                        key={link.label}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl border border-rule opacity-60 cursor-default"
                      >
                        {inner}
                      </div>
                    ) : (
                      <a
                        key={link.label}
                        href={link.url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setDialog(null)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl border border-rule hover:border-ink hover:bg-bg-tinted transition-all group/link"
                      >
                        {inner}
                      </a>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center text-center py-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Rocket className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight mb-2">
                  Coming Soon
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  This app is currently in development.<br />Stay tuned for the launch!
                </p>
                <span className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 rounded-full px-3 py-1 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  In Development
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
