import { useEffect, useRef } from 'react'

/**
 * An abstract, interactive WebGL-like canvas rendered with 2D canvas
 * to keep the bundle small. It draws a particle-neural field that
 * reacts to the pointer — meant to feel like "watching the AI think".
 */
export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const pointer = useRef({ x: 0, y: 0, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapperRef.current
    if (!canvas || !wrap) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0

    type P = { x: number; y: number; vx: number; vy: number; r: number; hue: number }
    let particles: P[] = []

    const resize = () => {
      const rect = wrap.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(140, Math.floor((w * h) / 9000))
      particles = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
        hue: Math.random() < 0.5 ? 265 : 220,
      }))
    }

    const onPointer = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect()
      pointer.current.x = e.clientX - rect.left
      pointer.current.y = e.clientY - rect.top
      pointer.current.active = true
    }
    const onLeave = () => (pointer.current.active = false)

    resize()
    window.addEventListener('resize', resize)
    wrap.addEventListener('pointermove', onPointer)
    wrap.addEventListener('pointerleave', onLeave)

    let raf = 0
    const tick = () => {
      ctx.clearRect(0, 0, w, h)

      // Pointer halo
      if (pointer.current.active) {
        const grad = ctx.createRadialGradient(
          pointer.current.x,
          pointer.current.y,
          0,
          pointer.current.x,
          pointer.current.y,
          160
        )
        grad.addColorStop(0, 'rgba(139, 92, 246, 0.35)')
        grad.addColorStop(1, 'rgba(139, 92, 246, 0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(pointer.current.x, pointer.current.y, 160, 0, Math.PI * 2)
        ctx.fill()
      }

      // Particles + connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        // Pointer attraction
        if (pointer.current.active) {
          const dx = pointer.current.x - p.x
          const dy = pointer.current.y - p.y
          const d2 = dx * dx + dy * dy
          if (d2 < 18000) {
            const f = 0.6 / Math.sqrt(d2 + 1)
            p.vx += dx * f * 0.01
            p.vy += dy * f * 0.01
          }
        }

        // Damp
        p.vx *= 0.985
        p.vy *= 0.985

        ctx.beginPath()
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, 0.9)`
        ctx.shadowBlur = 12
        ctx.shadowColor = `hsla(${p.hue}, 90%, 70%, 0.7)`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d2 = dx * dx + dy * dy
          if (d2 < 12000) {
            const alpha = 1 - d2 / 12000
            ctx.strokeStyle = `hsla(${(p.hue + q.hue) / 2}, 80%, 65%, ${alpha * 0.35})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      wrap.removeEventListener('pointermove', onPointer)
      wrap.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="relative h-full w-full overflow-hidden rounded-3xl"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-neon-purple/30 blur-[100px] animate-pulse-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-neon-blue/30 blur-[100px] animate-pulse-glow"
      />
      {/* Scan line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-purple/80 to-transparent"
      />
    </div>
  )
}
