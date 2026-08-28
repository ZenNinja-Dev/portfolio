// All site copy lives here. Trilingual: CONTENT.en / CONTENT.cz / CONTENT.sk share one shape.
// Edit wording here without touching components.

export const CALENDLY_URL = 'https://calendly.com/jakublazovy'

export const site = {
  name: 'Jakub Lazový',
  github: 'https://github.com/ZenNinja-Dev',
  email: 'jakublazovy@gmail.com',
  location: 'Brno / Znojmo, Czech Republic',
}

export type Lang = 'en' | 'cz' | 'sk'

export type Project = {
  tag: string
  title: string
  summary: string
  points: string[]
  stack: string[]
  status?: string
  repo?: string
}

type Content = {
  nav: { services: string; work: string; approach: string; about: string; book: string }
  hero: { kicker: string; headline: string; sub: string; ctaPrimary: string; ctaSecondary: string }
  services: { heading: string; title: string; items: { tag: string; title: string; body: string; points: string[] }[] }
  outcomes: { heading: string; items: { title: string; body: string }[] }
  work: { heading: string; title: string; note: string }
  projects: Project[]
  approach: { title: string; sub: string; steps: { title: string; body: string }[] }
  about: { title: string; body: string; stackLabel: string; stack: string[] }
  contact: { title: string; body: string; cta: string }
  footer: { role: string; builtLocal: string }
  repoLabel: string
}

const en: Content = {
  nav: { services: 'Services', work: 'Work', approach: 'Approach', about: 'About', book: 'Book a call' },
  hero: {
    kicker: 'AI automation · Monitoring · Workflow engineering',
    headline: 'Practical AI automation for SMEs — without hiring a full-time team.',
    sub:
      'I design and ship monitoring hubs, AI agents and automated workflows that plug into the tools you already run — M365, n8n, Make, custom Python, your CRM. You get a working system and a clean handover, not a dependency.',
    ctaPrimary: 'Book a 30-min intro call',
    ctaSecondary: 'See what I build',
  },
  services: {
    heading: 'What I build',
    title: 'Three things, done properly and handed over.',
    items: [
      {
        tag: 'observe',
        title: 'Monitoring hub',
        body: 'One place to see whether things are actually working — before your customers tell you they aren’t.',
        points: [
          'Metrics, logs and alerts consolidated into dashboards your team reads at a glance',
          'Alerting that fires on real problems, not noise',
          'Runs on your infra or fully local — no forced cloud lock-in',
        ],
      },
      {
        tag: 'automate',
        title: 'AI agents',
        body: 'Focused agents that do a specific, repetitive knowledge task end-to-end — reliably and on a schedule.',
        points: [
          'Reads your data sources, produces the output where your team already works',
          'Deterministic where it matters, LLM only where it adds value',
          'Human-in-the-loop by default — no black-box actions on your behalf',
        ],
      },
      {
        tag: 'connect',
        title: 'Workflow automation',
        body: 'The manual glue work between your systems, turned into automation that just runs.',
        points: [
          'n8n / Make / Power Automate, or custom Python where a script fits better',
          'Connects to your CRM, mailbox, chat and internal tools',
          'Documented and handed over so it survives without me',
        ],
      },
    ],
  },
  outcomes: {
    heading: 'What you get',
    items: [
      { title: 'Fewer surprises', body: 'Problems surface before your customers — or your numbers — feel them.' },
      { title: 'Hours back every week', body: 'The repetitive manual work your team does daily, done automatically.' },
      { title: 'No new hire', body: 'A working system set up by one senior person — not a new team or a full-time salary.' },
      { title: 'You own it', body: 'Documented and handed over, so it runs without me. No lock-in.' },
    ],
  },
  work: {
    heading: 'Selected work',
    title: 'A sample of what I build.',
    note: 'More projects being added.',
  },
  projects: [
    {
      tag: 'monitoring · azure',
      title: 'Azure Monitoring Hub',
      summary:
        'See whether everything is working from one screen, and get alerted on real problems — not noise. A reusable Azure monitoring setup that scales across all your systems.',
      points: [
        'One parameterised workbook template scales across every system — a new system is a parameter change, not a hand-built page',
        'Signal-over-noise alerting, including a bulletproof zero-detection pattern (an empty result set still fires)',
        'A cross-platform “dead man’s switch” so the monitoring automations monitor themselves',
        'Idempotent multi-environment rollout via Azure CLI + parameterised ARM templates',
      ],
      stack: ['Azure Monitor', 'Log Analytics · KQL', 'Azure Resource Graph', 'Application Insights', 'ARM / IaC'],
      status: 'Open source',
      repo: 'https://github.com/ZenNinja-Dev/azure-monitoring-hub',
    },
    {
      tag: 'reliability · runnable',
      title: 'Audience Reconciliation',
      summary:
        'Stops pricing mistakes before a contract is signed — it checks the number in your CRM quote against the real number in your data warehouse and flags any mismatch.',
      points: [
        'Counting is a rules problem before it’s an AI problem — a deterministic, tested engine produces the number',
        'A bounded LLM only rephrases the verdict into plain English; it never touches a number',
        'Fails closed — a confident wrong number is the expensive failure, so unsafe cases route to a human',
        'Runs offline, zero dependencies, 12/12 eval cases pass',
      ],
      stack: ['Python (stdlib)', 'Deterministic engine', 'Ollama / Anthropic (optional)', 'unittest + eval'],
      repo: 'https://github.com/ZenNinja-Dev/audience-reconciliation',
    },
  ],
  approach: {
    title: 'How I work',
    sub: 'Small, senior, and built to hand over — not to lock you in.',
    steps: [
      { title: 'Scoped setup fee', body: 'A defined implementation with a fixed price and a clear deliverable. You know what you get before we start.' },
      { title: 'Light monthly retainer', body: 'A small capped block of hours for upkeep and small tweaks — never an open-ended unlimited fee.' },
      { title: 'New features, separately scoped', body: 'When you want more, we scope and price it on its own. No scope creep hidden inside a monthly bill.' },
      { title: 'Documented handover', body: 'Everything is documented so your team can run it. Security — input validation, secrets, network exposure — is handled from day one.' },
    ],
  },
  about: {
    title: 'About',
    body:
      'I’m Jakub — an AI automation and monitoring engineer working in B2B software, building an independent consulting practice in parallel. My background is operations and reliability, which is exactly why my automations are built to be dependable and boring in production: deterministic where practical, human-in-the-loop by default, and no fabrication. I work with Czech and Slovak SMEs on the Microsoft stack and beyond — the goal is always a system your team owns, not a consultant you can’t get rid of.',
    stackLabel: 'Stack',
    stack: [
      'Azure Monitor · Log Analytics · KQL',
      'Power Automate · Copilot Studio · AI Builder',
      'Python · FastAPI · LangGraph',
      'Prometheus · Grafana · Docker',
      'n8n · Make · M365',
    ],
  },
  contact: {
    title: 'Let’s see if it’s a fit',
    body:
      'A 30-minute call, no slides. Tell me where your team loses time or visibility, and I’ll tell you honestly whether automation is worth it — and roughly what it would take.',
    cta: 'Book a call',
  },
  footer: { role: 'AI Automation & Monitoring Engineer', builtLocal: 'Built local-first.' },
  repoLabel: 'View repo ↗',
}

