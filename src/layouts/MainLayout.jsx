import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Navbar from '@components/layout/Navbar'
import Footer from '@components/layout/Footer'
import MouseGlow from '@components/effects/MouseGlow'
import ScrollProgress from '@components/effects/ScrollProgress'
import Loader from '@components/ui/Loader'
import { scrollToTop } from '@utils/helpers'

// Check if user has already seen the initial loader in this browser session
const isFirstVisit = () => {
  try {
    return !sessionStorage.getItem('portfolio_visited')
  } catch {
    return false
  }
}

export default function MainLayout() {
  const [loading, setLoading] = useState(isFirstVisit)
  const [showTop, setShowTop]  = useState(false)

  const handleLoadingComplete = () => {
    setLoading(false)
    try {
      sessionStorage.setItem('portfolio_visited', 'true')
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    if (loading) {
      const t = setTimeout(() => {
        handleLoadingComplete()
      }, 2000)
      return () => clearTimeout(t)
    }
  }, [loading])

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen noise">
          <MouseGlow />
          <ScrollProgress />
          <Navbar />

          <main>
            <Outlet />
          </main>

          <Footer />

          {/* Back to top */}
          <AnimatePresence>
            {showTop && (
              <motion.button
                className="back-top"
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Back to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  )
}
