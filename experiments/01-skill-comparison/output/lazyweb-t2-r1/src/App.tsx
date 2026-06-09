import MouseGlow from './components/MouseGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoFeatures from './components/BentoFeatures';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-gray-200 font-sans">
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <BentoFeatures />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
