import { motion } from 'framer-motion'
import { ArrowRight, Download, ChevronDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { SiReact } from 'react-icons/si'
import { useTypewriter } from '@hooks/useMouseGlow'
import { scrollToSection } from '@utils/helpers'
import { HERO_TITLES, SOCIAL_LINKS } from '@utils/constants'
import { staggerContainer, slideInUp } from '@utils/animations'
import Particles from '@components/effects/Particles'
import Button from '@components/ui/Button'
import meImage from '@assets/images/me.png'

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-0">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full flex flex-col justify-center"
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
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Download size={17} />}
                href="/khaled_mossad_CV_new.pdf"
                download="khaled_mossad_CV_new.pdf"
              >
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

          {/* Futuristic Cyberpunk Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex justify-center lg:justify-end items-center relative py-6"
          >
            {/* Soft Ambient Glows in Cyberpunk Palette */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/25 via-purple-600/18 to-cyan-400/18 opacity-70 blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-cyan-500/15 blur-2xl pointer-events-none" />
            
            {/* The Floating Image Wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
              className="relative group w-full max-w-[330px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[470px] aspect-[3/4] rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-white/[0.14] via-primary/25 to-white/[0.05] border border-white/[0.12] backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85),0_0_50px_rgba(99,102,241,0.25)] transition-all duration-500 hover:shadow-[0_25px_70px_-10px_rgba(0,0,0,0.95),0_0_65px_rgba(99,102,241,0.38)] hover:border-primary/45"
            >
              {/* Floating Badge 1 - Top Right: React & Tech */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-3 sm:-right-5 z-20 flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-white/[0.12] bg-[#070716]/95 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.65),0_0_22px_rgba(97,218,251,0.25)]"
              >
                <div className="w-8 h-8 rounded-xl bg-[#61dafb]/15 border border-[#61dafb]/35 flex items-center justify-center text-[#61dafb] flex-shrink-0">
                  <SiReact className="text-[17px] animate-spin-slow" />
                </div>
                <div>
                  <p className="font-mono text-[9.5px] text-slate-400 uppercase tracking-wider leading-none">Specialized</p>
                  <p className="font-display font-bold text-[12.5px] text-white leading-tight mt-0.5">React.js & TS</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Left: Creative Dev & UI */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, delay: 0.4, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-3 sm:-left-5 z-20 flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-white/[0.12] bg-[#070716]/95 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.65),0_0_22px_rgba(99,102,241,0.25)]"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/35 flex items-center justify-center text-primary flex-shrink-0">
                  <Sparkles size={16} />
                </div>
                <div>
                  <p className="font-mono text-[9.5px] text-slate-400 uppercase tracking-wider leading-none">Experience</p>
                  <p className="font-display font-bold text-[12.5px] text-white leading-tight mt-0.5">Clean Code & UI</p>
                </div>
              </motion.div>

              {/* Inner container holding the image */}
              <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-gradient-to-b from-slate-900/90 via-[#070717] to-[#020208] flex items-center justify-center border border-white/[0.06]">
                {/* Tech corner accents */}
                <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-primary/60 rounded-tl pointer-events-none z-10" />
                <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-primary/60 rounded-tr pointer-events-none z-10" />
                <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-primary/60 rounded-bl pointer-events-none z-10" />
                <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-primary/60 rounded-br pointer-events-none z-10" />

                {/* Ambient glow behind image */}
                <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-primary/14 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -top-8 -right-8 w-44 h-44 bg-cyan-400/12 rounded-full blur-2xl pointer-events-none" />
                
                {/* The Image */}
                <img 
                  src={meImage} 
                  alt="Khaled Mossad" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-[1.02] contrast-[1.04]"
                />
                
                {/* Vignette & cinematic bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020209]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-tr from-primary/20 via-purple-600/15 to-transparent transition-opacity duration-500 pointer-events-none" />

                {/* Bottom glass status tag */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-950/80 border border-white/[0.08] backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[11px] text-slate-200 font-medium">Khaled Mossad</span>
                  </div>
                  <span className="font-mono text-[10px] text-primary font-medium tracking-wide">Front-End Developer</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
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
