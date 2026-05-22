import Link from "next/link";

export function StartupCTA() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <p className="text-sm font-bold uppercase tracking-widest mb-4 text-accent">
          Want Something Similar?
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          I can build your AI product.
        </h2>

        <p className="text-base max-w-xl mx-auto mb-8 leading-relaxed text-muted">
          Whether it&apos;s a SaaS platform, an AI agent, or an automation system — I&apos;ve shipped one to production. I can ship yours too.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm bg-accent text-background hover:bg-accent/90 transition-all"
          >
            Let&apos;s Build Together →
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm border border-white/[0.08] text-foreground hover:bg-white/5 transition-colors"
          >
            See My Services
          </Link>
        </div>
      </div>
    </section>
  );
}
