import { Award } from 'lucide-react'
import Reveal, { Section } from './Reveal'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-line bg-panel/60 p-6 transition hover:border-accent/40">
              <Award className="mb-4 text-accent" size={22} />
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-mute">{c.org} · {c.year}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
