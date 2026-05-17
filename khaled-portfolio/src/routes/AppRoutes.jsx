import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'
import MainLayout from '@layouts/MainLayout'
import Loader from '@components/ui/Loader'

/* ─── Lazy Pages ─────────────────────────────────────── */
const Home           = lazy(() => import('@pages/Home'))
const Projects       = lazy(() => import('@pages/Projects'))
const ProjectDetails = lazy(() => import('@pages/ProjectDetails'))
const NotFound       = lazy(() => import('@pages/NotFound'))

/* ─── AppRoutes ──────────────────────────────────────── */
export default function AppRoutes() {
  const location = useLocation()

  return (
    <Suspense fallback={<Loader minimal />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route path="/"             element={<Home />} />
            <Route path="/projects"     element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="*"             element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}
