import { Navbar } from './components/Navbar'
import { MouseGradient } from './components/MouseGradient'
import { Hero } from './components/Hero'
import { BentoGrid } from './components/BentoGrid'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <MouseGradient />
      <Navbar />
      <Hero />
      <BentoGrid />
      <Footer />
    </div>
  )
}
