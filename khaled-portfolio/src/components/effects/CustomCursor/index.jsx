import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos]         = useState({ x: -100, y: -100 })
  const [ring, setRing]       = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Hide default cursor on desktop
    document.documentElement.style.cursor = 'none'

    let rafId
    let target = { x: -100, y: -100 }

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      target = { x: e.clientX, y: e.clientY }
    }

    // Smooth ring follow
    const animateRing = () => {
      setRing((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.12,
        y: prev.y + (target.y - prev.y) * 0.12,
      }))
      rafId = requestAnimationFrame(animateRing)
    }
    rafId = requestAnimationFrame(animateRing)

    window.addEventListener('mousemove', onMove, { passive: true })

    const onEnter = () => setHovering(true)
    const onLeave = () => setHovering(false)
    const targets = document.querySelectorAll('a, button, input, textarea, [data-cursor]')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.documentElement.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: pos.x, top: pos.y, transform: 'translate(-50%,-50%)' }}
      />
      <div
        className={`cursor-ring${hovering ? ' hovering' : ''}`}
        style={{ left: ring.x, top: ring.y, transform: 'translate(-50%,-50%)' }}
      />
    </>
  )
}
