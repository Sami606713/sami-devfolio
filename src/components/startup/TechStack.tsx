const FRONTEND_RUNTIME = [
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "React",
  "Vercel",
];

const AI_BACKEND = [
  "LangGraph",
  "LangChain",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "Pinecone",
  "Docker",
  "Shopify API",
  "WhatsApp Business API",
];

function PillRow({ pills }: { pills: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {pills.map((pill) => (
        <span
          key={pill}
          className="px-4 py-2 rounded-lg text-sm border border-white/[0.08] bg-surface text-foreground"
        >
          {pill}
        </span>
      ))}
    </div>
  );
}

export function TechStack() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Built With
        </h2>
        <p className="text-base mb-10 text-muted">
          Production-grade stack — the same technologies I bring to client projects.
        </p>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-muted">
              Frontend &amp; Runtime
            </p>
            <PillRow pills={FRONTEND_RUNTIME} />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-muted">
              AI &amp; Backend
            </p>
            <PillRow pills={AI_BACKEND} />
          </div>
        </div>
      </div>
    </section>
  );
}
