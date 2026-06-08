import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { LogoWall } from "./components/LogoWall";
import { Bento } from "./components/Bento";
import { Proof } from "./components/Proof";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { PointerGlow } from "./components/PointerGlow";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="relative min-h-[100dvh] bg-ink-950 text-ink-100 font-sans antialiased">
      <PointerGlow />
      <div className="noise" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <LogoWall />
        <Bento />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