const cz: Content = {
  nav: { services: 'Služby', work: 'Práce', approach: 'Postup', about: 'O mně', book: 'Rezervovat hovor' },
  hero: {
    kicker: 'AI automatizace · Monitoring · Workflow engineering',
    headline: 'Praktická AI automatizace pro malé a střední firmy — bez najímání člověka na plný úvazek.',
    sub:
      'Navrhuji a nasazuji monitoring huby, AI agenty a automatizované workflow, které se napojí na nástroje, jež už používáte — M365, n8n, Make, vlastní Python, váš CRM. Dostanete funkční systém a čisté předání, ne závislost.',
    ctaPrimary: 'Rezervovat 30min úvodní hovor',
    ctaSecondary: 'Podívejte se, co stavím',
  },
  services: {
    heading: 'Co stavím',
    title: 'Tři věci, pořádně udělané a předané.',
    items: [
      {
        tag: 'sledovat',
        title: 'Monitoring hub',
        body: 'Jedno místo, kde vidíte, jestli věci opravdu fungují — dřív, než vám to řeknou zákazníci.',
        points: [
          'Metriky, logy a alerty sjednocené do přehledů, které tým přečte na první pohled',
          'Alerting, který se spustí na reálné problémy, ne na šum',
          'Běží na vaší infrastruktuře nebo plně lokálně — žádný nucený cloud lock-in',
        ],
      },
      {
        tag: 'automatizovat',
        title: 'AI agenti',
        body: 'Zaměření agenti, kteří udělají konkrétní opakovanou úlohu od začátku do konce — spolehlivě a podle plánu.',
        points: [
          'Přečtou vaše datové zdroje a doručí výstup tam, kde tým už pracuje',
          'Deterministický tam, kde na tom záleží, LLM jen tam, kde přidává hodnotu',
          'Human-in-the-loop jako standard — žádné black-box akce vaším jménem',
        ],
      },
      {
        tag: 'propojit',
        title: 'Automatizace workflow',
        body: 'Manuální „lepicí“ práce mezi vašimi systémy proměněná v automatizaci, která prostě běží.',
        points: [
          'n8n / Make / Power Automate, nebo vlastní Python tam, kde se skript hodí víc',
          'Napojení na váš CRM, mailbox, chat a interní nástroje',
          'Zdokumentované a předané tak, aby to fungovalo i beze mě',
        ],
      },
    ],
  },
  outcomes: {
    heading: 'Co z toho máte',
    items: [
      { title: 'Méně překvapení', body: 'Problémy se ukážou dřív, než je pocítí vaši zákazníci — nebo vaše čísla.' },
      { title: 'Hodiny zpět každý týden', body: 'Opakovaná ruční práce, kterou tým dělá denně, běží automaticky.' },
      { title: 'Bez nového člověka', body: 'Funkční systém nastavený jedním seniorem — ne nový tým ani plný úvazek.' },
      { title: 'Vlastníte to', body: 'Zdokumentované a předané, běží i beze mě. Žádný lock-in.' },
    ],
  },
  work: {
    heading: 'Vybrané projekty',
    title: 'Ukázka toho, co stavím.',
    note: 'Další projekty přibývají.',
  },
  projects: [
    {
      tag: 'monitoring · azure',
      title: 'Azure Monitoring Hub',
      summary:
        'Vidíte z jedné obrazovky, jestli všechno běží, a upozornění dostanete na skutečné problémy — ne na šum. Znovupoužitelný Azure monitoring, který škáluje přes všechny vaše systémy.',
      points: [
        'Jedna parametrizovaná šablona workbooku škáluje napříč všemi systémy — nový systém je změna parametru, ne ručně stavěná stránka',
        'Signal-over-noise alerting včetně „bulletproof“ zero-detection patternu (spustí se i na prázdný výsledek)',
        'Cross-platform „dead man’s switch“, aby monitorovací automatizace hlídaly samy sebe',
        'Idempotentní rollout do více prostředí přes Azure CLI + parametrizované ARM šablony',
      ],
      stack: ['Azure Monitor', 'Log Analytics · KQL', 'Azure Resource Graph', 'Application Insights', 'ARM / IaC'],
      status: 'Open source',
      repo: 'https://github.com/ZenNinja-Dev/azure-monitoring-hub',
    },
    {
      tag: 'spolehlivost · spustitelné',
      title: 'Audience Reconciliation',
      summary:
        'Zastaví cenové chyby dřív, než se podepíše smlouva — porovná číslo z nabídky v CRM se skutečným číslem z datového skladu a označí každý nesoulad.',
      points: [
        'Počítání je nejdřív problém pravidel, až potom AI — číslo produkuje deterministický, otestovaný engine',
        'Ohraničené LLM jen přeformuluje verdikt do srozumitelné řeči; čísla se nikdy nedotkne',
        'Selhává „closed“ — sebevědomé nesprávné číslo je ta drahá chyba, takže nebezpečné případy jdou na člověka',
        'Běží offline, nulové závislosti, 12/12 eval případů prochází',
      ],
      stack: ['Python (stdlib)', 'Deterministický engine', 'Ollama / Anthropic (volitelně)', 'unittest + eval'],
      repo: 'https://github.com/ZenNinja-Dev/audience-reconciliation',
    },
  ],
  approach: {
    title: 'Jak pracuji',
    sub: 'Malý, senior přístup — postavené na předání, ne na vaší závislosti.',
    steps: [
      { title: 'Ohraničený vstupní poplatek', body: 'Definovaná implementace s pevnou cenou a jasným výstupem. Víte, co dostanete, ještě než začneme.' },
      { title: 'Lehký měsíční retainer', body: 'Malý strop hodin na údržbu a drobné úpravy — nikdy ne neomezený paušál.' },
      { title: 'Nové funkce, samostatně naceněné', body: 'Když chcete víc, naceníme to zvlášť. Žádný skrytý scope creep v měsíční faktuře.' },
      { title: 'Zdokumentované předání', body: 'Všechno je zdokumentované, aby to váš tým uměl provozovat. Bezpečnost — validace vstupů, tajemství, síťová expozice — je řešená od prvního dne.' },
    ],
  },
  about: {
    title: 'O mně',
    body:
      'Jsem Jakub — AI automation a monitoring engineer v B2B softwaru, vedle toho buduji nezávislou consultingovou praxi. Moje zázemí je provoz a spolehlivost, a přesně proto jsou moje automatizace stavěné tak, aby byly v produkci spolehlivé a „nudné“: deterministické tam, kde to jde, human-in-the-loop jako standard a žádné vymýšlení. Pracuji s českými a slovenskými malými a středními firmami na Microsoft stacku i mimo něj — cílem je vždy systém, který vlastní váš tým, ne konzultant, kterého se nezbavíte.',
    stackLabel: 'Stack',
    stack: [
      'Azure Monitor · Log Analytics · KQL',
      'Power Automate · Copilot Studio · AI Builder',
      'Python · FastAPI · LangGraph',
      'Prometheus · Grafana · Docker',
      'n8n · Make · M365',
    ],
  },
  contact: {
    title: 'Zjistíme, jestli si sedneme',
    body:
      '30 minut, žádné slajdy. Řekněte mi, kde váš tým ztrácí čas nebo přehled, a já vám upřímně řeknu, jestli se automatizace vyplatí — a zhruba co by to obnášelo.',
    cta: 'Rezervovat hovor',
  },
  footer: { role: 'AI Automation & Monitoring Engineer', builtLocal: 'Postaveno local-first.' },
  repoLabel: 'Zobrazit repo ↗',
}

