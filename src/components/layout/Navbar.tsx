"use client";

import { navLinks } from "@/data/content";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-rule">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)] flex items-center justify-between h-16">
        <a href="#" className="font-display font-bold text-xl tracking-tight text-ink">
          Kawakib
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-ink py-1.5 transition-colors hover:text-accent after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-4 py-2.5 rounded-full text-[13.5px] font-semibold tracking-wide transition-all hover:-translate-y-px hover:brightness-108"
          >
            Start a project
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg border-t border-rule px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-4 py-2.5 rounded-full text-[13.5px] font-semibold"
            onClick={() => setOpen(false)}
          >
            Start a project
          </a>
        </div>
      )}
    </nav>
  );
}
