import { useEffect, useState } from "react";
import { useReveal } from "../../hooks/useReveal.ts";

type Bento = {
  id: string;
  title: string;
  description: string;
  span: string;
  visual: React.ReactNode;
  accent: "purple" | "blue" | "emerald";
};

const features: Bento[] = [
  {
    id: "speed",
    title: "Sub-second intelligence.",
    description:
      "A custom-built inference stack tuned for real-time. Stream at 384 tok/s with deterministic latency under 15ms p99.",
    span: "md:col-span-2 md:row-span-2",
    accent: "purple",
    visual: <SpeedVisual />,
  },
  {
    id: "accuracy",
    title: "Reasoning that holds up.",
    description:
      "State-of-the-art across reasoning, code, and tool-use benchmarks — verified in production.",
    span: "md:col-span-2",
    accent: "blue",
    visual: <AccuracyVisual />,
  },
  {
    id: "automation",
    title: "Agents, by default.",
    description:
      "Native tool calling and long-horizon memory. Build autonomous workflows in 12 lines.",
    span: "md:col-span-2",
    accent: "emerald",
    visual: <AutomationVisual />,
  },
  {
    id: "scale",
    title: "Scales to a billion users.",
    description:
      "Multi-region, SOC-2, zero data retention. Built for the most demanding teams on earth.",
    span: "md:col-span-2",
    accent: "purple",
    visual: <ScaleVisual />,
  },
  {
    id: "customize",
    title: "Fine-tune in minutes.",
    description:
      "Adaptive LoRA, distillation, and on-prem deploys. Your weights, your IP.",
    span: "md:col-span-2",
    accent: "blue",
    visual: <CustomizeVisual />,
  },
];

