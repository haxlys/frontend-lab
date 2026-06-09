export default function GlowOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="glow-orb w-[500px] h-[500px]"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
          top: '10%',
          left: '-10%',
          animation: 'orb-float-1 12s ease-in-out infinite',
        }}
      />
      <div
        className="glow-orb w-[400px] h-[400px]"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          top: '60%',
          right: '-8%',
          animation: 'orb-float-2 15s ease-in-out infinite',
        }}
      />
      <div
        className="glow-orb w-[350px] h-[350px]"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
          bottom: '10%',
          left: '40%',
          animation: 'orb-float-3 14s ease-in-out infinite',
        }}
      />
    </div>
  )
}
