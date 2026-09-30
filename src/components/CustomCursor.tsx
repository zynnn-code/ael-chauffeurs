"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      setHoverLabel(target ? target.getAttribute("data-cursor") : null);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] flex items-center justify-center rounded-full border border-gold mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: hoverLabel ? 84 : 14,
        height: hoverLabel ? 84 : 14,
        backgroundColor: hoverLabel ? "rgba(198,166,100,0.15)" : "rgba(198,166,100,1)",
      }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {hoverLabel && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] uppercase tracking-[0.15em] text-gold-bright text-center leading-tight px-1"
        >
          {hoverLabel}
        </motion.span>
      )}
    </motion.div>
  );
}
