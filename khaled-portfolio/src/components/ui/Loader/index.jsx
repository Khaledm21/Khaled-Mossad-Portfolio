import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Loader({ onComplete, minimal = false }) {
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState('.')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const pid = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 3.8
        if (next >= 100) {
          clearInterval(pid)
          setTimeout(() => {
            setDone(true)
            onComplete?.()
          }, 400)
          return 100
        }
        return next
      })
    }, 40)

    const did = setInterval(
      () => setDots((d) => (d.length >= 3 ? '.' : d + '.')),
      520
    )

    return () => { clearInterval(pid); clearInterval(did) }
  }, [])

  if (minimal) {
    return (
      <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-dark-400">
        <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
      </div>
    )
  }

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-dark-400 gap-9"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          {/* BG orbs */}
          <div className="absolute top-[20%] left-[20%] w-52 h-52 rounded-full bg-primary/8 animate-orb-a pointer-events-none" />
          <div className="absolute bottom-[20%] right-[20%] w-40 h-40 rounded-full bg-secondary/8 animate-orb-b pointer-events-none" />

          {/* Logo */}
          <div className="text-center z-10">
            <div
              className="font-display font-extrabold text-gradient-anim"
              style={{ fontSize: 72, letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              KM
            </div>
            <div className="font-mono text-[11px] text-slate-500 tracking-[0.4em] mt-2">PORTFOLIO</div>
          </div>

          {/* Progress */}
          <div className="text-center z-10">
            <div className="w-[220px] h-[2px] bg-primary/10 rounded-full overflow-hidden mb-3.5">
              <div
                className="h-full rounded-full transition-all duration-100 ease-out"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #6366f1, #22d3ee)',
                }}
              />
            </div>
            <div className="font-mono text-[12px] text-slate-600 tracking-wider">
              Loading{dots} {Math.round(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
