// All site copy lives here so it's easy to edit without touching components.

export const CALENDLY_URL = 'https://calendly.com/jakublazovy'

export const site = {
  name: 'Jakub Lazový',
  role: 'AI Automation & Monitoring Engineer',
  location: 'Brno / Znojmo, Czech Republic',
  github: 'https://github.com/ZenNinja-Dev',
  email: 'jakublazovy@gmail.com',
}

export const hero = {
  kicker: 'AI automation · Monitoring · Workflow engineering',
  headline: 'Practical AI automation for SMEs — without hiring a full-time team.',
  sub:
    'I design and ship monitoring hubs, AI agents and automated workflows that plug into the tools you already run — M365, n8n, Make, custom Python, your CRM. You get a working system and a clear handover, not a dependency.',
  ctaPrimary: 'Book a 30-min intro call',
  ctaSecondary: 'See what I build',
}

export type Service = {
  title: string
  tag: string
  body: string
  points: string[]
}

export const services: Service[] = [
  {
    title: 'Monitoring hub',
    tag: 'observe',
    body:
      'One place to see whether things are actually working — before your customers tell you they aren’t.',
    points: [
      'Metrics, logs and alerts consolidated into dashboards your team reads at a glance',
      'Alerting that fires on real problems, not noise',
      'Runs on your infra or fully local — no forced cloud lock-in',
    ],
  },
  {
    title: 'AI agents',
    tag: 'automate',
    body:
      'Focused agents that do a specific, repetitive knowledge task end-to-end — reliably and on a schedule.',
    points: [
      'Reads your data sources, produces the output where your team already works',
      'Deterministic where it matters, LLM only where it adds value',
      'Human-in-the-loop by default — no black-box actions on your behalf',
    ],
  },
  {
    title: 'Workflow automation',
    tag: 'connect',
    body:
      'The manual glue work between your systems, turned into automation that just runs.',
    points: [
      'n8n / Make / Power Automate, or custom Python where a script fits better',
      'Connects to your CRM, mailbox, chat and internal tools',
      'Documented and handed over so it survives without me',
    ],
  },
]

export const caseStudy = {
  label: 'Case study · in production',
  title: 'Daily Operations Briefing',
  oneLiner:
    'A scheduled AI automation that turns overnight activity scattered across a mailbox and ~10 chats into one categorised morning digest — delivered to the team before they log on.',
  context:
    'Built for a ~12-person operations team at a B2B software company. Every morning, operators spent at least the first 30 minutes of their shift manually reconstructing “what happened overnight” across a mailbox and roughly ten chats. Important items were easy to miss, and whoever came on shift re-read the same threads to catch up — a slow, error-prone routine that ate into the start of every shift and gave a different picture depending on who was reading.',
  solution:
    'A scheduled flow now runs unattended every morning at 07:30 CEST. It gathers the last 24 hours from the mailbox and the ~10 chats, runs an LLM prompt that produces a categorised digest, and posts it straight to the team’s group chat. One consolidated, ready-to-read briefing is waiting when the team logs on — the same picture for everyone, no manual channel-hopping.',
  stack: [
    'Power Automate (scheduled flow)',
    'AI Builder — GPT-4.1 custom prompt',
    'M365: Outlook + Teams',
    'SharePoint lists for memory & de-dup',
    'HTML digest delivery',
  ],
  results: [
    'Reclaims the first ~30 min of every operator’s shift — a manual multi-channel trawl becomes a few-minute read over morning coffee (team of ~12)',
    'Live in daily production for several months, running fully unattended',
    'Consistent start-of-day view regardless of who is on shift',
    '“Report on activity, expire on silence” de-dup doctrine — no stale items, no operator action to retire them',
  ],
  note:
    'Details anonymised. Company name and internal data omitted; the architecture and outcome are shown as-is.',
}

export const approach = {
  title: 'How I work',
  sub: 'Small, senior, and built to hand over — not to lock you in.',
  steps: [
    {
      title: 'Scoped setup fee',
      body:
        'A defined implementation with a fixed price and a clear deliverable. You know what you get before we start.',
    },
    {
      title: 'Light monthly retainer',
      body:
        'A small capped block of hours for upkeep and small tweaks — never an open-ended unlimited fee.',
    },
    {
      title: 'New features, separately scoped',
      body:
        'When you want more, we scope and price it on its own. No scope creep hidden inside a monthly bill.',
    },
    {
      title: 'Documented handover',
      body:
        'Everything is documented so your team can run it. Security — input validation, secrets, network exposure — is handled from day one, not bolted on.',
    },
  ],
}

export const about = {
  title: 'About',
  body:
    'I’m Jakub — an AI automation and monitoring engineer working in B2B software, building an independent consulting practice in parallel. My background is operations and reliability, which is exactly why my automations are built to be dependable and boring in production: deterministic where practical, human-in-the-loop by default, and no fabrication. I work with Czech and Slovak SMEs on the Microsoft stack and beyond — the goal is always a system your team owns, not a consultant you can’t get rid of.',
  stack: [
    'Azure Monitor · Log Analytics · KQL',
    'Power Automate · Copilot Studio · AI Builder',
    'Python · FastAPI · LangGraph',
    'Prometheus · Grafana · Docker',
    'n8n · Make · M365',
  ],
}

export const contact = {
  title: 'Let’s see if it’s a fit',
  body:
    'A 30-minute call, no slides. Tell me where your team loses time or visibility, and I’ll tell you honestly whether automation is worth it — and roughly what it would take.',
  cta: 'Book a call',
}
