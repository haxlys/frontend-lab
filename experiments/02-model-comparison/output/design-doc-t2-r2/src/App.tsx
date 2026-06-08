import { Navigation } from "./components/Navigation";
import { Hero } from "./components/sections/Hero";
import { LogoMarquee } from "./components/sections/LogoMarquee";
import { Features } from "./components/sections/Features";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/sections/Footer";
import { CursorGlow } from "./components/sections/CursorGlow";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950 text-white">
      {/* Layered backdrops */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-30 bg-[radial-gradient(circle_at_20%_-10%,rgba(139,92,246,0.18),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.14),transparent_45%),radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.12),transparent_50%)]"
      />
      <CursorGlow />

      <Navigation />
      <main className="relative z-10">
        <Hero />
        <LogoMarquee />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
