const techRows = [
  {
    label: "Research & Orchestration",
    pills: ["LangGraph", "LangChain", "Python", "LLM Evaluation"],
  },
  {
    label: "Retrieval & Storage",
    pills: ["Pinecone", "pgvector", "Hybrid Search", "Document Parsing"],
  },
  {
    label: "Models",
    pills: ["OpenAI GPT-4", "Claude", "Sentence Transformers"],
  },
];

export function ResearchTechStack() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Technologies Used
        </h2>

        <div className="flex flex-col gap-8">
          {techRows.map((row) => (
            <div key={row.label}>
              <p className="text-xs font-black uppercase tracking-widest mb-3 text-muted">
                {row.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {row.pills.map((pill) => (
                  <span
                    key={pill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-surface border border-white/[0.08] text-foreground"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
