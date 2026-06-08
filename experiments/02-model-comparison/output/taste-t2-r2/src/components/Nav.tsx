import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

const items = [
  { label: "Product", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Customers", href: "#stats" },
  { label: "Pricing", href: "#cta" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 24));
    return () => unsub();
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "glass-strong"
            : "border border-white/[0.06] bg-white/[0.02] backdrop-blur-md"
        }`}
      >
        <a href="#" className="group flex items-center gap-2.5">
          <span className="relative grid h-7 w-7 place-items-center">
            <span className="absolute inset-0 rounded-md bg-emerald-glow/20 blur-md transition-opacity group-hover:opacity-100" />
            <span className="relative grid h-7 w-7 place-items-center rounded-md border border-emerald-glow/40 bg-ink-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow live-dot" />
            </span>
          </span>
          <span className="text-[15px] font-medium tracking-tight">Aperture</span>
          <span className="ml-1 hidden rounded-full border border-emerald-glow/30 bg-emerald-glow/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-glow sm:inline">
            v3.0
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden rounded-full px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:text-white sm:inline-block"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-bone px-3.5 py-1.5 text-sm font-medium text-ink transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">Get a demo</span>
            <svg
              className="relative z-10 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-bone via-white to-bone opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
