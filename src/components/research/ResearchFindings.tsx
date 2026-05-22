const findings = [
  {
    metric: "+12.3%",
    title: "Accuracy Improvement",
    description:
      "Multi-model pipeline outperforms single GPT-4 baseline on complex multi-hop queries requiring cross-document reasoning.",
  },
  {
    metric: "-67%",
    title: "Hallucination Reduction",
    description:
      "Grounded synthesis model reduces hallucination rate compared to direct single-model generation without retrieval separation.",
  },
  {
    metric: "3 Models",
    title: "Modular Swapability",
    description:
      "Any stage can be swapped independently — switch retrieval from Pinecone to pgvector without touching reasoning or synthesis.",
  },
  {
    metric: "+340ms",
    title: "Latency Trade-off",
    description:
      "Multi-model adds ~340ms average latency vs single-model. Acceptable for search use cases; not suitable for real-time chat.",
  },
];

export function ResearchFindings() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Key Findings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {findings.map((finding) => (
            <div
              key={finding.title}
              className="bg-surface border border-white/[0.08] rounded-2xl p-6"
            >
              <p className="text-3xl font-bold text-accent">{finding.metric}</p>
              <h3 className="text-sm font-semibold text-white mt-2 mb-1">
                {finding.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {finding.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
