import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import SectionTitle from '@components/ui/SectionTitle'
import Badge from '@components/ui/Badge/Badge'
import Button from '@components/ui/Button'
import { projectsData } from '@data/projectsData'
import { staggerContainer, slideInUp } from '@utils/animations'

/* ─── SVG Mockups ────────────────────────────────────── */
function FashionMockup({ c }) {
  return (
    <svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="fgr" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c} stopOpacity="0.18" />
          <stop offset="100%" stopColor={c} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect width="400" height="230" fill="url(#fgr)" />
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 57} y1="0" x2={i * 57} y2="230" stroke={c} strokeOpacity="0.07" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 57} x2="400" y2={i * 57} stroke={c} strokeOpacity="0.07" strokeWidth="0.5" />
      ))}
      <rect width="400" height="30" fill="rgba(0,0,0,0.65)" />
      <text x="18" y="20" fill={c} fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="5">DRACO</text>
      {['COLLECTION', 'LOOKBOOK', 'STORE'].map((t, i) => (
        <text key={i} x={200 + i * 64} y="20" fill="rgba(255,255,255,0.28)" fontSize="7.5" fontFamily="sans-serif" letterSpacing="1.5">{t}</text>
      ))}
      <text x="18" y="93" fill={c} fontSize="56" fontWeight="900" fontFamily="sans-serif" opacity="0.07" letterSpacing="-3">DRACO</text>
      <text x="18" y="93" fill="rgba(255,255,255,0.07)" fontSize="56" fontWeight="900" fontFamily="sans-serif" letterSpacing="-3">DRACO</text>
      <text x="18" y="110" fill="rgba(255,255,255,0.55)" fontSize="9.5" fontFamily="sans-serif" letterSpacing="4.5">LUXURY STREETWEAR — SS 2026</text>
      <rect x="18" y="120" width="110" height="22" rx="4" fill={c} opacity="0.88" />
      <text x="73" y="134" fill="white" fontSize="8.5" fontFamily="sans-serif" textAnchor="middle" letterSpacing="2">EXPLORE NOW →</text>
      {[0, 133, 267].map((x, i) => (
        <g key={i}>
          <rect x={x} y="158" width="133" height="72" fill={`rgba(0,0,0,${i === 1 ? 0.25 : 0.42})`} />
          <text x={x + 66} y="218" fill="rgba(255,255,255,0.22)" fontSize="7" fontFamily="sans-serif" textAnchor="middle" letterSpacing="2.5">{`PIECE 00${i + 1}`}</text>
        </g>
      ))}
      <circle cx="368" cy="100" r="48" fill={c} opacity="0.04" />
      <circle cx="368" cy="100" r="30" fill={c} opacity="0.07" />
      <circle cx="368" cy="100" r="14" fill={c} opacity="0.14" />
    </svg>
  )
}

