import { motion } from "motion/react";
import { ArrowsHorizontal, Cpu, ShieldCheck, Timer, Wrench } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";

const TILES: Tile[] = [
  {
    span: "lg",
    eyebrow: "01",
    title: "Sub-second reasoning, end-to-end.",
    body: "A custom 8-bit quantised transformer kernel running on our inference fabric. Median 27ms p50, 71ms p99. No cache misses in production for 47 days.",
    visual: "metric",
    accent: "neon",
  },
  {
    span: "sm",
    eyebrow: "02",
    title: "Native tool use.",
    body: "AXIOM calls Linear, Snowflake, Stripe, and 200+ tools without an orchestration layer.",
    visual: "stack",
    accent: "iris",
  },
  {
    span: "sm",
    eyebrow: "03",
    title: "Zero-retention, by default.",
    body: "Inputs are processed in an isolated enclave and discarded at the end of the request. SOC 2 Type II audited.",
    visual: "lock",
    accent: "neon",
  },
  {
    span: "md",
    eyebrow: "04",
    title: "A single endpoint for every workflow.",
    body: "Streamed responses, function-calling, structured output, embeddings, image understanding. One SDK, three lines of code.",
    visual: "code",
    accent: "arc",
  },
  {
    span: "md",
    eyebrow: "05",
    title: "Fine-tuning without the fine-tuning bill.",
    body: "Adaptive context routing. We pick the right model for every turn automatically — so the easy 80% of traffic costs you less, not more.",
    visual: "graph",
    accent: "iris",
  },
  {
    span: "full",
    eyebrow: "06",
    title: "From prototype to production in a single afternoon.",
    body: "Ship the same SDK in your notebook, your CI, and your edge runtime. Versioned rollouts, instant rollbacks, and per-environment keys out of the box.",
    visual: "terminal",
    accent: "neon",
  },
];

type Tile = {
  span: "sm" | "md" | "lg" | "full";
  eyebrow: string;
  title: string;
  body: string;
  visual: "metric" | "stack" | "lock" | "code" | "graph" | "terminal";
  accent: "neon" | "iris" | "arc";
};

const spanMap: Record<Tile["span"], string> = {
  sm: "md:col-span-5",
  md: "md:col-span-7",
  lg: "md:col-span-7",
  full: "md:col-span-12",
};

const accentMap: Record<Tile["accent"], string> = {
  neon: "from-neon-500/30 via-neon-500/5 to-transparent",
  iris: "from-iris-500/30 via-iris-500/5 to-transparent",
  arc: "from-arc-500/25 via-arc-500/5 to-transparent",
};

