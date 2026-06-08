const plans = [
  {
    name: 'Free',
    price: '₩0',
    period: '무료',
    description: 'AI 에이전트 개발을 시작하는 개인 개발자를 위한 플랜',
    color: 'border-white/10 hover:border-white/20',
    buttonStyle: 'border border-white/10 text-white hover:bg-white/5',
    features: [
      '월 500회 요청',
      '에이전트 3개까지',
      '기본 템플릿 제공',
      'REST API 연동',
      '커뮤니티 지원',
    ],
  },
  {
    name: 'Pro',
    price: '₩29,000',
    period: '/월',
    description: '프로덕션급 에이전트를 구축하는 전문 개발자를 위한 플랜',
    color: 'border-brand-400/30 bg-brand-500/5 hover:border-brand-400/50',
    buttonStyle: 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25 hover:from-brand-600 hover:to-brand-700',
    features: [
      '무제한 요청',
      '에이전트 무제한',
      '고급 템플릿 & 컴포넌트',
      '실시간 협업',
      '우선 이메일 지원',
      '커스텀 도구 연동',
    ],
    badge: '인기',
  },
  {
    name: 'Enterprise',
    price: '맞춤 견적',
    period: '',
    description: '대규모 팀을 위한 맞춤형 AI 에이전트 인프라 플랜',
    color: 'border-white/10 hover:border-white/20',
    buttonStyle: 'border border-white/10 text-white hover:bg-white/5',
    features: [
      'Pro의 모든 기능',
      '무제한 시트',
      'SAML SSO / SCIM',
      '전용 인프라 (VPC)',
      '온프레미스 배포',
      '24/7 전담 지원',
      '맞춤형 SLA',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-600/8 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400 mb-4">
            가격
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight">
            당신에게 맞는
            <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent"> 플랜</span>
          </p>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            모든 플랜은 14일 무료 체험이 제공됩니다. 언제든지 플랜을 변경할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative group p-8 rounded-2xl border ${plan.color} bg-white/[0.02] transition-all duration-300 hover:-translate-y-1`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs font-bold shadow-lg shadow-brand-500/25">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                {plan.period && <span className="text-gray-500 text-sm ml-1">{plan.period}</span>}
              </div>

              <a
                href="#"
                className={`block w-full py-3 rounded-lg font-semibold text-sm text-center transition-all duration-200 ${plan.buttonStyle}`}
              >
                {plan.name === 'Enterprise' ? '영업팀 문의' : '무료 체험하기'}
              </a>

              <hr className="my-7 border-white/5" />

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-400 shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
