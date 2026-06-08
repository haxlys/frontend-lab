import { useEffect, useRef, useCallback } from "react";

export function useMouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!glowRef.current) return;
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    glowRef.current.style.background = `radial-gradient(
      600px circle at ${x}% ${y}%,
      rgba(139, 92, 246, 0.07),
      rgba(59, 130, 246, 0.04) 30%,
      transparent 60%
    )`;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return glowRef;
}
