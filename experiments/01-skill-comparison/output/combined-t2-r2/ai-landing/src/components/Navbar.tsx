import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { List, X } from '@phosphor-icons/react'

const links = [
  { label: 'Platform', href: '#platform' },
  { label: 'Docs', href: '#docs' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 mx-auto transition-all duration-500 ${
        scrolled
          ? 'glass max-w-2xl rounded-full border border-white/[0.06] mt-4'
          : 'max-w-full border-b border-transparent mt-0'
      }`}
    >
      <div className="flex items-center justify-between px-6 h-16 max-w-7xl mx-auto">
        <a href="#" className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-neon-purple to-electric-blue" />
          <span className="font-semibold tracking-tight text-lg">Nexus</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-white/60 hover:text-white transition-colors">
            Sign in
          </button>
          <button className="text-sm px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors">
            Get started
          </button>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-white/80"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-white/[0.06] px-6 py-6 space-y-1"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-white/60 hover:text-white text-lg"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-4">
            <button className="text-sm text-white/60">Sign in</button>
            <button className="text-sm px-4 py-2 rounded-full bg-white text-black font-medium">
              Get started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
