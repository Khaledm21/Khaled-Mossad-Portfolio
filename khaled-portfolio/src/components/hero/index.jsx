import { motion } from 'framer-motion'
import { ArrowRight, Download, ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { useTypewriter } from '@hooks/useMouseGlow'
import { scrollToSection } from '@utils/helpers'
import { HERO_TITLES, SOCIAL_LINKS } from '@utils/constants'
import { staggerContainer, slideInUp } from '@utils/animations'
import Particles from '@components/effects/Particles'
import Button from '@components/ui/Button'

/* ─── Background Scene ──────────────────────────────── */
function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
          backgroundSize: '62px 62px',
          animation: 'grid-in 1.2s ease forwards',
        }}
      />
      {/* Orbs */}
      <div className="absolute top-[12%] left-[6%] w-[540px] h-[540px] rounded-full animate-orb-a"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 68%)' }} />
      <div className="absolute bottom-[10%] right-[6%] w-[420px] h-[420px] rounded-full animate-orb-b"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 68%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 60%)' }} />
      <Particles count={24} />
    </div>
  )
}

/* ─── Stat Chip ─────────────────────────────────────── */
function StatChip({ value, label, delay }) {
  return (
    <motion.div
      custom={delay}
      variants={slideInUp}
      className="flex flex-col items-center px-5 py-3 rounded-xl border border-white/[0.06] bg-white/[0.025]"
    >
      <span className="font-display font-extrabold text-[22px] text-gradient-anim leading-none">{value}</span>
      <span className="font-mono text-[10.5px] text-slate-500 tracking-wide mt-1">{label}</span>
    </motion.div>
  )
}

/* ─── Hero ──────────────────────────────────────────── */
export default function Hero() {
  const typed = useTypewriter(HERO_TITLES, 90, 48, 1700)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 66 }}
    >
      <HeroBg />

      <div className="container mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[800px]"
        >
          {/* Status badge */}
          <motion.div custom={0} variants={slideInUp} className="mb-7">
            <span className="inline-flex items-center gap-2.5 bg-primary/8 border border-primary/22 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-ring" style={{ boxShadow: '0 0 10px #34d399' }} />
              <span className="font-mono text-[12px] text-primary/90 tracking-wide">Available for opportunities</span>
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            custom={1}
            variants={slideInUp}
            className="font-display font-extrabold leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 5.2rem)', letterSpacing: '-0.03em' }}
          >
            Hi, I'm{' '}
            <span className="text-gradient-anim">Khaled Mossad</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            custom={2}
            variants={slideInUp}
            className="font-mono flex items-center gap-2.5 mb-7"
            style={{ fontSize: 'clamp(1rem, 2.8vw, 1.55rem)', minHeight: 52 }}
          >
            <span className="text-primary font-medium">_</span>
            <span className="text-slate-200">{typed}</span>
            <span className="inline-block w-[2.5px] h-[1.15em] bg-primary rounded-sm animate-blink" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            custom={3}
            variants={slideInUp}
            className="font-body text-slate-500 leading-[1.82] mb-11 max-w-[570px]"
            style={{ fontSize: 'clamp(0.92rem, 1.8vw, 1.08rem)' }}
          >
            Front-End Developer specializing in React.js and modern web technologies,
            passionate about building scalable, responsive, and interactive web experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div custom={4} variants={slideInUp} className="flex flex-wrap gap-4 mb-12">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight size={17} />}
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button variant="outline" size="lg" leftIcon={<Download size={17} />}>
              Download CV
            </Button>
          </motion.div>

          {/* Social + Stats */}
          <motion.div custom={5} variants={slideInUp} className="flex flex-wrap items-center gap-6">
            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/8 border border-primary/18 text-primary/80 hover:text-white hover:bg-primary/18 hover:border-primary/55 hover:-translate-y-1 hover:shadow-neon-sm transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-white/[0.07]" />

            {/* Mini stats */}
            <div className="flex gap-3">
              {[
                { value: '5+', label: 'Projects' },
                { value: '1+', label: 'Yr Exp' },
                { value: '10+', label: 'Techs' },
              ].map((s, i) => (
                <StatChip key={s.label} value={s.value} label={s.label} delay={i} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 animate-bounce-y"
        aria-label="Scroll to About"
        style={{ transform: 'translateX(-50%)' }}
      >
        <ChevronDown size={26} className="text-primary/50" />
      </button>
    </section>
  )
}
