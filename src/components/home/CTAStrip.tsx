import Link from "next/link";

export function CTAStrip() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Ready to ship your AI project?
        </h2>
        <p className="text-muted text-lg mt-4 max-w-xl mx-auto">
          Available for freelance contracts, consulting, and full-time opportunities.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link
            href="/contact"
            className="px-8 py-4 bg-accent text-background font-semibold rounded-xl hover:bg-accent/90 transition-all"
          >
            Let&apos;s Talk →
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-accent text-accent rounded-xl hover:bg-accent/10 transition-all"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
