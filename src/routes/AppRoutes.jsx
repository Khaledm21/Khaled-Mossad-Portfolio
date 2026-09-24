import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import MainLayout from '@layouts/MainLayout'
import Home from '@pages/Home'
import Projects from '@pages/Projects'
import ProjectDetails from '@pages/ProjectDetails'
import NotFound from '@pages/NotFound'

/* ─── Scroll Manager with History Restoration ─────────── */
let isNavigating = false
const scrollCache = new Map()

const isPageReload = () => {
  try {
    const navEntries = performance.getEntriesByType('navigation')
    if (navEntries && navEntries.length > 0) {
      return navEntries[0].type === 'reload'
    }
    return performance.navigation && performance.navigation.type === 1
  } catch {
    return false
  }
}

function ScrollManager() {
  const location = useLocation()
  const navType = useNavigationType()
  const isFirstMount = useRef(true)

  // Configure manual scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  // Keep track of genuine user scroll position continuously & before unload
  useEffect(() => {
    const saveCurrentY = () => {
      if (isNavigating) return
      const y = window.scrollY
      scrollCache.set(location.key, y)
      try {
        sessionStorage.setItem('portfolio_scroll_pos_' + location.pathname, y.toString())
      } catch {}
    }

    window.addEventListener('scroll', saveCurrentY, { passive: true })
    window.addEventListener('beforeunload', saveCurrentY)

    return () => {
      window.removeEventListener('scroll', saveCurrentY)
      window.removeEventListener('beforeunload', saveCurrentY)
    }
  }, [location.key, location.pathname])

  // Handle route change & reload
  useEffect(() => {
    isNavigating = true

    // 1. FIRST MOUNT (Page load or Page reload)
    if (isFirstMount.current) {
      isFirstMount.current = false

      if (isPageReload()) {
        // Page was REFRESHED by user: Restore to exact same scroll position
        const reloadY = Number(
          sessionStorage.getItem('portfolio_scroll_pos_' + location.pathname) || 0
        )

        // Clean up any stale return keys so they never pull the user to old clicks
        sessionStorage.removeItem('portfolio_return_scroll_' + location.pathname)
        sessionStorage.removeItem('portfolio_last_scroll_' + location.pathname)

        if (reloadY > 0) {
          const restorePos = () => {
            window.scrollTo({ top: reloadY, left: 0, behavior: 'instant' })
          }
          restorePos()
          const r1 = requestAnimationFrame(restorePos)
          const t1 = setTimeout(restorePos, 60)
          const t2 = setTimeout(restorePos, 150)
          const t3 = setTimeout(restorePos, 300)
          const tEnd = setTimeout(() => {
            restorePos()
            isNavigating = false
          }, 450)

          return () => {
            cancelAnimationFrame(r1)
            clearTimeout(t1)
            clearTimeout(t2)
            clearTimeout(t3)
            clearTimeout(tEnd)
          }
        } else {
          // If the user refreshed while at the top, keep at top
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
          isNavigating = false
          return
        }
      } else {
        // Fresh visit (new tab / normal navigation): start at top
        sessionStorage.removeItem('portfolio_return_scroll_' + location.pathname)
        sessionStorage.removeItem('portfolio_last_scroll_' + location.pathname)
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        const t = setTimeout(() => {
          isNavigating = false
        }, 80)
        return () => clearTimeout(t)
      }
    }

    // 2. FORWARD NAVIGATION (e.g. Opening project details)
    if (navType === 'PUSH') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      const t = setTimeout(() => {
        isNavigating = false
      }, 100)
      return () => clearTimeout(t)
    }

    // 3. BACK NAVIGATION (e.g. Back to projects via Back button or browser Back)
    if (navType === 'POP') {
      const returnKey = 'portfolio_return_scroll_' + location.pathname
      const lastKey   = 'portfolio_last_scroll_' + location.pathname
      const posKey    = 'portfolio_scroll_pos_' + location.pathname

      const targetY = Number(
        sessionStorage.getItem(returnKey) ||
        sessionStorage.getItem(lastKey) ||
        sessionStorage.getItem(posKey) ||
        scrollCache.get(location.key) ||
        0
      )

      // Consume return keys so subsequent reloads won't jump back to the project click
      sessionStorage.removeItem(returnKey)
      sessionStorage.removeItem(lastKey)

      const restore = () => {
        if (targetY > 0) {
          window.scrollTo({ top: targetY, left: 0, behavior: 'instant' })
        }
      }

      restore()
      const raf = requestAnimationFrame(restore)
      const t1 = setTimeout(restore, 50)
      const t2 = setTimeout(restore, 120)
      const t3 = setTimeout(restore, 250)
      const tEnd = setTimeout(() => {
        restore()
        isNavigating = false
      }, 400)

      return () => {
        cancelAnimationFrame(raf)
        clearTimeout(t1)
        clearTimeout(t2)
        clearTimeout(t3)
        clearTimeout(tEnd)
      }
    }

    isNavigating = false
  }, [location.key, location.pathname, navType])

  return null
}

/* ─── AppRoutes ──────────────────────────────────────── */
export default function AppRoutes() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/"             element={<Home />} />
          <Route path="/projects"     element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="*"             element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
