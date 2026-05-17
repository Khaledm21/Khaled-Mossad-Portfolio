import { useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * useScrollAnimation
 * Returns a ref and isInView boolean for scroll-triggered animations
 *
 * @param {number}  threshold - 0-1, portion of element visible before triggering
 * @param {boolean} once      - only trigger once (default: true)
 * @param {string}  margin    - rootMargin equivalent ("-100px 0px -50px 0px")
 */
export const useScrollAnimation = (
  threshold = 0.1,
  once = true,
  margin = '-60px 0px -60px 0px'
) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: threshold, once, margin })
  return { ref, isInView }
}

/**
 * useStaggerAnimation
 * Returns animation props for staggered children
 */
export const useStaggerAnimation = (delay = 0) => ({
  initial:  'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-60px' },
  variants: {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.6, -0.05, 0.01, 0.99] } },
  },
})

/**
 * useRevealAnimation
 * Simple fade-up on scroll
 */
export const useRevealAnimation = (delay = 0) => ({
  initial:  { opacity: 0, y: 44 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.6, -0.05, 0.01, 0.99] },
})
