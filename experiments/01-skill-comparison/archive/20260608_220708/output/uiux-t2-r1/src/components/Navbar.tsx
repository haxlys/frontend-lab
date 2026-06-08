import { useState } from "react";
import { Menu, X, Bot } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <Bot className="h-7 w-7 text-violet-400" aria-hidden="true" />
          <span className="text-gradient text-xl">ADE</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#pricing"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:border-white/20 hover:text-white"
          >
            Sign In
          </a>
          <a
            href="#pricing"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-violet-500"
          >
            Get Started
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-slate-400 hover:text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-slate-950/95 px-6 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium text-slate-400">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-1 transition-colors hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href="#pricing"
              className="flex-1 rounded-lg border border-white/10 py-2 text-center text-sm font-medium text-slate-300"
            >
              Sign In
            </a>
            <a
              href="#pricing"
              className="flex-1 rounded-lg bg-violet-600 py-2 text-center text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
