import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CTA() {
  const ref = useScrollReveal();

  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div
        ref={ref}
        className="reveal relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-neon-purple/10 via-electric-blue/5 to-emerald/10 p-px"
      >
        <div className="glass-card rounded-3xl px-8 py-14 text-center sm:px-16 sm:py-20">
          <h2 className="font-geist text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to build the{" "}
            <span className="text-neon">future</span>?
          </h2>
          <p className="mt-4 font-inter text-lg text-gray-400">
            Join thousands of developers already shipping with Nexus AI. Free to start, scale when you&apos;re ready.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="btn-glow relative rounded-full bg-white px-8 py-3.5 font-inter text-base font-semibold text-black transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer">
              Start free — no credit card
            </button>
            <button className="rounded-full px-8 py-3.5 font-inter text-base font-medium text-gray-400 transition-colors hover:text-white cursor-pointer">
              Talk to sales →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
