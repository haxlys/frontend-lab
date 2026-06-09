import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal-900/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-lime to-neon-cyan flex items-center justify-center group-hover:shadow-lg group-hover:shadow-neon-lime/20 transition-shadow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a0a0f" strokeWidth="2.5" strokeLinecap="round">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
            </svg>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">NovaMind</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Explore', 'Features', 'Pricing', 'Docs'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <button className="ml-2 px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white hover:bg-white/10 hover:border-white/20 transition-all">
            Sign In
          </button>
          <button className="px-5 py-2 bg-gradient-to-r from-neon-lime to-neon-cyan rounded-full text-sm font-medium text-black hover:shadow-lg hover:shadow-neon-lime/20 transition-all">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-charcoal-900/95 backdrop-blur-xl border-b border-white/5">
          <div className="px-6 py-4 flex flex-col gap-3">
            {['Explore', 'Features', 'Pricing', 'Docs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-400 hover:text-white py-1 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2 border-t border-white/5">
              <button className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white">
                Sign In
              </button>
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-neon-lime to-neon-cyan rounded-full text-sm font-medium text-black">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
