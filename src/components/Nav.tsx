import { site, CALENDLY_URL } from '../data/content'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#about', label: 'About' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-edge/80 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-slate-100">
          {site.name}
          <span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-400 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-slate-100">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
        >
          Book a call
        </a>
      </div>
    </header>
  )
}
