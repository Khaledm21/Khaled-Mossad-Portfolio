import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { scrollToSection } from '@utils/helpers'
import { NAV_LINKS, SOCIAL_LINKS } from '@utils/constants'
import { staggerContainer, fadeUp } from '@utils/animations'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-primary/8 overflow-hidden">
      {/* subtle glow bg */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(99,102,241,0.05) 0%,transparent 70%)' }} />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <Link to="/">
              <span className="font-display font-extrabold text-gradient-anim text-[24px] tracking-tight">
                &lt;KM /&gt;
              </span>
            </Link>
            <p className="font-body text-slate-500 text-sm leading-relaxed mt-4 max-w-[240px]">
              Front-End Developer crafting premium, scalable, and interactive web experiences.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-white hover:border-primary/40 hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Nav */}
          <motion.div variants={fadeUp}>
            <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase text-primary mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-body text-[13.5px] text-slate-500 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-2 group"
                  >
                    <span className="w-4 h-[1px] bg-primary/40 group-hover:w-5 group-hover:bg-primary transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp}>
            <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase text-primary mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              {[
                { icon: Mail,    label: 'khaledmossad221@gmail.com', href: 'mailto:khaledmossad221@gmail.com' },
                { icon: Github,  label: 'github.com/khaledmossad',   href: '#' },
                { icon: Linkedin,label: 'linkedin.com/in/khaledmossad', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-2.5 font-body text-[13px] text-slate-500 hover:text-white transition-colors duration-200 group"
                  >
                    <Icon size={14} className="text-primary/60 group-hover:text-primary transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Available badge */}
            <div className="mt-6 inline-flex items-center gap-2 bg-green-500/8 border border-green-500/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-[11px] text-green-400 tracking-wide">Available for hire</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="font-mono text-[12px] text-slate-600">
            © {year} Khaled Mossad. All rights reserved.
          </p>
          <p className="font-mono text-[12px] text-slate-600 flex items-center gap-1.5">
            Crafted with <Heart size={12} className="text-primary fill-primary" /> using React.js & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
