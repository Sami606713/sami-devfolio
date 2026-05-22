export function ResearchAbstract() {
  const stats = [
    { metric: "92.6%", label: "Retrieval Accuracy" },
    { metric: "Multi-Model", label: "Architecture" },
    { metric: "LangGraph", label: "Orchestration" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Abstract
        </h2>

        <div className="bg-surface border border-white/[0.08] border-l-4 border-l-accent rounded-2xl p-8">
          <p className="text-base leading-relaxed text-muted">
            Existing search systems rely on single-model pipelines — one LLM
            handles retrieval, reasoning, and response generation simultaneously.
            This creates bottlenecks: models optimized for retrieval perform
            poorly at reasoning, and vice versa. This research explores a
            multi-model architecture where specialized models handle distinct
            stages of the search pipeline — a retrieval model, a reasoning
            model, and a synthesis model — orchestrated via LangGraph. The
            result is a modular, swappable pipeline that outperforms
            single-model baselines on complex multi-hop queries, achieving 92.6%
            retrieval accuracy on benchmark datasets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface border border-white/[0.08] rounded-2xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-accent">{stat.metric}</p>
              <p className="text-sm mt-1 text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
