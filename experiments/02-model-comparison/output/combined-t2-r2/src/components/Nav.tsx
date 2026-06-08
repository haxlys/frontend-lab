import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Benchmarks", href: "#proof" },
  { label: "Docs", href: "#docs" },
  { label: "Pricing", href: "#cta" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex h-14 w-full max-w-6xl items-center justify-between rounded-full px-3 transition-all duration-500 ${
          scrolled ? "glass-strong" : "glass"
        }`}
        aria-label="Primary"
      >
        <a href="#" className="flex items-center gap-2 pl-2 pr-3" aria-label="AXIOM home">
          <Logo />
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink-0">
            AXIOM
          </span>
          <span className="hidden font-mono text-[10px] tracking-widest text-ink-300 sm:inline">
            /v3.2
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-1.5 font-sans text-[13.5px] text-ink-200 transition-colors hover:text-ink-0"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href="#"
            aria-label="GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-ink-200 transition-colors hover:bg-white/5 hover:text-ink-0 md:inline-flex"
          >
            <GithubLogo size={18} weight="regular" />
          </a>
          <a
            href="#cta"
            className="group inline-flex h-9 items-center gap-1.5 rounded-full bg-ink-0 px-4 font-sans text-[13px] font-medium text-ink-900 transition-transform active:scale-[0.98]"
          >
            Get API key
            <ArrowUpRight
              size={14}
              weight="bold"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

function Logo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="1" y="1" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.2" className="text-ink-100" />
      <path
        d="M5.5 16 L5.5 6 L11 12 L16.5 6 L16.5 16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-ink-0"
      />
    </svg>
  );
}
