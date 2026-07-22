"use client";

import { useState, type FormEvent } from "react";
import { contactInfo, socialLinks } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, Check } from "lucide-react";

const budgetRanges = ["$5k–$15k", "$15k–$50k", "$50k–$100k", "$100k+"];

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", budget: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

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
                  {item.href ? (
                    <a href={item.href} className="flex-1 flex items-center gap-2 group">
                      <span className="flex-1 text-[17px] font-medium group-hover:text-accent transition-colors">
                        {item.value}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-accent transition-colors" />
                    </a>
                  ) : (
                    <>
                      <span className="flex-1 text-[17px] font-medium">{item.value}</span>
                      <ArrowUpRight className="w-4 h-4 text-white/50 transition-colors" />
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-9">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 border border-white/18 rounded-full text-[12.5px] text-white/85 transition-all hover:border-accent hover:text-accent cursor-pointer"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          {status === "success" ? (
            <div className="bg-white/[0.04] border border-white/10 rounded p-[clamp(24px,3vw,36px)] flex flex-col items-center justify-center text-center gap-3 backdrop-blur-[6px] min-h-[320px]">
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                <Check className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight">Message sent.</h3>
              <p className="text-white/60 text-[15px]">
                Thanks for reaching out — we will get back to you shortly.
              </p>
            </div>
          ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="bg-white/[0.04] border border-white/10 rounded p-[clamp(24px,3vw,36px)] flex flex-col gap-4.5 backdrop-blur-[6px]"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden" aria-hidden="true">
              <label>
                Don&apos;t fill this out if you&apos;re human:
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/55">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                  placeholder="you@company.com"
                  className="bg-transparent border-none border-b border-white/18 text-bg text-[15.5px] py-2 outline-none transition-colors focus:border-accent placeholder:text-white/30"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/55">
                Budget range
              </span>
              <input type="hidden" name="budget" value={formData.budget} />
              <div className="flex flex-wrap gap-1.5 mt-1">
                {budgetRanges.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, budget: b }))}
                    className={`border px-3 py-1.5 rounded-full text-[12.5px] transition-all ${
                      formData.budget === b
                        ? "bg-accent border-accent text-white"
                        : "border-white/18 bg-transparent text-white/85 hover:border-white/50 hover:text-bg"
                    }`}
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
                name="message"
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                required
                placeholder="Tell us about your project..."
                rows={4}
                className="bg-transparent border-none border-b border-white/18 text-bg text-[15.5px] py-2 outline-none transition-colors focus:border-accent resize-vertical min-h-20 placeholder:text-white/30"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-[13.5px] -mt-1">
                Something went wrong sending your message. Please try again or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 w-full inline-flex items-center justify-center gap-2.5 bg-accent text-white px-6 py-4 rounded-full text-[15px] font-semibold tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(37,99,255,0.28)] hover:brightness-106 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
