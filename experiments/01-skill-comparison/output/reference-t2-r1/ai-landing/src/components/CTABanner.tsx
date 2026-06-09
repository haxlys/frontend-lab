export default function CTABanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-lime/10 via-neon-cyan/5 to-neon-violet/10" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-neon-lime/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-neon-violet/10 rounded-full blur-[100px]" />

        <div className="relative z-10 text-center py-20 px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Ready to bring your
            <br />
            <span className="bg-gradient-to-r from-neon-lime via-neon-cyan to-neon-violet bg-clip-text text-transparent">
              imagination to life?
            </span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-lg mx-auto">
            Join 50,000+ creators already using NovaMind. Start free, no credit card required.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-8 py-3.5 bg-gradient-to-r from-neon-lime to-neon-cyan rounded-full text-base font-semibold text-black hover:shadow-xl hover:shadow-neon-lime/20 transition-all">
              Start Creating Free
            </button>
            <button className="px-8 py-3.5 bg-white/5 border border-white/10 rounded-full text-base font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all">
              View Examples
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
