interface StatCard {
  value: string;
  valueClass: string;
  label: string;
  context: string;
}

const STATS: StatCard[] = [
  {
    value: "699",
    valueClass: "text-accent",
    label: "Chat apps in Shopify App Store",
    context: "All of them answer questions",
  },
  {
    value: "4",
    valueClass: "text-orange-400",
    label: "Apps that can process a refund via AI",
    context: "We're one of four",
  },
  {
    value: "0",
    valueClass: "text-red-400",
    label: "Apps with WhatsApp + Telegram + Slack + AI actions",
    context: "Until ConnectXeo",
  },
  {
    value: "3.6×",
    valueClass: "text-violet-400",
    label: "Gorgias billing spike at Black Friday",
    context: "We charge flat pricing",
  },
];

export function MarketStats() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          The Market Opportunity
        </h2>
        <p className="text-base mb-10 text-muted">
          699 apps in the Shopify chat category. We&apos;re the only one that does all of this.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface border border-white/[0.08] rounded-2xl p-6 text-center"
            >
              <p className={`text-5xl font-bold leading-none mb-3 ${stat.valueClass}`}>
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-white mb-2 leading-snug">
                {stat.label}
              </p>
              <p className="text-xs text-muted">{stat.context}</p>
            </div>
          ))}
        </div>

        <div className="bg-surface-2 border-l-4 border-l-accent border border-white/[0.08] rounded-2xl p-6">
          <blockquote>
            <p className="text-base italic leading-relaxed mb-3 text-foreground">
              &ldquo;I budgeted $360/month but got a $1,098 bill in December because of ticket-volume spikes.&rdquo;
            </p>
            <footer className="text-sm font-medium text-muted">
              — Gorgias customer, Trustpilot
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
