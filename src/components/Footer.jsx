import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { nav, profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold tracking-[0.2em]">HEMAND<span className="text-accent">.</span></p>
          <p className="mt-3 max-w-xs text-sm text-mute">Designed and built with passion by Hemand Kumar.</p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-sm text-mute">
          {nav.map((n) => <li key={n}><a href={`#${n.toLowerCase()}`} className="hover:text-white">{n}</a></li>)}
        </ul>
        <div className="flex items-start gap-4 md:justify-end">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-mute hover:text-white"><Github size={20} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-mute hover:text-white"><Linkedin size={20} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-mute hover:text-white"><Mail size={20} /></a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-line px-6 py-6 text-xs text-mute">
        <p>© {new Date().getFullYear()} R. Hemand Kumar. All rights reserved. · {profile.email}</p>
        <a href="#home" className="btn btn-ghost !px-3 !py-2" aria-label="Back to top"><ArrowUp size={14} /></a>
      </div>
    </footer>
  )
}
