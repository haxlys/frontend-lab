import { useEffect, useRef, useState } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let lastEvent: MouseEvent | null = null;

    const update = () => {
      if (lastEvent) {
        setPosition({ x: lastEvent.clientX, y: lastEvent.clientY });
        lastEvent = null;
      }
      rafRef.current = null;
    };

    const handleMove = (e: MouseEvent) => {
      lastEvent = e;
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return position;
}
