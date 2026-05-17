import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@components/ui/SectionTitle'
import { skillsData, softSkills } from '@data/skillsData'
import { staggerContainer, fadeUp, filterItem } from '@utils/animations'

const CATEGORIES = ['All', ...Object.keys(skillsData)]

function SkillPill({ name, icon: Icon, color, index }) {
  return (
    <motion.div
      layout
      variants={filterItem}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={index}
      className="skill-pill rounded-[13px] px-5 py-[11px] flex items-center gap-3 select-none border border-white/[0.04] bg-white/[0.015] hover:border-white/[0.1] transition-all duration-300 group cursor-pointer"
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {Icon && (
        <Icon 
          className="text-2xl transition-all duration-300 group-hover:scale-110" 
          style={{ 
            color: color,
            filter: `drop-shadow(0 0 8px ${color}70)`
          }} 
        />
      )}
      <span className="font-body font-medium text-[14px] text-slate-200">{name}</span>
    </motion.div>
  )
}

function CategoryTab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative font-mono text-[12px] tracking-[0.1em] uppercase px-5 py-2.5 rounded-xl transition-all duration-250"
      style={{
        background: active ? 'rgba(99,102,241,0.14)' : 'transparent',
        color: active ? '#818cf8' : 'rgba(148,163,184,0.55)',
        border: active ? '1px solid rgba(99,102,241,0.38)' : '1px solid transparent',
      }}
    >
      {label}
      {active && (
        <motion.span
          layoutId="tab-indicator"
          className="absolute inset-0 rounded-xl border border-primary/40"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
    </button>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleSkills =
    activeCategory === 'All'
      ? Object.entries(skillsData)
      : [[activeCategory, skillsData[activeCategory]]]

  return (
    <section id="skills" className="section-pad">
      <div className="container mx-auto px-6">
        <SectionTitle
          tag="02"
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with every day to build premium products"
        />

        {/* Category Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2.5 mt-10 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <CategoryTab
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-10"
        >
          <AnimatePresence mode="wait">
            {visibleSkills.map(([category, items]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                {/* Category label */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-block w-7 h-px bg-gradient-to-r from-primary to-transparent" />
                  <span className="font-mono text-[11.5px] font-medium text-primary uppercase tracking-[0.22em]">
                    {category}
                  </span>
                  <span className="inline-block flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
                </div>

                {/* Pills */}
                <motion.div
                  layout
                  className="flex flex-wrap gap-3"
                >
                  {items.map((skill, i) => (
                    <SkillPill key={skill.name} {...skill} index={i} />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 p-8 rounded-2xl border border-white/[0.06] bg-white/[0.015]"
        >
          <h3 className="font-mono text-[11px] font-medium text-primary uppercase tracking-[0.22em] mb-6 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-primary" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((s) => {
              const Icon = s.icon;
              return (
                <span
                  key={s.name}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-body font-medium text-[13.5px] text-slate-300 transition-all duration-300 cursor-default hover:-translate-y-1 hover:border-slate-500/30 group"
                  style={{
                    background: 'rgba(99,102,241,0.04)',
                    border: '1px solid rgba(99,102,241,0.12)',
                  }}
                >
                  {Icon && (
                    <Icon 
                      className="text-lg transition-transform duration-300 group-hover:scale-110" 
                      style={{ 
                        color: s.color,
                        filter: `drop-shadow(0 0 6px ${s.color}60)`
                      }} 
                    />
                  )} 
                  <span>{s.name}</span>
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
