"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import { HeroCanvas } from "../effects/HeroCanvas";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100dvh] items-end overflow-hidden pt-28 sm:pt-32"
    >
      <BackdropGrid />
      <div className="absolute inset-0 -z-10">
        <HeroCanvas />
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-ink-100 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink-100 to-transparent" />

      <motion.div
        style={reduce ? undefined : { y, opacity }}
        className="relative mx-auto w-full max-w-[1280px] px-5 pb-16 sm:px-8 sm:pb-24"
      >
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-ink-800 backdrop-blur"
            >
              <span className="relative grid h-1.5 w-1.5 place-items-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-volt-400/60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-volt-400" />
              </span>
              <span>Synapse 4.0 is in the field</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.96] tracking-[-0.035em] text-ink-950"
            >
              The operating system
              <br />
              for <span className="text-gradient italic font-light">thinking machines</span>
              <span className="ml-1 inline-block h-[0.85em] w-[0.45em] -translate-y-1 animate-pulse-slow bg-volt-400 align-middle shadow-[0_0_24px_rgba(139,92,246,0.7)]" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-[34rem] text-[15.5px] leading-relaxed text-ink-700"
            >
              Synapse routes every model, tool, and signal through one reasoning fabric. Ship agents that
              remember, recover, and act, in production by Friday.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <NeonCta />
              <a
                href="#docs"
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-[14px] font-medium text-ink-900 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                Read the architecture brief
                <ArrowRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <SidePanel />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function BackdropGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 grid-fade">
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          animation: "grid-drift 30s linear infinite",
        }}
      />
      <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-volt-500/12 blur-[120px]" />
      <div className="absolute right-0 top-2/3 h-[360px] w-[360px] rounded-full bg-glacier-500/10 blur-[100px]" />
    </div>
  );
}

function NeonCta() {
  return (
    <a
      href="#start"
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink-950 px-5 py-3 text-[14px] font-medium text-ink-950 transition-transform duration-300 hover:scale-[1.01] active:scale-[0.98]"
      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.12), 0 18px 60px -18px rgba(139,92,246,0.55)" }}
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-volt-500 via-glacier-400 to-volt-500 opacity-90 transition-all duration-500 group-hover:opacity-100"
        style={{ backgroundSize: "200% 100%" }}
      />
      <span
        aria-hidden
        className="absolute inset-0 -z-10 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-[110%]"
      />
      <Sparkle size={14} weight="fill" className="text-ink-100" />
      <span className="text-ink-100">Start building</span>
    </a>
  );
}

function SidePanel() {
  const lines = [
    { label: "compiling", tone: "volt" },
    { label: "memory trace", tone: "glacier" },
    { label: "tool routing", tone: "ink" },
    { label: "guardrail", tone: "volt" },
    { label: "evaluating", tone: "glacier" },
  ];
  return (
    <div className="glass relative overflow-hidden rounded-[var(--radius-card)] p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-ink-700" />
          <span className="h-2 w-2 rounded-full bg-ink-700" />
          <span className="h-2 w-2 rounded-full bg-ink-700" />
        </div>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-700">
          session · 0xa14c
        </span>
      </div>

      <div className="space-y-2.5 font-mono text-[12.5px] leading-relaxed">
        <p className="text-ink-800">
          <span className="text-volt-400">›</span> agent.run("draft Q4 launch plan")
        </p>
        {lines.map((l, i) => (
          <motion.p
            key={l.label}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.0 + i * 0.18 }}
            className="flex items-center gap-2 text-ink-700"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                l.tone === "volt"
                  ? "bg-volt-400 shadow-[0_0_8px_rgba(139,92,246,0.8)]"
                  : l.tone === "glacier"
                  ? "bg-glacier-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                  : "bg-ink-600"
              }`}
            />
            <span className="uppercase tracking-[0.12em] text-[10.5px]">{l.label}</span>
            <span className="ml-auto text-ink-700/60">{(i + 1) * 23}ms</span>
          </motion.p>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.0 }}
          className="pt-2 text-ink-900"
        >
          <span className="text-volt-400">✓</span> 4 steps committed · 1 tool call · 0 retries
        </motion.p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-[11px] text-ink-700">
        <span className="font-mono">latency p99</span>
        <span className="font-mono text-ink-900">184ms</span>
      </div>
      <div className="mt-2 flex items-center justify-between text-[11px] text-ink-700">
        <span className="font-mono">cost / 1k</span>
        <span className="font-mono text-ink-900">$0.42</span>
      </div>
    </div>
  );
}
