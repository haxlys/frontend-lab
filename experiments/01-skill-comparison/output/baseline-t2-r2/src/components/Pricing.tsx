const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started and personal projects.",
    cta: "Start Free",
    featured: false,
    features: [
      "3 agents",
      "500 conversations / month",
      "Basic analytics",
      "Community support",
      "Single workspace",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "For professional developers shipping production agents.",
    cta: "Start Pro Trial",
    featured: true,
    features: [
      "30 agents",
      "10,000 conversations / month",
      "Advanced analytics",
      "Priority support",
      "Unlimited workspaces",
      "Custom knowledge bases",
      "API access",
      "Team collaboration",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large teams with advanced security and compliance needs.",
    cta: "Contact Sales",
    featured: false,
    features: [
      "Unlimited agents",
      "Unlimited conversations",
      "Real-time monitoring",
      "Dedicated support",
      "SSO & SAML",
      "Audit logs",
      "On-premise deployment",
      "Custom integrations",
      "SLA guarantee",
    ],
  },
];

const Pricing = () => (
  <section id="pricing" className="relative bg-white py-24 sm:py-32 dark:bg-brand-950">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-base font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
          Pricing
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Plans for Every Stage
        </p>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Start free, scale as you grow. No hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-3xl border bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:bg-brand-900/50 ${
              plan.featured
                ? "border-brand-500 ring-2 ring-brand-500/20 scale-[1.02] lg:scale-105"
                : "border-gray-200 dark:border-brand-800"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex rounded-full bg-brand-500 px-4 py-1 text-sm font-semibold text-white shadow-lg shadow-brand-500/30">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {plan.price}
              </span>
              {plan.period && (
                <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">/{plan.period}</span>
              )}
            </div>

            <a
              href="#"
              className={`mb-8 block w-full rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all ${
                plan.featured
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-500/30 hover:bg-brand-500 hover:-translate-y-0.5"
                  : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-brand-700 dark:bg-brand-800 dark:text-white dark:hover:bg-brand-700"
              }`}
            >
              {plan.cta}
            </a>

            <ul className="space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
