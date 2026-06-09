import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TagFilter from './components/TagFilter';
import Gallery from './components/Gallery';
import Features from './components/Features';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

export default function App() {
  const [activeTag, setActiveTag] = useState('All');

  return (
    <div className="min-h-screen bg-charcoal-900 text-white">
      <Navbar />
      <Hero />
      <TagFilter activeTag={activeTag} onTagChange={setActiveTag} />
      <Gallery activeTag={activeTag} />
      <Features />
      <CTABanner />
      <Footer />
    </div>
  );
}
