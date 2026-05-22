import Link from "next/link";

const FEATURE_PILLS = [
  "LangGraph Runtime",
  "Shopify Native",
  "WhatsApp · Telegram · Slack · Web",
];

export function StartupHero() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-sm font-bold uppercase tracking-widest mb-4 text-accent">
          Founder &amp; Builder
        </p>

        <h1 className="text-[64px] md:text-[72px] font-bold leading-none tracking-tight text-white mb-4">
          ConnectXeo
        </h1>

        <p className="text-xl mt-4 max-w-2xl text-muted">
          The only no-code AI agent for Shopify that doesn&apos;t just talk — it runs your store.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          {FEATURE_PILLS.map((pill) => (
            <span
              key={pill}
              className="px-4 py-2 rounded-full text-sm font-medium border bg-accent/10 text-accent border-accent/20"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://the-bot-lab-pearl.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm bg-accent text-background hover:bg-accent/90 transition-all"
          >
            Visit ConnectXeo →
          </a>
          <a
            href="https://github.com/Sami606713"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm border border-white/[0.08] text-foreground hover:bg-white/5 transition-colors"
          >
            View on GitHub
          </a>
        </div>

        <div className="flex items-center gap-2 mt-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span className="text-sm text-muted">Production Ready · Founded 2024</span>
        </div>
      </div>
    </section>
  );
}
