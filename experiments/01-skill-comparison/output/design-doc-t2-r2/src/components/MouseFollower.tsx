import { useEffect, useRef } from 'react'

export default function MouseFollower() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      el.style.setProperty('--mx', `${x}%`)
      el.style.setProperty('--my', `${y}%`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(139, 92, 246, 0.06), transparent 60%), radial-gradient(800px circle at var(--mx, 50%) var(--my, 50%), rgba(59, 130, 246, 0.04), transparent 70%)',
      }}
    />
  )
}
