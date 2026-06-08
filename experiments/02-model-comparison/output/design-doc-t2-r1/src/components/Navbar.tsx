import { useEffect, useState } from 'react'

const links = [
  { label: 'Product', href: '#product' },
  { label: 'Solutions', href: '#features' },
  { label: 'Research', href: '#showcase' },
  { label: 'Docs', href: '#docs' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-all duration-500`}
    >
      <nav
        data-reveal
        className={`reveal in-view flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-500 ${
          scrolled
            ? 'glass-strong border-white/10 shadow-glass'
            : 'glass border-white/[0.06]'
        }`}
      >
        <a href="#" className="group flex items-center gap-2 pl-2">
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue shadow-neon-purple">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue blur-md opacity-60 transition-opacity group-hover:opacity-100" />
            <svg
              viewBox="0 0 24 24"
              className="relative h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 18V6l8 12V6" />
              <path d="M14 18h6" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Neural
          </span>
          <span className="ml-1 hidden rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-white/60 sm:inline-block">
            v3 · alpha
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#login"
            className="hidden rounded-full px-3 py-2 text-sm text-white/70 transition-colors hover:text-white sm:block"
          >
            Sign in
          </a>
          <a href="#cta" className="btn-primary !py-2 !px-4 text-sm">
            Get started
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  )
}
