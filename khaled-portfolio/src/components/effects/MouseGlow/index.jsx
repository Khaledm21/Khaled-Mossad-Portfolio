import { motion } from 'framer-motion'
import { useMouseGlow } from '@hooks/useMouseGlow'

export default function MouseGlow() {
  const { x, y } = useMouseGlow()
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-0"
      style={{
        x,
        y,
        width: 420,
        height: 420,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 68%)',
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}
