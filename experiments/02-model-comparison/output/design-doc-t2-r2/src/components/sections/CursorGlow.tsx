import { useMousePosition } from "../../hooks/useMousePosition.ts";

export function CursorGlow() {
  const { x, y } = useMousePosition();
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
    >
      <div
        className="absolute h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 mix-blend-screen blur-3xl"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.28) 0%, rgba(59,130,246,0.18) 35%, rgba(16,185,129,0.0) 65%)",
        }}
      />
    </div>
  );
}
