import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
    >
      <nav
        className={[
          "flex w-full max-w-6xl items-center justify-between rounded-2xl px-3 py-2 sm:px-4",
          "glass glow-border",
          "transition-all duration-500 ease-out-expo",
          scrolled
            ? "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)]"
            : "shadow-none",
        ].join(" ")}
        aria-label="Primary"
      >
        <a
          href="#top"
          className="group flex items-center gap-2 rounded-xl px-2 py-1.5 outline-none focus-visible:ring-2 focus-visible:ring-neon-purple/60"
        >
          <Logo className="h-7 w-7" />
          <span className="font-display text-[15px] font-semibold tracking-[-0.01em] text-white">
            Nebula
          </span>
          <span className="ml-1 hidden rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-zinc-400 sm:inline-block">
            ai
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative rounded-lg px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-200 hover:text-white"
              >
                <span>{item.label}</span>
                <span className="pointer-events-none absolute inset-x-2 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green opacity-0 transition-all duration-300 ease-out-expo group-hover/scale-x-100 hover:scale-x-100 hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#login"
            className="hidden rounded-lg px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-200 hover:text-white sm:inline-block"
          >
            Sign in
          </a>
          <a
            href="#start"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
          >
            <span className="relative z-10">Get started</span>
            <svg
              className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(60% 100% at 50% 50%, rgba(139,92,246,0.35), transparent 70%)",
              }}
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
