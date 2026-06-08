import { useEffect, useState } from 'react'

interface Pointer {
  x: number
  y: number
}

export function usePointer() {
  const [pointer, setPointer] = useState<Pointer>({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      setPointer({ x: e.clientX, y: e.clientY })
    }
    const handleLeave = () => setPointer({ x: -1000, y: -1000 })

    window.addEventListener('pointermove', handleMove, { passive: true })
    window.addEventListener('pointerleave', handleLeave)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  return pointer
}
