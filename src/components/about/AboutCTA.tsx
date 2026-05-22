import Link from "next/link";

export function AboutCTA() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Let&apos;s build something together.
        </h2>
        <p className="mt-4 text-base text-muted">
          Open to freelance projects, consulting, and full-time remote roles.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-base bg-accent text-background hover:bg-accent/90 transition-all"
          >
            Get In Touch →
          </Link>
        </div>
      </div>
    </section>
  );
}
