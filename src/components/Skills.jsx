import Reveal, { Section } from './Reveal'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <Section id="skills" title="Technologies & Tools">
      <div className="divide-y divide-line border-y border-line">
        {skills.map(([cat, items], i) => (
          <Reveal key={cat} delay={i * 0.03}>
            <div className="grid gap-4 py-6 md:grid-cols-[260px_1fr]">
              <h3 className="font-semibold">{cat}</h3>
              <div className="flex flex-wrap gap-2">{items.map((s) => <span key={s} className="badge">{s}</span>)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
