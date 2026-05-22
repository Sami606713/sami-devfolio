interface Capability {
  icon: string;
  title: string;
  description: string;
}

const CAPABILITIES: Capability[] = [
  {
    icon: "🤖",
    title: "Build Your Agent",
    description:
      "Set your AI's name, personality, tone, and instructions. No code. Takes 5 minutes.",
  },
  {
    icon: "🧠",
    title: "Give It Knowledge",
    description:
      "Upload FAQs, policies, and docs. The agent searches them automatically when customers ask.",
  },
  {
    icon: "🛒",
    title: "Connect Your Shopify Store",
    description:
      "The agent can look up orders, process refunds, update inventory, manage products, and apply discounts — on its own.",
  },
  {
    icon: "🚀",
    title: "Deploy Everywhere",
    description:
      "One agent. Four channels: Website widget, WhatsApp, Telegram, and Slack — all from a single setup.",
  },
  {
    icon: "🔬",
    title: "Test Before Going Live",
    description:
      "Chat with your agent in the Playground and see exactly what tools it uses and why before any customer sees it.",
  },
  {
    icon: "👥",
    title: "Team Access",
    description:
      "Invite your team with different roles — Owner, Admin, Member, Viewer. Everyone works in the same workspace.",
  },
];

export function Capabilities() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          What ConnectXeo Does
        </h2>
        <p className="text-base mb-10 text-muted">
          Six capabilities that work together — none of our competitors offer all six at once.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="bg-surface border border-white/[0.08] rounded-2xl p-6"
            >
              <span className="text-3xl" role="img" aria-label={cap.title}>
                {cap.icon}
              </span>
              <h3 className="text-white font-semibold mt-3 mb-2">{cap.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
