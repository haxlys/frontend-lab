function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ade-900/30 via-surface to-surface pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ade-600/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ade-500/30 bg-ade-500/10 text-ade-300 text-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ade-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ade-400" />
          </span>
          Agent Development Editor — 지금 출시
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
          자연어로 설계하는
          <br />
          <span className="bg-gradient-to-r from-ade-400 via-ade-500 to-violet-400 bg-clip-text text-transparent">
            AI 에이전트 개발
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          복잡한 코드 없이 자연어만으로 AI 에이전트를 설계, 테스트, 배포하세요.
          프로토타입부터 프로덕션까지, 단 하나의 에디터로 완성합니다.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-ade-600 hover:bg-ade-500 text-white font-semibold text-base transition-all shadow-lg shadow-ade-600/25 hover:shadow-ade-500/30"
          >
            무료로 시작하기
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-base transition-all"
          >
            기능 살펴보기 →
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-slate-500 text-sm">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-ade-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            코드 작성 불필요
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-ade-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            실시간 테스트
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-ade-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            원클릭 배포
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
