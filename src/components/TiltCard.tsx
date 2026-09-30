"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

export default function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { damping: 22, stiffness: 220, mass: 0.6 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateX = useTransform(sy, [0, 1], [8, -8]);
  const rotateY = useTransform(sx, [0, 1], [-8, 8]);
  const glareX = useTransform(sx, (v) => `${v * 100}%`);
  const glareY = useTransform(sy, (v) => `${v * 100}%`);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={className}
    >
      <div className="relative h-full">
        {children}
        <Glare x={glareX} y={glareY} />
      </div>
    </motion.div>
  );
}

function Glare({
  x,
  y,
}: {
  x: MotionValue<string>;
  y: MotionValue<string>;
}) {
  const background = useTransform([x, y], ([gx, gy]) =>
    `radial-gradient(circle at ${gx} ${gy}, rgba(228,201,135,0.18), transparent 60%)`
  );
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-20"
      style={{ background }}
    />
  );
}
