interface Reason {
  icon: string;
  iconLabel: string;
  title: string;
  text: string;
}

const REASONS: Reason[] = [
  {
    icon: "🚀",
    iconLabel: "Rocket",
    title: "Ships to Production",
    text: "I've shipped ConnectXeo — a full SaaS product — to production. I know the difference between a notebook experiment and a system that runs at 2am.",
  },
  {
    icon: "🔗",
    iconLabel: "Link",
    title: "End-to-End Ownership",
    text: "I handle the full stack — data, model, API, deployment, monitoring. You get one engineer who owns the entire pipeline.",
  },
  {
    icon: "⚡",
    iconLabel: "Lightning bolt",
    title: "Fast & Transparent",
    text: "Weekly progress updates. Working demos at every milestone. No surprises, no excuses.",
  },
];

export function WhyMe() {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Why Work With Me
          </h2>
          <p className="text-lg text-muted">
            Not a freelancer who disappears after delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REASONS.map((reason) => (
            <article
              key={reason.title}
              className="bg-surface-2 border border-white/[0.08] rounded-2xl p-8"
            >
              <span
                className="block text-4xl mb-4 leading-none"
                role="img"
                aria-label={reason.iconLabel}
              >
                {reason.icon}
              </span>
              <h3 className="text-lg font-bold mb-3 text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
