const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
        <path d="M9 9h6M9 13h3" />
      </svg>
    ),
    title: '자연어 설계',
    description:
      '복잡한 프롬프트 엔지니어링은 이제 그만. 원하는 에이전트의 역할과 동작을 한국어로 설명하면 ADE가 최적의 구성을 자동 생성합니다.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: '실시간 테스트',
    description:
      '에이전트의 응답을 실시간으로 확인하고, 대화형 디버깅 도구로 의도한 대로 동작하는지 즉시 검증할 수 있습니다.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        <path d="M12 2v15.77" />
        <path d="M12 2l-3.09 6.26L2 9.27l5 4.87L5.82 21 12 17.77" />
      </svg>
    ),
    title: '원클릭 배포',
    description:
      '완성된 에이전트를 REST API, Slack 봇, 웹 위젯 등 다양한 채널로 즉시 배포할 수 있습니다. CI/CD 파이프라인도 자동 구성됩니다.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-600/10 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400 mb-4">
            핵심 기능
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight">
            개발자를 위한
            <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent"> AI 워크플로우</span>
          </p>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            복잡한 설정 없이, 자연어만으로 완전한 AI 에이전트를 구축하는 경험을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-400/20 transition-all duration-300"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-600/10 border border-brand-400/20 flex items-center justify-center text-brand-400 mb-5 group-hover:from-brand-500/30 group-hover:to-brand-600/20 group-hover:border-brand-400/30 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
