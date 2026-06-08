import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export function PointerGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 90, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 90, damping: 22, mass: 0.6 });
  const background = useTransform(
    [sx, sy],
    ([mx, my]) =>
      `radial-gradient(540px 540px at ${mx}px ${my}px, color-mix(in oklab, var(--color-volt-500) 22%, transparent), transparent 70%)`,
  );

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ background }}
    />
  );
}
