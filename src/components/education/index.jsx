import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionTitle from '@components/ui/SectionTitle'
import GlowCard from '@components/ui/GlowCard'
import { educationData } from '@data/experienceData'
import { staggerContainer } from '@utils/animations'

function EduCard({ item, index }) {
  return (
    <motion.div
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
          opacity: 1, y: 0,
          transition: { delay: i * 0.08, duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
        }),
      }}
      className="h-full"
    >
      <GlowCard glowColor={item.color} className="p-7 h-full flex flex-col justify-between group">
        <div>
          {/* Icon + Badge */}
          <div className="flex items-start justify-between gap-3 mb-5">
            <div
              className="w-13 h-13 p-3.5 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
              style={{ 
                background: `${item.color}15`, 
                border: `1px solid ${item.color}30`,
                boxShadow: `0 0 16px ${item.color}25`
              }}
            >
              <item.icon size={24} style={{ color: item.color }} />
            </div>
            <div
              className="font-mono text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-full flex items-center gap-1.5 flex-shrink-0"
              style={{ background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}28` }}
            >
              {item.current && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              )}
              {item.period}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-[17px] text-slate-100 mb-1.5 group-hover:text-white transition-colors leading-snug">
            {item.degree}
          </h3>

          {/* School & Location */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4">
            <span className="font-mono text-[12px] font-medium" style={{ color: item.color }}>
              {item.school}
            </span>
            {item.location && (
              <>
                <span className="text-slate-600 text-[10px]">•</span>
                <span className="font-mono text-[11px] text-slate-500 flex items-center gap-1">
                  <MapPin size={11} className="text-slate-600" />
                  {item.location}
                </span>
              </>
            )}
          </div>

          {/* Description Paragraphs */}
          {item.description && (
            <div className="space-y-2.5 mb-5 text-slate-400 font-body text-[13px] leading-relaxed">
              {item.description.map((desc, di) => (
                <p key={di}>{desc}</p>
              ))}
            </div>
          )}
        </div>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] mt-auto">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10.5px] px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06] group-hover:border-white/[0.1] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </GlowCard>
    </motion.div>
  )
}

export default function Education() {
  return (
    <section
      id="education"
      className="section-pad"
      style={{ background: 'rgba(5,5,18,0.98)' }}
    >
      <div className="container mx-auto px-6">
        <SectionTitle
          tag="05"
          title="Education & Certificates"
          subtitle="Academic background, specialized training, and professional development milestones throughout my journey."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
        >
          {educationData.map((item, i) => (
            <EduCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
