const CATEGORIES = [
  { label: "ML / Data Science", count: 33 },
  { label: "LLM & AI Agents", count: 22 },
  { label: "MLOps Pipelines", count: 6 },
  { label: "Full-Stack Apps", count: 25 },
];

export function TrustBar() {
  return (
    <section className="bg-surface border-y border-white/[0.08] py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-wrap justify-center md:justify-between gap-6">
        {CATEGORIES.map((cat, i) => (
          <div key={cat.label} className="flex items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-sm font-semibold text-foreground">
                {cat.label}
              </span>
              <span className="text-xs text-muted mt-1">
                · {cat.count} projects
              </span>
            </div>
            {i < CATEGORIES.length - 1 && (
              <div
                className="hidden md:block w-px h-6 bg-white/[0.08]"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
