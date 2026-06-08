import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useMotionTemplate, useReducedMotion } from 'motion/react'

/**
 * Fixed full-viewport gradient that follows the pointer.
 * Uses Motion values (no React re-renders on every move).
 * Disabled under prefers-reduced-motion (snaps to a static center aura).
 */
export default function CursorField() {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 50, damping: 18, mass: 0.9 })
  const sy = useSpring(y, { stiffness: 50, damping: 18, mass: 0.9 })
  const target = useRef({ x: 0, y: 0, raf: 0 })

  useEffect(() => {
    if (reduce) {
      x.set(typeof window !== 'undefined' ? window.innerWidth / 2 : 0)
      y.set(typeof window !== 'undefined' ? window.innerHeight / 3 : 0)
      return
    }
    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y, reduce])

  useEffect(() => {
    if (reduce) return
    let alive = true
    const tick = () => {
      if (!alive) return
      x.set(target.current.x)
      y.set(target.current.y)
      target.current.raf = requestAnimationFrame(tick)
    }
    target.current.raf = requestAnimationFrame(tick)
    return () => {
      alive = false
      cancelAnimationFrame(target.current.raf)
    }
  }, [x, y, reduce])

  const background = useMotionTemplate`radial-gradient(560px 560px at ${sx}px ${sy}px,
      rgba(139, 92, 246, 0.22),
      rgba(99, 102, 241, 0.10) 35%,
      rgba(34, 211, 238, 0.04) 55%,
      transparent 70%)`

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background }}
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% -10%, transparent 40%, rgba(11,11,15,0.55) 75%, #0B0B0F 100%)',
        }}
      />
    </motion.div>
  )
}
