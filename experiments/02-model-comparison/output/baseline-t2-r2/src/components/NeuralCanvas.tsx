import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  pulse: number
  layer: number
  label: string
}

interface Connection {
  a: number
  b: number
  signal: number
}

const LAYER_LABELS = ['Input', 'Reason', 'Plan', 'Act', 'Verify', 'Output']

export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const pointer = useRef({ x: 0, y: 0, active: false })
  const parallax = useRef({ tx: 0, ty: 0, x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let nodes: Node[] = []
    let connections: Connection[] = []
    let raf = 0
    let t = 0

    const buildGraph = () => {
      const cols = 6
      const colCount = [5, 7, 6, 6, 5, 3][Math.floor(Math.random() * 6)]
      const colSize = 4 + Math.floor(Math.random() * 4)
      nodes = []
      const layerNodes: number[][] = []
      for (let l = 0; l < cols; l++) {
        const arr: number[] = []
        const count = l === 0 ? 5 : l === cols - 1 ? 3 : 5 + Math.floor(Math.random() * 3)
        for (let i = 0; i < count; i++) {
          const x = (width / (cols + 1)) * (l + 1) + (Math.random() - 0.5) * 40
          const y = (height / (count + 1)) * (i + 1) + (Math.random() - 0.5) * 30
          nodes.push({
            x,
            y,
            vx: 0,
            vy: 0,
            r: l === 0 || l === cols - 1 ? 4 : 2.5 + Math.random() * 1.5,
            pulse: Math.random() * Math.PI * 2,
            layer: l,
            label: LAYER_LABELS[l] ?? '',
          })
          arr.push(nodes.length - 1)
        }
        layerNodes.push(arr)
      }
      connections = []
      for (let l = 0; l < cols - 1; l++) {
        for (const a of layerNodes[l]) {
          for (const b of layerNodes[l + 1]) {
            if (Math.random() < 0.55) {
              connections.push({ a, b, signal: Math.random() })
            }
          }
        }
      }
      void colCount
      void colSize
    }

    const resize = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildGraph()
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      pointer.current.x = e.clientX - rect.left
      pointer.current.y = e.clientY - rect.top
      pointer.current.active = true
      const cx = rect.width / 2
      const cy = rect.height / 2
      parallax.current.tx = ((e.clientX - rect.left) - cx) / cx
      parallax.current.ty = ((e.clientY - rect.top) - cy) / cy
    }
    const onLeave = () => {
      pointer.current.active = false
    }
    container.addEventListener('pointermove', onMove)
    container.addEventListener('pointerleave', onLeave)

    const render = () => {
      t += 0.012
      ctx.clearRect(0, 0, width, height)

      parallax.current.x += (parallax.current.tx - parallax.current.x) * 0.06
      parallax.current.y += (parallax.current.ty - parallax.current.y) * 0.06
      const px = parallax.current.x * 14
      const py = parallax.current.y * 14

      for (const c of connections) {
        const a = nodes[c.a]
        const b = nodes[c.b]
        if (!a || !b) continue
        const ax = a.x + px
        const ay = a.y + py
        const bx = b.x + px
        const by = b.y + py
        const signal = (Math.sin(t * 2 + c.a + c.b) * 0.5 + 0.5) * (0.4 + c.signal * 0.6)
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.05 + signal * 0.35})`
        ctx.lineWidth = 0.6 + signal * 1.1
        ctx.beginPath()
        ctx.moveTo(ax, ay)
        const mx = (ax + bx) / 2 + Math.sin(t + c.a) * 6
        const my = (ay + by) / 2 + Math.cos(t + c.b) * 6
        ctx.quadraticCurveTo(mx, my, bx, by)
        ctx.stroke()
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (!n) continue
        const wob = Math.sin(t * 1.4 + n.pulse) * 0.4
        const dx = n.x + px + wob
        const dy = n.y + py
        let boost = 1
        if (pointer.current.active) {
          const ddx = dx - pointer.current.x
          const ddy = dy - pointer.current.y
          const dist = Math.sqrt(ddx * ddx + ddy * ddy)
          if (dist < 110) {
            boost = 1 + (1 - dist / 110) * 2.2
          }
        }
        const r = n.r * boost
        const hue = n.layer === 0 || n.layer === 5 ? '#34D399' : n.layer % 2 === 0 ? '#A78BFA' : '#60A5FA'

        const grad = ctx.createRadialGradient(dx, dy, 0, dx, dy, r * 6)
        grad.addColorStop(0, `${hue}55`)
        grad.addColorStop(1, `${hue}00`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(dx, dy, r * 6, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = hue
        ctx.beginPath()
        ctx.arc(dx, dy, r, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
        ctx.beginPath()
        ctx.arc(dx - r * 0.3, dy - r * 0.3, r * 0.35, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      container.removeEventListener('pointermove', onMove)
      container.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-[360px] w-full overflow-hidden rounded-3xl sm:h-[440px] md:h-[520px]"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.12), transparent 70%)',
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <LayerLabels />
      <ScanOverlay />
    </div>
  )
}

function LayerLabels() {
  const labels = LAYER_LABELS
  return (
    <div className="pointer-events-none absolute inset-0 hidden grid-cols-6 items-center px-4 sm:grid">
      {labels.map((label, i) => (
        <div key={label} className="flex h-full items-center justify-center">
          <span
            className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60 backdrop-blur"
            style={{ animation: `fade-up 1s ${0.2 + i * 0.1}s cubic-bezier(0.16,1,0.3,1) both` }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

function ScanOverlay() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 opacity-60"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(139,92,246,0.18), transparent)',
          animation: 'shoot 4s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, transparent 50%, rgba(0,0,0,0.6) 100%)',
        }}
      />
    </>
  )
}
