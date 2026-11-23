import { motion } from 'framer-motion'
export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}
export function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className="mb-14 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
        {intro && <p className="mt-4 text-mute">{intro}</p>}
      </Reveal>
      {children}
    </section>
  )
}
