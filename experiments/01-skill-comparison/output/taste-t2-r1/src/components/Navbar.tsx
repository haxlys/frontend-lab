import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-zinc-950 font-bold text-sm font-mono">
            AD
          </span>
          <span className="text-base font-semibold tracking-tight text-zinc-100">
            ADE
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-700 transition-colors duration-200"
          >
            Get started
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg text-zinc-400 hover:text-zinc-100"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-zinc-950/95 backdrop-blur-xl px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-zinc-400 hover:text-zinc-100 py-1.5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-white/[0.06]">
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-zinc-950"
              >
                Get started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
