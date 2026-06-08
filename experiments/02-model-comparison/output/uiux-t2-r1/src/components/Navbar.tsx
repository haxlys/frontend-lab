import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Product', href: '#product' },
  { label: 'Capabilities', href: '#features' },
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6',
        'transition-all duration-500',
      ].join(' ')}
    >
      <div
        className={[
          'mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-6',
          scrolled ? 'glass-strong shadow-glow-violet' : 'glass',
          'border border-white/[0.06]',
        ].join(' ')}
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Aurora home"
        >
          <span
            className="relative grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-neon-violet to-neon-blue shadow-glow-violet"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 19V5l8 8V5" />
              <circle cx="17" cy="17" r="2.5" fill="currentColor" />
            </svg>
            <span className="absolute -inset-1 -z-10 rounded-xl bg-neon-violet/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            Aurora<span className="text-neon-violet">.</span>
          </span>
          <span className="hidden rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald-300 sm:inline-block">
            beta
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-1.5 text-sm text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#signin"
            className="hidden rounded-lg px-3 py-1.5 text-sm text-white/70 transition-colors duration-200 hover:text-white sm:inline-block"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-lg bg-white px-3.5 py-2 text-sm font-medium text-ink-950 transition-transform duration-300 hover:scale-[1.02] sm:px-4"
          >
            <span>Get access</span>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-neon-violet to-neon-blue opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 glass-strong p-3 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#signin"
              onClick={() => setMobileOpen(false)}
              className="mt-1 rounded-lg px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white"
            >
              Sign in
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
