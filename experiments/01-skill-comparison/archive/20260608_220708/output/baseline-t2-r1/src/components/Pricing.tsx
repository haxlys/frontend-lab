const plans = [
  {
    name: 'Free',
    price: '₩0',
    period: '영구 무료',
    desc: '개인 개발자와 사이드 프로젝트에 적합',
    cta: '무료로 시작',
    highlighted: false,
    features: [
      '월 100회 에이전트 실행',
      '최대 3개 에이전트 저장',
      '기본 템플릿 제공',
      '샌드박스 테스트 환경',
      '커뮤니티 지원',
    ],
  },
  {
    name: 'Pro',
    price: '₩29,000',
    period: '/월',
    desc: '프로 개발자와 소규모 팀을 위한',
    cta: 'Pro 시작하기',
    highlighted: true,
    features: [
      '월 5,000회 에이전트 실행',
      '무제한 에이전트 저장',
      '고급 템플릿 & 커스텀 도구',
      '우선 샌드박스 리소스',
      'API 엔드포인트 3개',
      '이메일 지원 (24시간 내 응답)',
      '팀 협업 (최대 5인)',
    ],
  },
  {
    name: 'Enterprise',
    price: '맞춤 견적',
    period: '',
    desc: '대규모 팀과 조직을 위한',
    cta: '영업팀에 문의',
    highlighted: false,
    features: [
      '무제한 에이전트 실행',
      '무제한 API 엔드포인트',
      '전용 인프라 (VPC 배포)',
      'SSO / SAML 인증',
      '감사 로그 & 컴플라이언스',
      '99.9% SLA 보장',
      '전담 기술 지원 매니저',
    ],
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            간단한 요금제
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
            필요한 만큼만 사용하고, 언제든지 업그레이드하세요.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                p.highlighted
                  ? 'border-ade-500/50 bg-gradient-to-b from-ade-500/10 to-surface-light/50 shadow-xl shadow-ade-500/10'
                  : 'border-slate-800 bg-surface-light/30'
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-ade-600 text-white text-xs font-semibold">
                  가장 인기
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{p.price}</span>
                  {p.period && <span className="text-slate-400 text-sm">{p.period}</span>}
                </div>
                <p className="mt-2 text-slate-500 text-sm">{p.desc}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-ade-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  p.highlighted
                    ? 'bg-ade-600 hover:bg-ade-500 text-white shadow-lg shadow-ade-600/25'
                    : 'border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
