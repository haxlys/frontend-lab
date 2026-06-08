import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Workflows", href: "#bento" },
  { label: "Customers", href: "#trust" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 16));
  useEffect(() => () => setScrolled(false), []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6"
    >
      <nav
        className={`glass-strong flex h-14 w-full max-w-[1180px] items-center justify-between rounded-full px-3 pl-5 transition-[box-shadow,border-color] duration-500 ${
          scrolled
            ? "shadow-[0_18px_60px_-24px_rgba(139,92,246,0.45)]"
            : "shadow-none"
        }`}
      >
        <a href="#" className="flex items-center gap-2.5 font-medium tracking-tight">
          <LogoMark />
          <span className="text-[15px] text-ink-950">Synapse</span>
          <span className="hidden rounded-full border border-volt-500/30 bg-volt-500/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-volt-300 sm:inline">
            Field
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-[13.5px] text-ink-800 transition-colors duration-300 hover:text-ink-950"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href="#login"
            className="hidden rounded-full px-3.5 py-1.5 text-[13.5px] text-ink-800 transition-colors duration-300 hover:text-ink-950 sm:inline-block"
          >
            Sign in
          </a>
          <a
            href="#start"
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-ink-950/[0.04] px-3.5 py-1.5 text-[13.5px] font-medium text-ink-950 transition-all duration-300 hover:border-volt-400/40 hover:shadow-[0_0_24px_-6px_rgba(139,92,246,0.55)]"
          >
            Start free
            <ArrowUpRight
              size={14}
              weight="bold"
              className="transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
            />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

function LogoMark() {
  return (
    <span className="relative grid h-7 w-7 place-items-center">
      <span className="absolute inset-0 rounded-[8px] bg-gradient-to-br from-volt-500 to-glacier-500 opacity-90" />
      <span className="absolute inset-[1.5px] rounded-[6.5px] bg-ink-100" />
      <span className="relative h-2.5 w-2.5 rounded-[3px] bg-gradient-to-br from-volt-400 to-glacier-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
    </span>
  );
}
