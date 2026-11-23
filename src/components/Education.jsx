import { GraduationCap, BookOpen } from 'lucide-react'
import Reveal, { Section } from './Reveal'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <Section id="education" title="Education & Academic Background">
      <ol className="relative ml-5 border-l border-line">
        {education.map((e) => {
          const Icon = e.icon === 'grad' ? GraduationCap : BookOpen
          return (
            <li key={e.title} className="relative pb-12 pl-10 last:pb-0">
              <span className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ink text-accent"><Icon size={18} /></span>
              <Reveal>
                <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-semibold">{e.title}</h3><span className="text-sm text-mute">{e.period}</span></div>
                <p className="mt-1 text-white/80">{e.org}</p>
                <p className="mt-2 text-sm text-accent">{e.score}</p>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
