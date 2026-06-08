import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      setProgress(total > 0 ? (current / total) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden
      className="fixed top-0 inset-x-0 z-[60] h-px bg-white/5"
    >
      <div
        className="h-full bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
