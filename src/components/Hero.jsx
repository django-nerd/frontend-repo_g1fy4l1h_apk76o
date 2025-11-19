import { Suspense, useEffect, useState, useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  const heading = useMemo(() => ({
    title: "Your Name",
    subtitle: "Software / Creative Developer",
    tagline: "Designing immersive, performant web experiences",
  }), [])

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </Suspense>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {heading.title}
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl text-fuchsia-300/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {heading.subtitle}
        </motion.p>
        <motion.p
          className="mt-6 max-w-2xl text-slate-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {heading.tagline}
        </motion.p>
        <motion.div
          className="mt-10 flex gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a href="#projects" className="px-5 py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white transition shadow-lg shadow-fuchsia-600/30">View Work</a>
          <a href="#contact" className="px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white border border-white/10 transition">Contact</a>
        </motion.div>
      </div>
    </section>
  )
}
