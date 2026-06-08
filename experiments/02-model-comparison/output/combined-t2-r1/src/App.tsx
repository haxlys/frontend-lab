import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import Bento from './components/Bento'
import Workflow from './components/Workflow'
import Metrics from './components/Metrics'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CursorField from './components/CursorField'

export default function App() {
  return (
    <div className="grain relative min-h-[100dvh] overflow-x-clip bg-ink text-zinc-100">
      <CursorField />
      <Navbar />
      <main className="relative">
        <Hero />
        <LogoMarquee />
        <Bento />
        <Workflow />
        <Metrics />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
