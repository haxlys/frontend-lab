import { Brain, TestTube, Rocket } from "@phosphor-icons/react";

const featuresList = [
  {
    icon: Brain,
    title: "Natural Language Design",
    body: "Describe the agent you need in plain English. ADE infers the decision tree, tool integrations, and routing logic — no YAML, no DSL, no code.",
  },
  {
    icon: TestTube,
    title: "Iterative Sandbox Testing",
    body: "Run your agent against simulated scenarios before deployment. Catch edge cases, tune prompts, and validate tool calls in a safe, isolated environment.",
  },
  {
    icon: Rocket,
    title: "One-Click Production Deploy",
    body: "Ship your agent as an API endpoint, a Slack bot, or an embedded runtime. ADE generates the deployment config and monitors agent health in real time.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to ship agents
          </h2>
          <p className="mx-auto mt-4 max-w-[60ch] text-lg leading-relaxed text-slate-500">
            From intent to production in three surfaces. Each purpose-built for a stage of the agent development lifecycle.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featuresList.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500">
                  <Icon size={26} weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-500">{f.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
