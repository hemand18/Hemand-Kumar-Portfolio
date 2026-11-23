import Reveal, { Section } from './Reveal'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <Section id="experience" title="Professional Experience" intro="Hands-on work across full stack development, AI integration, and Python.">
      <ol className="relative ml-2 border-l border-line">
        {experience.map((e, idx) => (
          <li key={e.role} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
            <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink" />
            <Reveal delay={idx * 0.08}>
              <div className="rounded-2xl border border-line bg-panel/60 p-6 transition hover:border-accent/40 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <span className="text-sm text-mute">{e.period}</span>
                </div>
                <p className="mt-1 font-medium text-accent">{e.org}</p>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-mute">
                  {e.points.map((p) => (<li key={p} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{p}</li>))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">{e.tech.map((t) => <span key={t} className="badge">{t}</span>)}</div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
