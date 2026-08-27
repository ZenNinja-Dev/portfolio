import { site, CALENDLY_URL } from '../data/content'
import { useLang } from '../i18n'

export default function Nav() {
  const { lang, setLang, t } = useLang()
  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#work', label: t.nav.work },
    { href: '#approach', label: t.nav.approach },
    { href: '#about', label: t.nav.about },
  ]
  return (
    <header className="sticky top-0 z-50 border-b border-edge/80 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
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
        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-md border border-edge text-xs font-medium">
            {(['en', 'cz', 'sk'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={
                  'px-2 py-1 transition-colors ' +
                  (lang === l ? 'bg-accent text-ink' : 'text-slate-400 hover:text-slate-100')
                }
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
          >
            {t.nav.book}
          </a>
        </div>
      </div>
    </header>
  )
}
