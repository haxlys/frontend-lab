import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import MouseGlow from './components/MouseGlow';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
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
