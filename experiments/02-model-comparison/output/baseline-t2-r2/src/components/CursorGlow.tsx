import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      const dx = target.current.x - current.current.x
      const dy = target.current.y - current.current.y
      current.current.x += dx * 0.12
      current.current.y += dy * 0.12
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`
      }
      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', handleMove)
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div
        ref={ref}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[640px] w-[640px] md:block"
        style={{ willChange: 'transform' }}
      >
        <div
          className="h-full w-full rounded-full opacity-70"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(59,130,246,0.10) 35%, transparent 65%)',
            filter: 'blur(20px)',
          }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(139,92,246,0.06), transparent 50%)',
        }}
      />
    </>
  )
}
