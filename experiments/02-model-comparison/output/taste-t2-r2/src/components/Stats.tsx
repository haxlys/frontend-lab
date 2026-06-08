import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => {
    if (to >= 1000) return Math.round(v).toLocaleString();
    if (Number.isInteger(to)) return Math.round(v).toString();
    return v.toFixed(1);
  });
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, value, to]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { v: 99.992, suf: "%", k: "runtime uptime", sub: "across 14 regions, last 12 months" },
    { v: 38, suf: "ms", k: "median decision", sub: "p50 from event to action" },
    { v: 1240, suf: " ops/sec", k: "peak throughput", sub: "sustained, no warmup" },
    { v: 96, suf: "%", k: "auto-resolved", sub: "of routed workflows" },
  ];

  return (
    <section id="stats" className="relative border-t border-white/[0.05] py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.05] tracking-[-0.025em] sm:text-4xl md:col-span-7 md:text-5xl">
            The numbers behind the
            <span className="gradient-emerald"> quiet </span>
            operations floor.
          </h2>
          <p className="text-sm text-zinc-400 md:col-span-5 md:text-base">
            Pulled from the public status page, refreshed daily. No cherry-picked
            case studies — these are production medians, not press-release peaks.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-ink p-6 sm:p-8"
            >
              <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-zinc-500">
                {s.k}
              </div>
              <div className="mt-6 flex items-baseline gap-1 text-4xl font-medium tracking-[-0.03em] text-bone sm:text-5xl">
                <Counter to={s.v} suffix={s.suf} />
              </div>
              <div className="mt-3 text-xs text-zinc-500">{s.sub}</div>
              {/* subtle shimmer line */}
              <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px overflow-hidden">
                <div className="shimmer h-px w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
