import { useEffect, useRef } from 'react'

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    let lastScroll = 0
    const onScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll > 100) {
        nav.style.borderBottomColor =
          currentScroll > lastScroll
            ? 'rgba(255,255,255,0.02)'
            : 'rgba(255,255,255,0.06)'
      }
      lastScroll = currentScroll
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className="glass fixed top-0 inset-x-0 z-50 transition-colors duration-500"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-purple to-electric-blue opacity-80 blur-sm group-hover:blur-md transition-all duration-300" />
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-black/80 text-sm font-bold text-white">
              N
            </div>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            Nexus
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Docs', 'Pricing', 'About'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="relative text-sm text-white/60 transition-colors duration-200 hover:text-white/90 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-neon-purple after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#start"
          className="relative overflow-hidden rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-white/90 transition-all duration-300 hover:border-neon-purple/40 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  )
}
