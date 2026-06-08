import { useEffect, useState } from "react";
import { NeuralCanvas } from "./NeuralCanvas";
import { useReveal } from "../../hooks/useReveal.ts";

const stats = [
  { value: "12.4 ms", label: "Avg. inference" },
  { value: "99.98%", label: "Uptime SLA" },
  { value: "47B", label: "Parameters" },
  { value: "180+", label: "Countries" },
];

const rotatingWords = ["think", "build", "design", "ship", "reason"];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const { ref, inView } = useReveal<HTMLDivElement>();

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* Background grid + gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.25),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-40 -z-10 h-[28rem] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18),transparent_60%)]"
      />

      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        {/* Pill */}
        <div
          className={`reveal ${inView ? "in-view" : ""} mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 backdrop-blur-md`}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping-slow rounded-full bg-neon-emerald/70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-neon-emerald" />
          </span>
          <span className="font-mono uppercase tracking-widest">New</span>
          <span className="h-3 w-px bg-white/15" />
          <span>NEXUS 3.0 — Reasoning, redesigned.</span>
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Headline */}
        <h1
          className={`reveal reveal-delay-1 ${inView ? "in-view" : ""} mx-auto mt-6 max-w-4xl text-center font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-ultratight text-balance`}
        >
          Intelligence,
          <br className="hidden sm:block" />{" "}
          <span className="text-stroke">engineered to</span>{" "}
          <span className="relative inline-block">
            <span
              key={wordIndex}
              className="neon-text inline-block animate-[fadeUp_0.6s_ease_forwards]"
            >
              {rotatingWords[wordIndex]}
            </span>
            <span
              aria-hidden
              className="absolute -inset-2 -z-10 rounded-2xl bg-neon-gradient-soft blur-2xl"
            />
          </span>
        </h1>

        {/* Subhead */}
        <p
          className={`reveal reveal-delay-2 ${inView ? "in-view" : ""} mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed text-white/65 sm:text-lg`}
        >
          NEXUS is a foundation model built for the next decade of products.
          One API. Sub-second latency. Reasoning that{" "}
          <span className="text-white">actually works</span>.
        </p>

        {/* CTAs */}
        <div
          className={`reveal reveal-delay-3 ${inView ? "in-view" : ""} mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row`}
        >
          <a
            href="#start"
            className="btn-neon group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink-900 ring-1 ring-white/20 shadow-neon-purple"
          >
            <span>Start building free</span>
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#demo"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
              <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Watch the keynote
            <span className="font-mono text-[10px] text-white/40">02:14</span>
          </a>
        </div>

        {/* Visual Canvas */}
        <div
          className={`reveal reveal-delay-4 ${inView ? "in-view" : ""} relative mx-auto mt-14 h-[420px] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-ink-900/40 sm:h-[480px] lg:h-[540px]`}
        >
          {/* Inner glow ring */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(139,92,246,0.4),rgba(59,130,246,0.0)_30%,rgba(16,185,129,0.0)_60%,rgba(139,92,246,0.4))] opacity-40 blur-xl" />

          <NeuralCanvas />

          {/* Floating glass cards */}
          <FloatingCard
            className="absolute left-4 top-6 hidden md:flex"
            title="Reasoning"
            subtitle="chain-of-thought"
            value="2.1 s"
            accent="purple"
          />
          <FloatingCard
            className="absolute right-6 top-10 hidden md:flex"
            title="Tokens / s"
            subtitle="stream output"
            value="384"
            accent="blue"
          />
          <FloatingCard
            className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:flex"
            title="Context"
            subtitle="long horizon"
            value="2M"
            accent="emerald"
          />

          {/* Scan line */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[scan_5s_ease-in-out_infinite]"
          />
        </div>

        {/* Stats */}
        <dl
          className={`reveal reveal-delay-5 ${inView ? "in-view" : ""} mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-y-6 sm:grid-cols-4`}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 font-mono text-[11px] uppercase tracking-widest text-white/50">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scan {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(540px); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}

function FloatingCard({
  className,
  title,
  subtitle,
  value,
  accent,
}: {
  className?: string;
  title: string;
  subtitle: string;
  value: string;
  accent: "purple" | "blue" | "emerald";
}) {
  const dot =
    accent === "purple"
      ? "bg-neon-purple shadow-neon-purple"
      : accent === "blue"
      ? "bg-neon-blue shadow-neon-blue"
      : "bg-neon-emerald shadow-neon-emerald";
  return (
    <div
      className={`glass-strong ring-soft flex items-center gap-3 rounded-2xl px-3.5 py-2.5 text-left ${className}`}
    >
      <span className={`h-2 w-2 rounded-full ${dot}`} />
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">
          {subtitle}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium text-white/90">{title}</span>
          <span className="font-display text-sm font-semibold text-white">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
}