function EcommerceMockup({ c }) {
  const items = [
    { e: '👟', n: 'Sneakers', p: '$89' }, { e: '👕', n: 'Urban Tee', p: '$35' },
    { e: '🎒', n: 'Backpack', p: '$65' }, { e: '⌚', n: 'Watch', p: '$199' },
    { e: '💻', n: 'Laptop Bag', p: '$45' }, { e: '🎧', n: 'Headphones', p: '$120' },
    { e: '📱', n: 'Phone Case', p: '$25' }, { e: '🕶️', n: 'Sunglasses', p: '$55' },
  ]
  return (
    <svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
      <rect width="400" height="30" fill="rgba(0,0,0,0.72)" />
      <text x="14" y="20" fill={c} fontSize="13" fontWeight="800" fontFamily="sans-serif">Fresh</text>
      <text x="50" y="20" fill="rgba(255,255,255,0.75)" fontSize="13" fontWeight="800" fontFamily="sans-serif">Cart</text>
      <rect x="118" y="8" width="164" height="15" rx="7.5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      <text x="200" y="18.5" fill="rgba(255,255,255,0.22)" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Search products...</text>
      <text x="362" y="21" fontSize="13" fontFamily="sans-serif" textAnchor="middle">🛒</text>
      <circle cx="372" cy="10" r="5.5" fill={c} />
      <text x="372" y="13" fill="white" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">3</text>
      <rect x="8" y="35" width="35" height="12" rx="6" fill={c} opacity="0.92" />
      <text x="25.5" y="43.5" fill="white" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle">All</text>
      {['Fashion', 'Tech', 'Sports', 'Home'].map((t, i) => (
        <g key={i}>
          <rect x={49 + i * 52} y="35" width="46" height="12" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          <text x={72 + i * 52} y="43.5" fill="rgba(255,255,255,0.3)" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle">{t}</text>
        </g>
      ))}
      {items.map((p, i) => {
        const col = i % 4, row = Math.floor(i / 4)
        const x = 8 + col * 98, y = 54 + row * 83
        return (
          <g key={i}>
            <rect x={x} y={y} width="90" height="75" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            <rect x={x + 4} y={y + 4} width="82" height="40" rx="5" fill="rgba(255,255,255,0.025)" />
            <text x={x + 45} y={y + 28} fontSize="19" fontFamily="sans-serif" textAnchor="middle">{p.e}</text>
            <text x={x + 8} y={y + 53} fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="sans-serif">{p.n}</text>
            <text x={x + 8} y={y + 64} fill={c} fontSize="8" fontFamily="sans-serif" fontWeight="bold">{p.p}</text>
            <rect x={x + 56} y={y + 56} width="28" height="13" rx="3.5" fill={c} opacity="0.82" />
            <text x={x + 70} y={y + 65.5} fill="white" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle">Add</text>
          </g>
        )
      })}
    </svg>
  )
}

function DashboardMockup({ c }) {
  const bars = [52, 78, 42, 88, 62, 92, 68, 84, 58, 96]
  const stats = [{ l: 'Investors', v: '2,847', ch: '+12%' }, { l: 'Revenue', v: '$1.2M', ch: '+8%' }, { l: 'Services', v: '148', ch: '+5%' }]
  return (
    <svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
      <rect width="64" height="230" fill="rgba(0,0,0,0.52)" />
      <line x1="64" y1="0" x2="64" y2="230" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <text x="32" y="18" fill={c} fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">ISC</text>
      {[['📊', 'Board'], ['👥', 'Invest'], ['💰', 'Finance'], ['📋', 'Reports'], ['⚙️', 'Settings']].map(([ic, lb], i) => (
        <g key={i}>
          <rect x="6" y={28 + i * 32} width="52" height="24" rx="6" fill={i === 0 ? `${c}22` : 'transparent'} />
          <text x="22" y={44 + i * 32} fontSize="12" fontFamily="sans-serif" textAnchor="middle">{ic}</text>
          <text x="48" y={44 + i * 32} fontSize="6.5" fontFamily="sans-serif" fill={i === 0 ? c : 'rgba(255,255,255,0.22)'}>{lb}</text>
        </g>
      ))}
      {stats.map((s, i) => (
        <g key={i}>
          <rect x={72 + i * 110} y="6" width="102" height="42" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <text x={80 + i * 110} y="18" fill="rgba(255,255,255,0.38)" fontSize="7" fontFamily="sans-serif">{s.l}</text>
          <text x={80 + i * 110} y="33" fill="rgba(255,255,255,0.88)" fontSize="12.5" fontFamily="sans-serif" fontWeight="bold">{s.v}</text>
          <text x={150 + i * 110} y="33" fill={c} fontSize="8" fontFamily="sans-serif">{s.ch}</text>
        </g>
      ))}
      <rect x="72" y="56" width="208" height="106" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.055)" strokeWidth="0.5" />
      <text x="82" y="70" fill="rgba(255,255,255,0.5)" fontSize="8.5" fontFamily="sans-serif" fontWeight="600">Revenue Analytics</text>
      {[0, 1, 2, 3].map(i => (
        <line key={i} x1="80" y1={148 - i * 20} x2="272" y2={148 - i * 20} stroke="rgba(255,255,255,0.045)" strokeWidth="0.5" strokeDasharray="3,3" />
      ))}
      {bars.map((h, i) => (
        <rect key={i} x={84 + i * 19} y={148 - h * 0.68} width="13" height={h * 0.68} rx="3.5" fill={c} opacity={0.28 + i * 0.072} />
      ))}
      <rect x="288" y="56" width="104" height="106" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.055)" strokeWidth="0.5" />
      <text x="296" y="70" fill="rgba(255,255,255,0.5)" fontSize="8.5" fontFamily="sans-serif" fontWeight="600">Activity</text>
      {['Ali H.', 'Sara M.', 'Mike R.', 'Emma W.', 'Khaled M.'].map((nm, i) => (
        <g key={i}>
          <circle cx="298" cy={84 + i * 14} r="3.5" fill={`${c}65`} />
          <text x="306" y={88 + i * 14} fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="sans-serif">{nm}</text>
          <rect x={354} y={80 + i * 14} width="26" height="10" rx="3" fill={i % 3 === 0 ? '#34d39928' : i % 3 === 1 ? '#f59e0b28' : '#6366f128'} />
          <text x={367} y={88 + i * 14} fill={i % 3 === 0 ? '#34d399' : i % 3 === 1 ? '#f59e0b' : '#818cf8'} fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">{i % 3 === 0 ? '✓ Ok' : i % 3 === 1 ? 'Pend' : 'Act'}</text>
        </g>
      ))}
    </svg>
  )
}

