import { useMemo } from 'react'
import { random } from '@utils/helpers'

export default function Particles({ count = 22 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: random(0, 100),
        delay: random(0, 9),
        dur: random(6, 12),
        dx: random(-60, 60),
        size: random(2, 4),
        opacity: random(0.3, 0.75),
      })),
    [count]
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            bottom: 0,
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: `rgba(99, 102, 241, ${p.opacity})`,
            '--dx': `${p.dx}px`,
            animation: `particle-rise ${p.dur}s ${p.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  )
}
