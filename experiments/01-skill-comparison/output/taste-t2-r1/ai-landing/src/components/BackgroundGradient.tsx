import { useEffect, useRef } from "react";

export default function BackgroundGradient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = (x: number, y: number) => {
      el.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(139,92,246,0.12) 0%, rgba(59,130,246,0.06) 35%, transparent 70%), radial-gradient(circle at 60% 40%, rgba(16,185,129,0.06) 0%, transparent 50%)`;
    };

    const handleMove = (e: MouseEvent) => {
      update(
        (e.clientX / window.innerWidth) * 100,
        (e.clientY / window.innerHeight) * 100,
      );
    };

    update(50, 50);
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div ref={ref} className="fixed inset-0 pointer-events-none z-0" />;
}
