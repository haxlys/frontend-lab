const steps = [
  {
    step: "01",
    title: "Design",
    description:
      "Describe your agent's role, goals, and tools using natural language. ADE's AI engine generates optimized system prompts, tool definitions, and orchestration logic automatically.",
    icon: (
      <svg className="size-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Build & Test",
    description:
      "Run interactive simulations with your agent in a visual sandbox. Inspect every decision path, refine prompts, and compare model performance side by side before deploying.",
    icon: (
      <svg className="size-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "Export as a REST API, Docker image, or SDK integration. Deploy on your own infrastructure or use ADE Cloud for managed hosting with built-in observability and auto-scaling.",
    icon: (
      <svg className="size-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From Idea to Agent in 3 Steps
          </h2>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute left-8 top-12 hidden h-px w-full bg-gradient-to-r from-indigo-500/50 to-transparent lg:block" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-indigo-500/10 ring-1 ring-indigo-500/20 text-indigo-400">
                  {s.icon}
                </div>
                <span className="mt-4 text-xs font-bold uppercase tracking-widest text-indigo-400">
                  Step {s.step}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 max-w-xs">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
