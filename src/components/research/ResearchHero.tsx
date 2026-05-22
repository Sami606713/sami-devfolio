import Link from "next/link";

export function ResearchHero() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-accent">
          Research
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Multi-Model Open Deep Search
        </h1>

        <p className="text-lg mt-4 max-w-2xl leading-relaxed text-muted">
          A research implementation exploring multi-model LLM orchestration for
          advanced information retrieval — achieving 92.6% retrieval accuracy.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          {["📅 2025", "🔬 LLM Research", "⚡ 92.6% Accuracy"].map((pill) => (
            <span
              key={pill}
              className="text-sm px-4 py-2 rounded-lg bg-surface border border-white/[0.08] text-foreground"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="https://github.com/Sami606713/OpenDeepSearch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-xl font-medium text-sm border border-accent text-accent hover:bg-accent/10 transition-all"
          >
            View on GitHub →
          </Link>
        </div>
      </div>
    </section>
  );
}
