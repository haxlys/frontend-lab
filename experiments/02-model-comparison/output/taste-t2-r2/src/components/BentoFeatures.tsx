import { motion } from "motion/react";
import { type ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const cell = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/* ----- Cell visuals (each one is a real visual, not text in a box) ----- */

function LiveLatencyChart() {
  // A tiny animated SVG line chart
  return (
    <div className="relative h-40 w-full overflow-hidden">
      <svg viewBox="0 0 400 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* gridlines */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1="0"
            x2="400"
            y1={i * 35 + 5}
            y2={i * 35 + 5}
            stroke="rgba(255,255,255,0.05)"
            strokeDasharray="2 4"
          />
        ))}
        {/* area fill */}
        <path
          d="M0,90 L40,82 L80,86 L120,70 L160,72 L200,55 L240,58 L280,40 L320,46 L360,30 L400,36 L400,140 L0,140 Z"
          fill="url(#lg)"
        />
        {/* line */}
        <path
          d="M0,90 L40,82 L80,86 L120,70 L160,72 L200,55 L240,58 L280,40 L320,46 L360,30 L400,36"
          fill="none"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* end dot */}
        <circle cx="400" cy="36" r="3.5" fill="#10B981" />
        <circle cx="400" cy="36" r="6" fill="#10B981" opacity="0.3" className="live-dot" />
      </svg>
    </div>
  );
}

function CodePreview() {
  return (
    <pre className="overflow-hidden rounded-lg border border-white/[0.06] bg-ink p-4 font-mono text-[11px] leading-relaxed text-zinc-300 sm:text-[12px]">
      <code>
        <span className="text-zinc-500">{"// agent.yml"}</span>{"\n"}
        <span className="text-emerald-glow">agent</span>: <span className="text-amber-200">invoice-router</span>
        {"\n"}<span className="text-emerald-glow">model</span>: aperture-3-large{"\n"}
        <span className="text-emerald-glow">triggers</span>:{"\n"}
        {"  "}- email.invoice@*{"\n"}
        {"  "}- webhook.stripe.paid{"\n"}
        <span className="text-emerald-glow">actions</span>:{"\n"}
        {"  "}- extract.line_items{"\n"}
        {"  "}- reconcile.erp{"\n"}
        {"  "}- notify.finance@team{"\n"}
        <span className="text-zinc-500">{"# runs every 38ms median"}</span>
      </code>
    </pre>
  );
}

function WorldMapDots() {
  // Abstracted continent-dot map
  const points: [number, number][] = [
    [80, 70], [110, 80], [140, 75], [170, 85], [200, 78], [220, 95], [260, 88],
    [55, 95], [80, 110], [120, 105], [160, 115], [200, 108], [240, 118],
    [70, 50], [100, 60], [130, 55], [180, 50], [220, 58], [260, 60], [300, 65],
  ];
  return (
    <div className="relative h-40 w-full">
      <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full">
        {/* globe arcs */}
        {[
          "M30,80 Q180,20 330,80",
          "M30,80 Q180,140 330,80",
          "M30,80 Q180,30 330,80",
          "M30,80 Q180,130 330,80",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.6"
          />
        ))}
        {points.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="1.6" fill="#10B981" />
            <circle cx={x} cy={y} r="3" fill="#10B981" opacity="0.18" />
          </g>
        ))}
        {/* connection lines */}
        <line x1="80" y1="70" x2="220" y2="58" stroke="rgba(16,185,129,0.35)" strokeWidth="0.6" strokeDasharray="2 3" />
        <line x1="200" y1="78" x2="120" y2="105" stroke="rgba(16,185,129,0.35)" strokeWidth="0.6" strokeDasharray="2 3" />
        <line x1="260" y1="88" x2="180" y2="50" stroke="rgba(16,185,129,0.35)" strokeWidth="0.6" strokeDasharray="2 3" />
      </svg>
    </div>
  );
}

function StatTile({
  k,
  v,
  sub,
  size = "sm",
}: {
  k: string;
  v: string;
  sub?: string;
  size?: "sm" | "lg";
}) {
  return (
    <div className="flex flex-col">
      <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-zinc-500">
        {k}
      </span>
      <span
        className={`mt-2 font-medium tracking-[-0.02em] text-bone ${
          size === "lg" ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
        }`}
      >
        {v}
      </span>
      {sub && <span className="mt-1 text-xs text-zinc-500">{sub}</span>}
    </div>
  );
}

function MarqueeStrip() {
  const items = [
    "GDPR",
    "SOC 2 Type II",
    "ISO 27001",
    "HIPAA-ready",
    "Data residency · EU / US / APAC",
    "Zero-retention mode",
    "On-prem deploy",
    "Audit log API",
  ];
  return (
    <div className="relative overflow-hidden">
      <div className="ticker-track flex w-max gap-10 py-1 text-sm text-zinc-400">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-emerald-glow" />
            <span>{t}</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-ink-2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-ink-2 to-transparent" />
    </div>
  );
}

