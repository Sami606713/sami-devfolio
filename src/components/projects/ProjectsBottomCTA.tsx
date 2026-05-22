import Link from "next/link";

export function ProjectsBottomCTA() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <div className="w-16 h-px mx-auto mb-12 bg-white/[0.08]" aria-hidden="true" />

        <h2 className="text-2xl font-bold text-white">
          Don&apos;t see what you&apos;re looking for?
        </h2>

        <p className="mt-3 text-base text-muted">
          I&apos;ve built across many domains. Let&apos;s talk about your specific project.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-8 px-8 py-4 rounded-xl font-semibold text-base bg-accent text-background hover:bg-accent/90 transition-all"
        >
          Start a Conversation →
        </Link>
      </div>
    </section>
  );
}
