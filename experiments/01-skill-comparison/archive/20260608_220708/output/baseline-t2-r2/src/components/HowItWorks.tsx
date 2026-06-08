const steps = [
  {
    step: "01",
    title: "Design",
    description: "Describe your agent's purpose, tools, and constraints using natural language. ADE's AI interprets your requirements and generates an initial agent blueprint.",
    details: ["Natural language input", "AI-powered blueprint generation", "Tone & personality configuration"],
  },
  {
    step: "02",
    title: "Build",
    description: "Refine your agent visually on the canvas. Connect APIs, define decision logic, and train on your own data sources — all in a unified editor.",
    details: ["Visual flow editor", "API & tool integrations", "Custom knowledge base training"],
  },
  {
    step: "03",
    title: "Deploy",
    description: "One-click deployment to your infrastructure. Monitor performance, analyze conversations, and continuously improve with usage analytics.",
    details: ["One-click deployment", "Real-time monitoring", "Conversation analytics"],
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="relative bg-gray-50 py-24 sm:py-32 dark:bg-brand-900/30">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-base font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
          How It Works
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          From Idea to Agent in Three Steps
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-brand-200 dark:bg-brand-800 md:left-1/2 md:-translate-x-px" />

        <div className="space-y-12">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className={`relative flex flex-col gap-8 md:flex-row ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                <div className={`rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-brand-800 dark:bg-brand-900/50 ${idx % 2 === 0 ? "md:ml-auto" : ""}`}>
                  <span className="inline-block text-sm font-bold uppercase tracking-widest text-brand-500 dark:text-brand-400">
                    {s.step}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-gray-500 dark:text-gray-400 leading-relaxed">
                    {s.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <svg className="h-4 w-4 shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-500/30 ring-4 ring-white dark:ring-brand-950">
                  <span className="text-sm font-bold">{s.step}</span>
                </div>
              </div>

              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
