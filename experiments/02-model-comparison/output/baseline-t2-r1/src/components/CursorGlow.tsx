import { usePointer } from '../hooks/usePointer'

export default function CursorGlow() {
  const { x, y } = usePointer()
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-500"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(139,92,246,0.10), rgba(59,130,246,0.06) 30%, transparent 55%)`,
      }}
    />
  )
}
