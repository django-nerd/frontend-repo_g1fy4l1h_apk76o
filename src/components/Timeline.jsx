import { motion } from 'framer-motion'

export default function Timeline() {
  const items = [
    { year: '2024', title: 'Senior Developer', desc: 'Built immersive web experiences with 3D and motion.' },
    { year: '2022', title: 'Creative Technologist', desc: 'Prototyped interactive installations and R&D.' },
    { year: '2020', title: 'Frontend Engineer', desc: 'Shipped scalable UI systems and design libraries.' },
  ]

  return (
    <section id="experience" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Experience & Education</h2>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-fuchsia-500/40 via-cyan-400/40 to-transparent" />
          <div className="space-y-16">
            {items.map((item, i) => (
              <motion.div
                key={i}
                className={`relative grid md:grid-cols-2 gap-8 items-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <div className={`order-${i % 2 === 0 ? 'first' : 'last'} md:order-none`}>
                  <div className="mx-auto md:mx-0 w-40 h-40 rounded-full bg-gradient-to-br from-fuchsia-600 to-cyan-500 shadow-[0_0_60px_rgba(168,85,247,0.25)]" />
                </div>
                <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl border border-white/10 p-6">
                  <p className="text-sm text-slate-400">{item.year}</p>
                  <h3 className="text-white text-xl font-semibold mt-1">{item.title}</h3>
                  <p className="text-slate-300 mt-3">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
