import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring } from 'motion/react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(-9999)
  const mouseY = useMotionValue(-9999)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 40 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 40 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const unsubX = springX.on('change', (v) => {
      el.style.left = `${v}px`
    })
    const unsubY = springY.on('change', (v) => {
      el.style.top = `${v}px`
    })
    return () => {
      unsubX()
      unsubY()
    }
  }, [springX, springY])

  return (
    <div
      ref={ref}
      className="cursor-glow hidden lg:block"
      aria-hidden="true"
    />
  )
}
