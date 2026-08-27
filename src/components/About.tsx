import { about as a, site } from '../data/content'

export default function About() {
  return (
    <section id="about" className="border-b border-edge">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-50">{a.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400">{a.body}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a href={site.github} target="_blank" rel="noreferrer" className="text-accent hover:underline">
              GitHub ↗
            </a>
            <span className="text-slate-600">·</span>
            <span className="text-slate-500">{site.location}</span>
          </div>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500">Stack</h3>
          <div className="mt-4 flex flex-col gap-2">
            {a.stack.map((s) => (
              <span
                key={s}
                className="rounded border border-edge bg-panel px-3 py-2 font-mono text-xs text-slate-400"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
