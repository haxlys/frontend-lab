import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  hue: number
}

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Particle[] = []
    let mouseX = -1000
    let mouseY = -1000
    let raf: number
    let time = 0

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resize()
    window.addEventListener('resize', resize)

    function spawnParticle(x: number, y: number) {
      const hue = Math.random() < 0.33 ? 260 : Math.random() < 0.5 ? 210 : 160
      const angle = Math.random() * Math.PI * 2
      const speed = 0.3 + Math.random() * 0.8
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.5,
        life: 0,
        maxLife: 150 + Math.random() * 250,
        size: 0.5 + Math.random() * 2.5,
        hue,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
      for (let i = 0; i < 2; i++) {
        spawnParticle(mouseX, mouseY)
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    function draw() {
      if (!canvas || !ctx) return
      time++

      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const cx = canvas.width / 2
      const cy = canvas.height / 2

      ctx.save()
      ctx.globalAlpha = 0.08 + Math.sin(time * 0.01) * 0.03
      ctx.strokeStyle = '#8B5CF6'
      ctx.lineWidth = 1
      for (let r = 50; r < Math.max(canvas.width, canvas.height); r += 40) {
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.stroke()
      }

      ctx.strokeStyle = '#3B82F6'
      ctx.lineWidth = 0.5
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + time * 0.002
        const x = cx + Math.cos(angle) * 150
        const y = cy + Math.sin(angle) * 150
        const innerR = 20 + Math.sin(time * 0.03 + i) * 10
        ctx.beginPath()
        ctx.arc(x, y, innerR, 0, Math.PI * 2)
        ctx.stroke()
      }

      ctx.beginPath()
      ctx.strokeStyle = '#10B981'
      ctx.lineWidth = 0.5
      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2 - time * 0.003
        const x = cx + Math.cos(angle) * 250
        const y = cy + Math.sin(angle) * 250
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      ctx.stroke()

      ctx.restore()

      particles = particles.filter((p) => p.life < p.maxLife)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.life++
        const progress = p.life / p.maxLife
        const alpha = progress < 0.1 ? progress * 10 : 1 - progress
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${alpha * 0.6})`
        ctx.fill()

        if (p.size > 1.5) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${alpha * 0.1})`
          ctx.fill()
        }
      })

      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      canvas.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'auto' }}
    />
  )
}
