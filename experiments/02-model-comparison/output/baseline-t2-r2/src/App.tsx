import { CursorGlow } from './components/CursorGlow'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { FeatureShowcase } from './components/FeatureShowcase'
import { CTAFooter } from './components/CTAFooter'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 80%)',
          animation: 'grid-drift 30s linear infinite',
        }}
      />

      <CursorGlow />
      <Navigation />
      <main>
        <Hero />
        <FeatureShowcase />
        <CTAFooter />
      </main>
    </div>
  )
}
