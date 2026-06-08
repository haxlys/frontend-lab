import { motion, useMotionValue, useTransform } from "motion/react";
import { useRef } from "react";

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const tx = useTransform(x, (v) => v * 0.25);
  const ty = useTransform(y, (v) => v * 0.25);

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set(e.clientX - (r.left + r.width / 2));
    y.set(e.clientY - (r.top + r.height / 2));
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x: tx, y: ty }}
      href="#"
      className="cta-halo group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-emerald-glow px-7 py-3.5 text-base font-medium text-[#00150E] shadow-[0_20px_60px_-10px_rgba(16,185,129,0.6)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
    >
      <span className="relative z-10">{children}</span>
      <svg
        className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
    </motion.a>
  );
}

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-white/[0.05] py-24 sm:py-32">
      {/* aurora background */}
      <div className="absolute inset-0 -z-10 aurora" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="glow-border glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-14 md:p-20">
          {/* big corner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(16,185,129,0.40), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(16,185,129,0.20), transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="text-balance text-4xl font-medium leading-[1.02] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl">
                Stop hiring for the
                <br />
                <span className="gradient-emerald">repetitive.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base text-zinc-300 sm:text-lg">
                Spin up a pilot in 14 days. If Aperture doesn't pay back its
                seat in the first month, we'll help you wind it down — no
                contract gymnastics.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
              <MagneticButton>Talk to engineering</MagneticButton>
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <span className="flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-emerald-glow opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-glow" />
                </span>
                Reply within 1 business day · no SDR funnel
              </div>
            </div>
          </div>

          {/* Sub row: small trust strip — single line, no logo wall */}
          <div className="relative mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.06] pt-6 text-xs text-zinc-500">
            <span className="font-mono uppercase tracking-[0.22em]">SOC 2</span>
            <span className="font-mono uppercase tracking-[0.22em]">ISO 27001</span>
            <span className="font-mono uppercase tracking-[0.22em]">HIPAA-ready</span>
            <span className="font-mono uppercase tracking-[0.22em]">EU / US / APAC data residency</span>
          </div>
        </div>
      </div>
    </section>
  );
}
