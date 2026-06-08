const steps = [
  {
    step: "01",
    label: "Design",
    title: "Describe your agent",
    body: "Write a prompt describing what the agent does, which tools it should use, and how it makes decisions. ADE parses intent and scaffolds the full blueprint automatically.",
  },
  {
    step: "02",
    label: "Build",
    title: "Test & refine",
    body: "Run the agent through scenario tests, inspect its reasoning traces, and adjust behavior with natural language feedback — no code edits required.",
  },
  {
    step: "03",
    label: "Deploy",
    title: "Ship to production",
    body: "Deploy as a REST endpoint, integrate with Slack or Discord, or embed directly into your application. ADE handles auth, rate limiting, and observability.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From idea to agent in three steps
          </h2>
          <p className="mx-auto mt-4 max-w-[60ch] text-lg leading-relaxed text-slate-500">
            No new language to learn. No infrastructure to wire up. Just describe what you want.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute top-14 left-[15%] right-[15%] hidden h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 md:block" />

          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-sm font-extrabold text-white shadow-md shadow-indigo-200">
                  {s.step}
                </div>
                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
                  {s.label}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-3 max-w-[36ch] leading-relaxed text-slate-500">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