/* ─── Project Card ───────────────────────────────────── */
export function ProjectCard({ project, index = 0 }) {
  const { id, title, subtitle, desc, tech, accent, gradient, category, mockup, image, githubUrl } = project

  return (
    <motion.div
      custom={index}
      variants={slideInUp}
      className="proj-card rounded-[20px] group"
      whileHover={{ y: -12, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } }}
    >
      {/* Mockup image area */}
      <div className="relative h-[232px] overflow-hidden" style={{ background: gradient }}>
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <>
            {mockup === 'fashion'   && <FashionMockup c={accent} />}
            {mockup === 'ecommerce' && <EcommerceMockup c={accent} />}
            {mockup === 'dashboard' && <DashboardMockup c={accent} />}
          </>
        )}

        {/* Hover overlay */}
        <div className="proj-overlay absolute inset-0 flex items-center justify-center gap-3"
          style={{ background: 'rgba(4,4,16,0.9)' }}>
          <Link to={`/projects/${id}`}>
            <Button variant="primary" size="sm" rightIcon={<ExternalLink size={13} />}>
              View Details
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="sm" 
            leftIcon={<Github size={13} />} 
            href={githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </div>

        {/* Glow accent at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-center justify-between mb-3">
          <Badge color={accent}>{category}</Badge>
          <Link to={`/projects/${id}`} className="text-slate-600 hover:text-slate-300 transition-colors">
            <ArrowRight size={16} />
          </Link>
        </div>

        <h3 className="font-display font-bold text-[19px] text-slate-100 mb-1.5">{title}</h3>
        <p className="font-mono text-[12px] mb-3" style={{ color: accent }}>{subtitle}</p>
        <p className="font-body text-slate-500 text-[13.5px] leading-[1.72] mb-5">{desc}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10.5px] text-slate-400 rounded-[7px] px-2.5 py-1"
              style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.14)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Projects Section ───────────────────────────────── */
export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ background: 'rgba(5,5,18,0.98)' }}>
      <div className="container mx-auto px-6">
        <SectionTitle
          tag="03"
          title="Featured Projects"
          subtitle="A selection of my most impactful and ambitious work"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14"
        >
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/projects">
            <Button variant="outline" size="lg" rightIcon={<ArrowRight size={16} />}>
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
