import { Reveal } from "./Reveal";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative isolate w-full overflow-hidden py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="absolute -inset-x-20 top-1/2 -z-10 h-[480px] -translate-y-1/2"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(59,130,246,0.12) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="mx-auto w-full max-w-4xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-purple" />
            manifesto
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-ultratight text-white sm:text-5xl md:text-6xl">
            We&apos;re building the <span className="text-gradient-neon">last interface</span>{" "}
            <br className="hidden sm:block" />
            you&apos;ll ever need.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-zinc-400">
            Every app is a wrapper around intent. Nebula collapses intent,
            computation, and action into a single, ambient surface — so that
            software finally feels like a conversation, not a chore.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#start"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold text-white"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))",
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 rounded-xl"
                style={{
                  padding: "1px",
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.9), rgba(59,130,246,0.9) 50%, rgba(16,185,129,0.9))",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-3 -z-20 rounded-2xl opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(139,92,246,0.7), rgba(59,130,246,0.4) 50%, transparent 75%)",
                }}
              />
              <span className="relative z-10">Get early access</span>
            </a>
            <a
              href="#careers"
              className="text-sm text-zinc-300 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              We&apos;re hiring →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-zinc-500 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-semibold text-zinc-300">
            Nebula
          </span>
          <span>© {new Date().getFullYear()} Nebula Labs, Inc.</span>
        </div>
        <nav className="flex items-center gap-5">
          <a href="#privacy" className="hover:text-zinc-300">
            Privacy
          </a>
          <a href="#terms" className="hover:text-zinc-300">
            Terms
          </a>
          <a href="#status" className="hover:text-zinc-300">
            Status
          </a>
          <a
            href="#x"
            className="hover:text-zinc-300"
            aria-label="Nebula on X"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="currentColor"
              aria-hidden
            >
              <path d="M18.244 2H21l-6.51 7.44L22 22h-6.83l-4.78-6.27L4.8 22H2l7.02-8.02L2 2h6.91l4.3 5.7L18.244 2Zm-2.4 18h1.86L7.27 4h-2L15.844 20Z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
