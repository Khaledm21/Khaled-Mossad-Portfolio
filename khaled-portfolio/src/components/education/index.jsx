import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import SectionTitle from '@components/ui/SectionTitle'
import GlowCard from '@components/ui/GlowCard'
import { educationData } from '@data/experienceData'
import { staggerContainer, slideInUp } from '@utils/animations'

function EduCard({ item, index }) {
  return (
    <motion.div
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: (i) => ({
          opacity: 1, y: 0,
          transition: { delay: i * 0.1, duration: 0.65, ease: [0.6, -0.05, 0.01, 0.99] },
        }),
      }}
    >
      <GlowCard glowColor={item.color} className="p-8 h-full">
        {/* Icon + Badge */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
            style={{ 
              background: `${item.color}14`, 
              border: `1px solid ${item.color}28`,
              filter: `drop-shadow(0 0 8px ${item.color}45)`
            }}
          >
            <item.icon size={26} style={{ color: item.color }} />
          </div>
          <div
            className="font-mono text-[10px] tracking-wide px-3 py-1.5 rounded-full"
            style={{ background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}28` }}
          >
            {item.period}
          </div>
        </div>

        <h3 className="font-display font-bold text-[17px] mb-2" style={{ color: item.color }}>
          {item.degree}
        </h3>
        <p className="font-body text-slate-400 text-[14px] leading-relaxed mb-3">{item.field}</p>

        <div className="space-y-1.5 mt-auto">
          <p className="font-mono text-[12px] text-primary font-medium">{item.school}</p>
          <div className="flex items-center gap-1.5">
            <MapPin size={11} className="text-slate-600" />
            <span className="font-mono text-[11px] text-slate-600">{item.location}</span>
          </div>
        </div>
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
          subtitle="Academic background and professional development milestones"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14"
        >
          {educationData.map((item, i) => (
            <EduCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
