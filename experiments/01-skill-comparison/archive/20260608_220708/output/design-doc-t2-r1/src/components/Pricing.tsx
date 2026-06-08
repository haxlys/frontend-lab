const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For solo developers exploring AI agents.",
    cta: "Get Started",
    highlighted: false,
    features: [
      { text: "3 agent designs / month", included: true },
      { text: "1 concurrent simulation", included: true },
      { text: "Basic prompt templates", included: true },
      { text: "Community support", included: true },
      { text: "Export as JSON", included: true },
      { text: "Advanced model selection", included: false },
      { text: "Team collaboration", included: false },
      { text: "ADE Cloud deployment", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "/ month",
    description: "For professional developers shipping production agents.",
    cta: "Start Pro Trial",
    highlighted: true,
    features: [
      { text: "Unlimited agent designs", included: true },
      { text: "10 concurrent simulations", included: true },
      { text: "Advanced prompt templates", included: true },
      { text: "Priority support", included: true },
      { text: "Export as API / Docker / SDK", included: true },
      { text: "All model providers", included: true },
      { text: "Up to 5 team members", included: true },
      { text: "ADE Cloud deployment (10 agents)", included: true },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations building at scale.",
    cta: "Contact Sales",
    highlighted: false,
    features: [
      { text: "Unlimited everything", included: true },
      { text: "Unlimited concurrent simulations", included: true },
      { text: "Custom template library", included: true },
      { text: "Dedicated support & SLA", included: true },
      { text: "All export formats + webhooks", included: true },
      { text: "Bring your own model keys", included: true },
      { text: "Unlimited team members, SSO", included: true },
      { text: "ADE Cloud dedicated hosting", included: true },
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Pricing
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Plans for Every Stage
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Start free, scale when you're ready.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:scale-[1.02] ${
                plan.highlighted
                  ? "border-indigo-500 bg-indigo-500/5 shadow-xl shadow-indigo-500/10 ring-1 ring-indigo-500/50"
                  : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-slate-400">{plan.period}</span>
                  )}
                </div>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <svg className="size-5 shrink-0 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    ) : (
                      <svg className="size-5 shrink-0 text-slate-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className={f.included ? "text-slate-300" : "text-slate-600"}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-indigo-500 text-white hover:bg-indigo-400 shadow-lg shadow-indigo-500/25"
                    : "border border-slate-700 text-slate-200 hover:bg-slate-800"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
