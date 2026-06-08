const steps = [
  {
    step: "01",
    title: "Design",
    description:
      "Describe your agent in natural language. Define its role, tools, and constraints. ADE's AI generates a structured agent specification with suggested parameters.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    step: "02",
    title: "Build",
    description:
      "Refine behavior through our interactive playground. Adjust prompts, tool bindings, and fallback strategies in real-time as you chat with your agent.",
    color: "from-pink-500 to-rose-500",
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "Push to production with one click. Monitor your agent's performance, iterate based on real usage data, and scale automatically as demand grows.",
    color: "from-amber-500 to-orange-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-900 px-4 py-24 sm:px-6 lg:px-8" id="how-it-works">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">How It Works</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Design → Build → Deploy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Three steps from concept to a running agent. No DevOps experience needed.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="relative rounded-card border border-slate-700/50 bg-slate-800/50 p-8">
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-lg font-bold text-white shadow-lg`}
              >
                {s.step}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-400">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
