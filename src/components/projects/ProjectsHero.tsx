export function ProjectsHero() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          Projects
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
          Work That Ships to Production
        </h1>

        <p className="text-lg mt-4 max-w-2xl text-muted">
          14 curated projects — not 135 repo links. Each one chosen because it proves something real.
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-0 mt-10 w-fit rounded-2xl overflow-hidden bg-surface border border-white/[0.08]">
          <div className="px-8 py-5 text-center">
            <div className="text-3xl font-bold text-accent">14</div>
            <div className="text-xs mt-1 uppercase tracking-widest text-muted">Projects</div>
          </div>

          <div className="self-stretch w-px bg-white/[0.08]" aria-hidden="true" />

          <div className="px-8 py-5 text-center">
            <div className="text-3xl font-bold text-accent">4</div>
            <div className="text-xs mt-1 uppercase tracking-widest text-muted">Categories</div>
          </div>

          <div className="self-stretch w-px bg-white/[0.08]" aria-hidden="true" />

          <div className="px-8 py-5 text-center">
            <div className="text-3xl font-bold text-accent">135+</div>
            <div className="text-xs mt-1 uppercase tracking-widest text-muted">Total Repos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
