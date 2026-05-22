export function ServicesHero() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent">
          Services
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 max-w-3xl text-foreground">
          Specialized AI &amp; ML Engineering
        </h1>

        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mb-10 text-muted">
          I don&apos;t build demos. I build systems that survive production — with
          real data, real scale, and real results.
        </p>

        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-accent">✓</span>
            <span className="text-sm text-muted">Available for new projects</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-accent">✓</span>
            <span className="text-sm text-muted">Response within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
