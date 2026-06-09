import { useEffect, useRef } from 'react'
import AICanvas from './AICanvas'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      section.style.setProperty('--mouse-x', `${x}%`)
      section.style.setProperty('--mouse-y', `${y}%`)
    }

    section.addEventListener('mousemove', handleMove)
    return () => section.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={
        {
          '--mouse-x': '50%',
          '--mouse-y': '50%',
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.06) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.04) 0%, transparent 40%)',
        }}
      />

      <div className="absolute top-1/4 left-[15%] w-[500px] h-[500px] rounded-full bg-neon-purple orb animate-float" />
      <div
        className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] rounded-full bg-electric-blue orb animate-float"
        style={{ animationDelay: '-3s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald orb"
        style={{ animationDelay: '-5s', opacity: 0.04 }}
      />

      <AICanvas />

      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center animate-fade-in-up">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-xs text-white/50 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
          </span>
          Now in Private Beta — Early Access Available
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
          <span className="block text-white/90">The Future of</span>
          <span className="neon-text block">Intelligence</span>
          <span className="block text-white/90">Is Here</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base sm:text-lg text-white/40 leading-relaxed font-light">
          Nexus deploys sovereign AI agents that reason, create, and execute
          at <span className="text-white/60">human level</span> — unlocking
          productivity that was never possible before.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            className="cta-glow group relative inline-flex items-center gap-2 rounded-xl border border-neon-purple/30 bg-neon-purple/10 px-8 py-4 text-sm font-semibold text-white transition-all duration-500"
            style={
              {
                '--mouse-x': '50%',
                '--mouse-y': '50%',
              } as React.CSSProperties
            }
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = ((e.clientX - rect.left) / rect.width) * 100
              const y = ((e.clientY - rect.top) / rect.height) * 100
              e.currentTarget.style.setProperty('--mouse-x', `${x}%`)
              e.currentTarget.style.setProperty('--mouse-y', `${y}%`)
            }}
          >
            <span className="relative z-10">Start Building Free</span>
            <svg
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>

          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-8 py-4 text-sm font-medium text-white/50 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:text-white/80"
          >
            <span>Watch Demo</span>
            <svg
              className="h-4 w-4 opacity-40 transition-opacity group-hover:opacity-80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-white/20">
          <span className="text-xs tracking-widest uppercase">
            Trusted by innovators
          </span>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-10 opacity-30">
          {['ACME Corp', 'Stellar AI', 'Quantum Labs', 'Synthwave', 'Atlas'].map(
            (name) => (
              <span
                key={name}
                className="text-sm font-bold tracking-widest text-white/50 uppercase"
              >
                {name}
              </span>
            ),
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg
          className="h-5 w-5 text-white/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
