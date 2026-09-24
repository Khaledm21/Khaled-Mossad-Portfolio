import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, Linkedin, Mail } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { NAV_LINKS, SOCIAL_LINKS } from '@utils/constants'
import { scrollToSection } from '@utils/helpers'

/* ─── Sidebar (full-screen mobile overlay) ─────────── */
export default function Sidebar({ open, onClose }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === '/'

  const handleLink = (id) => {
    onClose()
    if (!isHome) {
      navigate('/', { state: { scrollTo: id } })
    } else {
      setTimeout(() => scrollToSection(id), 80)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[990] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.aside
            className="fixed top-0 right-0 bottom-0 z-[995] flex flex-col"
            style={{
              width: 'min(320px, 85vw)',
              background: 'rgba(6,6,20,0.97)',
              backdropFilter: 'blur(24px)',
              borderLeft: '1px solid rgba(99,102,241,0.15)',
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 340, damping: 32 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-white/[0.05]">
              <span className="font-display font-extrabold text-gradient-anim text-[20px]">&lt;KM /&gt;</span>
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.07] text-slate-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-6 py-8 overflow-y-auto">
              <p className="font-mono text-[10px] text-slate-600 uppercase tracking-[0.25em] mb-5">Navigation</p>
              <ul className="space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                  >
                    <button
                      onClick={() => handleLink(link.id)}
                      className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left font-body font-medium text-[15px] text-slate-400 hover:text-white hover:bg-primary/[0.07] transition-all duration-200 group"
                    >
                      <span className="w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-mono"
                        style={{ background: 'rgba(99,102,241,0.12)', color: '#818cf8' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-white/[0.04]">
                <p className="font-mono text-[10px] text-slate-600 uppercase tracking-[0.25em] mb-4">Pages</p>
                {[{ to: '/', label: 'Home' }, { to: '/projects', label: 'All Projects' }].map((item, i) => (
                  <motion.div key={item.to} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.06 }}>
                    <Link
                      to={item.to}
                      onClick={onClose}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl font-body text-[14px] text-slate-400 hover:text-white hover:bg-primary/[0.07] transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="px-6 py-6 border-t border-white/[0.05]">
              <p className="font-mono text-[10px] text-slate-600 uppercase tracking-[0.2em] mb-4">Connect</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] text-slate-400 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all duration-250"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              <p className="font-mono text-[11px] text-slate-700 mt-5">
                khaledmossad221@gmail.com
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
