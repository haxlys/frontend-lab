import { CursorGlow } from "./components/CursorGlow";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Manifesto, Footer } from "./components/Manifesto";

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-ink-0 text-zinc-100">
      <CursorGlow />
      <NavBar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Manifesto />
      </main>
      <Footer />
    </div>
  );
}
