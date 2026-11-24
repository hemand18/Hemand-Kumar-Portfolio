import { Download, GraduationCap, Sparkles, User } from 'lucide-react'
import Reveal, { Section } from './Reveal'
import { about, interests, profile } from '../data/portfolioData'

import about from '../assets/about.png'

export default function About() {
  return (
    <Section id="about" title="A Little About Me">
      <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
        <Reveal>
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-panel">
            <img src={about} alt="R. Hemand Kumar" className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-5 leading-relaxed text-mute">{about.map((p) => <p key={p}>{p}</p>)}</div>
          <div className="mt-8 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
            <div><h3 className="mb-2 flex items-center gap-2 text-sm font-semibold"><GraduationCap size={16} className="text-accent" /> Education</h3>
              <p className="text-sm text-mute">BCA, Saveetha College of Liberal Arts and Sciences (2024 – 2027)</p></div>
            <div><h3 className="mb-2 flex items-center gap-2 text-sm font-semibold"><Sparkles size={16} className="text-accent" /> Technical interests</h3>
              <div className="flex flex-wrap gap-2">{interests.map((t) => <span key={t} className="badge">{t}</span>)}</div></div>
          </div>
          <a href={profile.resume} download className="btn btn-primary mt-8"><Download size={15} /> Download Resume</a>
        </Reveal>
      </div>
    </Section>
  )
}
