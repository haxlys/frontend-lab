import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureShowcase from './components/FeatureShowcase'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import MouseFollower from './components/MouseFollower'
import ScrollReveal from './components/ScrollReveal'

export default function App() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      <MouseFollower />
      <ScrollReveal />
      <Navbar />
      <main>
        <HeroSection />
        <FeatureShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
