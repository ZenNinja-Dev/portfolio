import { hero, CALENDLY_URL } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative border-b border-edge">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-5xl px-5 py-24 sm:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{hero.kicker}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{hero.sub}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-emerald-300"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#work"
            className="rounded-md border border-edge px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
