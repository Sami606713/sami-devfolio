import Link from "next/link";

const articles = [
  {
    tag: "LLM / RAG",
    title: "Why Single-Model RAG Fails at Scale",
    preview:
      "A deep-dive into retrieval bottlenecks, context window abuse, and why separating retrieval from generation changes everything.",
  },
  {
    tag: "MLOps",
    title: "The MLOps Stack That Actually Ships",
    preview:
      "DVC, MLflow, FastAPI, Docker — the minimal stack that takes a model from notebook to production without the enterprise overhead.",
  },
];

export function WritingStub() {
  return (
    <section className="py-16 pb-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Writing &amp; Articles
        </h2>
        <p className="text-base mb-10 text-muted">
          Technical deep-dives coming soon. Follow on LinkedIn for updates.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 opacity-70">
          {articles.map((article) => (
            <div
              key={article.title}
              className="bg-surface border border-white/[0.08] rounded-2xl p-6"
            >
              <span className="text-xs font-semibold px-2 py-1 rounded-md inline-block mb-3 bg-accent/10 text-accent">
                {article.tag}
              </span>
              <h3 className="text-base font-semibold text-white mb-2">
                {article.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4 text-muted">
                {article.preview}
              </p>
              <span className="text-xs px-3 py-1 rounded-full font-medium bg-surface-2 text-muted border border-white/[0.08]">
                Coming Soon
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="https://www.linkedin.com/in/sami-ullah-6326b9265/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:opacity-70 transition-opacity"
          >
            Follow on LinkedIn →
          </Link>
        </div>
      </div>
    </section>
  );
}
