import { useRef, useEffect, useCallback } from 'react'
import { useReducedMotion } from 'motion/react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  hue: string
  life: number
  maxLife: number
}

const COLORS = ['#8B5CF6', '#3B82F6', '#10B981', '#A78BFA', '#60A5FA']

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const animRef = useRef<number>(0)
  const reduce = useReducedMotion()

  const createParticle = useCallback((x: number, y: number): Particle => ({
    x,
    y,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    size: Math.random() * 1.6 + 0.4,
    hue: COLORS[Math.floor(Math.random() * COLORS.length)],
    life: 0,
    maxLife: Math.random() * 280 + 120,
  }), [])

  useEffect(() => {
    if (reduce) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    let dpr = 1

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)
    }
    resize()

    const handleMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
    }

    const handleLeave = () => {
      mouseRef.current.active = false
    }

    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', handleMove)
    canvas.addEventListener('mouseleave', handleLeave)

    let lastTime = 0
    const tick = (time: number) => {
      const dt = lastTime ? Math.min(time - lastTime, 40) / 16.67 : 1
      lastTime = time

      ctx.clearRect(0, 0, w, h)

      particlesRef.current = particlesRef.current.filter((p) => p.life < p.maxLife)

      if (mouseRef.current.active) {
        for (let i = 0; i < 2; i++) {
          particlesRef.current.push(
            createParticle(
              mouseRef.current.x + (Math.random() - 0.5) * 40,
              mouseRef.current.y + (Math.random() - 0.5) * 40
            )
          )
        }
      }

      const baseX = w / 2 + Math.sin(time * 0.0003) * 200
      const baseY = h / 2 + Math.cos(time * 0.0004) * 80
      for (let i = 0; i < 1; i++) {
        particlesRef.current.push(
          createParticle(baseX + (Math.random() - 0.5) * 300, baseY + (Math.random() - 0.5) * 150)
        )
      }

      for (const p of particlesRef.current) {
        p.life += dt
        p.x += p.vx * dt
        p.y += p.vy * dt

        const progress = p.life / p.maxLife
        const alpha = progress < 0.15
          ? progress / 0.15
          : 1 - (progress - 0.15) / 0.85
        const size = p.size * (progress < 0.1 ? progress / 0.1 : 1)

        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fillStyle = p.hue.replace(')', `, ${alpha * 0.7})`).replace('rgb', 'rgba')
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMove)
      canvas.removeEventListener('mouseleave', handleLeave)
    }
  }, [reduce, createParticle])

  if (reduce) {
    return <div className="absolute inset-0 bg-black" />
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full cursor-crosshair"
      aria-hidden="true"
    />
  )
}
