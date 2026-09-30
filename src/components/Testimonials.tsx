"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section className="relative bg-ivory py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.35em] text-gold-deep">
            Client Testimonials
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl text-onyx leading-tight">
            Don&rsquo;t Take Our Word For It
          </h2>
        </Reveal>

        <div
          className="relative mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[260px] overflow-hidden rounded-sm border border-onyx/10 bg-white">
            <AnimatePresence mode="wait">
              <motion.figure
                key={t.source}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) {
                    setIndex((i) => (i + 1) % testimonials.length);
                  } else if (info.offset.x > 80) {
                    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
                  }
                }}
                className="flex cursor-grab flex-col items-center px-8 py-14 text-center active:cursor-grabbing sm:px-16"
              >
                <span className="font-display text-6xl text-gold-deep/60 leading-none">
                  &ldquo;
                </span>
                <blockquote className="mt-2 max-w-2xl text-lg sm:text-xl leading-relaxed text-onyx/80 font-light">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-[11px] uppercase tracking-[0.3em] text-gold-deep">
                  {t.source}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {testimonials.map((item, i) => (
              <button
                key={item.source}
                type="button"
                data-cursor="View"
                aria-label={`Show testimonial from ${item.source}`}
                onClick={() => setIndex(i)}
                className="cursor-pointer p-1.5"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-400 ${
                    i === index ? "w-8 bg-gold" : "w-1.5 bg-onyx/20"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
