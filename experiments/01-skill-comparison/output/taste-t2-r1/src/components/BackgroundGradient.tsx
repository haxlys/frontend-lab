import { useEffect, useRef } from "react";
import { useMotionValue, useMotionTemplate } from "motion/react";

export default function BackgroundGradient() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const background = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(139,92,246,0.12) 0%, rgba(59,130,246,0.06) 35%, transparent 70%), radial-gradient(circle at ${100 - mouseX}% ${100 - mouseY}%, rgba(16,185,129,0.06) 0%, transparent 50%)`;

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x * 100);
      mouseY.set(y * 100);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background }}
    />
  );
}
