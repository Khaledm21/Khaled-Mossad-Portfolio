import { motion } from 'framer-motion'
import { fadeUp } from '@utils/animations'

export default function SectionTitle({ tag, title, subtitle, center = true, className = '' }) {
  return (
    <motion.div
      className={`${center ? 'text-center' : ''} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
    >
      {tag && (
        <motion.div
          variants={fadeUp}
          className="font-mono text-[11px] font-medium tracking-[0.28em] uppercase text-primary mb-4"
        >
          — {tag} —
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display font-extrabold text-gradient mb-4"
        style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)', letterSpacing: '-0.025em', lineHeight: 1.08 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="font-body text-slate-500 text-[15px] leading-relaxed"
          style={{ maxWidth: center ? 460 : '100%', margin: center ? '0 auto' : 0 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
