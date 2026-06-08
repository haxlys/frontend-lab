import BackgroundGradient from "./components/BackgroundGradient";
import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import FeatureShowcase from "./components/FeatureShowcase";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-deep-charcoal">
      <BackgroundGradient />
      <NavigationBar />
      <main>
        <HeroSection />
        <FeatureShowcase />
      </main>
      <Footer />
    </div>
  );
}
