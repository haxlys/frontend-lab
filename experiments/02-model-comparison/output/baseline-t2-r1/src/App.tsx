import CTASection from './components/CTASection'
import CursorGlow from './components/CursorGlow'
import FeatureBento from './components/FeatureBento'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-white selection:bg-neon-purple/40">
      <ScrollProgress />
      <CursorGlow />
      <NavBar />
      <main>
        <Hero />
        <FeatureBento />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
