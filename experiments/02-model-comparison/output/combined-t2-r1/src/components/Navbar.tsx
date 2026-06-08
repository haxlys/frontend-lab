import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const links = [
  { label: 'Product', href: '#product' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Changelog', href: '#changelog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={[
          'flex w-full max-w-6xl items-center justify-between',
          'rounded-full border border-white/10',
          'px-3 py-2 sm:px-4',
          'transition-all duration-500',
          scrolled
            ? 'bg-black/55 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]'
            : 'bg-white/[0.025] backdrop-blur-md',
        ].join(' ')}
        style={{
          boxShadow: scrolled
            ? 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 40px -12px rgba(0,0,0,0.6)'
            : 'inset 0 1px 0 rgba(255,255,255,0.04)',
        }}
      >
        <a href="#top" className="flex items-center gap-2 pl-2 pr-3">
          <Logo />
          <span className="text-[15px] font-medium tracking-tight">Aether</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-[13.5px] text-zinc-400 transition-colors duration-200 hover:bg-white/5 hover:text-zinc-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href="#login"
            className="hidden rounded-full px-3.5 py-1.5 text-[13.5px] text-zinc-300 transition-colors duration-200 hover:text-white sm:block"
          >
            Sign in
          </a>
          <a
            href="#start"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">Start building</span>
            <svg
              className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-violet-300 to-cyan-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </div>
      </nav>
    </motion.header>
  )
}

function Logo() {
  return (
    <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02]">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="60%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <path
          d="M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z"
          fill="none"
          stroke="url(#lg)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2.5" fill="url(#lg)" />
      </svg>
    </span>
  )
}
