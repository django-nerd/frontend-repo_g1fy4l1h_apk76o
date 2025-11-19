import { motion } from 'framer-motion'
import { Code2, Cpu, Globe, Rocket } from 'lucide-react'

export default function About() {
  const skills = [
    { icon: Code2, label: 'JavaScript' },
    { icon: Cpu, label: 'Three.js / R3F' },
    { icon: Globe, label: 'React / Next.js' },
    { icon: Rocket, label: 'Performance' },
  ]

  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.10),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I build premium, immersive web experiences that balance aesthetics and performance. I care about clean UI, accessible UX, and delightful microinteractions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 perspective-1000">
            {skills.map((s, i) => (
              <motion.div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-slate-800/60 p-5 backdrop-blur-md shadow-xl text-white"
                whileHover={{ rotateX: 6, rotateY: -6, translateZ: 10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <s.icon className="h-6 w-6 text-fuchsia-400" />
                <p className="mt-3 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
