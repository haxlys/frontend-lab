import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type BentoSize = "sm" | "md" | "lg" | "tall" | "wide";

type BentoProps = {
  size?: BentoSize;
  title: string;
  description: string;
  badge?: string;
  accent?: "purple" | "blue" | "green" | "mix";
  visual: ReactNode;
  delay?: number;
};

const SIZE: Record<BentoSize, string> = {
  sm: "md:col-span-3 md:row-span-1",
  md: "md:col-span-6 md:row-span-1",
  lg: "md:col-span-6 md:row-span-2",
  tall: "md:col-span-3 md:row-span-2",
  wide: "md:col-span-12 md:row-span-1",
};

const ACCENT: Record<NonNullable<BentoProps["accent"]>, string> = {
  purple:
    "from-neon-purple/40 via-neon-purple/10 to-transparent",
  blue: "from-neon-blue/40 via-neon-blue/10 to-transparent",
  green: "from-neon-green/40 via-neon-green/10 to-transparent",
  mix: "from-neon-purple/30 via-neon-blue/20 to-neon-green/20",
};

function BentoCard({
  size = "md",
  title,
  description,
  badge,
  accent = "mix",
  visual,
  delay = 0,
}: BentoProps) {
  return (
    <Reveal
      delay={delay}
      className={[
        "group relative col-span-12 overflow-hidden rounded-2xl",
        SIZE[size],
        "min-h-[260px]",
      ].join(" ")}
    >
      <div
        className={[
          "relative h-full w-full overflow-hidden rounded-2xl",
          "glass glow-border",
          "transition-all duration-500 ease-out-expo",
          "hover:-translate-y-0.5 hover:shadow-glow-purple",
        ].join(" ")}
      >
        {/* Accent corner wash */}
        <div
          aria-hidden
          className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${ACCENT[accent]} opacity-50 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100`}
        />
        {/* Soft inner grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]"
        />
        <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
          <header className="flex items-start justify-between gap-3">
            <div>
              {badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-zinc-300">
                  {badge}
                </span>
              )}
              <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.01em] text-white sm:text-2xl">
                {title}
              </h3>
              <p className="mt-1.5 max-w-md text-sm text-zinc-400">
                {description}
              </p>
            </div>
          </header>
          <div className="relative mt-6 flex-1">{visual}</div>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- Visuals ---------- */

function SpeedVisual() {
  return (
    <div className="relative h-full w-full">
      <div className="flex items-end gap-1.5 sm:gap-2">
        {Array.from({ length: 24 }).map((_, i) => {
          const h = 20 + ((i * 37) % 80);
          return (
            <div
              key={i}
              className="flex-1 rounded-md bg-gradient-to-t from-neon-purple/40 to-neon-blue/80"
              style={{
                height: `${h}%`,
                animation: `pulseGlow 2.4s ease-in-out ${i * 60}ms infinite`,
              }}
            />
          );
        })}
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-zinc-400">
        <span>p50 · 84ms</span>
        <span className="text-zinc-500">stream</span>
        <span className="text-zinc-300">→ 12.4k tok/s</span>
      </div>
    </div>
  );
}

function AccuracyVisual() {
  return (
    <div className="flex h-full items-center gap-6">
      <div className="relative h-32 w-32 shrink-0 sm:h-40 sm:w-40">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0" stopColor="#8B5CF6" />
              <stop offset="0.5" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="url(#ring)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="263.9"
            strokeDashoffset="26"
            style={{
              filter: "drop-shadow(0 0 10px rgba(139,92,246,0.6))",
              transition: "stroke-dashoffset 1.2s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            99.2
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            accuracy
          </span>
        </div>
      </div>
      <ul className="space-y-1.5 text-xs text-zinc-300">
        {[
          ["TruthfulQA", "+18.4"],
          ["MMLU-Pro", "+9.7"],
          ["HumanEval", "+22.1"],
        ].map(([k, v]) => (
          <li
            key={k}
            className="flex items-center justify-between gap-4 rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-1.5"
          >
            <span className="text-zinc-400">{k}</span>
            <span className="font-mono text-emerald-300">{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="grid h-full grid-cols-3 gap-2 sm:gap-3">
      {[
        { label: "Ingest", hue: "purple" },
        { label: "Reason", hue: "blue" },
        { label: "Act", hue: "green" },
      ].map((step, i) => (
        <div
          key={step.label}
          className="relative flex flex-col items-center justify-end overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-3"
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                i === 0
                  ? "radial-gradient(80% 60% at 50% 0%, rgba(139,92,246,0.6), transparent 70%)"
                  : i === 1
                    ? "radial-gradient(80% 60% at 50% 0%, rgba(59,130,246,0.6), transparent 70%)"
                    : "radial-gradient(80% 60% at 50% 0%, rgba(16,185,129,0.6), transparent 70%)",
            }}
          />
          <span className="relative font-mono text-[10px] uppercase tracking-widest text-zinc-300">
            {step.label}
          </span>
          <div className="relative mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: "100%",
                background:
                  i === 0
                    ? "linear-gradient(90deg,#8B5CF6,#3B82F6)"
                    : i === 1
                      ? "linear-gradient(90deg,#3B82F6,#10B981)"
                      : "linear-gradient(90deg,#10B981,#8B5CF6)",
                animation: `shimmer 1.8s linear ${i * 0.3}s infinite`,
                backgroundSize: "200% 100%",
              }}
            />
          </div>
          <div className="relative mt-2 grid w-full grid-cols-3 gap-1">
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                className={`h-1 rounded-full ${d <= i ? "bg-white/30" : "bg-white/5"}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MemoryVisual() {
  const items = [
    "user-tone: concise, technical",
    "stack: typescript, postgres",
    "prefers: dark mode",
    "blocker: flaky test in /billing",
  ];
  return (
    <div className="flex h-full flex-col gap-2">
      {items.map((t, i) => (
        <div
          key={t}
          className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-zinc-200"
        >
          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background:
                  i % 2 === 0 ? "#8B5CF6" : i % 3 === 0 ? "#10B981" : "#3B82F6",
                boxShadow: "0 0 10px currentColor",
              }}
            />
            <span className="font-mono text-zinc-300">{t}</span>
          </div>
          <span className="font-mono text-[10px] text-zinc-500">
            {`0.${8 - i}`}
          </span>
        </div>
      ))}
    </div>
  );
}

