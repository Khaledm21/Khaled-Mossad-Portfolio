import { useEffect, useState } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

/* ─── useMouseGlow ──────────────────────────────────── */
/**
 * Tracks the mouse position with spring physics
 * Returns springified x, y motion values
 */
export const useMouseGlow = () => {
  const mouseX = useMotionValue(-9999)
  const mouseY = useMotionValue(-9999)

  const x = useSpring(mouseX, { damping: 28, stiffness: 140, mass: 0.8 })
  const y = useSpring(mouseY, { damping: 28, stiffness: 140, mass: 0.8 })

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    const onLeave = () => {
      mouseX.set(-9999)
      mouseY.set(-9999)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return { x, y }
}

/* ─── useCustomCursor ───────────────────────────────── */
/**
 * Tracks cursor position and hover state for a custom cursor
 */
export const useCustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove, { passive: true })

    const targets = document.querySelectorAll(
      'a, button, [data-cursor-hover], input, textarea'
    )
    targets.forEach((el) => {
      el.addEventListener('mouseenter', () => setHovering(true))
      el.addEventListener('mouseleave', () => setHovering(false))
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return { pos, hovering }
}

/* ─── useActiveSection ──────────────────────────────── */
/**
 * Tracks which section is currently in the viewport
 * @param {string[]} sections - list of section IDs to observe
 */
export const useActiveSection = (sections = []) => {
  const [activeSection, setActiveSection] = useState(sections[0] ?? '')

  useEffect(() => {
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.25,
        rootMargin: '-80px 0px -55% 0px',
      }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections.join(',')])

  return activeSection
}

/* ─── useScrollProgress ─────────────────────────────── */
/**
 * Returns scroll progress as 0-100 value
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const total =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return progress
}

/* ─── useTypewriter ─────────────────────────────────── */
/**
 * Typewriter effect cycling through an array of strings
 * @param {string[]} words    - words to cycle through
 * @param {number}   typeSpeed   - ms per character when typing
 * @param {number}   deleteSpeed - ms per character when deleting
 * @param {number}   pauseMs     - pause duration after full word
 */
export const useTypewriter = (words = [], typeSpeed = 95, deleteSpeed = 50, pauseMs = 1600) => {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return
    const current = words[wordIdx]
    const speed = deleting ? deleteSpeed : typeSpeed

    const timer = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1))
        } else {
          setTimeout(() => setDeleting(true), pauseMs)
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1))
        } else {
          setDeleting(false)
          setWordIdx((wordIdx + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayed, deleting, wordIdx, words, typeSpeed, deleteSpeed, pauseMs])

  return displayed
}
