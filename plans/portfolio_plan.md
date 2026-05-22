# Portfolio Plan — Samiullah (ML Engineer & AI Developer)

*Based on research across 20+ world-class portfolios including Brittany Chiang, Matt Farley, Bruno Simon, Sara Soueidan, and Awwwards winners.*

---

## Core Strategy

Your profile is rare: **ML Engineer + SaaS Founder (TheBotLab) + Researcher**. No generic dev portfolio can carry that. The strategy is to position you as a **specialist who ships production AI systems and has already built a product** — not just someone who knows Python.

**Positioning Statement (to thread through everything):**
> *"I build AI systems that go to production — from model to deployment to product."*

---

## Visual Identity

| Decision | Choice | Reason |
|---|---|---|
| Theme | Dark (navy/near-black) | 60% of top portfolios, signals technical depth |
| Accent color | One electric color (cyan, emerald, or violet) | Consistency, memorability |
| Typography | Large bold hero (80px+) + clean body | Top portfolios use type as a design element |
| Signature element | Animated terminal / live GitHub heatmap | Unique to ML/dev identity |
| Photos | Real professional photo, no stock | Every top portfolio uses authentic imagery |
| Animations | Scroll-triggered section reveals only | No gimmicks — Matt Farley / Brittany Chiang model |

---

## Page Architecture (Multi-Page)

```
/                   → Landing (Hero + teasers for every page)
/about              → Full bio + skills + experience
/projects           → All projects as case studies
/services           → What you offer + pricing signals (NEW)
/startup            → TheBotLab deep-dive
/research           → OpenDeepSearch paper + blog
/contact            → Booking form + Calendly + direct links
```

---

## Page-by-Page Plan

---

### `/` — Home (Landing Page)

**Above the fold (visible without scrolling):**
- Name + bold positioning headline (outcome-led, not title-led)
- 2-line bio max
- Two CTAs side by side: `View My Work` + `Hire Me`
- Professional photo
- Subtle animated element (typing terminal or floating badge)

**Below the fold (teasers only — each links to its own page):**
- 3 featured projects (problem → result → tech, no walls of text)
- Services teaser strip (3 icons + 1-line descriptions)
- TheBotLab highlight card (strongest differentiator)
- Social proof bar: GitHub repos / stars / years experience / projects shipped
- Research teaser (1 paper card)
- Final CTA strip: *"Available for freelance work"* + contact button

---

### `/about` — About + Skills + Experience

- **Hero:** Photo + 3–4 sentence human bio (not resume language)
- **Skills grid:** Organized by category (ML/AI, MLOps, Frameworks, Cloud, Tools)
- **Experience timeline:** Chronological, each role has tech stack tags
- **Values/Working style:** Short paragraph — what it's like to work with you
- **Resume download button** (PDF)

---

### `/projects` — Projects as Case Studies

*Inspired by Brittany Chiang's metrics-first approach + Matt Farley's case study framing*

- Each project card: **Problem → Approach → Result → Tech stack → Links**
- Add measurable outcomes: accuracy %, latency, dataset size, model performance
- Separate tabs or filters: `ML/AI` | `MLOps` | `Full-Stack` | `Open Source`
- Live GitHub stats (stars, forks) pulled via existing `github.ts` service
- Featured 4 at top, "View All" expands the rest

---

### `/services` — Services (Most Important New Page)

*Matt Farley model — the single biggest conversion driver*

Four service pillars:

| Service | Target Client |
|---|---|
| ML Model Development & Deployment | Startups needing first ML system |
| RAG / LLM Application Development | Companies wanting AI on their data |
| MLOps Pipeline Setup | Teams with models not in production |
| AI Agent Development | Businesses wanting automation |

Each service block:
- Pain point headline (client's language, not yours)
- What's included (3–5 bullet deliverables)
- Rough timeline
- `Let's Talk` CTA linking to `/contact?service=X`

Bottom: FAQ strip (budget, timeline, process) + testimonials if available

---

### `/startup` — TheBotLab Deep-Dive

*Strongest differentiator — no other ML freelancer has shipped a SaaS*

- Logo + founding story (2–3 paragraphs)
- Live product link prominently above the fold
- Screenshots / demo video / architecture diagram
- 6 capability cards (already in data.ts)
- Tech stack used to build it
- "What this means for you" — frame it as proof of production AI capability
- CTA: *"Want something similar built for your business?"*

---

### `/research` — Research + Writing

*Sara Soueidan model — authority through publishing*

- OpenDeepSearch paper featured at top (abstract + link)
- Architecture diagram if available
- Link to `ods_middleware.md` content as a readable article
- Stub for future articles / LinkedIn posts
- Newsletter signup (optional — future growth lever)

---

### `/contact` — Lead Capture

*Matt Farley's `/project-planner` model — structured intake reduces friction*

- Headline: *"Let's Build Something"* (not "Contact Me")
- Smart form fields:
  - Name, Email
  - Service type (dropdown matching `/services`)
  - Project description (textarea)
  - Budget range (optional, helps qualify leads)
  - Timeline
- **Calendly embed** for direct booking
- Direct links: Email, LinkedIn, GitHub, WhatsApp/Telegram
- *"Currently available for freelance"* badge with green dot

---

### Navbar

| Links | Notes |
|---|---|
| Logo (left) | Links to `/` |
| Work / Projects | `/projects` |
| Services | `/services` — most important for conversion |
| About | `/about` |
| Startup | `/startup` |
| Hire Me (button, right) | `/contact` — highlighted, not a plain link |

---

## Social Proof Strategy

| Signal | Source | Where to Show |
|---|---|---|
| GitHub repos count | GitHub API | Hero stat bar |
| Project metrics | Actual results | Each project card |
| TheBotLab live status | Vercel deployment | `/startup` page |
| Research paper | OpenDeepSearch | `/research` + hero |
| Years of experience | data.ts | Hero + About |
| Testimonials | 1–2 from peers or early users | `/services` bottom |

---

## SEO Plan

| Page | Meta Title |
|---|---|
| `/` | Samiullah — ML Engineer for Hire \| AI & LLM Development |
| `/services` | ML & AI Development Services \| Samiullah |
| `/projects` | ML Projects & Case Studies \| Samiullah |
| `/startup` | TheBotLab — AI Agent Platform \| Samiullah |

- Add JSON-LD `Person` schema on homepage
- Target keywords: *hire ML engineer Pakistan*, *RAG developer freelance*, *LangChain developer*, *AI agent development*

---

## Build Order (Priority Sequence)

| # | Task | Why First |
|---|---|---|
| 1 | Set up multi-page routing + shared layout | Foundation |
| 2 | Build `/services` page | Highest commercial impact |
| 3 | Redesign `/` as landing page with teasers | First impression + conversion |
| 4 | Migrate + upgrade `/projects` as case studies | Proof of work |
| 5 | Build `/startup` TheBotLab page | Strongest differentiator |
| 6 | Build `/about` and `/contact` | Supporting pages |
| 7 | Build `/research` | Authority signal |
| 8 | SEO + metadata on all pages | Discoverability |
| 9 | Deploy on custom domain | Go to market |
