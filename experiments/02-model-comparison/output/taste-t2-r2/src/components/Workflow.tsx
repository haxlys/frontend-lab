import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

const steps = [
  {
    n: "01",
    title: "Connect",
    body: "Point Aperture at your data sources — CRMs, warehouses, inboxes, support desks. Read-only, scoped, audited.",
    visual: "connect",
  },
  {
    n: "02",
    title: "Define",
    body: "Declare the work in plain YAML. Triggers, actions, guardrails. No black-box prompt engineering.",
    visual: "define",
  },
  {
    n: "03",
    title: "Supervise",
    body: "Watch the runtime in the live console. Approve, refine, escalate — or hand off entirely to the agent.",
    visual: "supervise",
  },
  {
    n: "04",
    title: "Scale",
    body: "Once a workflow is trusted, raise the autonomy level. Aperture handles the load. You keep the receipts.",
    visual: "scale",
  },
];

function StepVisual({ kind }: { kind: string }) {
  if (kind === "connect") {
    return (
      <svg viewBox="0 0 320 200" className="h-44 w-full">
        {[
          { x: 30, y: 50, l: "CRM" },
          { x: 30, y: 110, l: "DB" },
          { x: 30, y: 170, l: "Mail" },
        ].map((s, i) => (
          <g key={i}>
            <rect
              x={s.x}
              y={s.y - 18}
              width="80"
              height="32"
              rx="8"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
            />
            <text x={s.x + 40} y={s.y + 3} textAnchor="middle" fontSize="11" fill="#A1A1AA" fontFamily="ui-monospace">
              {s.l}
            </text>
            <line
              x1={s.x + 80}
              y1={s.y}
              x2="220"
              y2="100"
              stroke="#10B981"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.5"
            />
          </g>
        ))}
        <rect
          x="220"
          y="70"
          width="80"
          height="60"
          rx="12"
          fill="rgba(16,185,129,0.08)"
          stroke="rgba(16,185,129,0.4)"
        />
        <circle cx="260" cy="100" r="4" fill="#10B981" />
        <text x="260" y="120" textAnchor="middle" fontSize="9" fill="#10B981" fontFamily="ui-monospace" letterSpacing="2">
          APERTURE
        </text>
      </svg>
    );
  }
  if (kind === "define") {
    return (
      <pre className="h-44 w-full overflow-hidden rounded-lg border border-white/[0.06] bg-ink p-4 font-mono text-[11px] leading-relaxed text-zinc-300">
{`workflow:
  name: invoice-router
  trigger:
    type: email.invoice
  steps:
    - extract.fields
    - validate.erp_match
    - route.finance
  guardrails:
    - amount_max: 50_000
    - require_human_over: 10_000
`}
      </pre>
    );
  }
  if (kind === "supervise") {
    return (
      <div className="flex h-44 w-full flex-col gap-1.5 rounded-lg border border-white/[0.06] bg-ink p-4">
        {[
          { t: "approve", c: "10:42:08", s: "ok" },
          { t: "review · contract #4421", c: "10:41:55", s: "review" },
          { t: "reconcile · q3 ledger", c: "10:41:31", s: "ok" },
          { t: "flag · duplicate vendor", c: "10:40:58", s: "flag" },
          { t: "route · APAC desk", c: "10:40:22", s: "ok" },
        ].map((e, i) => (
          <div key={i} className="flex items-center justify-between border-b border-white/[0.04] pb-1.5 last:border-b-0 last:pb-0">
            <div className="flex items-center gap-2.5">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  e.s === "ok"
                    ? "bg-emerald-glow"
                    : e.s === "review"
                      ? "bg-amber-300"
                      : "bg-rose-400"
                }`}
              />
              <span className="text-[11px] text-zinc-300">{e.t}</span>
            </div>
            <span className="font-mono text-[10px] text-zinc-500">{e.c}</span>
          </div>
        ))}
      </div>
    );
  }
  // scale
  return (
    <div className="grid h-44 w-full grid-cols-2 grid-rows-2 gap-2">
      {[
        { k: "Throughput", v: "1.2M/day" },
        { k: "Auto-resolved", v: "94.7%" },
        { k: "Human touches", v: "5.3%" },
        { k: "Cost / task", v: "$0.003" },
      ].map((m) => (
        <div
          key={m.k}
          className="flex flex-col justify-center rounded-lg border border-white/[0.06] bg-ink p-3"
        >
          <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-zinc-500">
            {m.k}
          </span>
          <span className="mt-1.5 font-mono text-lg text-bone sm:text-xl">{m.v}</span>
        </div>
      ))}
    </div>
  );
}

export default function Workflow() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Use Motion's transform on the track's x position
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section
      id="workflow"
      ref={sectionRef}
      className="relative bg-ink-2"
      // Height gives us scroll length for the horizontal pan
      style={{ height: reduce ? "auto" : "300vh" }}
    >
      <div className="sticky top-0 flex h-[100dvh] flex-col overflow-hidden">
        {/* Section header */}
        <div className="mx-auto w-full max-w-7xl px-5 pb-8 pt-24 sm:px-8 sm:pt-28">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              {/* Eyebrow #2 (max 2 of 3+ for the page) */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-glow/30 bg-emerald-glow/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow live-dot" />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-emerald-glow">
                  How it runs
                </span>
              </div>
              <h2 className="max-w-3xl text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-4xl md:text-5xl">
                From inbox to audit log
                <br className="hidden sm:block" /> in four steps.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-zinc-400 sm:text-base">
              A real workflow, end to end. No magic. Every step is observable,
              reversible, and exportable.
            </p>
          </div>
        </div>

        {/* Track */}
        <div className="relative flex-1">
          <motion.div
            ref={trackRef}
            style={{ x: reduce ? 0 : x }}
            className="flex h-full items-center gap-6 px-5 sm:gap-10 sm:px-8"
          >
            {steps.map((s) => (
              <article
                key={s.n}
                className="relative grid h-[440px] w-[80vw] shrink-0 grid-cols-1 gap-6 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:w-[640px] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-zinc-500">
                    Step {s.n}
                  </span>
                  <span className="font-mono text-[10.5px] text-zinc-600">/04</span>
                </div>
                <h3 className="text-balance text-2xl font-medium leading-[1.1] tracking-[-0.02em] sm:text-3xl">
                  {s.title}
                </h3>
                <p className="max-w-md text-sm text-zinc-400 sm:text-base">{s.body}</p>
                <div className="self-end">
                  <StepVisual kind={s.visual} />
                </div>
              </article>
            ))}

            {/* Terminal card — closing thought */}
            <article className="relative grid h-[440px] w-[80vw] shrink-0 grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-emerald-glow/30 bg-gradient-to-br from-emerald-glow/[0.08] to-transparent p-6 sm:w-[640px] sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(16,185,129,0.30), transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-emerald-glow">
                  Outcome
                </span>
                <span className="font-mono text-[10.5px] text-zinc-500">/end</span>
              </div>
              <h3 className="text-balance text-2xl font-medium leading-[1.1] tracking-[-0.02em] sm:text-3xl">
                Operations that compound, not pile up.
              </h3>
              <p className="max-w-md text-sm text-zinc-300 sm:text-base">
                The first workflow ships in a week. The hundredth ships in a
                quarter. That's the actual product.
              </p>
              <a
                href="#cta"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-bone px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
              >
                See it in your stack
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>
          </motion.div>
        </div>

        {/* Scroll hint — at end of section, decorative */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-zinc-500">
          scroll to advance
        </div>
      </div>
    </section>
  );
}