export function Bento() {
  return (
    <section
      id="platform"
      className="relative border-t border-white/[0.05] py-24 md:py-32"
      aria-labelledby="bento-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2
            id="bento-title"
            className="max-w-3xl font-display text-3xl font-medium leading-[1.05] tracking-[-0.025em] text-ink-0 sm:text-4xl md:text-5xl"
          >
            One engine. <span className="font-serif italic font-light text-gradient-neon">Six superpowers.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-ink-300">
            AXIOM is built on a small set of primitives that compose into anything
            you can ship in 2026. No orchestrator to maintain, no vector store to babysit.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12">
          {TILES.map((t, i) => (
            <Reveal key={t.eyebrow} delay={i * 0.04} className={spanMap[t.span]}>
              <BentoCard tile={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({ tile }: { tile: Tile }) {
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60 p-7 transition-colors duration-500 hover:border-white/[0.12] ${tile.span === "full" ? "md:p-10" : ""}`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute -inset-px -z-0 rounded-2xl bg-gradient-to-br ${accentMap[tile.accent]} opacity-50 transition-opacity duration-500 group-hover:opacity-90`}
        style={{ maskImage: "radial-gradient(60% 80% at 100% 0%, black, transparent)" }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-400">
            // {tile.eyebrow}
          </span>
          <AccentDot accent={tile.accent} />
        </div>

        <h3 className="mt-8 max-w-[26ch] font-display text-[22px] font-medium leading-[1.15] tracking-[-0.02em] text-ink-0 sm:text-2xl">
          {tile.title}
        </h3>
        <p className="mt-3 max-w-[44ch] text-[14.5px] leading-relaxed text-ink-300">
          {tile.body}
        </p>

        <div className="mt-7 flex-1">
          <Visual kind={tile.visual} />
        </div>
      </div>
    </div>
  );
}

function AccentDot({ accent }: { accent: Tile["accent"] }) {
  const color = accent === "neon" ? "#10b981" : accent === "iris" ? "#8b5cf6" : "#3b82f6";
  return (
    <span className="relative inline-flex h-2.5 w-2.5">
      <span
        className="absolute inline-flex h-full w-full rounded-full opacity-60"
        style={{ background: color, filter: "blur(4px)" }}
      />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: color }} />
    </span>
  );
}

function Visual({ kind }: { kind: Tile["visual"] }) {
  switch (kind) {
    case "metric":
      return (
        <div className="flex h-full min-h-[180px] items-end justify-between gap-4 pt-6">
          <div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-400">
              p50 latency
            </div>
            <div className="mt-1 font-display text-5xl font-medium tracking-tight text-ink-0 sm:text-6xl">
              27<span className="text-ink-400">ms</span>
            </div>
          </div>
          <div className="flex h-24 w-2/3 items-end gap-1.5">
            {[28, 36, 22, 44, 30, 18, 24, 32, 19, 12, 16, 22, 14, 9, 11].map((h, i) => (
              <motion.span
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-neon-500/40 to-neon-300"
                style={{ height: `${h * 2}%` }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </div>
        </div>
      );
    case "stack":
      return (
        <ul className="mt-2 space-y-2 font-mono text-[12px] text-ink-200">
          {["linear.write", "snowflake.query", "stripe.refund", "github.createPR", "slack.postMessage"].map((s, i) => (
            <li
              key={s}
              className="flex items-center gap-3 rounded-md border border-white/[0.05] bg-white/[0.02] px-3 py-2"
            >
              <span className="text-iris-400">$</span>
              <span className="flex-1">{s}</span>
              <span className="text-ink-500">→</span>
              <span className="text-neon-300">200 OK</span>
              <span className="text-ink-500">·</span>
              <span className="text-ink-400">{i * 12 + 18}ms</span>
            </li>
          ))}
        </ul>
      );
    case "lock":
      return (
        <div className="flex h-full min-h-[180px] flex-col items-start justify-end gap-4">
          <div className="flex items-center gap-3 rounded-full border border-neon-500/20 bg-neon-500/[0.06] px-3 py-1.5 font-mono text-[11px] text-neon-200">
            <ShieldCheck size={14} weight="fill" />
            Encrypted · never logged · discarded at request end
          </div>
          <div className="grid w-full grid-cols-3 gap-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
            <Pill>SOC 2 II</Pill>
            <Pill>ISO 27001</Pill>
            <Pill>HIPAA</Pill>
          </div>
        </div>
      );
    case "code":
      return (
        <pre className="overflow-hidden rounded-xl border border-white/[0.06] bg-ink-950/80 p-4 font-mono text-[12px] leading-[1.7] text-ink-200">
{`import { Axiom } from "@axiom/sdk";

const ax = new Axiom({ key: process.env.AXIOM });

const out = await ax.reason({
  query: "Draft the Q3 product brief from these notes.",
  tools: ["linear", "notion", "slack"],
  stream: true,
});`}
        </pre>
      );
    case "graph":
      return (
        <div className="relative h-[200px] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-ink-950/60">
          <svg viewBox="0 0 400 200" className="h-full w-full">
            <defs>
              <linearGradient id="gline" x1="0" x2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,160 C60,140 100,80 160,90 S280,40 400,60 L400,200 L0,200 Z"
              fill="url(#gline)"
              opacity="0.18"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,160 C60,140 100,80 160,90 S280,40 400,60"
              fill="none"
              stroke="url(#gline)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
            <circle cx="400" cy="60" r="4" fill="#10b981" />
            <text x="350" y="48" fontFamily="var(--font-mono)" fontSize="9" fill="rgba(255,255,255,0.5)">
              adaptive model pick
            </text>
          </svg>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
            <span>cost / 1k tok</span>
            <span className="text-neon-300">↓ 64%</span>
          </div>
        </div>
      );
    case "terminal":
      return (
        <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-ink-950/80">
          <div className="flex items-center gap-1.5 border-b border-white/[0.05] px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-[10.5px] tracking-widest text-ink-400">
              ~/projects/axiom
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10.5px] text-neon-300">
              <Timer size={11} weight="bold" />
              ship
            </span>
          </div>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
            {[
              { label: "PROTOTYPE", cmd: "npx create-axiom-app", icon: <Cpu size={12} /> },
              { label: "DEPLOY", cmd: "axiom deploy --prod", icon: <ArrowsHorizontal size={12} /> },
              { label: "ROLL BACK", cmd: "axiom rollback v3.1", icon: <Wrench size={12} /> },
            ].map((s) => (
              <div
                key={s.label}
                className="border-t border-white/[0.05] p-4 first:border-t-0 md:border-l md:border-t-0 md:first:border-l-0"
              >
                <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                  <span className="text-iris-400">{s.icon}</span>
                  {s.label}
                </div>
                <div className="mt-2 font-mono text-[12.5px] text-ink-100">{s.cmd}</div>
                <div className="mt-2 font-mono text-[10.5px] text-neon-300">✓ ready in 2.1s</div>
              </div>
            ))}
          </div>
        </div>
      );
  }
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-ink-200">
      {children}
    </span>
  );
}
