import { useState, useEffect } from 'react'

const navLinks = [
  { label: '기능', href: '#features' },
  { label: '동작 방식', href: '#how-it-works' },
  { label: '가격', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-lg font-black text-white shadow-lg shadow-brand-500/25 transition-transform group-hover:scale-105">
            A
          </div>
          <span className="text-lg font-bold tracking-tight">
            ADE
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            로그인
          </a>
          <a
            href="#"
            className="text-sm px-4 py-2 rounded-lg bg-white text-gray-950 font-semibold hover:bg-gray-200 transition-colors duration-200"
          >
            무료 시작하기
          </a>
        </div>

        <button
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6 animate-fade-in">
          <div className="flex flex-col gap-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-white/5" />
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors py-2">로그인</a>
            <a
              href="#"
              className="text-sm px-4 py-2.5 rounded-lg bg-white text-gray-950 font-semibold text-center hover:bg-gray-200 transition-colors"
            >
              무료 시작하기
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
