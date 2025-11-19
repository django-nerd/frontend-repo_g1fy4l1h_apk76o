import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'

export default function Projects() {
  const projects = useMemo(() => [
    { id: 1, title: 'Futuristic Dashboard', tags: ['R3F', 'Framer Motion'], image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, title: '3D Product Teaser', tags: ['Three.js', 'GLTF'], image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop' },
    { id: 3, title: 'Immersive Landing', tags: ['Spline', 'GSAP'], image: 'https://images.unsplash.com/photo-1626684468293-ac18117177a9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGdXR1cmlzdGljJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjM1MjYwNDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ], [])

  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(p)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/60 backdrop-blur-lg text-left"
              whileHover={{ rotateX: -4, rotateY: 6, translateZ: 8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img src={p.image} alt="" className="h-52 w-full object-cover opacity-80 group-hover:opacity-100 transition" />
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {p.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-400/20">{t}</span>)}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-6"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="max-w-3xl w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900"
                initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}>
                <div className="relative">
                  <img src={active.image} alt="" className="h-80 w-full object-cover" />
                  <button onClick={() => setActive(null)} className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-slate-900/80 text-white border border-white/10">Close</button>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-2xl font-semibold">{active.title}</h3>
                  <p className="mt-3 text-slate-300">High-level description about this project, challenges and outcomes. Embeddable demos or videos can go here.</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
