"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { contact, nav } from "@/lib/content";

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(21,19,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(198,166,100,0.25)"
          : "1px solid transparent",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#home" className="flex items-baseline gap-2.5 group">
          <span className="font-display text-3xl sm:text-4xl font-semibold tracking-[0.06em] text-ivory group-hover:text-gold-bright transition-colors">
            AEL
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.4em] text-gold-bright/90 pt-1">
            Chauffeurs
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] uppercase tracking-[0.18em] text-ivory-dim hover:text-gold-bright transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href={contact.phoneHref}
            className="text-sm text-ivory-dim hover:text-gold-bright transition-colors tracking-wide"
          >
            {contact.phone}
          </a>
          <a
            href="#contact"
            className="cursor-pointer rounded-full border border-gold px-6 py-2.5 text-[12px] uppercase tracking-[0.2em] text-gold-bright transition-colors hover:bg-gold hover:text-onyx"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden cursor-pointer flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-px w-6 bg-ivory transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-ivory transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-px w-6 bg-ivory transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden bg-onyx/98 backdrop-blur-md border-t border-gold/20"
        >
          <div className="flex flex-col gap-1 px-6 py-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.2em] text-ivory-dim hover:text-gold-bright transition-colors border-b border-onyx-line last:border-none"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 cursor-pointer rounded-full bg-gold px-6 py-3 text-center text-[12px] uppercase tracking-[0.2em] text-onyx"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
