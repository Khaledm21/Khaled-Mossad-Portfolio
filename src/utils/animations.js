/* ─── Framer Motion Variants ─────────────────────────── */

export const fadeUp = {
  hidden:  { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.6, -0.05, 0.01, 0.99] } },
}

export const fadeDown = {
  hidden:  { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeLeft = {
  hidden:  { opacity: 0, x: -42 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export const fadeRight = {
  hidden:  { opacity: 0, x: 42 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.82 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

export const staggerContainer = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

export const staggerFast = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

export const staggerSlow = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

export const cardHover = {
  rest:  { y: 0,  scale: 1,    boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: { y: -8, scale: 1.01, boxShadow: '0 24px 52px rgba(0,0,0,0.35)' },
}

export const navVariants = {
  hidden:  { y: -80, opacity: 0 },
  visible: { y: 0,   opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const mobileMenu = {
  hidden:  { opacity: 0, height: 0, overflow: 'hidden' },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, height: 0, transition: { duration: 0.28, ease: 'easeIn' } },
}

export const pageTransition = {
  initial:   { opacity: 0, y: 24 },
  animate:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit:      { opacity: 0, y: -16, transition: { duration: 0.3, ease: 'easeIn' } },
}

export const loaderVariants = {
  hidden:  { opacity: 1 },
  exit:    { opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } },
}

export const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit:    { opacity: 0, transition: { duration: 0.25 } },
}

export const slideInUp = {
  hidden:  { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.6, -0.05, 0.01, 0.99] },
  }),
}

export const filterItem = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit:    { opacity: 0, scale: 0.88, transition: { duration: 0.28 } },
}
