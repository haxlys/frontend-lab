import { useEffect, useRef } from 'react'
import HeroCanvas from './HeroCanvas'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      el.style.setProperty('--tx', `${x}px`)
      el.style.setProperty('--ty', `${y}px`)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroCanvas />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-8 text-xs font-medium text-white/60 animate-float">
          <span className="w-2 h-2 rounded-full bg-emerald shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          Now in Public Beta — Early Access Available
        </div>

        <h1
          className="text-[clamp(3rem,10vw,7rem)] font-black leading-[0.95] tracking-[-0.03em] mb-6"
          style={{
            transform: 'translate(var(--tx, 0px), var(--ty, 0px))',
            transition: 'transform 0.15s ease-out',
          }}
        >
          <span className="block text-white">Intelligence</span>
          <span className="block neon-gradient-text">Without Limits</span>
        </h1>

        <p className="max-w-xl mx-auto text-lg md:text-xl text-white/50 font-light leading-relaxed mb-10">
          Nexus AI fuses reasoning, perception, and creation into one unified platform —
          <span className="text-white/70"> delivering answers before you finish asking.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative px-8 py-4 rounded-full font-semibold text-base bg-white text-black overflow-hidden transition-all duration-500 hover:scale-105">
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-neon-purple via-electric-blue to-emerald" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              Start Building Free →
            </span>
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 bg-gradient-to-r from-neon-purple via-electric-blue to-emerald" />
          </button>
          <button className="group px-8 py-4 rounded-full font-medium text-base text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 glass-card">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Watch Demo
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
          {[
            { value: '99.7%', label: 'Accuracy Rate' },
            { value: '&lt;50ms', label: 'Response Time' },
            { value: '10M+', label: 'Active Nodes' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold text-white mb-1">{value}</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float-delayed">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/20">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  )
}
