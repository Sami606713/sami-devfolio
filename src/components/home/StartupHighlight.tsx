import Link from "next/link";

const FEATURE_PILLS = ["LangGraph Runtime", "Shopify Native", "WhatsApp + Telegram + Slack"];

const SCOREBOARD = [
  { value: "699", label: "Chat apps in Shopify" },
  { value: "4", label: "Can process a refund" },
  { value: "All 4", label: "ConnectXeo does + more" },
];

export function StartupHighlight() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="bg-surface-2 border border-white/[0.08] border-l-4 border-l-accent rounded-2xl p-8 flex flex-col lg:flex-row gap-8">
        {/* Left */}
        <div className="flex-1">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest block">
            Founder &amp; Builder
          </span>

          <h2 className="text-3xl font-bold text-foreground mt-2">
            ConnectXeo
          </h2>

          <p className="text-muted mt-3 text-lg max-w-lg leading-relaxed">
            The only no-code AI agent for Shopify that doesn&apos;t just talk — it runs your store.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {FEATURE_PILLS.map((pill) => (
              <span
                key={pill}
                className="bg-accent/10 text-accent text-sm px-4 py-2 rounded-full border border-accent/20"
              >
                {pill}
              </span>
            ))}
          </div>

          <Link
            href="/startup"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-xl hover:bg-accent/10 transition-all"
          >
            View Project →
          </Link>
        </div>

        {/* Right stats card */}
        <div className="bg-background border border-white/[0.08] rounded-xl p-6 lg:w-72">
          <p className="text-xs font-bold uppercase tracking-widest text-muted mb-5">
            Market Reality
          </p>
          <div className="space-y-4">
            {SCOREBOARD.map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-2.5 ${
                  i < SCOREBOARD.length - 1 ? "border-b border-white/[0.08]" : ""
                }`}
              >
                <span className="text-xs text-muted">{item.label}</span>
                <span
                  className={`text-sm font-bold ml-4 text-right ${
                    i === SCOREBOARD.length - 1 ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
