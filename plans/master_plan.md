# Master Plan — Samiullah × ConnectXeo
*Two separate sites. One person behind both. May 2026.*

---

## The Big Picture

You have two distinct things to build:

| Site | Purpose | Audience |
|---|---|---|
| **samiullah.dev** (personal portfolio) | Get hired as a freelance ML/AI engineer | Startups, companies, recruiters |
| **connectxeo.com** (product site) | Sell ConnectXeo SaaS to Shopify merchants | Shopify store owners, agencies |

These are two separate sites with two separate goals. They cross-link to each other but are not the same site. ConnectXeo's site is the bigger commercial opportunity right now.

---

## SITE 1 — Personal Portfolio (samiullah.dev)

### Goal
Convert visitors into freelance clients or consulting leads. Position you as the ML engineer who already shipped a real SaaS product.

### What You Have Now (Current Codebase)
- Single page — everything stacked vertically
- Next.js + Tailwind + TypeScript
- GitHub API service already wired
- 11 components: Hero, About, Skills, Projects, Startup, Research, Learning, Experience, Contact, Navbar, Footer

### What Needs to Change
Convert from single-page to multi-page. Move each section into its own route.

### New Page Structure

```
/                   → Landing page (redesigned — outcome-led, CTAs to every page)
/about              → Bio + Skills + Experience
/projects           → All 135 repos as categorized case studies
/services           → NEW — what you offer, pricing signals, hire me form
/startup            → ConnectXeo deep-dive (your strongest proof point)
/research           → OpenDeepSearch + Multi-Model-Open-Deep-Search
/contact            → Smart intake form + Calendly + WhatsApp
```

### Home Page (/) — What It Shows
- **Hero:** "I build AI systems that go to production" + Hire Me CTA
- **Stats bar:** 135 repos · 2+ years · 1 SaaS shipped · 1 research paper
- **3 featured projects** (teaser cards → link to /projects)
- **Services strip** (4 icons + 1-line each → link to /services)
- **ConnectXeo highlight card** → link to /startup
- **Research teaser** → link to /research
- **Final CTA:** "Currently available for freelance" + green dot

### Services Page (/services) — Most Important New Page
Four offerings:
1. ML Model Development & Deployment
2. RAG / LLM Application Development
3. MLOps Pipeline Setup
4. AI Agent Development (anchor: ConnectXeo as proof)

Each: pain point → deliverables → timeline → "Let's Talk" button

### Projects Page (/projects) — Upgraded from GitHub Links
Categories (from 135 repos):
- ML / Data Science (33 repos) — lead with CreditRisk, MLOPS-flight-price
- LLM / AI Agents (22 repos) — lead with ConnectXeo, OpenDeepSearch
- MLOps (6 repos) — lead with MLOPS-flight-price (5★)
- Full-Stack (25 repos) — supporting evidence
Each card: Problem → Approach → Result → Tech → Links

### Navbar
```
[S]   Projects   Services   About   Startup   Research   [Hire Me →]
```

---

## SITE 2 — ConnectXeo Product Site (connectxeo.com)

### Goal
Convert Shopify merchants into free signups. Primary channel: Shopify App Store. Secondary: SEO on competitor comparison keywords.

### Core Message (Used Everywhere)
> "699 chat apps answer questions. ConnectXeo runs your store."

### Page Structure

```
/                       → Main landing (conversion engine)
/features               → 6 capabilities deep-dive
/pricing                → Tier table + savings calculator
/compare/gorgias        → SEO: "Gorgias alternative"
/compare/tidio          → SEO: "Tidio alternative"
/compare/intercom       → SEO: "Intercom alternative Shopify"
/customers              → Merchants / International / Agencies
/blog                   → SEO engine
```

### Home Page (/) — Section by Section

**1. Hero**
- Headline: *The only AI agent for Shopify that doesn't just talk — it runs your store.*
- Sub: Process refunds. Update inventory. Deploy on WhatsApp, Telegram, Slack & Web.
- CTA: `Start Free →` + `See it in action`
- Visual: Product demo video or animated screenshot

**2. The Problem**
- Big number: `699 chat apps. Only 4 can process a refund.`
- 4 stat cards (699 / 4 / 0 / 3.6×)
- Real Gorgias/Tidio customer quote

**3. Six Capabilities**
- Grid: Build Agent / Knowledge / Shopify Connect / Deploy / Playground / Team
- Link to /features

