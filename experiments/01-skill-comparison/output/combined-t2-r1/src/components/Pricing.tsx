const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For hobbyists and solo developers exploring agent development.",
    cta: "Get Started",
    featured: false,
    features: [
      "5 agents",
      "1,000 messages / month",
      "Community sandbox",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "For professional developers shipping agents to production.",
    cta: "Start Free Trial",
    featured: true,
    features: [
      "Unlimited agents",
      "50,000 messages / month",
      "Private sandbox environments",
      "Advanced monitoring & alerts",
      "Slack + Discord integrations",
      "Priority email support",
      "Custom tool registry",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual contract",
    description: "For teams that need dedicated infrastructure and SLA guarantees.",
    cta: "Contact Sales",
    featured: false,
    features: [
      "Everything in Pro",
      "Unlimited messages",
      "Dedicated infrastructure",
      "SSO & SAML authentication",
      "Audit logs & compliance",
      "Custom SLAs",
      "24/7 phone support",
      "On-premise deployment option",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8" id="pricing">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-500">Pricing</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Plans for every stage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Start free, scale when you&apos;re ready. No hidden fees.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-card border p-8 shadow-sm transition hover:-translate-y-1 ${
                plan.featured
                  ? "border-indigo-500 bg-white shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-pill bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-1 text-xs font-semibold text-white shadow-md">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="ml-2 text-sm text-slate-500">{plan.period}</span>
              </div>

              <a
                href="#"
                className={`mb-8 inline-flex h-12 items-center justify-center rounded-xl text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-500/25 hover:from-indigo-600 hover:to-indigo-700"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="mt-auto space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
