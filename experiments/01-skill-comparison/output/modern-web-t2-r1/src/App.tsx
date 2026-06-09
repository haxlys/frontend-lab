import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureShowcase from './components/FeatureShowcase'

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureShowcase />
      </main>
    </div>
  )
}
