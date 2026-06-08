"use client";
import { motion, useReducedMotion } from "motion/react";

const words = ["Reasoning", "Memory", "Routing", "Eval", "Telemetry", "Recovery"];

export function Marquee() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-ink-0/80 py-10">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #0b0b0f 0%, transparent 12%, transparent 88%, #0b0b0f 100%)",
        }}
      />
      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={reduce ? undefined : { duration: 36, ease: "linear", repeat: Infinity }}
      >
        {[...Array(2)].flatMap((_, dup) =>
          words.map((w, i) => (
            <span
              key={`${dup}-${i}`}
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium tracking-[-0.03em] text-ink-950/90"
            >
              {w}
              <span className="ml-12 inline-block text-volt-400/80">·</span>
            </span>
          )),
        )}
      </motion.div>
    </section>
  );
}
