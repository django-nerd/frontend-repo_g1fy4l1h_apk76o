import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Loading 3D scene"
        >
          <div className="relative">
            <div className="h-16 w-16 rounded-full border-4 border-slate-700 border-t-fuchsia-500 animate-spin" />
            <div className="absolute inset-0 rounded-full blur-xl bg-fuchsia-500/20" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
