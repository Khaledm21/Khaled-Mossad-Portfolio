import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, CheckCircle, Send, AlertCircle } from 'lucide-react'
import SectionTitle from '@components/ui/SectionTitle'
import GlowCard from '@components/ui/GlowCard'
import Button from '@components/ui/Button'
import { CONTACT_INFO, SOCIAL_LINKS } from '@utils/constants'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '@utils/animations'

/* ─── Floating Label Input ─────────────────────────── */
function FloatInput({ label, type = 'text', value, onChange, textarea = false, rows = 5 }) {
  const [focused, setFocused] = useState(false)
  const isUp = focused || value.length > 0

  const shared = {
    className: 'c-input',
    value,
    onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    placeholder: ' ',
  }

  return (
    <div className="relative">
      {textarea
        ? <textarea {...shared} rows={rows} style={{ minHeight: 120 }} />
        : <input {...shared} type={type} />
      }
      <label
        className="absolute left-4 font-body text-[13px] pointer-events-none transition-all duration-200"
        style={{
          top: textarea ? (isUp ? 8 : 16) : (isUp ? 8 : '50%'),
          transform: isUp ? 'translateY(0) scale(0.85)' : 'translateY(-50%)',
          transformOrigin: 'left center',
          color: focused ? '#6366f1' : 'rgba(148,163,184,0.4)',
          fontSize: isUp ? 11 : 13,
        }}
      >
        {label}
      </label>
    </div>
  )
}

/* ─── Contact Form ─────────────────────────────────── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    if (e) e.preventDefault()
    if (loading) return

    const trimmedName = form.name.trim()
    const trimmedEmail = form.email.trim()
    const trimmedSubject = form.subject.trim()
    const trimmedMessage = form.message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError('Please fill in all required fields marked with *.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          subject: trimmedSubject,
          message: trimmedMessage,
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send your message. Please try again.')
      }

      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('Contact form error:', err)
      setError(err.message || 'Something went wrong while sending your message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const set = (key) => (e) => {
    if (error) setError('')
    setForm({ ...form, [key]: e.target.value })
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-14 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 300 }}
        >
          <CheckCircle size={56} className="text-green-400 mb-5" />
        </motion.div>
        <h3 className="font-display font-bold text-[22px] text-green-400 mb-3">Message Sent!</h3>
        <p className="font-body text-slate-400 text-[14px] leading-relaxed max-w-[300px]">
          Thank you for reaching out. I'll get back to you as soon as possible!
        </p>
        <Button
          variant="neon"
          size="sm"
          className="mt-6"
          onClick={() => {
            setSent(false)
            setError('')
            setForm({ name: '', email: '', subject: '', message: '' })
          }}
        >
          Send Another
        </Button>
      </motion.div>
    )
  }

  return (
    <div>
      <h3 className="font-display font-bold text-[20px] text-slate-100 mb-7">Send a Message</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <FloatInput label="Your Name *" value={form.name} onChange={set('name')} />
        <FloatInput label="Email Address *" type="email" value={form.email} onChange={set('email')} />
      </div>
      <div className="mb-4">
        <FloatInput label="Subject" value={form.subject} onChange={set('subject')} />
      </div>
      <div className="mb-6">
        <FloatInput label="Your Message *" textarea value={form.message} onChange={set('message')} rows={5} />
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 p-3.5 rounded-xl border border-rose-500/30 bg-rose-500/10 flex items-start gap-3"
        >
          <AlertCircle size={18} className="text-rose-400 flex-shrink-0 mt-0.5" />
          <p className="font-body text-[13px] text-rose-300 leading-snug">{error}</p>
        </motion.div>
      )}

      <Button
        variant="primary"
        size="lg"
        fullWidth
        leftIcon={loading
          ? <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
          : <Send size={16} />}
        onClick={handleSubmit}
        disabled={loading || !form.name || !form.email || !form.message}
      >
        {loading ? 'Sending…' : 'Send Message'}
      </Button>
    </div>
  )
}

/* ─── Contact ─────────────────────────────────────── */
export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container mx-auto px-6" style={{ maxWidth: 1100 }}>
        <SectionTitle
          tag="06"
          title="Get In Touch"
          subtitle="Let's build something amazing together — my inbox is always open"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-14"
        >
          {/* Left info panel (2/5) */}
          <motion.div variants={fadeLeft} className="lg:col-span-2 space-y-8">
            <p className="font-body text-slate-500 text-[15px] leading-[1.82]">
              I'm currently open to new opportunities. Whether you have a project in mind,
              want to collaborate, or just want to say hello — feel free to reach out!
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-[13px] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:-translate-y-1"
                    style={{ background: `${color}12`, border: `1px solid ${color}28` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="font-mono text-[10.5px] text-slate-600 mb-0.5">{label}</div>
                    <div className="font-body text-[14px] text-slate-300 font-medium group-hover:text-white transition-colors">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="font-mono text-[11px] text-slate-600 uppercase tracking-[0.18em] mb-4">Find me on</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    title={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-body font-medium text-[13px] text-primary/80 transition-all duration-300 hover:text-white hover:-translate-y-1"
                    style={{ background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.16)' }}
                  >
                    <Icon size={15} /> {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Available badge */}
            <div className="p-5 rounded-2xl border border-green-500/18 bg-green-500/[0.04]">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[11.5px] text-green-400 font-medium tracking-wide">Available for work</span>
              </div>
              <p className="font-body text-slate-500 text-[12.5px] leading-relaxed">
                Open to Front-End Developer roles, freelance projects, and collaborative opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right form (3/5) */}
          <motion.div variants={fadeRight} className="lg:col-span-3">
            <GlowCard className="p-8 md:p-10">
              <ContactForm />
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
