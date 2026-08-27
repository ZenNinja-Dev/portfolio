import { site } from '../data/content'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-5 py-10">
      <div className="flex flex-col items-start justify-between gap-3 text-sm text-slate-600 sm:flex-row sm:items-center">
        <span className="font-mono">
          {site.name} — {site.role}
        </span>
        <div className="flex gap-4">
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-slate-300">
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-slate-300">
            Email
          </a>
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-700">
        © {new Date().getFullYear()} {site.name}. Built local-first.
      </p>
    </footer>
  )
}
