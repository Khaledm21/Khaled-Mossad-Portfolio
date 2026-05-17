import { motion } from 'framer-motion'
import clsx from 'clsx'

/* ─── Gradient Text ────────────────────────────────── */
export function GradientText({ children, animate = true, className = '', tag = 'span' }) {
  const Tag = tag
  return (
    <Tag className={clsx(animate ? 'text-gradient-anim' : 'text-gradient', 'font-display font-extrabold', className)}>
      {children}
    </Tag>
  )
}

/* ─── Letter-by-letter stagger ─────────────────────── */
export function StaggerText({ text = '', className = '', delay = 0 }) {
  const letters = text.split('')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.035, delayChildren: delay },
    },
  }

  const child = {
    hidden:  { opacity: 0, y: 24, rotateX: -40 },
    visible: {
      opacity: 1, y: 0, rotateX: 0,
      transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  }

  return (
    <motion.span
      className={clsx('inline-flex flex-wrap', className)}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ perspective: 600 }}
    >
      {letters.map((letter, i) => (
        <motion.span key={i} variants={child} style={{ display: 'inline-block' }}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

/* ─── Word-by-word reveal ───────────────────────────── */
export function WordReveal({ text = '', className = '', delay = 0 }) {
  const words = text.split(' ')

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
  }

  const word = {
    hidden:  { opacity: 0, y: 32, skewY: 6 },
    visible: {
      opacity: 1, y: 0, skewY: 0,
      transition: { duration: 0.55, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  }

  return (
    <motion.div
      className={clsx('flex flex-wrap gap-x-[0.28em]', className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ overflow: 'hidden' }}
    >
      {words.map((w, i) => (
        <div key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span variants={word} style={{ display: 'inline-block' }}>{w}</motion.span>
        </div>
      ))}
    </motion.div>
  )
}

/* ─── Shimmer Text ─────────────────────────────────── */
export function ShimmerText({ children, className = '' }) {
  return (
    <span
      className={clsx('font-display font-extrabold inline-block', className)}
      style={{
        background: 'linear-gradient(90deg, #818cf8 0%, #e2e8f0 40%, #818cf8 80%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'progress-shimmer 2.5s linear infinite',
      }}
    >
      {children}
    </span>
  )
}

/* ─── Typing Cursor ─────────────────────────────────── */
export function TypingCursor({ color = '#6366f1' }) {
  return (
    <span
      style={{
        display: 'inline-block',
        width: 2.5,
        height: '1.15em',
        background: color,
        borderRadius: 1,
        marginLeft: 3,
        verticalAlign: 'text-bottom',
        animation: 'blink 1s step-end infinite',
      }}
    />
  )
}

/* ─── Default export: generic AnimatedText ───────────── */
export default function AnimatedText({
  text = '',
  variant = 'fadeUp',
  className = '',
  delay = 0,
  tag = 'p',
}) {
  const Tag = tag

  const variants = {
    fadeUp: {
      hidden:  { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.6, -0.05, 0.01, 0.99] } },
    },
    fadeLeft: {
      hidden:  { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.65, delay, ease: 'easeOut' } },
    },
    scale: {
      hidden:  { opacity: 0, scale: 0.85 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] } },
    },
  }

  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <Tag className={className}>{text}</Tag>
    </motion.div>
  )
}
