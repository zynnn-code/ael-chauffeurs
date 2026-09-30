"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2200);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-onyx"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span
              className="font-display text-6xl sm:text-7xl tracking-[0.08em] text-ivory"
              initial={{ opacity: 0, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, letterSpacing: "0.08em" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              AEL
            </motion.span>
            <motion.span
              className="text-[11px] sm:text-xs uppercase tracking-[0.55em] text-gold pl-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Chauffeurs
            </motion.span>
            <motion.div
              className="mt-6 h-px w-32 origin-left bg-gold-deep overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="h-full w-full bg-gold"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 0.9, duration: 0.6 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
