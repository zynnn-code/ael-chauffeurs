"use client";

import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  value,
  suffix = "",
  display,
}: {
  value: number;
  suffix?: string;
  display?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [text, setText] = useState("0");

  useEffect(() => {
    if (!inView) return;
    if (display) {
      setText(display);
      return;
    }
    const controls = animate(count, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = rounded.on("change", (v) => setText(String(v)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, value, display, count, rounded]);

  return (
    <span ref={ref}>
      {text}
      {!display && suffix}
    </span>
  );
}
