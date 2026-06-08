import Navbar from './components/Navbar';
import MouseGlow from './components/MouseGlow';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
