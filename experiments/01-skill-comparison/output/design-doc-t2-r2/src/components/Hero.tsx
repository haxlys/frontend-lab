export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary-200/40 via-secondary-200/30 to-primary-100/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
          Early Access 오픈
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          자연어로 설계하는
          <br />
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            AI 에이전트 개발
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
          ADE는 <strong className="font-semibold text-slate-800">Agent Development Editor</strong>입니다.
          복잡한 코드 없이 자연어만으로 AI 에이전트를 설계하고, 테스트하고, 배포하세요.
          개발자의 상상력을 그대로 구현합니다.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-200 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
          >
            무료로 시작하기
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>
            데모 보기
          </a>
        </div>

        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50">
          <div className="rounded-xl bg-slate-900 p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-amber-500" />
                <div className="h-3 w-3 rounded-full bg-emerald-500" />
              </div>
              <span className="ml-2 text-xs text-slate-400 font-mono">ADE Terminal</span>
            </div>
            <code className="block text-left text-sm sm:text-base font-mono text-emerald-400 leading-relaxed">
              <span className="text-slate-500">{'>'}</span> <span className="text-secondary-400">agent</span>{" "}
              <span className="text-primary-300">create</span>{" "}
              <span className="text-amber-300">"고객 문의를 분석하고 적절한 답변을 생성하는 지원 에이전트"</span>
              {"\n"}
              <span className="text-slate-500">{'>'}</span> Agent <span className="text-emerald-300">"support-bot"</span>{" "}
              created with 4 skills, 2 tools.
              {"\n"}
              <span className="text-slate-500">{'>'}</span> <span className="text-secondary-400">test</span>{" "}
              support-bot --scenario=<span className="text-amber-300">"환불 요청"</span>
              {"\n"}
              <span className="text-slate-500">{'>'}</span> <span className="text-emerald-300">✓</span> All 12 test cases
              passed. <span className="text-slate-400">(2.3s)</span>
              {"\n"}
              <span className="text-slate-500">{'>'}</span> <span className="text-secondary-400">deploy</span>{" "}
              support-bot --env=<span className="text-amber-300">production</span>
              {"\n"}
              <span className="text-slate-500">{'>'}</span> <span className="text-emerald-300">✓</span> Deployed to{" "}
              <span className="text-primary-300">api.ade.dev/agents/support-bot</span>
              {"\n"}
              <span className="animate-pulse">▊</span>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
