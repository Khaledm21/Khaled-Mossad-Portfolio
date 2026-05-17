import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { scrollToSection } from '@utils/helpers'
import { pageTransition } from '@utils/animations'

import Hero       from '@components/hero'
import About      from '@components/about'
import Skills     from '@components/skills'
import Projects   from '@components/projects'
import Experience from '@components/experience'
import Education  from '@components/education'
import Contact    from '@components/contact'

export default function Home() {
  const { state } = useLocation()

  /* Handle navigation from other pages with scrollTo state */
  useEffect(() => {
    if (state?.scrollTo) {
      const timer = setTimeout(() => {
        scrollToSection(state.scrollTo)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [state])

  return (
    <motion.div
      {...pageTransition}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </motion.div>
  )
}
