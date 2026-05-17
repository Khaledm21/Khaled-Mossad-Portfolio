import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { ProjectCard } from '@components/projects'
import { projectsData } from '@data/projectsData'
import { filterProjectsByCategory, searchProjects } from '@utils/helpers'
import { PROJECT_CATEGORIES } from '@utils/constants'
import { pageTransition, staggerContainer, fadeUp } from '@utils/animations'

function CategoryBtn({ label, active, count, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="relative flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] uppercase px-5 py-2.5 rounded-xl transition-all duration-250"
      style={{
        background: active ? 'rgba(99,102,241,0.14)' : 'transparent',
        color: active ? '#818cf8' : 'rgba(148,163,184,0.55)',
        border: active ? '1px solid rgba(99,102,241,0.38)' : '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {label}
      <span
        className="text-[10px] px-1.5 py-0.5 rounded-full"
        style={{
          background: active ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.06)',
          color: active ? '#c7d2fe' : 'rgba(148,163,184,0.4)',
        }}
      >
        {count}
      </span>
    </motion.button>
  )
}

export default function Projects() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    let result = filterProjectsByCategory(projectsData, category)
    if (query.trim()) result = searchProjects(result, query)
    return result
  }, [category, query])

  const countFor = (cat) =>
    cat === 'All'
      ? projectsData.length
      : projectsData.filter((p) => p.category === cat).length

  return (
    <motion.div {...pageTransition} className="min-h-screen pt-[90px] pb-24">
      <div className="container mx-auto px-6">

        {/* Page Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp} className="font-mono text-[11px] text-primary uppercase tracking-[0.28em] mb-4">
            — Portfolio —
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold text-gradient mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', letterSpacing: '-0.03em', lineHeight: 1.08 }}
          >
            All Projects
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body text-slate-500 text-[15px] max-w-[480px] mx-auto leading-relaxed">
            A complete showcase of my work — from cinematic fashion websites to full-stack dashboards.
          </motion.p>
        </motion.div>

        {/* Search + Filter */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row gap-5 items-center justify-between mb-12"
        >
          {/* Search */}
          <motion.div variants={fadeUp} className="relative w-full md:max-w-[340px]">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
            <input
              type="text"
              placeholder="Search projects or tech…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="c-input pl-11 pr-10"
              style={{ border: '1px solid rgba(99,102,241,0.18)' }}
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors">
                <X size={15} />
              </button>
            )}
          </motion.div>

          {/* Category filters */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2">
            {PROJECT_CATEGORIES.map((cat) => (
              <CategoryBtn
                key={cat}
                label={cat}
                active={category === cat}
                count={countFor(cat)}
                onClick={() => setCategory(cat)}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-[12px] text-slate-600 mb-8"
        >
          Showing <span className="text-primary">{filtered.length}</span> project{filtered.length !== 1 ? 's' : ''}
          {query && <> matching "<span className="text-slate-400">{query}</span>"</>}
        </motion.p>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${category}-${query}`}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-24"
            >
              <div className="text-5xl mb-5">🔍</div>
              <h3 className="font-display font-bold text-[20px] text-slate-400 mb-3">No projects found</h3>
              <p className="font-body text-slate-600 text-[14px]">
                Try a different search term or category.
              </p>
              <button
                onClick={() => { setQuery(''); setCategory('All') }}
                className="mt-5 font-mono text-[12px] text-primary hover:text-white transition-colors"
              >
                Clear filters →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
