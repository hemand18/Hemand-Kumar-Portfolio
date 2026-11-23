import { Github, Linkedin } from 'lucide-react'
import Reveal, { Section } from './Reveal'
import { profile } from '../data/portfolioData'

export default function Profiles() {
  return (
    <Section id="profiles" title="Find Me Online" intro="Code, repositories, and professional updates live on these profiles.">
      <Reveal>
        <div className="flex flex-wrap gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-primary"><Github size={16} /> GitHub Profile</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost"><Linkedin size={16} /> LinkedIn Profile</a>
        </div>
        <div className="mt-8 flex h-40 items-center justify-center rounded-2xl border border-dashed border-line text-sm text-mute">
          GitHub contribution graph placeholder
        </div>
      </Reveal>
    </Section>
  )
}