/* ----- Bento cells ----- */

function Cell({
  children,
  className = "",
  glow = false,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <motion.div
      variants={cell}
      className={`glow-border glass relative overflow-hidden rounded-2xl p-6 sm:p-7 ${className}`}
    >
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(16,185,129,0.30), transparent 70%)",
            filter: "blur(30px)",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

export default function BentoFeatures() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* No eyebrow here — section 2 of 5, eyebrow budget used by hero */}
        <div className="mb-14 flex flex-col items-start gap-6 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-3xl text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-4xl md:text-5xl">
            Built for the work that
            <br className="hidden sm:block" /> actually has to ship.
          </h2>
          <p className="max-w-md text-sm text-zinc-400 sm:text-base">
            Six primitives, one runtime. Drop them in, point them at your systems,
            and watch the queue drain.
          </p>
        </div>

        {/* Bento: 5 cells, asymmetric 12-col grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 md:grid-cols-12 md:gap-5"
        >
          {/* Cell 1 — Speed: 7 cols, large with live chart */}
          <Cell className="md:col-span-7" glow>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-emerald-glow">
                01 · Speed
              </span>
              <span className="font-mono text-[10.5px] text-zinc-500">
                last 24h · live
              </span>
            </div>
            <h3 className="mt-6 max-w-md text-balance text-2xl font-medium leading-[1.15] tracking-[-0.02em] sm:text-3xl">
              Sub-50ms decisions at production scale.
            </h3>
            <p className="mt-3 max-w-md text-sm text-zinc-400">
              The Aperture runtime keeps a hot path between your events and the
              model — no queue, no cold start, no surprises.
            </p>
            <div className="mt-6">
              <LiveLatencyChart />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 border-t border-white/[0.06] pt-4">
              <StatTile k="p50" v="38ms" />
              <StatTile k="p99" v="112ms" />
              <StatTile k="cold start" v="0" sub="ms — always warm" />
            </div>
          </Cell>

          {/* Cell 2 — Accuracy: 5 cols, gradient mesh visual */}
          <Cell className="md:col-span-5">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-zinc-500">
              02 · Accuracy
            </span>
            <h3 className="mt-6 text-balance text-2xl font-medium leading-[1.15] tracking-[-0.02em] sm:text-3xl">
              Verified, not vibes.
            </h3>
            <p className="mt-3 text-sm text-zinc-400">
              Every decision ships with a chain of evidence you can replay.
            </p>
            {/* Aurora mesh */}
            <div className="relative mt-6 h-44 overflow-hidden rounded-xl border border-white/[0.06]">
              <div className="absolute inset-0 aurora" />
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
                {[
                  { k: "Recall", v: "0.984" },
                  { k: "Precision", v: "0.991" },
                  { k: "Hallucinations", v: "0.3%" },
                  { k: "Audited events", v: "100%" },
                  { k: "Reproducible", v: "yes" },
                  { k: "Replay", v: "1-click" },
                ].map((m) => (
                  <div
                    key={m.k}
                    className="flex flex-col justify-center border-r border-b border-white/[0.05] px-4 last:border-r-0"
                  >
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-zinc-400">
                      {m.k}
                    </span>
                    <span className="mt-1.5 font-mono text-base text-bone">{m.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Cell>

          {/* Cell 3 — Code block: 5 cols */}
          <Cell className="md:col-span-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-zinc-500">
                03 · Configuration
              </span>
              <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-zinc-400">
                declarative
              </span>
            </div>
            <h3 className="mt-5 text-balance text-2xl font-medium leading-[1.15] tracking-[-0.02em] sm:text-3xl">
              One file. Every workflow.
            </h3>
            <p className="mt-3 text-sm text-zinc-400">
              Versioned, diffable, reviewable. No black-box prompt soup.
            </p>
            <div className="mt-5">
              <CodePreview />
            </div>
          </Cell>

          {/* Cell 4 — Global map: 4 cols */}
          <Cell className="md:col-span-4">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-zinc-500">
              04 · Global by default
            </span>
            <h3 className="mt-5 text-balance text-2xl font-medium leading-[1.15] tracking-[-0.02em] sm:text-3xl">
              14 regions. One control plane.
            </h3>
            <div className="mt-5">
              <WorldMapDots />
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow live-dot" />
              Active nodes in 14 regions · failover &lt; 4s
            </div>
          </Cell>

          {/* Cell 5 — Trust marquee: 3 cols */}
          <Cell className="md:col-span-3">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-zinc-500">
              05 · Trust
            </span>
            <h3 className="mt-5 text-balance text-xl font-medium leading-[1.2] tracking-[-0.02em] sm:text-2xl">
              Audited at the boundary.
            </h3>
            <div className="mt-5 -mx-6 sm:-mx-7">
              <MarqueeStrip />
            </div>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-emerald-glow transition-colors hover:text-emerald-300"
            >
              Read the security brief
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Cell>
        </motion.div>
      </div>
    </section>
  );
}
