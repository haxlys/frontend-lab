import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-16 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-slate-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-sm font-extrabold text-white">
            A
          </span>
          ADE
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-indigo-600">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#pricing"
            className="inline-flex h-10 items-center rounded-lg bg-indigo-500 px-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-600 active:scale-[0.98]"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 transition-colors hover:bg-slate-50 hover:text-indigo-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-lg bg-indigo-500 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-600 active:scale-[0.98]"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
