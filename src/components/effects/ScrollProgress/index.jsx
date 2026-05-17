import { useScrollProgress } from '@hooks/useMouseGlow'

export default function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px]">
      <div
        className="h-full rounded-r-full transition-all duration-100 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #22d3ee)',
          boxShadow: '0 0 10px rgba(99,102,241,0.6)',
        }}
      />
    </div>
  )
}
