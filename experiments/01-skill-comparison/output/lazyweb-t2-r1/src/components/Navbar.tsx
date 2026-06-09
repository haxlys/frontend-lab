import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Technology', href: '#tech' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-3 group"
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-purple to-electric-blue opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-[1px] rounded-lg bg-black flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="url(#logoGrad)" strokeWidth="2" strokeLinecap="round">
                <defs>
                  <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-white">
            NEXUS
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-neon-purple to-electric-blue group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
            Sign In
          </button>
          <button className="relative px-5 py-2 text-sm font-medium text-white rounded-full cursor-pointer group overflow-hidden">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-electric-blue opacity-80" />
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-electric-blue opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            <span className="relative z-10">Get Early Access</span>
          </button>
        </div>

        <button
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6 space-y-1 bg-black/80 backdrop-blur-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex gap-3">
            <button className="flex-1 px-4 py-2.5 text-sm text-gray-300 hover:text-white bg-white/[0.04] rounded-lg transition-colors cursor-pointer">
              Sign In
            </button>
            <button className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-neon-purple to-electric-blue rounded-lg cursor-pointer">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
