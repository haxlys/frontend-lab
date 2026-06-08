import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

const NAV_ITEMS = [
  { label: "Product", href: "#features" },
  { label: "Platform", href: "#platform" },
  { label: "Docs", href: "#docs" },
  { label: "Pricing", href: "#pricing" },
];

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-white font-['Space_Grotesk'] font-bold text-lg tracking-tight"
          >
            Nexus<span className="text-neon-purple">AI</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Sign In
            </button>
            <button
              type="button"
              className="text-sm px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors duration-200 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          <button
            type="button"
            className="md:hidden text-white p-1 cursor-pointer"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <List size={24} weight="bold" />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-deep-charcoal/95 backdrop-blur-xl md:hidden">
          <div className="flex justify-end p-6">
            <button
              type="button"
              className="text-white p-1 cursor-pointer"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} weight="bold" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 mt-20">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xl text-zinc-400 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              className="mt-4 px-8 py-3 rounded-full bg-white text-black font-medium text-lg cursor-pointer"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}
