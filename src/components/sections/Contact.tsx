"use client";

import { contactInfo, socialLinks } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-bg-dark text-bg py-[clamp(80px,12vw,160px)]"
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)]">
        <SectionHeader
          kicker="Contact"
          title="Let's build something."
          subtitle="Have a project in mind? We would love to hear about it. Reach out and let's start a conversation."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[clamp(40px,6vw,80px)] relative z-2">
          {/* Left: Contact info */}
          <div>
            <div className="font-mono text-[11.5px] tracking-[0.08em] uppercase text-white/55 mb-4.5">
              Direct
            </div>
            <div className="flex flex-col">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center py-4.5 border-t border-white/12 last:border-b border-white/12 transition-all hover:pl-2"
                >
                  <span className="font-mono text-xs tracking-[0.04em] w-24 text-white/55 uppercase">
                    {item.label}
                  </span>
                  <span className="flex-1 text-[17px] font-medium">
                    {item.value}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/50 transition-colors" />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-9">
              {socialLinks.map((name) => (
                <span
                  key={name}
                  className="px-3.5 py-2 border border-white/18 rounded-full text-[12.5px] text-white/85 transition-all hover:border-accent hover:text-accent cursor-pointer"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form
            className="bg-white/[0.04] border border-white/10 rounded p-[clamp(24px,3vw,36px)] flex flex-col gap-4.5 backdrop-blur-[6px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/55">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-transparent border-none border-b border-white/18 text-bg text-[15.5px] py-2 outline-none transition-colors focus:border-accent placeholder:text-white/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/55">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="bg-transparent border-none border-b border-white/18 text-bg text-[15.5px] py-2 outline-none transition-colors focus:border-accent placeholder:text-white/30"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/55">
                Budget range
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["$5k–$15k", "$15k–$50k", "$50k–$100k", "$100k+"].map((b) => (
                  <button
                    key={b}
                    type="button"
                    className="border border-white/18 bg-transparent text-white/85 px-3 py-1.5 rounded-full text-[12.5px] transition-all hover:border-white/50 hover:text-bg"
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/55">
                Message
              </span>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="bg-transparent border-none border-b border-white/18 text-bg text-[15.5px] py-2 outline-none transition-colors focus:border-accent resize-vertical min-h-20 placeholder:text-white/30"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full inline-flex items-center justify-center gap-2.5 bg-accent text-white px-6 py-4 rounded-full text-[15px] font-semibold tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(37,99,255,0.28)] hover:brightness-106"
            >
              Send message
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
