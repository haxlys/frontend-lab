import { useEffect, useState } from "react";
import { cn } from "../lib/cn.ts";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Performance", href: "#performance" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 12);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled
            ? "glass-strong shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
            : "glass"
        )}
      >
        <a href="#" className="group flex items-center gap-2.5">
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-md bg-neon-gradient opacity-90 blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative h-7 w-7 rounded-md bg-ink-900 ring-1 ring-white/10 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M4 18 12 4l8 14" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 14h8" strokeLinecap="round" />
              </svg>
            </span>
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            NEXUS
          </span>
          <span className="ml-1 hidden rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-white/60 sm:inline-block">
            v3.0
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group relative inline-flex items-center rounded-full px-3.5 py-1.5 text-sm text-white/70 transition-colors hover:text-white"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 -z-0 scale-90 rounded-full bg-white/5 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#login"
            className="hidden rounded-full px-3.5 py-1.5 text-sm text-white/70 transition-colors hover:text-white sm:inline-flex"
          >
            Sign in
          </a>
          <a
            href="#start"
            className="btn-neon relative inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink-900 ring-1 ring-white/20"
          >
            <span>Start building</span>
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute top-20 w-[calc(100%-2rem)] max-w-6xl md:hidden">
          <ul className="glass-strong flex flex-col gap-1 rounded-2xl p-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
