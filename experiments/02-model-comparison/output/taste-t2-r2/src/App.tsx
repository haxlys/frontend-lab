import Nav from "./components/Nav";
import Hero from "./components/Hero";
import LogoWall from "./components/LogoWall";
import BentoFeatures from "./components/BentoFeatures";
import Workflow from "./components/Workflow";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PointerGlow from "./components/PointerGlow";

export default function App() {
  return (
    <div className="relative min-h-[100dvh] bg-ink text-bone selection:bg-emerald-glow">
      <PointerGlow />
      <div className="grain" aria-hidden />
      <Nav />
      <main className="relative">
        <Hero />
        <LogoWall />
        <BentoFeatures />
        <Workflow />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