**4. Comparison Table**
- ConnectXeo vs Gorgias vs Tidio vs Intercom vs Zendesk
- 8 rows, ConnectXeo column highlighted green

**5. Who It's For**
- 3 segments: Shopify Merchants / International Brands (WhatsApp angle) / Agencies

**6. Pricing Teaser**
- Free / $29 / $79 / $149 — Growth marked "Most Popular"
- Link to /pricing

**7. Social Proof**
- Testimonials (add as they come)
- Shopify App Store badge (after listing)

**8. Final CTA**
- "Live in 48 hours. No developer needed."
- `Start Free →` — no credit card required

### Pricing Page (/pricing)
- Full feature comparison per tier
- Annual/monthly toggle
- FAQ: billing / overages / cancellation / enterprise
- Savings calculator: "How much are you spending on Gorgias?" → shows savings

### Compare Pages (/compare/*)
- Each page: feature table + pricing diff + real merchant quotes from Trustpilot
- `/compare/gorgias` — lead with 3.6× Black Friday spike quote
- `/compare/tidio` — lead with $59 → $749 billing cliff
- These pages capture the highest commercial intent traffic

### Navbar (ConnectXeo site)
```
[ConnectXeo]   Features   Pricing   Compare ▾   Customers   Blog   [Start Free →]
```

---

## Visual Identity

### Personal Portfolio
| | |
|---|---|
| Theme | Dark navy (`#0A0F1E`) |
| Accent | Electric cyan (`#00D4FF`) |
| Signature | Animated typing terminal in hero |
| Typography | Bold display for headlines, Inter for body |
| Feel | Technical, confident, personal |

### ConnectXeo Site
| | |
|---|---|
| Theme | Dark with gradient sections |
| Accent | Violet/purple (`#7C3AED`) — distinct from portfolio |
| Signature | Product demo animation |
| Typography | Bold SaaS-style headlines |
| Feel | Business, urgent, merchant-friendly |

---

## What Links What

- Personal portfolio `/startup` page → links to connectxeo.com
- ConnectXeo site footer → "Built by Samiullah" → links to personal portfolio
- Both share the same GitHub and LinkedIn social links

---

## Build Order (Both Sites Combined)

### Phase 1 — ConnectXeo Site (Commercial Priority)
| # | Task |
|---|---|
| 1 | Multi-page routing setup in current Next.js repo |
| 2 | Home page `/` with hero + problem + features + comparison table + CTA |
| 3 | `/pricing` page |
| 4 | `/compare/gorgias` + `/compare/tidio` (SEO + conversion) |
| 5 | `/features` deep-dive |
| 6 | `/customers` segments |
| 7 | SEO metadata + JSON-LD on all pages |
| 8 | Shopify App Store listing assets (screenshots, description) |

### Phase 2 — Personal Portfolio
| # | Task |
|---|---|
| 9 | Multi-page routing — move Navbar + Footer to layout.tsx |
| 10 | Redesign `/` as landing page with teasers |
| 11 | Build `/services` page (highest commercial impact) |
| 12 | Upgrade `/projects` — categorized case studies from 135 repos |
| 13 | Build `/startup` (ConnectXeo showcase) |
| 14 | Build `/about`, `/research`, `/contact` |
| 15 | SEO metadata on all pages |
| 16 | Deploy on custom domain |

### Phase 3 — Growth (Both Sites)
| # | Task |
|---|---|
| 17 | Blog: first 3 SEO articles (Gorgias alt, WhatsApp AI, RAG for Shopify) |
| 18 | Analytics — PostHog or Plausible on both sites |
| 19 | Shopify App Store submission |
| 20 | LinkedIn launch post for personal portfolio |

---

## Key Metrics to Watch

### ConnectXeo
- Free → Paid conversion: target 5–10% within 30 days
- Time to first agent: target under 5 minutes
- Monthly churn: below 3%
- Shopify App installs → paid conversion rate

### Personal Portfolio
- Contact form submissions per month
- Resume downloads
- `/services` page visits → contact conversions
- LinkedIn profile visits from portfolio

---

## Files Reference
- `plans/portfolio_plan.md` — Personal portfolio detailed plan
- `plans/connectxeo_portfolio_plan.md` — ConnectXeo site detailed plan
- `plans/github_repos.json` — All 135 repos (98 public + 37 private) structured data
- `plans/github_repos.md` — Repos categorized into 6 groups