const sk: Content = {
  nav: { services: 'Služby', work: 'Práce', approach: 'Postup', about: 'O mne', book: 'Rezervovať hovor' },
  hero: {
    kicker: 'AI automatizácia · Monitoring · Workflow engineering',
    headline: 'Praktická AI automatizácia pre malé a stredné firmy — bez najímania človeka na plný úväzok.',
    sub:
      'Navrhujem a nasadzujem monitoring huby, AI agentov a automatizované workflowy, ktoré sa napoja na nástroje, ktoré už používate — M365, n8n, Make, vlastný Python, váš CRM. Dostanete funkčný systém a čisté odovzdanie, nie závislosť.',
    ctaPrimary: 'Rezervovať 30min úvodný hovor',
    ctaSecondary: 'Pozrite sa, čo staviam',
  },
  services: {
    heading: 'Čo staviam',
    title: 'Tri veci, poriadne spravené a odovzdané.',
    items: [
      {
        tag: 'sledovať',
        title: 'Monitoring hub',
        body: 'Jedno miesto, kde vidíte, či veci naozaj fungujú — skôr než vám to povedia zákazníci.',
        points: [
          'Metriky, logy a alerty zjednotené do prehľadov, ktoré tím prečíta na prvý pohľad',
          'Alerting, ktorý sa spustí na reálne problémy, nie na šum',
          'Beží na vašej infraštruktúre alebo plne lokálne — žiadny nútený cloud lock-in',
        ],
      },
      {
        tag: 'automatizovať',
        title: 'AI agenti',
        body: 'Zameraní agenti, ktorí spravia konkrétnu opakovanú úlohu od začiatku do konca — spoľahlivo a podľa plánu.',
        points: [
          'Prečítajú vaše dátové zdroje a doručia výstup tam, kde tím už pracuje',
          'Deterministickí tam, kde na tom záleží, LLM len tam, kde pridáva hodnotu',
          'Human-in-the-loop ako štandard — žiadne black-box akcie vo vašom mene',
        ],
      },
      {
        tag: 'prepojiť',
        title: 'Automatizácia workflow',
        body: 'Manuálna „lepiaca“ práca medzi vašimi systémami premenená na automatizáciu, ktorá jednoducho beží.',
        points: [
          'n8n / Make / Power Automate, alebo vlastný Python tam, kde sa skript hodí viac',
          'Napojenie na váš CRM, mailbox, chat a interné nástroje',
          'Zdokumentované a odovzdané tak, aby to fungovalo aj bezo mňa',
        ],
      },
    ],
  },
  outcomes: {
    heading: 'Čo z toho máte',
    items: [
      { title: 'Menej prekvapení', body: 'Problémy sa ukážu skôr, než ich pocítia vaši zákazníci — alebo vaše čísla.' },
      { title: 'Hodiny späť každý týždeň', body: 'Opakovaná ručná práca, ktorú tím robí denne, beží automaticky.' },
      { title: 'Bez nového človeka', body: 'Funkčný systém nastavený jedným seniorom — nie nový tím ani plný úväzok.' },
      { title: 'Vlastníte to', body: 'Zdokumentované a odovzdané, beží aj bezo mňa. Žiadny lock-in.' },
    ],
  },
  work: {
    heading: 'Vybrané projekty',
    title: 'Ukážka toho, čo staviam.',
    note: 'Ďalšie projekty pribúdajú.',
  },
  projects: [
    {
      tag: 'monitoring · azure',
      title: 'Azure Monitoring Hub',
      summary:
        'Vidíte z jednej obrazovky, či všetko beží, a upozornenie dostanete na skutočné problémy — nie na šum. Znovupoužiteľný Azure monitoring, ktorý škáluje cez všetky vaše systémy.',
      points: [
        'Jedna parametrizovaná šablóna workbooku škáluje naprieč všetkými systémami — nový systém je zmena parametra, nie ručne stavaná stránka',
        'Signal-over-noise alerting vrátane „bulletproof“ zero-detection patternu (spustí sa aj na prázdny výsledok)',
        'Cross-platform „dead man’s switch“, aby monitorovacie automatizácie strážili samy seba',
        'Idempotentný rollout do viacerých prostredí cez Azure CLI + parametrizované ARM šablóny',
      ],
      stack: ['Azure Monitor', 'Log Analytics · KQL', 'Azure Resource Graph', 'Application Insights', 'ARM / IaC'],
      status: 'Open source',
      repo: 'https://github.com/ZenNinja-Dev/azure-monitoring-hub',
    },
    {
      tag: 'spoľahlivosť · spustiteľné',
      title: 'Audience Reconciliation',
      summary:
        'Zastaví cenové chyby skôr, než sa podpíše zmluva — porovná číslo z ponuky v CRM so skutočným číslom z dátového skladu a označí každý nesúlad.',
      points: [
        'Počítanie je najprv problém pravidiel, až potom AI — číslo produkuje deterministický, otestovaný engine',
        'Ohraničené LLM len preformuluje verdikt do zrozumiteľnej reči; čísla sa nikdy nedotkne',
        'Zlyháva „closed“ — sebavedomé nesprávne číslo je tá drahá chyba, takže nebezpečné prípady idú na človeka',
        'Beží offline, nulové závislosti, 12/12 eval prípadov prechádza',
      ],
      stack: ['Python (stdlib)', 'Deterministický engine', 'Ollama / Anthropic (voliteľne)', 'unittest + eval'],
      repo: 'https://github.com/ZenNinja-Dev/audience-reconciliation',
    },
  ],
  approach: {
    title: 'Ako pracujem',
    sub: 'Malý, senior prístup — postavené na odovzdanie, nie na vašu závislosť.',
    steps: [
      { title: 'Ohraničený vstupný poplatok', body: 'Definovaná implementácia s pevnou cenou a jasným výstupom. Viete, čo dostanete, ešte než začneme.' },
      { title: 'Ľahký mesačný retainer', body: 'Malý strop hodín na údržbu a drobné úpravy — nikdy nie neobmedzený paušál.' },
      { title: 'Nové funkcie, samostatne ocenené', body: 'Keď chcete viac, naceníme to zvlášť. Žiadny skrytý scope creep v mesačnej faktúre.' },
      { title: 'Zdokumentované odovzdanie', body: 'Všetko je zdokumentované, aby to váš tím vedel prevádzkovať. Bezpečnosť — validácia vstupov, tajomstvá, sieťová expozícia — je riešená od prvého dňa.' },
    ],
  },
  about: {
    title: 'O mne',
    body:
      'Som Jakub — AI automation a monitoring engineer v B2B softvéri, popri tom budujem nezávislú consulting prax. Moje zázemie je prevádzka a spoľahlivosť, a práve preto sú moje automatizácie stavané tak, aby boli v produkcii spoľahlivé a „nudné“: deterministické tam, kde sa dá, human-in-the-loop ako štandard a žiadne vymýšľanie. Pracujem s českými a slovenskými malými a strednými firmami na Microsoft stacku aj mimo neho — cieľom je vždy systém, ktorý vlastní váš tím, nie konzultant, ktorého sa neviete zbaviť.',
    stackLabel: 'Stack',
    stack: [
      'Azure Monitor · Log Analytics · KQL',
      'Power Automate · Copilot Studio · AI Builder',
      'Python · FastAPI · LangGraph',
      'Prometheus · Grafana · Docker',
      'n8n · Make · M365',
    ],
  },
  contact: {
    title: 'Zistime, či si sadneme',
    body:
      '30 minút, žiadne slajdy. Povedzte mi, kde váš tím stráca čas alebo prehľad, a ja vám úprimne poviem, či sa automatizácia oplatí — a zhruba čo by to obnášalo.',
    cta: 'Rezervovať hovor',
  },
  footer: { role: 'AI Automation & Monitoring Engineer', builtLocal: 'Postavené local-first.' },
  repoLabel: 'Zobraziť repo ↗',
}

export const CONTENT: Record<Lang, Content> = { en, cz, sk }
