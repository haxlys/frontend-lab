import { useEffect, useState } from 'react'

const PHRASES = [
  'analyzing 14,302 signals / sec',
  'synthesizing neural pathways',
  'optimizing context window',
  'orchestrating agentic workflows',
  'rendering inference graph',
]

export default function TypingLine() {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = PHRASES[phraseIdx]
    const speed = deleting ? 22 : 45
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = phrase.slice(0, text.length + 1)
        setText(next)
        if (next === phrase) {
          setTimeout(() => setDeleting(true), 1200)
        }
      } else {
        const next = phrase.slice(0, Math.max(0, text.length - 1))
        setText(next)
        if (next.length === 0) {
          setDeleting(false)
          setPhraseIdx((i) => (i + 1) % PHRASES.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, phraseIdx])

  return (
    <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-white/60">
      <span className="relative flex h-2 w-2">
        <span className="absolute inset-0 rounded-full bg-neon-green animate-ping opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-green" />
      </span>
      <span className="text-neon-green/80">neura@v3</span>
      <span className="text-white/30">~</span>
      <span className="text-white/80">
        {text}
        <span className="inline-block w-1.5 h-3.5 bg-neon-purple ml-0.5 align-middle animate-typing-cursor" />
      </span>
    </div>
  )
}
