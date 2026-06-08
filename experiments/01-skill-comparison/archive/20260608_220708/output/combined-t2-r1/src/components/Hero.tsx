export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-4 pb-32 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]" />
      <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-indigo-500/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 rounded-full bg-pink-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-pill border border-indigo-400/20 bg-indigo-400/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          Now in Public Beta
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Build AI Agents
          <br />
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            with Natural Language
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          <strong className="font-semibold text-white">ADE</strong> is the first Agent Development Editor that lets you
          design, test, and deploy AI agents using plain language. No YAML, no JSON — just describe what you want.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#pricing"
            className="inline-flex h-14 items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-8 text-lg font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:from-indigo-600 hover:to-indigo-700 hover:shadow-xl hover:shadow-indigo-500/30"
          >
            Start Building Free
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex h-14 items-center gap-2 rounded-xl border border-slate-600 bg-slate-800/50 px-8 text-lg font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          {[
            { value: "12,000+", label: "Agents Created" },
            { value: "99.7%", label: "Uptime SLA" },
            { value: "4.9/5", label: "Developer Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
