import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { nav, profile } from '../data/portfolioData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach((n) => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? 'border-b border-line bg-ink/70 backdrop-blur-xl' : 'border-b border-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main">
        <a href="#home" className="text-lg font-extrabold tracking-[0.2em]">HEMAND<span className="text-accent">.</span></a>
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} aria-current={active === n.toLowerCase() ? 'true' : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm transition ${active === n.toLowerCase() ? 'text-white' : 'text-mute hover:text-white'}`}>
                {n}
                {active === n.toLowerCase() && <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-gradient-to-r from-accent to-accent2" />}
              </a>
            </li>
          ))}
        </ul>
        <a href={profile.resume} download className="btn btn-ghost hidden lg:inline-flex"><Download size={15} /> Download Resume</a>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-line px-6 pb-6 lg:hidden">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-mute hover:text-white">{n}</a>
          ))}
          <a href={profile.resume} download className="btn btn-primary mt-3 w-full"><Download size={15} /> Download Resume</a>
        </div>
      )}
    </header>
  )
}
