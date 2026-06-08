import { CursorGlow } from './components/CursorGlow'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { CTASection, Footer } from './components/CTAFooter'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <div className="relative min-h-screen bg-ink-0 text-white">
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
