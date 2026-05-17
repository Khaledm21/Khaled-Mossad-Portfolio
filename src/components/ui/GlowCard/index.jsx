import { motion } from 'framer-motion'
import { useState } from 'react'
import clsx from 'clsx'

export default function GlowCard({ children, className = '', glowColor = '#6366f1', onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      className={clsx('glass-card rounded-[18px] relative overflow-hidden', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      whileHover={{ y: -7, transition: { duration: 0.3 } }}
    >
      {/* Glow corner */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 rounded-[18px]"
        style={{
          background: `radial-gradient(circle at top left, ${glowColor}12 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }}
      />
      {children}
    </motion.div>
  )
}
