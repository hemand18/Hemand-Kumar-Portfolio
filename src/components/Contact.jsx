import { useState } from 'react'
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/portfolioData'

const empty = { name: '', email: '', subject: '', message: '' }
const field = 'w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-mute/60 focus:border-accent'

export default function Contact() {
  const [f, setF] = useState(empty)
  const [err, setErr] = useState({})
  const [state, setState] = useState({ status: 'idle', msg: '' })

  const validate = () => {
    const e = {}
    if (f.name.trim().length < 2) e.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email address.'
    if (f.subject.trim().length < 3) e.subject = 'Add a short subject.'
    if (f.message.trim().length < 10) e.message = 'Write at least 10 characters.'
    return e
  }

  const submit = async (ev) => {
    ev.preventDefault()
    const e = validate(); setErr(e)
    if (Object.keys(e).length) return
    const key = import.meta.env.VITE_WEB3FORMS_KEY
    if (!key) return setState({ status: 'error', msg: `Form is not configured yet. Email ${profile.email} directly.` })
    setState({ status: 'sending', msg: '' })
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: key, ...f, from_name: 'Portfolio Website' }),
      })
      const data = await res.json()
      if (!data.success) throw new Error()
      setState({ status: 'success', msg: "Message sent. I'll get back to you soon." }); setF(empty)
    } catch { setState({ status: 'error', msg: `Could not send your message. Try again or email ${profile.email}.` }) }
  }

  const bind = (k) => ({ id: k, name: k, value: f[k], 'aria-invalid': !!err[k], onChange: (e) => setF({ ...f, [k]: e.target.value }) })
  const Err = ({ k }) => err[k] ? <p className="mt-1 text-xs text-red-400" role="alert">{err[k]}</p> : null

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className="mb-14 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Have an Idea? Let's Build Something Together.</h2>
        <p className="mt-4 text-mute">I'm always interested in connecting with developers, exploring opportunities, collaborating on projects, and creating meaningful digital experiences.</p>
      </Reveal>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-5 text-sm">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-accent"><Mail size={18} className="text-accent" />{profile.email}</a>
          <p className="flex items-center gap-3"><MapPin size={18} className="text-accent" />{profile.location}</p>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent"><Linkedin size={18} className="text-accent" />LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent"><Github size={18} className="text-accent" />GitHub</a>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="space-y-4 rounded-2xl border border-line bg-panel/60 p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="name" className="mb-1.5 block text-sm">Name</label><input {...bind('name')} className={field} placeholder="Your full name" autoComplete="name" /><Err k="name" /></div>
              <div><label htmlFor="email" className="mb-1.5 block text-sm">Email</label><input {...bind('email')} type="email" className={field} placeholder="you@example.com" autoComplete="email" /><Err k="email" /></div>
            </div>
            <div><label htmlFor="subject" className="mb-1.5 block text-sm">Subject</label><input {...bind('subject')} className={field} placeholder="What's this about?" /><Err k="subject" /></div>
            <div><label htmlFor="message" className="mb-1.5 block text-sm">Message</label><textarea {...bind('message')} rows={5} className={field} placeholder="Tell me about your project or opportunity" /><Err k="message" /></div>
            <button type="submit" disabled={state.status === 'sending'} className="btn btn-primary w-full disabled:opacity-60"><Send size={15} />{state.status === 'sending' ? 'Sending…' : 'Send Message'}</button>
            {state.msg && (
              <p role="status" className={`flex items-center gap-2 text-sm ${state.status === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                {state.status === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}{state.msg}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
