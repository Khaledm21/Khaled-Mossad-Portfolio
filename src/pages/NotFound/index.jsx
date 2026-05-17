import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import Button from '@components/ui/Button'
import { pageTransition, staggerContainer, fadeUp } from '@utils/animations'

export default function NotFound() {
  return (
    <motion.div
      {...pageTransition}
      className="min-h-screen flex items-center justify-center px-6"
    >
      {/* BG glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)' }} />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center relative z-10"
      >
        {/* 404 */}
        <motion.div
          variants={fadeUp}
          className="font-display font-extrabold text-gradient-anim mb-3 select-none"
          style={{ fontSize: 'clamp(6rem, 18vw, 14rem)', letterSpacing: '-0.05em', lineHeight: 1 }}
        >
          404
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display font-bold text-slate-200 mb-4"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-body text-slate-500 text-[15px] leading-relaxed max-w-[380px] mx-auto mb-10"
        >
          Looks like this page got lost in the void. Let's get you back on track.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
          <Link to="/">
            <Button variant="primary" size="lg" leftIcon={<Home size={17} />}>
              Go Home
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="outline" size="lg" leftIcon={<ArrowLeft size={17} />}>
              View Projects
            </Button>
          </Link>
        </motion.div>

        {/* Decorative code block */}
        <motion.div
          variants={fadeUp}
          className="mt-14 inline-block text-left p-5 rounded-2xl"
          style={{ background: 'rgba(10,10,28,0.8)', border: '1px solid rgba(99,102,241,0.14)' }}
        >
          <pre className="font-mono text-[12px] text-slate-600 leading-relaxed">
            <span className="text-slate-500">{'// '}</span>
            <span className="text-primary">Error</span>
            <span className="text-slate-500">: Route not found</span>{'\n'}
            <span className="text-slate-500">{'// '}</span>
            <span className="text-secondary">Navigate</span>
            <span className="text-slate-400">(</span>
            <span className="text-green-400">'/'</span>
            <span className="text-slate-400">)</span>
            <span className="text-slate-500"> → Home</span>
          </pre>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