function VoiceVisual() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="h-32 w-32 rounded-full border border-neon-blue/30"
          style={{ animation: "pulseGlow 2.4s ease-in-out infinite" }}
        />
        <div
          className="absolute h-44 w-44 rounded-full border border-neon-purple/20"
          style={{ animation: "pulseGlow 2.4s ease-in-out 0.4s infinite" }}
        />
        <div
          className="absolute h-56 w-56 rounded-full border border-neon-green/15"
          style={{ animation: "pulseGlow 2.4s ease-in-out 0.8s infinite" }}
        />
      </div>
      <button
        type="button"
        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-md transition-transform duration-300 ease-out-expo hover:scale-105"
        aria-label="Voice mode"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0" />
          <path d="M12 18v3" />
        </svg>
      </button>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-1">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="block w-1 rounded-sm bg-gradient-to-t from-neon-blue/60 to-neon-purple"
            style={{
              height: `${20 + ((i * 23) % 60)}%`,
              animation: `pulseGlow 1.6s ease-in-out ${i * 40}ms infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ScaleVisual() {
  return (
    <div className="grid h-full grid-cols-2 gap-3 sm:grid-cols-4">
      {[
        { k: "regions", v: "14" },
        { k: "uptime", v: "99.99%" },
        { k: "p99", v: "112ms" },
        { k: "req/s", v: "2.1M" },
      ].map((m) => (
        <div
          key={m.k}
          className="rounded-xl border border-white/10 bg-white/[0.02] p-3"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            {m.k}
          </div>
          <div className="mt-1 font-display text-2xl font-semibold text-white">
            {m.v}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Section ---------- */

export function Features() {
  return (
    <section
      id="features"
      className="relative isolate w-full py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-blue" />
              capabilities
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-ultratight text-white sm:text-5xl md:text-6xl">
              One model. <span className="text-gradient-neon">Every surface.</span>
            </h2>
            <p className="mt-4 max-w-xl text-zinc-400">
              Nebula unifies reasoning, memory and tools behind a single API.
              Compose it like Lego, ship like Stripe.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid auto-rows-[minmax(220px,auto)] grid-cols-12 gap-4 sm:gap-5">
          <BentoCard
            size="lg"
            badge="speed"
            title="Replies in milliseconds, not minutes."
            description="A speculative decoding engine that streams tokens the moment you think of them. No more dead air."
            accent="blue"
            visual={<SpeedVisual />}
            delay={0}
          />
          <BentoCard
            size="tall"
            badge="accuracy"
            title="Grounded, not guessed."
            description="Tool-use and retrieval fused with the model — answers are sourced, not synthesized."
            accent="purple"
            visual={<AccuracyVisual />}
            delay={80}
          />
          <BentoCard
            size="tall"
            badge="automation"
            title="Workflows that run themselves."
            description="Multi-step agents with retries, rollbacks, and human-in-the-loop checkpoints."
            accent="green"
            visual={<AutomationVisual />}
            delay={160}
          />
          <BentoCard
            size="md"
            badge="memory"
            title="Long context that actually remembers."
            description="Hierarchical memory with cost-aware eviction — your assistant wakes up knowing you."
            accent="purple"
            visual={<MemoryVisual />}
            delay={240}
          />
          <BentoCard
            size="md"
            badge="voice"
            title="Speak, it understands."
            description="Sub-200ms voice with barge-in, turn-taking, and emotion-aware prosody."
            accent="blue"
            visual={<VoiceVisual />}
            delay={320}
          />
          <BentoCard
            size="wide"
            badge="scale"
            title="Built for the next billion requests."
            description="Multi-region, autoscaling, SOC2 / ISO 27001. The boring infra, done right."
            accent="mix"
            visual={<ScaleVisual />}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
}
