import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, CheckCircle, Zap, ChevronRight } from 'lucide-react'
import { FaTshirt, FaShoppingCart, FaChartBar } from 'react-icons/fa'
import { projectsData } from '@data/projectsData'
import { pageTransition, staggerContainer, fadeUp, fadeLeft, fadeRight } from '@utils/animations'
import Button from '@components/ui/Button'
import Badge from '@components/ui/Badge/Badge'
import GlowCard from '@components/ui/GlowCard'

export default function ProjectDetails() {
  const { id }   = useParams()
  const navigate = useNavigate()
  const project  = projectsData.find((p) => p.id === id)
  const others   = projectsData.filter((p) => p.id !== id).slice(0, 2)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <div className="text-6xl mb-5">😕</div>
          <h2 className="font-display font-bold text-2xl text-slate-300 mb-3">Project Not Found</h2>
          <Link to="/projects">
            <Button variant="primary">← Back to Projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  const { title, subtitle, tagline, longDescription, tech, accent, gradient, category, features, challenges, liveUrl, githubUrl, image } = project

  return (
    <motion.div {...pageTransition} className="min-h-screen pt-[90px] pb-24">

      {/* ── Hero Banner ── */}
      <div className="relative overflow-hidden" style={{ height: 420, background: gradient }}>
        {/* Grid overlay */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none animate-orb-a"
          style={{ background: `radial-gradient(circle, ${accent}18 0%, transparent 68%)` }} />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full pointer-events-none animate-orb-b"
          style={{ background: `radial-gradient(circle, ${accent}12 0%, transparent 68%)` }} />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <Badge color={accent} className="mb-5">{category}</Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold mb-3"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
            >
              <span className="text-gradient-anim">{title}</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-mono text-[14px] text-slate-400 mb-2">
              {subtitle}
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-slate-500 text-[15px] max-w-[520px] leading-relaxed mx-auto">
              {tagline}
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: 'linear-gradient(to top, #020209, transparent)' }} />
      </div>

      {/* ── Body ── */}
      <div className="container mx-auto px-6 mt-12" style={{ maxWidth: 1000 }}>

        {/* Back button */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 font-mono text-[12.5px] text-slate-500 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left: Main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Overview */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <GlowCard glowColor={accent} className="p-8">
                <h2 className="font-display font-bold text-[20px] text-slate-100 mb-5 flex items-center gap-3">
                  <span style={{ color: accent }}>01.</span> Project Overview
                </h2>
                <p className="font-body text-slate-400 text-[15px] leading-[1.82]">{longDescription}</p>
              </GlowCard>
            </motion.div>

            {/* Project Preview Image */}
            {image && (
              <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <GlowCard glowColor={accent} className="p-3 overflow-hidden">
                  <img src={image} alt={`${title} Mockup`} className="w-full rounded-xl object-cover border border-white/[0.06] shadow-2xl" />
                </GlowCard>
              </motion.div>
            )}

            {/* Features */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <GlowCard glowColor={accent} className="p-8">
                <h2 className="font-display font-bold text-[20px] text-slate-100 mb-6 flex items-center gap-3">
                  <span style={{ color: accent }}>02.</span> Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: accent }} />
                      <span className="font-body text-slate-400 text-[14px] leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>

            {/* Challenges */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <GlowCard glowColor={accent} className="p-8">
                <h2 className="font-display font-bold text-[20px] text-slate-100 mb-6 flex items-center gap-3">
                  <span style={{ color: accent }}>03.</span> Challenges & Solutions
                </h2>
                <div className="space-y-6">
                  {challenges.map((item, i) => (
                    <div key={i} className="p-5 rounded-xl" style={{ background: `${accent}08`, border: `1px solid ${accent}18` }}>
                      <div className="flex items-start gap-3 mb-3">
                        <Zap size={15} className="flex-shrink-0 mt-0.5" style={{ color: accent }} />
                        <p className="font-body font-semibold text-slate-300 text-[14px]">{item.challenge}</p>
                      </div>
                      <div className="pl-6">
                        <p className="font-body text-slate-500 text-[13.5px] leading-relaxed">→ {item.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          </div>

          {/* Right: Sidebar */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">

            {/* Action buttons */}
            <GlowCard glowColor={accent} className="p-6">
              <h3 className="font-display font-bold text-[16px] text-slate-200 mb-5">Links</h3>
              <div className="space-y-3">
                <Button variant="primary" fullWidth leftIcon={<ExternalLink size={15} />} href={liveUrl}>
                  Live Demo
                </Button>
                <Button variant="outline" fullWidth leftIcon={<Github size={15} />} href={githubUrl}>
                  GitHub Repo
                </Button>
              </div>
            </GlowCard>

            {/* Tech Stack */}
            <GlowCard glowColor={accent} className="p-6">
              <h3 className="font-display font-bold text-[16px] text-slate-200 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-slate-400 rounded-[7px] px-2.5 py-1.5"
                    style={{ background: `${accent}0e`, border: `1px solid ${accent}22` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlowCard>

            {/* Project info */}
            <GlowCard glowColor={accent} className="p-6">
              <h3 className="font-display font-bold text-[16px] text-slate-200 mb-4">Info</h3>
              <div className="space-y-3">
                {[
                  { label: 'Category', value: project.category },
                  { label: 'Type',     value: project.type },
                  { label: 'Date',     value: project.date },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-[13px]">
                    <span className="font-mono text-slate-600">{label}</span>
                    <span className="font-body text-slate-300">{value}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        </div>

        {/* More Projects */}
        {others.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-bold text-[22px] text-slate-200">Other Projects</h2>
              <Link to="/projects" className="font-mono text-[12px] text-primary hover:text-white transition-colors flex items-center gap-1">
                All Projects <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((p, i) => (
                <Link key={p.id} to={`/projects/${p.id}`} className="block group">
                  <GlowCard glowColor={p.accent} className="p-6 flex items-center gap-5">
                    <div className="w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center text-[22px]"
                      style={{ background: p.gradient }}>
                      {p.mockup === 'fashion' && <FaTshirt style={{ color: p.accent }} />}
                      {p.mockup === 'ecommerce' && <FaShoppingCart style={{ color: p.accent }} />}
                      {p.mockup === 'dashboard' && <FaChartBar style={{ color: p.accent }} />}
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] mb-1" style={{ color: p.accent }}>{p.category}</p>
                      <h3 className="font-display font-bold text-[16px] text-slate-200 mb-1 group-hover:text-white transition-colors">{p.title}</h3>
                      <p className="font-body text-slate-600 text-[13px] truncate">{p.subtitle}</p>
                    </div>
                    <ChevronRight size={16} className="flex-shrink-0 text-slate-600 group-hover:text-primary transition-colors ml-auto" />
                  </GlowCard>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
