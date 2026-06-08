import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring } from 'motion/react'

export function MouseGradient() {
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const springX = useSpring(x, { stiffness: 60, damping: 30 })
  const springY = useSpring(y, { stiffness: 60, damping: 30 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const w = window.innerWidth
      const h = window.innerHeight
      x.set(e.clientX / w)
      y.set(e.clientY / h)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const unsubX = springX.on('change', (v) => {
      el.style.setProperty('--mx', String(v))
    })
    const unsubY = springY.on('change', (v) => {
      el.style.setProperty('--my', String(v))
    })

    return () => {
      unsubX()
      unsubY()
    }
  }, [springX, springY])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={
        {
          background: `
            radial-gradient(600px circle at calc(var(--mx, 0.5) * 100%) calc(var(--my, 0.5) * 100%),
              rgba(139, 92, 246, 0.08) 0%,
              rgba(59, 130, 246, 0.04) 35%,
              transparent 70%
            )
          `,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(800px circle at 50% 0%,
              rgba(139, 92, 246, 0.06) 0%,
              transparent 60%
            ),
            radial-gradient(600px circle at 80% 80%,
              rgba(16, 185, 129, 0.04) 0%,
              transparent 60%
            )
          `,
        }}
      />
    </div>
  )
}
