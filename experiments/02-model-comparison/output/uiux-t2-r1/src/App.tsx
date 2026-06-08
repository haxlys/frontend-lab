import { CursorGlow } from './components/CursorGlow';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-white">
      <CursorGlow />
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
