import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  hue: number
  baseX: number
  baseY: number
}

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number>(0)
  const pointerRef = useRef({ x: -1000, y: -1000, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let particles: Particle[] = []
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const colors = [
      { h: 265, s: 80, l: 65 },
      { h: 217, s: 90, l: 60 },
      { h: 158, s: 80, l: 50 },
    ]

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      init()
    }

    const init = () => {
      const count = Math.min(90, Math.floor((width * height) / 14000))
      particles = Array.from({ length: count }, () => {
        const x = Math.random() * width
        const y = Math.random() * height
        const c = colors[Math.floor(Math.random() * colors.length)]
        return {
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.6 + 0.6,
          hue: c.h,
        }
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        if (pointerRef.current.active) {
          const dx = p.x - pointerRef.current.x
          const dy = p.y - pointerRef.current.y
          const dist2 = dx * dx + dy * dy
          if (dist2 < 16000) {
            const f = 1 - Math.sqrt(dist2) / 130
            p.vx += (dx / Math.sqrt(dist2 + 0.01)) * f * 0.06
            p.vy += (dy / Math.sqrt(dist2 + 0.01)) * f * 0.06
          }
        }

        p.vx += (p.baseX - p.x) * 0.002
        p.vy += (p.baseY - p.y) * 0.002
        p.vx *= 0.96
        p.vy *= 0.96
        p.x += p.vx
        p.y += p.vy

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, 0.85)`
        ctx.shadowColor = `hsla(${p.hue}, 90%, 60%, 0.8)`
        ctx.shadowBlur = 12
        ctx.fill()
      }
      ctx.shadowBlur = 0

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < 12000) {
            const alpha = 1 - Math.sqrt(d2) / 110
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
            grad.addColorStop(0, `hsla(${a.hue}, 80%, 65%, ${alpha * 0.35})`)
            grad.addColorStop(1, `hsla(${b.hue}, 80%, 65%, ${alpha * 0.35})`)
            ctx.strokeStyle = grad
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      if (pointerRef.current.active) {
        const px = pointerRef.current.x
        const py = pointerRef.current.y
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 140)
        grad.addColorStop(0, 'rgba(139,92,246,0.20)')
        grad.addColorStop(0.5, 'rgba(59,130,246,0.08)')
        grad.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(px, py, 140, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointerRef.current.x = e.clientX - rect.left
      pointerRef.current.y = e.clientY - rect.top
      pointerRef.current.active = true
    }
    const onLeave = () => {
      pointerRef.current.active = false
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden
    />
  )
}
