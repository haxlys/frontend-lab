import { useEffect, useRef } from 'react'

/**
 * Tracks the pointer position on the page and exposes a ref to a CSS variable
 * pair (`--mx`, `--my`) expressed as percentages. Used for cursor-following
 * gradient overlays and bento hover halos.
 */
export function usePointerTracker<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    let mx = 50
    let my = 50
    let tx = 50
    let ty = 50

    const tick = () => {
      mx += (tx - mx) * 0.18
      my += (ty - my) * 0.18
      el.style.setProperty('--mx', `${mx}%`)
      el.style.setProperty('--my', `${my}%`)
      if (Math.abs(tx - mx) > 0.1 || Math.abs(ty - my) > 0.1) {
        raf = requestAnimationFrame(tick)
      } else {
        raf = 0
      }
    }

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      tx = ((e.clientX - rect.left) / rect.width) * 100
      ty = ((e.clientY - rect.top) / rect.height) * 100
      if (!raf) raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return ref
}
