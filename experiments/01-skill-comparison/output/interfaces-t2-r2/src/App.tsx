import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative bg-deep-black text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
