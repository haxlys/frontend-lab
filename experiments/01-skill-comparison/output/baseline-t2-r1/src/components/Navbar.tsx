import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Documentation', href: '#docs' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-purple to-electric-blue animate-pulse-glow" />
            <div className="absolute inset-[2px] rounded-md bg-black flex items-center justify-center">
              <span className="font-display text-sm font-bold text-white">N</span>
            </div>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Nexus<span className="text-neon-purple">AI</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <button className="relative px-5 py-2 text-sm font-medium text-white rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-electric-blue transition-opacity duration-300 group-hover:opacity-90" />
            <span className="relative">Get Early Access</span>
          </button>
        </div>

        <button
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-5 py-2.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-neon-purple to-electric-blue">
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
