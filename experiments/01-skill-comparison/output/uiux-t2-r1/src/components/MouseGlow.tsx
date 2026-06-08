import { useEffect, useRef, useCallback } from 'react';

export default function MouseGlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0.5, y: 0.5 });

  const animate = useCallback(() => {
    const { x: tx, y: ty } = targetRef.current;
    posRef.current.x += (tx - posRef.current.x) * 0.08;
    posRef.current.y += (ty - posRef.current.y) * 0.08;

    if (containerRef.current) {
      containerRef.current.style.setProperty('--mouse-x', `${posRef.current.x * 100}%`);
      containerRef.current.style.setProperty('--mouse-y', `${posRef.current.y * 100}%`);
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX / window.innerWidth;
      targetRef.current.y = e.clientY / window.innerHeight;
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className="mouse-glow"
      aria-hidden="true"
    />
  );
}
