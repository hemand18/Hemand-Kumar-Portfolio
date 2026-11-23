import { Github, ExternalLink, Eye, Image as ImageIcon } from 'lucide-react'
import Reveal, { Section } from './Reveal'
import { projects } from '../data/portfolioData'

const LinkBtn = ({ href, icon: Icon, children, primary }) =>
  href ? (
    <a href={href} target="_blank" rel="noreferrer" className={`btn ${primary ? 'btn-primary' : 'btn-ghost'}`}><Icon size={15} /> {children}</a>
  ) : (
    <span className="btn btn-ghost cursor-not-allowed opacity-40" title="Coming soon" aria-disabled="true"><Icon size={15} /> {children}</span>
  )

export default function Projects() {
  return (
    <Section id="projects" title="Things I've Built">
      <div className="space-y-24">
        {projects.map((p, i) => (
          <Reveal key={p.name}>
            <article className="group grid items-center gap-10 lg:grid-cols-2">
              <div className={`overflow-hidden rounded-3xl border border-line bg-panel transition duration-500 group-hover:border-accent/50 group-hover:shadow-[0_30px_80px_-30px_rgba(124,108,255,0.5)] ${i % 2 ? 'lg:order-2' : ''}`}>
                {p.image ? <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                  : <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent/10 to-accent2/10 text-mute"><ImageIcon strokeWidth={1} size={44} /><span className="text-xs">Screenshot placeholder</span></div>}
              </div>
              <div>
                <span className="text-sm text-accent">Project {String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-1 text-3xl font-bold tracking-tight">{p.name}</h3>
                <p className="mt-1 text-white/80">{p.subtitle}</p>
                <p className="mt-4 leading-relaxed text-mute">{p.description}</p>
                <ul className="mt-5 grid gap-x-6 gap-y-1.5 text-sm text-mute sm:grid-cols-2">
                  {p.features.map((f) => <li key={f} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{f}</li>)}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="badge">{t}</span>)}</div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <LinkBtn href={p.detail} icon={Eye} primary>View Project</LinkBtn>
                  <LinkBtn href={p.github} icon={Github}>GitHub Repository</LinkBtn>
                  <LinkBtn href={p.live} icon={ExternalLink}>Live Website</LinkBtn>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
