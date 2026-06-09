import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BentoGrid from './components/BentoGrid';
import MouseGlow from './components/MouseGlow';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <MouseGlow />
      <Navbar />

      <main>
        <HeroSection />
        <BentoGrid />

        <footer className="border-t border-white/[0.05] py-12">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="font-display text-lg font-semibold text-text-primary">
                    Neural
                  </span>
                </div>

                <p className="text-sm text-text-muted">
                  &copy; {new Date().getFullYear()} Neural AI. All rights
                  reserved.
                </p>

                <div className="flex gap-6">
                  {['Twitter', 'GitHub', 'Discord'].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-sm text-text-muted transition-colors hover:text-text-primary"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
