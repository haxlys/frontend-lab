import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-dots" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 left-1/4 h-[400px] w-[600px] rounded-full bg-cyan-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 animate-fade-up">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          Now in Public Beta
        </div>

        <h1 className="animate-fade-up text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Build AI Agents
          <br />
          <span className="text-gradient">in Plain English</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl animate-fade-up">
          ADE is the first Agent Development Editor that lets you design, test,
          and deploy intelligent AI agents using natural language. No code, no
          config — just describe what you want.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-up">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-600/30 transition-all hover:bg-violet-500 hover:shadow-violet-500/40"
          >
            Start Building Free
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-medium text-slate-300 backdrop-blur transition-all hover:border-white/20 hover:bg-white/10"
          >
            <Play className="h-5 w-5" />
            See How It Works
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500 animate-fade-up">
          No credit card required · 30-day free trial
        </p>
      </div>
    </section>
  );
}
