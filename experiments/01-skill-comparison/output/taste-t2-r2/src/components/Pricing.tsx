const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individual developers exploring agent development.",
    cta: "Start for free",
    featured: false,
    features: [
      "3 agents",
      "1,000 messages / month",
      "Community tools library",
      "Live playground (shared)",
      "Export as JSON",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "/ month",
    description: "For serious builders shipping agents to production.",
    cta: "Start free trial",
    featured: true,
    features: [
      "Unlimited agents",
      "50,000 messages / month",
      "Custom tool definitions",
      "Private live playground",
      "REST API deployment",
      "Slack & Discord integrations",
      "Version history & rollback",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams that need scale, security, and dedicated support.",
    cta: "Talk to sales",
    featured: false,
    features: [
      "Everything in Pro",
      "Unlimited messages",
      "SSO & SAML",
      "Custom model endpoints",
      "On-premise deployment",
      "Dedicated SLA & support",
      "Audit logs & compliance",
      "Custom branding",
    ],
  },
]

const CheckIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
)

const Pricing = () => (
  <section id="pricing" className="py-28 px-6">
    <div className="mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <span className="text-xs font-semibold text-accent-light uppercase tracking-[0.2em]">
          Pricing
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
          Plans for every stage
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-text-secondary leading-relaxed">
          Start building for free. Upgrade when you're ready to ship.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-8 flex flex-col ${
              plan.featured
                ? "border-accent bg-accent-glow shadow-lg shadow-accent/10 scale-[1.02] lg:scale-105"
                : "border-border bg-surface-card"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold tracking-wide">
                Most popular
              </span>
            )}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-sm text-text-secondary">{plan.description}</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
              {plan.period && (
                <span className="text-text-muted text-sm ml-1">{plan.period}</span>
              )}
            </div>
            <a
              href="#"
              className={`block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all mb-8 ${
                plan.featured
                  ? "bg-accent text-white hover:bg-accent/90 shadow-md shadow-accent/25"
                  : "border border-border text-text-primary hover:bg-surface-elevated"
              }`}
            >
              {plan.cta}
            </a>
            <ul className="space-y-3 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className={plan.featured ? "text-accent-light" : "text-text-muted"}>
                    <CheckIcon />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Pricing
