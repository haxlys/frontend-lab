import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Play, Sparkle } from "@phosphor-icons/react";
import { NeuralCanvas } from "./NeuralCanvas";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden pt-24 md:pt-28"
      aria-labelledby="hero-title"
    >
      <div className="grid-lines absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[640px] w-[1100px] -translate-x-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.25), rgba(16,185,129,0.10) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <motion.div
        style={reduce ? undefined : { y, opacity }}
        className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 md:grid-cols-12 md:gap-8 md:pb-24"
      >
        <div className="md:col-span-7 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon-400" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-200">
              AXIOM&nbsp;3.2 &nbsp;·&nbsp; live
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-[44px] font-medium leading-[0.98] tracking-[-0.035em] text-ink-0 sm:text-6xl md:text-[72px] lg:text-[80px]"
          >
            Reasoning at the
            <br />
            <span className="font-serif italic font-light text-gradient-neon">speed of thought.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-[55ch] text-[15.5px] leading-relaxed text-ink-300 sm:text-base"
          >
            An autonomous reasoning engine for teams who ship. Sub-30ms inference,
            native tool use, one endpoint for every workflow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton variant="primary" href="#cta">
              <Sparkle size={15} weight="fill" />
              Start building free
            </MagneticButton>
            <MagneticButton variant="ghost" href="#proof">
              <Play size={12} weight="fill" />
              Watch the 90s demo
            </MagneticButton>
            <span className="ml-1 font-mono text-[11px] tracking-widest text-ink-400">
              NO CREDIT CARD
            </span>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/[0.06] pt-7"
          >
            {[
              { k: "27ms", v: "median latency" },
              { k: "1.4M", v: "tokens / sec" },
              { k: "99.97%", v: "uptime, 90d" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-medium tracking-tight text-ink-0">
                  {s.k}
                </dt>
                <dd className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-400">
                  {s.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative md:col-span-5 lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square w-full"
          >
            <NeuralCanvas />
            <Console />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Console() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="glass-strong absolute -bottom-6 left-1/2 w-[min(92%,440px)] -translate-x-1/2 rounded-2xl p-3.5"
    >
      <div className="flex items-center gap-1.5 pb-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[10px] tracking-widest text-ink-400">
          axiom · run
        </span>
      </div>
      <pre className="overflow-hidden font-mono text-[11.5px] leading-[1.7] text-ink-200">
        <code>
          <span className="text-iris-400">const</span>{" "}
          <span className="text-ink-0">answer</span>{" "}
          <span className="text-ink-400">=</span>{" "}
          <span className="text-neon-300">await</span>{" "}
          <span className="text-ink-0">axiom</span>
          <span className="text-ink-400">.</span>
          <span className="text-arc-400">reason</span>
          <span className="text-ink-200">(</span>
          {"\n"}  {"{ query: "}
          <span className="text-neon-300">"summarize Q3 risks"</span>
          {" }" + "\n"}  {"tools: ["}
          <span className="text-arc-400">"linear"</span>
          {", "}
          <span className="text-arc-400">"snowflake"</span>
          {"] }" + "\n"}
          <span className="text-ink-200">)</span>
          {"\n\n"}
          <span className="text-ink-400">▌ 27ms · 1,284 tokens</span>
        </code>
      </pre>
    </motion.div>
  );
}
