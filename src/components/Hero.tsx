"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { ticker } from "@/lib/content";

const LINES = ["Own", "The Arrival"];

function KineticHeading() {
  return (
    <h1 className="font-display font-medium text-ivory leading-[0.92] text-[13vw] sm:text-7xl md:text-8xl lg:text-[9rem]">
      {LINES.map((line, li) => (
        <span key={line} className="block overflow-hidden py-1">
          <span className="block">
            {line.split("").map((char, ci) => (
              <motion.span
                key={`${line}-${ci}`}
                className="inline-block will-change-transform"
                style={{ transformOrigin: "50% 100%" }}
                initial={{ y: "115%", rotateZ: 6, opacity: 0 }}
                animate={{ y: "0%", rotateZ: 0, opacity: 1 }}
                transition={{
                  delay: 2.3 + li * 0.25 + ci * 0.035,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </span>
        </span>
      ))}
    </h1>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise) playPromise.catch(() => {});
  }, []);

  return (
    <div ref={sectionRef} id="home" className="relative h-[130vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-onyx">
        <motion.video
          ref={videoRef}
          style={{ scale: videoScale }}
          className="absolute inset-0 h-full w-full object-cover"
          src="/media/hero-drive.mp4"
          poster="/media/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* cinematic grade */}
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/35 to-onyx/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/80 via-transparent to-onyx/50" />
        <div className="absolute inset-0 bg-gold/[0.04] mix-blend-overlay" />

        {/* ghost wordmark */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.5 }}
          className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-display text-[34vw] leading-none text-ivory/[0.04]"
        >
          A
        </motion.span>

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-10 lg:px-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex items-center gap-3 text-[11px] sm:text-xs uppercase tracking-[0.5em] text-gold-bright"
          >
            <span className="h-px w-8 bg-gold-bright" />
            UK&rsquo;s Most Trusted Executive Chauffeurs
          </motion.span>

          <KineticHeading />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-base sm:text-lg text-ivory-dim/90 font-light"
          >
            Blacked-out Mercedes. Silent precision. A driver who&rsquo;s
            already ten minutes early.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              data-cursor="Book"
              href="#contact"
              className="cursor-pointer rounded-full bg-gold px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] text-onyx transition-transform hover:scale-[1.03] hover:bg-gold-bright"
            >
              Reserve Your Chauffeur
            </a>
            <a
              data-cursor="View"
              href="#fleet"
              className="cursor-pointer rounded-full border border-ivory-dim/40 px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] text-ivory transition-colors hover:border-gold hover:text-gold-bright"
            >
              View The Fleet
            </a>
          </motion.div>
        </motion.div>

        {/* ticker band */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 1 }}
          style={{ opacity: contentOpacity }}
          className="absolute inset-x-0 bottom-0 z-10 overflow-hidden border-t border-ivory-dim/10 bg-onyx/40 py-3 backdrop-blur-sm"
        >
          <div className="flex w-max animate-marquee gap-10" style={{ animationDuration: "22s" }}>
            {[...ticker, ...ticker].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-10 text-[11px] uppercase tracking-[0.3em] text-ivory-dim/60"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-gold" />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
