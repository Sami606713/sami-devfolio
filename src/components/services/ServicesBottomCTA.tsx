import Link from "next/link";

export function ServicesBottomCTA() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Have a project in mind?
        </h2>
        <p className="text-lg leading-relaxed mb-10 max-w-xl mx-auto text-muted">
          Tell me what you&apos;re building and I&apos;ll tell you exactly how I can help.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base bg-accent text-background hover:bg-accent/90 transition-all"
        >
          Start a Conversation →
        </Link>
      </div>
    </section>
  );
}
