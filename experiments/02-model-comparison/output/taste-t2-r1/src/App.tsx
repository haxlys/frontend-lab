import { PointerGlow } from "./components/effects/PointerGlow";
import { Grain } from "./components/effects/Grain";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/sections/Hero";
import { TrustStrip } from "./components/sections/TrustStrip";
import { Marquee } from "./components/sections/Marquee";
import { Bento } from "./components/sections/Bento";
import { ClosingCta } from "./components/sections/ClosingCta";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-ink-100 text-ink-900">
      <PointerGlow />
      <Grain />
      <NavBar />
      <main className="relative">
        <Hero />
        <TrustStrip />
        <Marquee />
        <Bento />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
