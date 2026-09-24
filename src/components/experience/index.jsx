import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionTitle from '@components/ui/SectionTitle'
import GlowCard from '@components/ui/GlowCard'
import { experienceData } from '@data/experienceData'
import { staggerContainer } from '@utils/animations'

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      custom={index}
      variants={{
        hidden: { opacity: 0, x: isLeft ? -30 : 30 },
        visible: (i) => ({
          opacity: 1, x: 0,
          transition: { delay: i * 0.12, duration: 0.65, ease: [0.6, -0.05, 0.01, 0.99] },
        }),
      }}
      className="flex gap-6 sm:gap-8 relative"
    >
      {/* Timeline icon */}
      <div className="flex-shrink-0 mt-1.5">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center relative z-10"
          style={{
            background: `${item.color}18`,
            border: `2px solid ${item.color}`,
            boxShadow: `0 0 22px ${item.color}45`,
          }}
        >
          <Briefcase size={16} style={{ color: item.color }} />
        </div>
      </div>

      {/* Card */}
      <GlowCard glowColor={item.color} className="flex-1 mb-8 p-6 sm:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-1">
              <h3 className="font-display font-bold text-[19px] text-slate-100">{item.role}</h3>
              {item.current && (
                <span className="font-mono text-[9.5px] tracking-wide px-2.5 py-0.5 rounded-full"
                  style={{ background: 'rgba(52,211,153,0.12)', color: '#34d399', border: '1px solid rgba(52,211,153,0.3)' }}>
                  Current
                </span>
              )}
            </div>
            <p className="font-body font-medium text-[15px]" style={{ color: item.color }}>{item.company}</p>
            {item.location && (
              <p className="font-mono text-[11px] text-slate-500 mt-0.5">{item.location}</p>
            )}
          </div>
          <div className="sm:text-right flex-shrink-0">
            <span
              className="font-mono text-[11.5px] text-slate-300 inline-block rounded-full px-3.5 py-1.5"
              style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)' }}
            >
              {item.period}
            </span>
            <p className="font-mono text-[10px] text-slate-500 mt-1.5">{item.type}</p>
          </div>
        </div>

        {/* Description Paragraphs */}
        {item.description && (
          <div className="space-y-3.5 mb-6 text-slate-300 font-body text-[14px] leading-relaxed">
            {item.description.map((para, pi) => (
              <p key={pi}>{para}</p>
            ))}
          </div>
        )}

        {/* Points / Highlights */}
        {item.points && item.points.length > 0 && (
          <div className="pt-4 border-t border-white/[0.06]">
            <p className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-3">Key Highlights & Responsibilities</p>
            <ul className="space-y-2.5">
              {item.points.map((pt, pi) => (
                <li key={pi} className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 mt-[5px] text-[10px]" style={{ color: item.color }}>▸</span>
                  <span className="font-body text-slate-400 text-[13.5px] leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </GlowCard>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container mx-auto px-6" style={{ maxWidth: 900 }}>
        <SectionTitle
          tag="04"
          title="Experience"
          subtitle="My professional journey, hands-on experience, and growth over the years."
        />

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 relative"
        >
          {/* Vertical line if more than 1 item */}
          {experienceData.length > 1 && <div className="timeline-line" />}

          {experienceData.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
