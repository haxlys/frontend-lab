import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

/**
 * AgentNetwork: a real interactive canvas that visualizes a
 * simulated "AI agent network". Nodes are tasks, edges are
 * live data flow, and a packet moves along edges.
 */
function AgentNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const pointer = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const w = () => canvas.getBoundingClientRect().width;
    const h = () => canvas.getBoundingClientRect().height;

    type Node = { x: number; y: number; vx: number; vy: number; r: number; tier: number };
    const N = 26;
    const nodes: Node[] = Array.from({ length: N }, () => ({
      x: Math.random() * w(),
      y: Math.random() * h(),
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: 1.4 + Math.random() * 1.8,
      tier: Math.floor(Math.random() * 3),
    }));

    type Packet = { from: number; to: number; t: number; speed: number };
    const packets: Packet[] = [];

    const spawn = () => {
      if (nodes.length < 2) return;
      const a = Math.floor(Math.random() * nodes.length);
      let b = Math.floor(Math.random() * nodes.length);
      if (b === a) b = (b + 1) % nodes.length;
      packets.push({ from: a, to: b, t: 0, speed: 0.0035 + Math.random() * 0.004 });
      if (packets.length > 40) packets.shift();
    };
    const spawnInterval = window.setInterval(spawn, 380);

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.current.x = e.clientX - r.left;
      pointer.current.y = e.clientY - r.top;
      pointer.current.active = true;
    };
    const onLeave = () => {
      pointer.current.active = false;
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    const draw = () => {
      const W = w();
      const H = h();
      ctx.clearRect(0, 0, W, H);

      // Update nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 20 || n.x > W - 20) n.vx *= -1;
        if (n.y < 20 || n.y > H - 20) n.vy *= -1;

        // Pointer attraction (subtle)
        if (pointer.current.active) {
          const dx = pointer.current.x - n.x;
          const dy = pointer.current.y - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 14000) {
            const f = (1 - d2 / 14000) * 0.02;
            n.vx += (dx / Math.sqrt(d2 + 1)) * f;
            n.vy += (dy / Math.sqrt(d2 + 1)) * f;
          }
        }
        // Velocity damping
        n.vx *= 0.985;
        n.vy *= 0.985;
      }

      // Edges (nearest neighbours)
      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 9000) {
            const alpha = (1 - d2 / 9000) * 0.18;
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Packets
      for (const p of packets) {
        p.t += reduce ? 0.05 : p.speed;
        if (p.t >= 1) continue;
        const a = nodes[p.from];
        const b = nodes[p.to];
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 14);
        glow.addColorStop(0, "rgba(52, 211, 153, 0.95)");
        glow.addColorStop(0.4, "rgba(16, 185, 129, 0.35)");
        glow.addColorStop(1, "rgba(16, 185, 129, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(220, 252, 231, 1)";
        ctx.beginPath();
        ctx.arc(x, y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Nodes
      for (const n of nodes) {
        const isNearPointer =
          pointer.current.active &&
          (n.x - pointer.current.x) ** 2 + (n.y - pointer.current.y) ** 2 < 5000;
        const fill = isNearPointer ? "rgba(52, 211, 153, 0.9)" : "rgba(16, 185, 129, 0.5)";
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduce) rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      window.clearInterval(spawnInterval);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}

/**
 * AgentNetworkPanel: the visual panel that wraps the canvas with
 * glassmorphism, labels, and live status meta.
 */
function AgentNetworkPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-5xl"
    >
      {/* Glow underneath */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-20 -inset-y-10 -z-10"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(16,185,129,0.22), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="glow-border glass-strong relative overflow-hidden rounded-2xl">
        {/* Top status bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            </div>
            <span className="ml-2 hidden font-mono text-[10.5px] uppercase tracking-[0.22em] text-zinc-500 sm:inline">
              agent_runtime / live
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow live-dot" />
            <span className="text-zinc-300">26 agents</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-300">1,284 tasks/min</span>
            <span className="text-zinc-600">·</span>
            <span className="text-emerald-glow">healthy</span>
          </div>
        </div>

        {/* Canvas */}
        <div className="relative h-[340px] sm:h-[420px] md:h-[480px]">
          <AgentNetwork />
          {/* Faint grid overlay */}
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
          {/* Top + bottom edge fade so it blends */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ink-2/80 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink-2/80 to-transparent" />

          {/* Floating tag — top left */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md border border-white/[0.08] bg-ink-2/70 px-2.5 py-1.5 font-mono text-[10.5px] text-zinc-300 backdrop-blur sm:left-6 sm:top-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow" />
            ingest.pipeline
          </div>
          {/* Floating tag — bottom right */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-md border border-white/[0.08] bg-ink-2/70 px-2.5 py-1.5 font-mono text-[10.5px] text-zinc-300 backdrop-blur sm:bottom-6 sm:right-6">
            <span className="text-emerald-glow">→</span> respond.model
          </div>
        </div>

        {/* Bottom metric strip */}
        <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-t border-white/[0.06]">
          {[
            { k: "p50 latency", v: "38ms" },
            { k: "tokens / sec", v: "184k" },
            { k: "uptime", v: "99.992%" },
          ].map((m) => (
            <div key={m.k} className="px-4 py-3 sm:px-5">
              <div className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-zinc-500">
                {m.k}
              </div>
              <div className="mt-1 font-mono text-base text-bone sm:text-lg">{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Below the panel: small inline note (single source of trust) */}
      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-zinc-500">
        <span className="h-1 w-1 rounded-full bg-emerald-glow" />
        All metrics are streamed from the live control plane.
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
      {/* Background atmosphere */}
      <div className="absolute inset-0 -z-10 aurora" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow — counted as 1 of max 2 for the page */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 backdrop-blur"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-glow opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-glow" />
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-zinc-300">
              Series C · now generally available
            </span>
            <svg className="h-3 w-3 text-zinc-500 transition-transform group-hover:translate-x-0.5" viewBox="0 0 12 12" fill="none">
              <path d="M3 6h6m-2-2 2 2-2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          {/* Headline — single line on desktop, controlled scale */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="mt-7 max-w-5xl text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1.02]"
          >
            Intelligence that{" "}
            <span className="relative inline-block">
              <span className="gradient-emerald">runs itself.</span>
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-1.5 left-0 w-full text-emerald-glow/70"
                fill="none"
              >
                <path
                  d="M2 9 Q 50 1, 100 6 T 198 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtext — under 20 words, single function sentence */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="mt-6 max-w-2xl text-pretty text-base text-zinc-400 sm:text-lg"
          >
            Aperture deploys autonomous agents that observe, decide, and ship work
            across your operations — 24/7, audited, on your infrastructure.
          </motion.p>

          {/* CTAs — single primary, single secondary */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-3"
          >
            <a
              href="#cta"
              className="cta-halo group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-emerald-glow px-6 py-3 text-sm font-medium text-[#00150E] shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">Start a 14-day pilot</span>
              <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#workflow"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-medium text-zinc-200 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M6.5 5.5 11 8l-4.5 2.5z" fill="currentColor" />
              </svg>
              Watch the 90-second tour
            </a>
          </motion.div>
        </motion.div>

        {/* Spacer + interactive canvas panel */}
        <div className="mt-16 sm:mt-20">
          <AgentNetworkPanel />
        </div>

        {/* Hide the rest below the fold */}
        {reduce && null}
      </div>
    </section>
  );
}