export function Features() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <section id="features" className="relative isolate py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_55%)]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <div ref={ref} className="mx-auto max-w-2xl text-center">
          <div
            className={`reveal ${inView ? "in-view" : ""} mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/60 backdrop-blur`}
          >
            <span className="h-1 w-1 rounded-full bg-white/60" />
            The platform
          </div>
          <h2
            className={`reveal reveal-delay-1 ${inView ? "in-view" : ""} mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance`}
          >
            One model.{" "}
            <span className="neon-text-static">Every surface.</span>
          </h2>
          <p
            className={`reveal reveal-delay-2 ${inView ? "in-view" : ""} mt-4 text-white/60`}
          >
            A bento of primitives — composable, observable, and built for
            shipping.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-4">
          {features.map((f, i) => (
            <BentoBox key={f.id} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoBox({ feature, index }: { feature: Bento; index: number }) {
  const { ref, inView } = useReveal<HTMLDivElement>({ threshold: 0.15 });
  const accent = {
    purple: {
      ring: "from-neon-purple/50 via-neon-purple/0 to-neon-purple/0",
      text: "text-neon-purple",
      dot: "bg-neon-purple shadow-neon-purple",
    },
    blue: {
      ring: "from-neon-blue/50 via-neon-blue/0 to-neon-blue/0",
      text: "text-neon-blue",
      dot: "bg-neon-blue shadow-neon-blue",
    },
    emerald: {
      ring: "from-neon-emerald/50 via-neon-emerald/0 to-neon-emerald/0",
      text: "text-neon-emerald",
      dot: "bg-neon-emerald shadow-neon-emerald",
    },
  }[feature.accent];

  return (
    <article
      ref={ref}
      className={`reveal reveal-delay-${Math.min(index + 1, 5)} ${
        inView ? "in-view" : ""
      } group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-ink-900/70 ${
        feature.span
      }`}
    >
      {/* Hover glow */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br ${accent.ring} opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-60`}
      />
      {/* Top inner border */}
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/45">
            0{index + 1}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {feature.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/55">
          {feature.description}
        </p>

        <div className="relative mt-5 flex-1">{feature.visual}</div>
      </div>
    </article>
  );
}

/* ---------- Micro-interaction visuals ---------- */

function SpeedVisual() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1.2));
    }, 30);
    return () => clearInterval(id);
  }, []);
  const points = Array.from({ length: 60 }, (_, i) => {
    const x = (i / 59) * 100;
    const y = 50 + Math.sin(i * 0.4 + progress * 0.1) * 18 - (i / 59) * 6;
    return [x, y] as const;
  });
  const path = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="speed-grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="speed-grad-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={`${path} L 100 100 L 0 100 Z`}
          fill="url(#speed-grad-fill)"
          opacity="0.4"
        />
        <path
          d={path}
          fill="none"
          stroke="url(#speed-grad)"
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-widest text-white/50">
        p99 latency
      </div>
      <div className="absolute bottom-3 left-3 flex items-baseline gap-1.5">
        <span className="font-display text-2xl font-semibold text-white">
          12.4
        </span>
        <span className="text-xs text-white/55">ms</span>
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[10px] text-white/40">
        {Math.floor(progress)}%
      </div>
    </div>
  );
}

function AccuracyVisual() {
  const [hover, setHover] = useState<number | null>(null);
  const data = [42, 56, 68, 74, 81, 87, 91, 94, 96, 98];
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40 p-4">
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/45">
        <span>Benchmark suite</span>
        <span className="text-neon-emerald">↑ 18.2%</span>
      </div>
      <div className="mt-3 flex h-28 items-end gap-1.5">
        {data.map((v, i) => (
          <div
            key={i}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="group/bar relative flex-1 cursor-default"
          >
            <div
              className="absolute inset-x-0 bottom-0 rounded-md bg-gradient-to-t from-neon-blue/30 to-neon-blue/80 transition-all duration-500 group-hover/bar:from-neon-purple/40 group-hover/bar:to-neon-purple"
              style={{ height: `${v}%` }}
            />
            {hover === i && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-md bg-white/95 px-1.5 py-0.5 font-mono text-[9px] text-ink-900">
                {v}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-white/40">
        <span>v1.0</span>
        <span>v3.0</span>
      </div>
    </div>
  );
}

function AutomationVisual() {
  const steps = [
    { label: "Plan", done: true },
    { label: "Search", done: true },
    { label: "Write", done: true },
    { label: "Verify", done: false, active: true },
  ];
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40 p-4 font-mono text-[11px]">
      <div className="flex items-center gap-2 text-white/45">
        <span className="h-1.5 w-1.5 rounded-full bg-neon-emerald" />
        agent.run()
      </div>
      <div className="mt-3 space-y-2">
        {steps.map((s, i) => (
          <div
            key={s.label}
            className="flex items-center gap-3"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-md border text-[10px] ${
                s.done
                  ? "border-neon-emerald/50 bg-neon-emerald/10 text-neon-emerald"
                  : s.active
                  ? "border-neon-purple/60 bg-neon-purple/15 text-neon-purple shadow-neon-purple animate-pulse-glow"
                  : "border-white/10 text-white/40"
              }`}
            >
              {s.done ? "✓" : i + 1}
            </span>
            <span
              className={
                s.done
                  ? "text-white/45 line-through decoration-white/20"
                  : s.active
                  ? "text-white"
                  : "text-white/55"
              }
            >
              {s.label}
            </span>
            {s.active && (
              <span className="ml-auto flex items-center gap-1 text-neon-purple">
                <span className="h-1 w-1 animate-pulse rounded-full bg-neon-purple" />
                <span className="text-[10px]">running</span>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScaleVisual() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40 p-4">
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/45">
        <span>Global edge</span>
        <span>live</span>
      </div>
      <div className="relative mt-3 h-28 overflow-hidden">
        <svg viewBox="0 0 200 100" className="absolute inset-0 h-full w-full">
          <defs>
            <radialGradient id="globe" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="50" r="42" fill="url(#globe)" />
          {/* Latitude lines */}
          {[0, 15, 30, 45].map((r) => (
            <ellipse
              key={r}
              cx="100"
              cy="50"
              rx="42"
              ry={r}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.5"
            />
          ))}
          {/* Longitude lines */}
          {[0, 30, 60, 90, 120].map((deg) => (
            <ellipse
              key={deg}
              cx="100"
              cy="50"
              rx={Math.abs(Math.cos((deg * Math.PI) / 180)) * 42}
              ry="42"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.5"
            />
          ))}
          {/* Edge nodes */}
          {[
            { x: 60, y: 30 },
            { x: 140, y: 28 },
            { x: 70, y: 70 },
            { x: 135, y: 72 },
            { x: 100, y: 18 },
            { x: 100, y: 82 },
          ].map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="1.6" fill="#10B981" />
              <circle
                cx={p.x}
                cy={p.y}
                r="3.2"
                fill="none"
                stroke="#10B981"
                strokeWidth="0.4"
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  values="1.6;6;1.6"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0.7;0;0.7"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                />
              </circle>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

function CustomizeVisual() {
  const tokens = [
    "fn",
    "render",
    "(",
    "data",
    ")",
    "=>",
    "{",
    "return",
    "<Nexus",
    "/>",
    "}",
  ];
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40 p-4 font-mono text-[11px]">
      <div className="flex items-center gap-1.5 text-white/45">
        <span className="h-2 w-2 rounded-full bg-neon-purple/70" />
        <span>fine-tune.ipynb</span>
        <span className="ml-auto rounded bg-white/5 px-1.5 py-0.5 text-[9px]">
          live
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {tokens.map((t, i) => (
          <span
            key={i}
            className={`rounded-md border px-1.5 py-0.5 ${
              /[(){}[\]]/.test(t)
                ? "border-white/10 text-white/40"
                : t.startsWith("Nexus")
                ? "border-neon-purple/40 bg-neon-purple/10 text-neon-purple"
                : "border-white/10 bg-white/[0.03] text-white/75"
            }`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <div className="h-full w-2/3 animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(139,92,246,0.7),transparent)] bg-[length:200%_100%]" />
      </div>
      <div className="mt-1.5 flex justify-between text-[9px] text-white/40">
        <span>step 1,284 / 1,920</span>
        <span>loss 0.027</span>
      </div>
    </div>
  );
}
