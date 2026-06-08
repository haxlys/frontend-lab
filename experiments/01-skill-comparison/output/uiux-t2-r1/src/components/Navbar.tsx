import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Platform', href: '#features' },
  { label: 'Solutions', href: '#features' },
  { label: 'Docs', href: '#features' },
  { label: 'Pricing', href: '#features' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-purple-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 opacity-80 blur-[2px] group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-[2px] rounded-md bg-black flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L1 4v4.5C1 12.5 4 15.5 8 15.5s7-3 7-7V4L8 1z" fill="url(#ng)" />
                <defs>
                  <linearGradient id="ng" x1="1" y1="1" x2="15" y2="15">
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            Nexus<span className="gradient-text">AI</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-text-secondary hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-text-secondary hover:text-white transition-colors cursor-pointer">
            Sign In
          </button>
          <button className="relative px-4 py-2 text-sm font-medium text-white rounded-lg overflow-hidden cursor-pointer
            bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10
            hover:border-purple-500/30 transition-all duration-300
            after:absolute after:inset-0 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:opacity-0 hover:after:opacity-10 after:transition-opacity">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden p-2 text-white cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-secondary hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2 border-t border-white/5">
              <button className="flex-1 py-2 text-sm text-text-secondary hover:text-white transition-colors cursor-pointer">
                Sign In
              </button>
              <button className="flex-1 py-2 text-sm font-medium text-white rounded-lg cursor-pointer
                bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
