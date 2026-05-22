# ConnectXeo — Business Portfolio Plan
*Product-led SaaS landing page. Goal: convert Shopify merchants into free trials, then paid.*
*May 2026 — Based on business model doc.*

---

## Core Positioning (Single Sentence — Used Everywhere)

> **"The only AI agent for Shopify that doesn't just talk — it runs your store."**

Secondary framing for ads/headlines:
> "699 chat apps answer questions. ConnectXeo runs your store."

---

## Site Architecture (Multi-Page)

```
/                       → Main landing page (conversion engine)
/features               → Deep-dive on all 6 capabilities
/pricing                → Pricing tiers + comparison table
/compare                → vs. Gorgias / Tidio / Intercom / Zendesk
/customers              → Use cases: Merchants / Agencies / SaaS startups
/blog                   → SEO engine (AI for Shopify, replace Gorgias, etc.)
/docs                   → Developer API docs (future)
/contact                → Sales inquiry + Enterprise form
```

---

## Page-by-Page Plan

---

### `/` — Main Landing Page (Conversion Engine)

**Section 1 — Hero (Above the fold)**
- Headline: `The only AI agent for Shopify that doesn't just talk — it runs your store.`
- Sub-headline: `Process refunds. Update inventory. Deploy on WhatsApp, Telegram, Slack & Web. No code. Flat pricing.`
- Two CTAs: `Start Free →` (primary) + `See it in action` (secondary — scrolls to demo/video)
- Visual: animated product screenshot or short demo video loop
- Trust bar below fold: `Used by Shopify merchants doing $500K–$10M/year`

**Section 2 — The Problem (Market Reality)**
- Headline: `699 chat apps. Only 4 can process a refund.`
- 4 stat cards:
  - 699 — Chat apps in Shopify App Store
  - 4 — Can process a refund via AI
  - 0 — Offer WhatsApp + Telegram + Slack + AI actions
  - 3.6× — Gorgias billing spike at Black Friday
- Real customer quote: *"I budgeted $360/month but got a $1,098 bill in December"*

**Section 3 — What ConnectXeo Does (6 Capabilities)**
- Grid of 6 feature cards (icon + title + 1-line description)
- Build Agent / Give It Knowledge / Connect Shopify / Deploy Everywhere / Test It / Team Access
- Each card links to `/features`

**Section 4 — Competition Comparison Table**
- Inline comparison: ConnectXeo vs. Tidio vs. Gorgias vs. Intercom Fin vs. Zendesk
- 8 rows: FAQ answers / Refunds / Inventory / Products / WhatsApp / Telegram / No-code / Flat pricing
- ConnectXeo column highlighted

**Section 5 — Who It's For (3 Segments)**
- 3 cards: Shopify Merchants / International Brands / Agencies
- Each: target description + key pain + how ConnectXeo solves it + CTA

**Section 6 — Pricing Teaser**
- 4 plan cards: Free / Starter $29 / Growth $79 / Pro $149
- Growth marked as "Most Popular"
- Link to full `/pricing` page

**Section 7 — Social Proof**
- Customer testimonials (add as they come in)
- Shopify App Store rating badge (once listed)
- Logo wall of merchants using it

**Section 8 — Final CTA Strip**
- Headline: `Live in 48 hours. No developer needed.`
- `Start Free →` button
- Sub-text: `No credit card required. Cancel anytime.`

---

### `/features` — Deep-Dive on 6 Capabilities

One full section per capability:
- Build Your Agent
- Give It Knowledge
- Connect Shopify (most important — leads with the 4/699 stat)
- Deploy Everywhere (WhatsApp / Telegram / Slack / Web)
- Test Before Going Live (Playground)
- Team Access (RBAC)

Each section: headline + 2–3 sentences + screenshot/mockup + key differentiator callout box

---

### `/pricing` — Pricing Page

- Full plan comparison table (all features per tier)
- FAQ section: billing cycle / overages / cancellation / enterprise SLA
- `Calculate your savings vs. Gorgias` interactive widget (bonus: high conversion)
- Annual vs. monthly toggle (10–20% annual discount)
- Enterprise row with `Contact Sales` CTA

---

### `/compare` — Comparison Pages (SEO-Heavy)

Dedicated sub-pages:
- `/compare/gorgias` — Target keyword: *Gorgias alternative*
- `/compare/tidio` — Target keyword: *Tidio alternative*
- `/compare/intercom` — Target keyword: *Intercom alternative for Shopify*
- `/compare/zendesk` — Target keyword: *Zendesk alternative Shopify*

Each: detailed feature table + pricing comparison + merchant quotes + CTA

---

### `/customers` — Use Cases by Segment

Three sections:
1. **Shopify Merchants ($500K–$10M)** — refunds, inventory, WhatsApp angle
2. **International Brands (MENA, SEA, LatAm)** — WhatsApp is customer service in these markets
3. **Agencies** — multi-client workspace, white-label, volume pricing

