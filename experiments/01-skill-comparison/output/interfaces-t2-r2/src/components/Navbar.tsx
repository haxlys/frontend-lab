import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-[0_4px_30px_rgba(139,92,246,0.05)]"
          : "glass"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-white"
          >
            Nexa<span className="text-glow-purple">Mind</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {["Product", "Features", "Docs", "Enterprise"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-medium text-text-secondary transition-colors duration-200 
                  hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 
                  after:bg-neon-purple after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <button className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-white/20 hover:text-white">
              Sign In
            </button>
            <button className="rounded-lg bg-neon-purple px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-neon-purple-dim hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]">
              Get Started
            </button>
          </div>

          <button
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] w-6 bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/5 pb-6 pt-4 md:hidden animate-reveal visible">
            {["Product", "Features", "Docs", "Enterprise"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-sm font-medium text-text-secondary transition-colors hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <button className="w-full rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-center text-text-secondary transition-all duration-300 hover:border-white/20 hover:text-white">
                Sign In
              </button>
              <button className="rounded-lg bg-neon-purple px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-neon-purple-dim hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
