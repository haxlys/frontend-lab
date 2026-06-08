import { useEffect, useState } from 'react'

const links = [
  { label: 'Product', href: '#product' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Docs', href: '#docs' },
  { label: 'Pricing', href: '#pricing' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-3 py-2.5 transition-all duration-500 ease-spring ${
          scrolled
            ? 'glass-strong shadow-[0_8px_40px_-12px_rgba(139,92,246,0.25)]'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <a href="#" className="flex items-center gap-2.5 pl-2">
          <LogoMark />
          <span className="font-display text-base font-semibold tracking-tight">Neural</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#login" className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:text-white">
            Sign in
          </a>
          <a href="#start" className="btn-primary !px-5 !py-2.5 !text-sm">
            Start building
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full rounded bg-white transition-transform ${
                open ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full rounded bg-white transition-opacity ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-full rounded bg-white transition-transform ${
                open ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="absolute left-4 right-4 top-[72px] md:hidden">
          <div className="glass-strong rounded-2xl p-2">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-1 pt-1">
                <a href="#start" className="btn-primary w-full !rounded-xl !px-4 !py-3">
                  Start building
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

function LogoMark() {
  return (
    <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 ring-1 ring-white/10">
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#A78BFA" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#logo-grad)"
          d="M12 2 4 6v6c0 4.5 3.2 8.7 8 10 4.8-1.3 8-5.5 8-10V6l-8-4Z"
        />
        <circle cx="12" cy="12" r="3" fill="#0B0B0F" />
        <circle cx="12" cy="12" r="1.5" fill="url(#logo-grad)" />
      </svg>
    </span>
  )
}
