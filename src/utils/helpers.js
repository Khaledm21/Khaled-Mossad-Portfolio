/**
 * Smooth scroll to a section by ID
 */
export const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Scroll to top of page
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/**
 * Clamp a value between min and max
 */
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

/**
 * Map a value from one range to another
 */
export const mapRange = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

/**
 * Debounce a function
 */
export const debounce = (fn, delay = 300) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Format a date string
 */
export const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}

/**
 * Generate random number between min and max
 */
export const random = (min, max) => Math.random() * (max - min) + min

/**
 * Convert hex color to rgba
 */
export const hexToRgba = (hex, alpha = 1) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

/**
 * Check if element is in viewport
 */
export const isInViewport = (el) => {
  if (!el) return false
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * Filter projects by category
 */
export const filterProjectsByCategory = (projects, category) => {
  if (category === 'All') return projects
  return projects.filter((p) => p.category === category)
}

/**
 * Search projects by query
 */
export const searchProjects = (projects, query) => {
  const q = query.toLowerCase()
  return projects.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.tech.some((t) => t.toLowerCase().includes(q))
  )
}
