const stages = [
  {
    number: "01",
    icon: "🔍",
    title: "Retrieval Model",
    description:
      "Specialized for semantic search across document stores. Uses vector embeddings and hybrid search (dense + sparse) to surface relevant chunks.",
    pills: ["Pinecone", "pgvector", "Hybrid Search"],
  },
  {
    number: "02",
    icon: "🧠",
    title: "Reasoning Model",
    description:
      "Analyzes retrieved context, resolves conflicts between sources, and performs multi-hop reasoning to build a coherent answer chain.",
    pills: ["LangGraph", "Chain-of-Thought", "LLM"],
  },
  {
    number: "03",
    icon: "✍️",
    title: "Synthesis Model",
    description:
      "Generates the final response — grounded strictly in the reasoning chain output. Hallucination rate drops significantly vs single-model baseline.",
    pills: ["OpenAI", "Grounded Generation"],
  },
];

export function ResearchArchitecture() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          System Architecture
        </h2>
        <p className="text-base mb-10 text-muted">
          Three specialized models, one orchestrated pipeline.
        </p>

        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {stages.map((stage, index) => (
            <div key={stage.number} className="flex flex-col md:flex-row items-stretch flex-1">
              <div className="bg-surface border border-white/[0.08] rounded-2xl p-6 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold px-2 py-1 rounded-md bg-accent/10 text-accent">
                    {stage.number}
                  </span>
                  <span className="text-xl">{stage.icon}</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 text-muted">
                  {stage.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {stage.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-xs px-2 py-1 rounded-md bg-surface-2 border border-white/[0.08] text-foreground"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {index < stages.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-3 text-xl font-bold flex-shrink-0 text-accent">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-surface-2 border border-white/[0.08] rounded-2xl p-6 mt-8">
          <p className="text-xs font-black uppercase tracking-widest mb-2 text-accent">
            Orchestration Layer
          </p>
          <h3 className="text-base font-semibold text-white mb-2">
            LangGraph State Machine
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            Each stage is a node in a LangGraph state graph. The pipeline routes
            dynamically — if retrieval confidence is low, it triggers a web
            search fallback. If reasoning detects conflicting sources, it
            re-queries with refined terms.
          </p>
        </div>
      </div>
    </section>
  );
}
