import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useMotionTemplate } from 'motion/react'

/**
 * Interactive canvas:
 *  - a constellation of "reasoning nodes" arranged on a soft fibonacci grid
 *  - nodes pulse, draw animated connections when within range
 *  - pointer pulls a soft "attractor" that lights up nearby nodes & edges
 *  - reduced motion: static composition, no animation
 */
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 80, damping: 20, mass: 0.8 })
  const smy = useSpring(my, { stiffness: 80, damping: 20, mass: 0.8 })

  // pointer-tracked radial spotlight (separate from CursorField; local to this card)
  const spotlight = useMotionTemplate`radial-gradient(220px 220px at ${smx}px ${smy}px,
      rgba(139,92,246,0.35), rgba(34,211,238,0.08) 45%, transparent 70%)`

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let alive = true
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    type Node = { x: number; y: number; r: number; phase: number; speed: number; depth: number; core: boolean }
    let nodes: Node[] = []
    let w = 0
    let h = 0
    let pointer = { x: -9999, y: -9999 }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Build node field
      const area = w * h
      const count = Math.max(28, Math.floor(area / 9000))
      nodes = []
      const cols = Math.ceil(Math.sqrt(count * (w / h)))
      const rows = Math.ceil(count / cols)
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (nodes.length >= count) break
          const baseX = ((j + 0.5) / cols) * w
          const baseY = ((i + 0.5) / rows) * h
          // jitter for organic feel
          const jx = (Math.random() - 0.5) * (w / cols) * 0.65
          const jy = (Math.random() - 0.5) * (h / rows) * 0.65
          const x = clamp(baseX + jx, 8, w - 8)
          const y = clamp(baseY + jy, 8, h - 8)
          // central cluster bias: some nodes act as "hubs"
          const dx = x - w / 2
          const dy = y - h / 2
          const d = Math.hypot(dx, dy)
          const core = d < Math.min(w, h) * 0.22 && Math.random() > 0.65
          nodes.push({
            x,
            y,
            r: core ? 2.4 : 1.1 + Math.random() * 1.2,
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 0.8,
            depth: 0.4 + Math.random() * 0.6,
            core,
          })
        }
      }
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
      mx.set(pointer.x)
      my.set(pointer.y)
    }
    const onLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }

    const onResize = () => resize()
    window.addEventListener('resize', onResize)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerleave', onLeave)

    resize()

    const start = performance.now()
    const linkDist = () => Math.min(140, Math.max(90, Math.min(w, h) * 0.18))

    const draw = (now: number) => {
      if (!alive) return
      const t = (now - start) / 1000
      ctx.clearRect(0, 0, w, h)

      // background subtle radial
      const bg = ctx.createRadialGradient(w / 2, h * 0.42, 0, w / 2, h * 0.42, Math.max(w, h) * 0.7)
      bg.addColorStop(0, 'rgba(139,92,246,0.10)')
      bg.addColorStop(0.45, 'rgba(99,102,241,0.04)')
      bg.addColorStop(1, 'rgba(11,11,15,0)')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)

      // moving nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (!reduce) {
          n.phase += 0.005 * n.speed
          n.x += Math.cos(n.phase) * 0.15 * n.depth
          n.y += Math.sin(n.phase * 1.13) * 0.15 * n.depth
        }
      }

      // draw connections
      const maxD = linkDist()
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d > maxD) continue
          const f = 1 - d / maxD
          // pointer influence
          const pdx = (a.x + b.x) / 2 - pointer.x
          const pdy = (a.y + b.y) / 2 - pointer.y
          const pd = Math.hypot(pdx, pdy)
          const pointerBoost = pointer.x < 0 ? 0 : Math.max(0, 1 - pd / 180) * 0.6
          const alpha = Math.min(1, f * 0.18 + pointerBoost * 0.5)
          // color shift toward cyan when near pointer
          if (pointerBoost > 0) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`
          } else {
            ctx.strokeStyle = `rgba(180, 160, 255, ${alpha * 0.7})`
          }
          ctx.lineWidth = 0.7 + f * 0.6 + pointerBoost * 0.6
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      // draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const pdx = n.x - pointer.x
        const pdy = n.y - pointer.y
        const pd = Math.hypot(pdx, pdy)
        const pointerHit = pointer.x < 0 ? 0 : Math.max(0, 1 - pd / 140)
        const pulse = reduce ? 0 : 0.4 + 0.6 * Math.abs(Math.sin(t * 1.3 + n.phase))
        const r = n.r + pointerHit * 3 + (n.core ? pulse * 0.8 : 0)

        if (n.core) {
          // core hub: outer halo
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 6)
          grad.addColorStop(0, `rgba(139, 92, 246, ${0.55 + pointerHit * 0.3})`)
          grad.addColorStop(0.4, `rgba(99, 102, 241, ${0.18 + pointerHit * 0.2})`)
          grad.addColorStop(1, 'rgba(11,11,15,0)')
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(n.x, n.y, r * 6, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.fillStyle = pointerHit > 0
          ? `rgba(34, 211, 238, ${0.85 + pointerHit * 0.15})`
          : n.core
            ? `rgba(196, 181, 253, 0.95)`
            : `rgba(180, 180, 210, ${0.5 + pulse * 0.2})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fill()

        if (pointerHit > 0.2) {
          ctx.fillStyle = `rgba(34, 211, 238, ${0.15 * pointerHit})`
          ctx.beginPath()
          ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(draw)
    }

    if (reduce) {
      draw(performance.now())
    } else {
      raf = requestAnimationFrame(draw)
    }

    return () => {
      alive = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
    }
  }, [mx, my, reduce])

  return (
    <div className="relative h-full w-full">
      {/* Frame chrome */}
      <div
        className="absolute inset-0 rounded-3xl border border-white/10"
        style={{
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.4), 0 30px 80px -20px rgba(139,92,246,0.25)',
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))',
        }}
      />
      {/* Top label strip */}
      <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10.5px] font-mono uppercase tracking-[0.18em] text-zinc-400 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          reasoning.live
        </div>
        <div className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-zinc-500 backdrop-blur">
          ctx · 128k
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={ref}
        className="absolute inset-0 h-full w-full rounded-3xl"
        aria-label="Animated visualisation of a reasoning model evaluating nodes and connections."
      />

      {/* Pointer spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{ background: spotlight }}
      />

      {/* Bottom caption with reasoning trace */}
      <div className="absolute inset-x-4 bottom-4 z-10 overflow-hidden rounded-2xl border border-white/10 bg-black/55 px-3.5 py-3 backdrop-blur">
        <div className="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.18em] text-zinc-500">
          <span>trace</span>
          <span className="text-zinc-600">step 04 / 12</span>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="h-1 flex-1 rounded-full"
              style={{
                background:
                  i < 4
                    ? 'linear-gradient(90deg, #8B5CF6, #22D3EE)'
                    : 'rgba(255,255,255,0.08)',
              }}
            />
          ))}
        </div>
        <div className="mt-2 truncate text-[12px] text-zinc-300">
          <span className="text-zinc-500">$</span> aether.run{' '}
          <span className="text-violet-300">"refactor the auth middleware"</span>
          <span className="caret text-zinc-200" />
        </div>
      </div>

      {/* Soft aurora orb behind */}
      <div
        className="aurora-orb pointer-events-none absolute -left-10 -top-10 -z-10 h-72 w-72 rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(139,92,246,0.6), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -right-10 bottom-10 -z-10 h-56 w-56 rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.5), transparent 70%)' }}
      />
    </div>
  )
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}
