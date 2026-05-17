import { motion } from 'framer-motion'
import SectionTitle from '@components/ui/SectionTitle'
import GlowCard from '@components/ui/GlowCard'
import { staggerContainer, fadeUp, scaleIn } from '@utils/animations'
import { ABOUT_CARDS, STATS } from '@utils/constants'

function StatCard({ value, label, color, index }) {
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
      className="text-center p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-primary/20 transition-colors duration-300"
    >
      <div
        className="font-display font-extrabold text-[40px] leading-none mb-2"
        style={{ color }}
      >
        {value}
      </div>
      <div className="font-body text-[12.5px] text-slate-500 font-medium tracking-wide">{label}</div>
    </motion.div>
  )
}

function AboutCard({ emoji, title, desc, color, index }) {
  return (
    <motion.div
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: (i) => ({
          opacity: 1, y: 0,
          transition: { delay: i * 0.075, duration: 0.65, ease: [0.6,-0.05,0.01,0.99] },
        }),
      }}
    >
      <GlowCard glowColor={color} className="h-full p-[30px]">
        <div className="text-[38px] mb-5 leading-none">{emoji}</div>
        <h3 className="font-display font-bold text-[17px] mb-3" style={{ color }}>
          {title}
        </h3>
        <p className="font-body text-slate-500 text-[13.5px] leading-[1.74]">{desc}</p>
      </GlowCard>
    </motion.div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: 'rgba(5,5,18,0.98)' }}
    >
      <div className="container mx-auto px-6">
        <SectionTitle
          tag="01"
          title="About Me"
          subtitle="A passionate developer crafting premium digital experiences with modern technologies"
        />

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
        >
          {ABOUT_CARDS.map((card, i) => (
            <AboutCard key={i} {...card} index={i} />
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {STATS.map((s, i) => (
            <StatCard key={i} {...s} index={i} />
          ))}
        </motion.div>

        {/* Bio strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-10 p-7 rounded-2xl border border-primary/14 bg-primary/[0.03] flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          {/* Avatar placeholder */}
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-[30px]"
            style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)' }}>
            👨‍💻
          </div>
          <div>
            <p className="font-body text-slate-400 text-[14.5px] leading-[1.78]">
              Front-End Developer based in <span className="text-primary font-medium">Mansoura, Egypt</span>, specializing in React.js and modern web technologies. Graduated with a B.Sc. in Computer Science & Engineering from New Mansoura University. Currently building scalable UIs at <span className="text-primary font-medium">IBGates</span>.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 ml-auto">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-[11px] text-green-400 tracking-wide whitespace-nowrap">Open to work</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
