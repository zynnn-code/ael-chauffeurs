"use client";

import { motion } from "framer-motion";
import { partners } from "@/lib/content";

const track = [...partners, ...partners, ...partners, ...partners];

export default function PartnersMarquee() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-16 pb-6 sm:pt-20 sm:pb-8">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
        <motion.h2
          initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] sm:text-xs uppercase tracking-[0.5em] text-gold-deep"
        >
          Trusted By Names That Expect The Best
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mt-12"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ivory to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ivory to-transparent sm:w-40" />

        <div className="flex w-max animate-marquee gap-20 [--duration:26s] sm:gap-28" style={{ animationDuration: "var(--duration)" }}>
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 font-display text-3xl sm:text-4xl tracking-[0.02em] text-onyx/70 transition-colors hover:text-gold-deep"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
