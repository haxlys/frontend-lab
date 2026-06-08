import { useEffect, useState } from 'react'

const NAV_ITEMS = ['Product', 'Solutions', 'Research', 'Pricing', 'Docs']

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-500`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 ${
            scrolled
              ? 'glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'glass'
          }`}
        >
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple via-neon-blue to-neon-green flex items-center justify-center font-display font-bold text-sm">
              N
              <span className="absolute inset-0 rounded-lg bg-neon-purple/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Neura
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="relative px-3.5 py-2 text-sm text-white/70 hover:text-white transition-colors duration-300 rounded-lg group"
                >
                  {item}
                  <span className="absolute inset-x-3.5 -bottom-px h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <button className="text-sm text-white/70 hover:text-white transition-colors px-3.5 py-2">
              Sign in
            </button>
            <button className="neon-button relative text-sm font-medium px-4 py-2 rounded-lg text-white">
              <span className="relative z-10">Get started</span>
            </button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden w-9 h-9 rounded-lg glass flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block w-4 h-px bg-white transition-transform duration-300 ${
                open ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-4 h-px bg-white transition-transform duration-300 ${
                open ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block px-3 py-2.5 text-sm text-white/80 hover:text-white rounded-lg hover:bg-white/5"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex gap-2">
                <button className="flex-1 text-sm text-white/80 py-2.5 rounded-lg glass">
                  Sign in
                </button>
                <button className="flex-1 neon-button text-sm font-medium py-2.5 rounded-lg text-white">
                  <span className="relative z-10">Get started</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
