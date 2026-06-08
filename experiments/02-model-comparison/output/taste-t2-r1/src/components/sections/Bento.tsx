"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Lightning, ShieldCheck, ArrowsClockwise, Graph } from "@phosphor-icons/react";

const features = [
  {
    id: "speed",
    span: "lg:col-span-7 lg:row-span-2",
    tone: "from-volt-500/30 via-volt-500/5 to-transparent",
    accent: "volt",
    title: "Sub-second reasoning across every model",
    body: "Synapse caches plans, routes retries, and collapses tool chains. Median agent loop closes in 184ms, end to end.",
    Visual: SpeedVisual,
  },
  {
    id: "memory",
    span: "lg:col-span-5",
    tone: "from-glacier-500/20 via-glacier-500/0 to-transparent",
    accent: "glacier",
    title: "Memory that survives a session",
    body: "Hierarchical, queryable, encrypted at rest. Forget nothing useful.",
    Visual: MemoryVisual,
  },
  {
    id: "guardrail",
    span: "lg:col-span-5",
    tone: "from-ink-300/20 via-ink-300/0 to-transparent",
    accent: "ink",
    title: "Guardrails in the loop, not after it",
    body: "Policy + eval + red-team, evaluated on every call.",
    Visual: GuardVisual,
  },
  {
    id: "orchestration",
    span: "lg:col-span-7",
    tone: "from-volt-500/20 via-glacier-500/0 to-transparent",
    accent: "volt",
    title: "Orchestrate a fleet, not a prompt",
    body: "Schedule, retry, and supervise thousands of agents. Inspect a run, replay a step, ship a fix before users notice.",
    Visual: OrchestrationVisual,
  },
  {
    id: "deploy",
    span: "lg:col-span-12",
    tone: "from-glacier-500/15 via-volt-500/0 to-transparent",
    accent: "glacier",
    title: "One deploy, every cloud",
    body: "Push from a repo, ship to your VPC, ours, or both. Region pinning, SOC 2, BAA included.",
    Visual: DeployVisual,
  },
] as const;

export function Bento() {
  return (
    <section id="bento" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <header className="mb-14 max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink-950">
            A complete agent stack,{" "}
            <span className="text-gradient italic font-light">not another prompt IDE</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-ink-700">
            Five primitives you keep reaching for. Wired together, observable, and reversible
            when your model provider changes next quarter.
          </p>
        </header>

        <div className="grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          {features.map((f, i) => (
            <BentoCell key={f.id} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Feature = (typeof features)[number];

function BentoCell({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reduce = useReducedMotion();

  const Visual = feature.Visual as unknown as React.ComponentType;

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-[var(--radius-card)] border border-white/8 bg-ink-50/40 p-6 sm:p-7 ${feature.span}`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${feature.tone} opacity-90 transition-opacity duration-700 group-hover:opacity-100`}
      />
      <div className="relative flex h-full min-h-[280px] flex-col">
        <div className="mb-5 flex items-center justify-between">
          <FeatureIcon kind={feature.accent} />
          <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-700">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="max-w-md font-display text-[22px] font-medium leading-[1.15] tracking-[-0.02em] text-ink-950 sm:text-[26px]">
          {feature.title}
        </h3>
        <p className="mt-3 max-w-md text-[14px] leading-relaxed text-ink-700">{feature.body}</p>

        <div className="mt-auto pt-6">
          <Visual />
        </div>
      </div>
    </motion.div>
  );
}

function FeatureIcon({ kind }: { kind: string }) {
  const Icon =
    kind === "volt"
      ? Lightning
      : kind === "glacier"
      ? Graph
      : ShieldCheck;
  const color =
    kind === "volt" ? "text-volt-400" : kind === "glacier" ? "text-glacier-400" : "text-ink-700";
  return (
    <span className={`grid h-9 w-9 place-items-center rounded-xl border border-white/8 bg-white/[0.03] ${color}`}>
      <Icon size={18} weight="duotone" />
    </span>
  );
}

function SpeedVisual() {
  return (
    <div className="rounded-2xl border border-white/8 bg-ink-100/60 p-4">
      <div className="flex items-end justify-between gap-1.5 h-24">
        {[
          42, 28, 58, 31, 46, 22, 18, 12, 9, 7, 6, 5, 4, 5, 4, 3,
        ].map((h, i) => (
          <motion.span
            key={i}
            initial={{ scaleY: 0.2, opacity: 0.4 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "bottom", height: `${Math.max(6, h * 1.4)}%` }}
            className={`block w-full rounded-sm ${
              i > 11 ? "bg-volt-400" : "bg-volt-400/35"
            }`}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-700">
        <span>p50 → p99</span>
        <span className="text-ink-900">184ms</span>
      </div>
    </div>
  );
}

function MemoryVisual() {
  return (
    <div className="flex items-center gap-2 overflow-hidden">
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: [0.2, 0.9, 0.4][i % 3] }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: i * 0.05 }}
          className="h-7 w-1.5 rounded-full bg-glacier-400/70"
        />
      ))}
    </div>
  );
}

function GuardVisual() {
  return (
    <div className="rounded-2xl border border-white/8 bg-ink-100/60 p-3 font-mono text-[11px] leading-relaxed text-ink-700">
      <p>
        <span className="text-volt-400">policy</span> · pii-redact → block
      </p>
      <p>
        <span className="text-glacier-400">eval</span> · 47 prompts, 3 axes
      </p>
      <p>
        <span className="text-ink-800">redteam</span> · 12 cases, last run 9m ago
      </p>
      <div className="mt-2 flex items-center gap-2 border-t border-white/5 pt-2 text-ink-900">
        <span className="grid h-3 w-3 place-items-center rounded-full bg-emerald-400/80">
          <span className="h-1 w-1 rounded-full bg-ink-100" />
        </span>
        0 violations in last 24h
      </div>
    </div>
  );
}

function OrchestrationVisual() {
  const nodes = [
    { x: 8, y: 50, label: "router" },
    { x: 32, y: 18, label: "plan" },
    { x: 32, y: 78, label: "tool" },
    { x: 56, y: 32, label: "eval" },
    { x: 56, y: 70, label: "cache" },
    { x: 80, y: 50, label: "ship" },
  ];
  const edges = [
    [0, 1], [0, 2], [1, 3], [2, 3], [1, 4], [2, 4], [3, 5], [4, 5],
  ];
  return (
    <div className="rounded-2xl border border-white/8 bg-ink-100/60 p-3">
      <svg viewBox="0 0 100 100" className="h-28 w-full" preserveAspectRatio="none">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="rgba(196,181,253,0.45)"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.05 }}
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="3" fill="#a78bfa" />
            <circle cx={n.x} cy={n.y} r="6" fill="rgba(139,92,246,0.18)" />
            <text
              x={n.x}
              y={n.y + 9}
              textAnchor="middle"
              fontSize="3.4"
              fill="#b6b6c2"
              fontFamily="ui-monospace, monospace"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function DeployVisual() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {["us-east-1", "eu-west-2", "ap-south-1", "sa-east-1", "self-hosted"].map((r) => (
        <span
          key={r}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-ink-100/60 px-3 py-1.5 font-mono text-[11px] text-ink-800"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {r}
        </span>
      ))}
      <span className="ml-auto inline-flex items-center gap-2 text-[12px] text-ink-700">
        <ArrowsClockwise size={14} />
        4m22s · last deploy
      </span>
    </div>
  );
}
