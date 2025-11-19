import { useState } from 'react'
import { motion } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'portfolio' })
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      console.error(e)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Contact</h2>
        <form onSubmit={handleSubmit} className="bg-slate-800/60 backdrop-blur-md rounded-2xl border border-white/10 p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 text-sm">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg bg-slate-900/70 border border-white/10 px-4 py-2 text-white" />
            </div>
            <div>
              <label className="block text-slate-300 text-sm">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg bg-slate-900/70 border border-white/10 px-4 py-2 text-white" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-slate-300 text-sm">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="mt-1 w-full rounded-lg bg-slate-900/70 border border-white/10 px-4 py-2 text-white" />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button disabled={status==='loading'} className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white transition disabled:opacity-60">{status==='loading' ? 'Sending...' : 'Send Message'}</button>
            {status==='success' && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400">Sent! I will reply soon.</motion.span>}
            {status==='error' && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400">Something went wrong. Try again.</motion.span>}
          </div>
        </form>
      </div>
    </section>
  )
}
