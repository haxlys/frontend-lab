import { useScrollReveal } from "../hooks/useScrollReveal";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="reveal relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-16"
    >
      <HeroCanvas />

      <div className="hero-vignette relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
          <span className="flex h-2 w-2 rounded-full bg-emerald shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          <span className="font-inter text-xs font-medium text-gray-300">
            Now in Public Beta
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-geist max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Intelligence that{" "}
          <span className="text-neon">thinks</span>
          <br />
          before you ask
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl font-inter text-base leading-relaxed text-gray-400 sm:text-lg">
          Nexus redefines AI with real-time reasoning, adaptive memory, and
          agentic workflows — built for the era of autonomous intelligence.
        </p>

        {/* CTA Group */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button className="btn-glow relative rounded-full bg-white px-8 py-3.5 font-inter text-base font-semibold text-black transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer">
            Start building free
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
          <button className="glass rounded-full px-8 py-3.5 font-inter text-base font-medium text-gray-300 transition-all duration-300 hover:text-white hover:border-white/10 cursor-pointer">
            Watch demo
          </button>
        </div>

        {/* Social proof */}
        <div className="mt-14 flex items-center gap-3 text-gray-500">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-gray-800"
                style={{ zIndex: 4 - i }}
              >
                <span className="font-inter text-[10px] font-semibold text-gray-400">
                  {String.fromCharCode(65 + i)}
                </span>
              </div>
            ))}
          </div>
          <span className="font-inter text-sm">
            <strong className="text-gray-300">12,000+</strong> developers
            already using Nexus
          </span>
        </div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <div className="particle absolute top-[15%] left-[10%] h-1 w-1 rounded-full bg-neon-purple opacity-40" />
        <div
          className="particle absolute top-[25%] right-[15%] h-1.5 w-1.5 rounded-full bg-electric-blue opacity-30"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="particle absolute bottom-[30%] left-[20%] h-1 w-1 rounded-full bg-emerald opacity-30"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="particle absolute top-[60%] right-[25%] h-0.5 w-0.5 rounded-full bg-neon-purple-glow opacity-40"
          style={{ animationDelay: "5s" }}
        />
        <div
          className="particle absolute bottom-[20%] right-[10%] h-1.5 w-1.5 rounded-full bg-electric-blue-glow opacity-25"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </section>
  );
}
