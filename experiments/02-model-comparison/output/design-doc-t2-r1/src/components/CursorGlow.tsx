import { usePointerTracker } from '../hooks/usePointerTracker'

/**
 * A faint, blurred radial gradient that follows the cursor.
 * Sits behind every section for an ambient "AI is alive" feel.
 */
export function CursorGlow() {
  const ref = usePointerTracker<HTMLDivElement>()

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-700"
    >
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx, 50%) var(--my, 40%), rgba(139,92,246,0.18), transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            'radial-gradient(900px circle at calc(var(--mx, 50%) + 12%) calc(var(--my, 40%) + 8%), rgba(59,130,246,0.14), transparent 65%)',
        }}
      />
    </div>
  )
}
