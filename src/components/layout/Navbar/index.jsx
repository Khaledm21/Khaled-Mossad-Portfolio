import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ExternalLink } from 'lucide-react'
import { useActiveSection, useScrollProgress } from '@hooks/useMouseGlow'
import { scrollToSection } from '@utils/helpers'
import { NAV_LINKS } from '@utils/constants'
import { mobileMenu, fadeDown } from '@utils/animations'
import Button from '@components/ui/Button'

export default function Navbar() {
  const location   = useLocation()
  const navigate   = useNavigate()
  const isHome     = location.pathname === '/'
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(NAV_LINKS.map((n) => n.id))
  const scrollPct = useScrollProgress()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  const handleNavClick = (id) => {
    setOpen(false)
    if (!isHome) {
      navigate('/', { state: { scrollTo: id } })
    } else {
      scrollToSection(id)
    }
  }

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px]">
        <div
          className="h-full rounded-r-full transition-[width] duration-100 ease-out"
          style={{
            width: `${scrollPct}%`,
            background: 'linear-gradient(90deg,#6366f1,#8b5cf6,#22d3ee)',
            boxShadow: '0 0 10px rgba(99,102,241,0.6)',
          }}
        />
      </div>

      <motion.nav
        variants={fadeDown}
        initial="hidden"
        animate="visible"
        className={`fixed top-[3px] left-0 right-0 z-[998] transition-all duration-300 ${
          scrolled ? 'glass border-b border-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-[66px] px-6">

          {/* Logo */}
          <Link to="/" className="group relative">
            <span
              className="font-display font-extrabold text-gradient-anim"
              style={{ fontSize: 22, letterSpacing: '-0.02em' }}
            >
              &lt;KM /&gt;
            </span>
            <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] rounded-full bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = isHome
                ? activeSection === link.id
                : location.pathname === `/${link.id === 'home' ? '' : link.id}`

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="relative font-body text-[13px] font-medium tracking-wide transition-colors duration-300 pb-[3px] group"
                  style={{ color: isActive ? '#fff' : 'rgba(148,163,184,0.65)' }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-[-4px] left-0 right-0 h-[1.5px] rounded-full bg-gradient-to-r from-primary to-accent origin-left transition-transform duration-300"
                    style={{ transform: isActive ? 'scaleX(1)' : 'scaleX(0)' }}
                  />
                </button>
              )
            })}

            {/* Projects page link */}
            <Link to="/projects">
              <Button variant="neon" size="sm" rightIcon={<ExternalLink size={13} />}>
                All Projects
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/8 text-slate-300 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {open
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={20} /></motion.div>
                : <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={20} /></motion.div>
              }
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden glass border-t border-primary/12 px-6 pb-6 overflow-hidden"
            >
              {NAV_LINKS.map((link, i) => {
                const isActive = isHome && activeSection === link.id
                return (
                  <motion.button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="flex w-full items-center gap-3 py-3.5 border-b border-white/[0.04] last:border-0 font-body font-medium text-[15px] transition-colors duration-200"
                    style={{ color: isActive ? '#818cf8' : 'rgba(148,163,184,0.65)' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" style={{ boxShadow: '0 0 8px #6366f1' }} />}
                    {link.label}
                  </motion.button>
                )
              })}
              <div className="mt-4">
                <Link to="/projects" onClick={() => setOpen(false)}>
                  <Button variant="primary" size="sm" fullWidth rightIcon={<ExternalLink size={13} />}>
                    All Projects
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
