export function ContactHero() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-accent">
          Contact
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
          Let&apos;s Build Something.
        </h1>

        <p className="text-lg mt-4 max-w-2xl leading-relaxed text-muted">
          Tell me what you&apos;re building. I&apos;ll tell you exactly how I
          can help — and give you a fixed quote, not an hourly estimate.
        </p>

        {/* Availability badge */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-surface">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm font-medium text-foreground">
            Currently available for new projects
          </span>
        </div>
      </div>
    </section>
  );
}
