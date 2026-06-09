import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  alphaDir: number
  connections: number[]
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []
    const PARTICLE_COUNT = 60
    const CONNECTION_DIST = 120

    function resize() {
      canvas!.width = canvas!.offsetWidth * (window.devicePixelRatio || 1)
      canvas!.height = canvas!.offsetHeight * (window.devicePixelRatio || 1)
      ctx!.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
    }

    function createParticles() {
      particles = []
      const w = canvas!.offsetWidth
      const h = canvas!.offsetHeight
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.6 + 0.2,
          alphaDir: Math.random() > 0.5 ? 1 : -1,
          connections: [],
        })
      }
    }

    function draw() {
      const w = canvas!.offsetWidth
      const h = canvas!.offsetHeight
      ctx!.clearRect(0, 0, w, h)

      // Find connections
      for (let i = 0; i < particles.length; i++) {
        particles[i].connections = []
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            particles[i].connections.push(j)
          }
        }
      }

      // Draw connections
      ctx!.strokeStyle = 'rgba(139, 92, 246, 0.06)'
      ctx!.lineWidth = 0.5
      for (let i = 0; i < particles.length; i++) {
        for (const j of particles[i].connections) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const alpha = 1 - dist / CONNECTION_DIST
          ctx!.strokeStyle = `rgba(139, 92, 246, ${alpha * 0.08})`
          ctx!.beginPath()
          ctx!.moveTo(p1.x, p1.y)
          ctx!.lineTo(p2.x, p2.y)
          ctx!.stroke()
        }
      }

      // Draw particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        p.alpha += p.alphaDir * 0.003
        if (p.alpha > 0.8) p.alphaDir = -1
        if (p.alpha < 0.2) p.alphaDir = 1

        const gradient = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3)
        gradient.addColorStop(0, `rgba(139, 92, 246, ${p.alpha})`)
        gradient.addColorStop(0.4, `rgba(59, 130, 246, ${p.alpha * 0.5})`)
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)')

        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2)
        ctx!.fillStyle = gradient
        ctx!.fill()

        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.6})`
        ctx!.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    createParticles()
    draw()

    window.addEventListener('resize', () => {
      resize()
      createParticles()
    })

    return () => {
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}
