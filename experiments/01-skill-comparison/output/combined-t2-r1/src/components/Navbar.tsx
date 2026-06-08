import { useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'

const NAV_LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Docs', href: '#docs' },
  { label: 'Pricing', href: '#pricing' },
] as const

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', useCallback((latest: number) => {
    setScrolled(latest > 32)
  }, []))

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-4 py-4"
    >
      <nav
        className={`mx-auto max-w-7xl rounded-2xl px-6 py-3.5 transition-all duration-500 ${
          scrolled
            ? 'glass-strong shadow-lg shadow-purple-500/5'
            : 'bg-transparent border border-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(139,92,246,0.4)]">
              <span className="text-white font-bold text-sm">N</span>
            </span>
            <span className="font-display font-semibold text-[15px] tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">
              Nexus
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium text-white/50 hover:text-white/90 transition-colors duration-300 rounded-lg hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button className="px-4 py-2 text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-300">
              Sign In
            </button>
            <button className="relative px-5 py-2 text-[13px] font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_28px_rgba(139,92,246,0.35)] group/cta">
              <span className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue opacity-90 group-hover/cta:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Get Started</span>
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mt-4 pb-2 space-y-1"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-[15px] font-medium text-white/60 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 space-y-2 px-2">
              <button className="w-full py-3 text-[14px] font-medium text-white/60 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="w-full py-3 text-[14px] font-semibold text-white rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
