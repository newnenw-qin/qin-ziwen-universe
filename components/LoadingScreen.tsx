"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onEnter }: { onEnter: () => void }) {
  const [phase, setPhase] = useState<"dust" | "mark" | "ready">("dust");

  useEffect(() => {
    const a = setTimeout(() => setPhase("mark"), 700);
    const b = setTimeout(() => setPhase("ready"), 2200);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-[#05060a]"
      exit={{ opacity: 0, filter: "blur(12px)", scale: 1.04 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => {
        if (phase === "ready") onEnter();
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 48 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-px w-px rounded-full bg-white/70"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 29) % 100}%`,
              opacity: 0.15 + (i % 5) * 0.08,
              animation: `pulse ${4 + (i % 6)}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, letterSpacing: "0.8em" }}
        animate={{ opacity: phase === "dust" ? 0 : 1, letterSpacing: "0.45em" }}
        className="font-display text-[42px] font-light tracking-[0.45em] text-[#eeeae2]"
      >
        QZ
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "ready" || phase === "mark" ? 0.55 : 0 }}
        className="font-ui mt-6 text-[10px] tracking-[0.42em] text-[#9a978f]"
      >
        LOADING THE UNIVERSE...
      </motion.p>
      {phase === "ready" && (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onEnter}
          className="relative z-10 font-ui mt-16 border-0 bg-transparent px-8 py-4 text-[11px] tracking-[0.55em] text-[#d9d4c8]"
        >
          ENTER
        </motion.button>
      )}
    </motion.div>
  );
}
