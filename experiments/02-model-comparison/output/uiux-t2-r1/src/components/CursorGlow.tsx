import { useEffect, useRef } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.setProperty('--mx', `${x}px`);
    ref.current.style.setProperty('--my', `${y}px`);
  }, [x, y]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 transition-[--mx,--my] duration-300"
      style={{
        background:
          'radial-gradient(520px circle at var(--mx, 50%) var(--my, 30%), rgba(139,92,246,0.10), rgba(59,130,246,0.04) 40%, transparent 70%)',
      }}
    />
  );
}
