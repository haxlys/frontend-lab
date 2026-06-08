import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: Variant;
  href: string;
}

export function MagneticButton({ children, variant = "primary", href }: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = e.clientX - (r.left + r.width / 2);
      const py = e.clientY - (r.top + r.height / 2);
      x.set(px * 0.18);
      y.set(py * 0.18);
    };
    const onLeave = () => {
      x.set(0);
      y.set(0);
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [x, y, reduce]);

  const base =
    "group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-full px-5 font-sans text-[13.5px] font-medium transition-colors active:scale-[0.98]";
  const styles: Record<Variant, string> = {
    primary:
      "text-ink-950 bg-ink-0 hover:text-ink-0",
    ghost:
      "text-ink-100 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]",
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles[variant]}`}
    >
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(120deg, #ecfdf5 0%, #6ee7b7 40%, #34d399 70%, #a7f3d0 100%)",
          }}
        />
      )}
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-90"
          style={{ background: "radial-gradient(closest-side, rgba(16,185,129,0.6), transparent 70%)" }}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.a>
  );
}
