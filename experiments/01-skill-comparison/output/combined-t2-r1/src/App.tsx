import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="relative bg-eclipse-950 text-white min-h-[100dvh] selection:bg-neon-purple/30">
      <CursorGlow />
      <Navbar />
      <Hero />
      <BentoGrid />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
