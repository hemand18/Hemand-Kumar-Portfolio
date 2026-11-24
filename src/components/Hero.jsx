import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Download, ArrowDown, User } from 'lucide-react'
import { profile, stats } from '../data/portfolioData'

import hero1 from '../assets/hero-1.png'

export default function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((n) => (n + 1) % profile.titles.length), 2400); return () => clearInterval(t) }, [])
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div animate={{ y: [0, -24, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-accent2/15 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)' }} />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-16 lg:grid-cols-[1.4fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs text-mute">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
            {profile.status}
          </div>
          <p className="mb-4 text-sm font-medium tracking-widest text-accent">HELLO, I'M HEMAND KUMAR</p>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Building Intelligent Applications.<br /><span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Turning Ideas Into Reality.</span>
          </h1>
          <div className="mt-5 h-8 text-lg text-white/90" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.span key={i} className="inline-block" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                {profile.titles[i]}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="mt-4 max-w-xl leading-relaxed text-mute">{profile.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href={profile.resume} download className="btn btn-ghost"><Download size={15} /> Download Resume</a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="btn btn-ghost !px-3"><Github size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="btn btn-ghost !px-3"><Linkedin size={18} /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="mx-auto w-full max-w-xs">
          <div className="rounded-[2rem] bg-gradient-to-br from-accent/60 via-line to-accent2/60 p-px">
            <img src={hero1} alt="R. Hemand Kumar" className="h-full w-full rounded-[2rem] object-cover" />
          </div>
        </motion.div>
        <dl className="grid grid-cols-2 gap-6 border-t border-line pt-8 lg:col-span-2 lg:grid-cols-4">
          {stats.map((s) => (<div key={s.l}><dd className="text-xl font-bold">{s.v}</dd><dt className="text-sm text-mute">{s.l}</dt></div>))}
        </dl>
      </div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-mute md:block"><ArrowDown className="animate-bounce" size={18} /></a>
    </section>
  )
}
