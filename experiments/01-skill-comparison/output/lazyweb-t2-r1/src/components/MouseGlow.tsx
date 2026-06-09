import { useMousePosition } from '@/hooks/useMousePosition'

export default function MouseGlow() {
  const { x, y } = useMousePosition()

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] transition-transform duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.8) 0%, rgba(59,130,246,0.3) 40%, transparent 70%)',
          transform: `translate(${x - 300}px, ${y - 300}px)`,
        }}
      />
    </div>
  )
}
