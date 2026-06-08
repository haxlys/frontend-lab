import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

export function PointerGlow() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-800);
  const y = useMotionValue(-800);

  const sx = useSpring(x, { stiffness: 50, damping: 22, mass: 0.9 });
  const sy = useSpring(y, { stiffness: 50, damping: 22, mass: 0.9 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y, reduce]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          width: 900,
          height: 900,
          background:
            "radial-gradient(closest-side, rgba(16,185,129,0.16), rgba(139,92,246,0.07) 38%, transparent 70%)",
          filter: "blur(48px)",
          opacity: reduce ? 0 : 1,
        }}
      />
    </motion.div>
  );
}