---

### `/blog` — SEO Engine

Target keyword clusters:
- `AI for Shopify` / `Shopify AI agent`
- `replace Gorgias` / `Gorgias alternatives 2026`
- `WhatsApp AI agent Shopify`
- `no-code chatbot Shopify`
- `Shopify customer service automation`

Blog is already built into the platform per the business model doc — activate it.

---

## Visual Identity

| Decision | Choice | Reason |
|---|---|---|
| Theme | Dark with electric accent | SaaS standard, signals technical product |
| Primary color | Deep navy `#0A0F1E` | Professional, trustworthy |
| Accent | Electric cyan `#00D4FF` or violet `#7C3AED` | One pop color only |
| Typography | Bold display font for headlines + clean sans for body | SaaS landing page standard |
| Imagery | Real product screenshots + animated demo | Nothing sells SaaS like the actual UI |
| Tone | Direct, merchant-friendly, no corporate jargon | Shopify audience = practical business owners |

---

## Navbar

```
[ConnectXeo Logo]   Features   Pricing   Compare ▾   Customers   Blog   [Start Free →]
```

- `Start Free →` is always visible, right-aligned, accent color
- `Compare` is a dropdown linking to all comparison pages
- Sticky on scroll

---

## Conversion Strategy

### Primary CTA: `Start Free →`
- Appears in: hero, features section, pricing, final strip, navbar
- Goes to: signup page (email / Google / GitHub — 60 seconds)

### Secondary CTA: `Book a Demo`
- Appears in: Enterprise section, `/contact`, comparison pages
- Goes to: Calendly embed or contact form

### Micro-CTA: `See how it compares`
- Appears on: problem section, under competitor mentions
- Goes to: `/compare/[competitor]`

---

## Key Messaging by Audience

| Audience | Pain | ConnectXeo Headline |
|---|---|---|
| Gorgias user | Surprise billing, 3.6× spikes | "Flat pricing. No Black Friday shock." |
| Tidio user | $59 → $749 billing cliff | "No plan surprises. Ever." |
| International brand | No WhatsApp AI that acts | "WhatsApp AI that processes your refunds." |
| Agency | Managing 5+ clients manually | "One dashboard. All your clients' agents." |
| Tech-averse merchant | Too complex to set up | "First agent live in 5 minutes. No code." |

---

## SEO Meta Plan

| Page | Title Tag | Target Keyword |
|---|---|---|
| `/` | ConnectXeo — AI Agent for Shopify That Runs Your Store | Shopify AI agent |
| `/compare/gorgias` | ConnectXeo vs Gorgias 2026 — No Billing Spikes | Gorgias alternative |
| `/compare/tidio` | ConnectXeo vs Tidio 2026 — No $749 Surprise Bills | Tidio alternative |
| `/pricing` | ConnectXeo Pricing — Flat Plans from $0/month | ConnectXeo pricing |
| `/features` | ConnectXeo Features — Shopify Refunds, Inventory, WhatsApp | Shopify AI features |

- Add JSON-LD `SoftwareApplication` schema on homepage
- Add `FAQPage` schema on pricing page
- Submit sitemap to Google Search Console on launch

---

## Shopify App Store Launch Plan (Primary Channel)

- Listing headline: `The only AI that runs your store — not just answers questions`
- App description leads with the 4/699 stat
- Screenshots: agent builder UI / Shopify action demo / WhatsApp deployment
- Review strategy: prompt free users who deploy 2+ agents
- Timeline: 2–4 weeks build + 7–14 days Shopify review

---

## Build Order

| # | Task | Priority |
|---|---|---|
| 1 | Landing page `/` with hero + problem + features + pricing teaser + CTA | Critical |
| 2 | `/pricing` full page with comparison table | Critical |
| 3 | `/compare/gorgias` and `/compare/tidio` | High — SEO + conversion |
| 4 | `/features` deep-dive page | High |
| 5 | `/customers` use case segments | Medium |
| 6 | `/blog` with first 3 SEO articles | Medium |
| 7 | `/compare/intercom` and `/compare/zendesk` | Medium |
| 8 | Shopify App Store listing assets | High (parallel) |
| 9 | SEO metadata + JSON-LD on all pages | Before launch |
| 10 | Analytics (Plausible/PostHog) + conversion tracking | Before launch |

---

## Key Metrics to Track (From Business Model Doc)

| Metric | Target | How to Track |
|---|---|---|
| Free → Paid conversion | 5–10% within 30 days | PostHog funnel |
| Time to first agent | Under 5 minutes | Event tracking on agent creation |
| Landing page → Signup | Industry avg: 2–5%, target 8%+ | Plausible goals |
| Shopify App installs | Track install-to-paid rate | Shopify Partner Dashboard |
| Monthly churn | Below 3% | Stripe MRR dashboard |
