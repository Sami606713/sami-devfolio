interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

const experienceData: ExperienceEntry[] = [
  {
    role: "AI/ML Engineer",
    company: "Revnix",
    period: "2025 — Present",
    description:
      "Building WREXT — a full blog automation platform with human-in-the-loop review. Automated topic discovery, relevance scoring, LLM-generated outlines with approval workflows, and final SEO-optimized blog generation. LangGraph-powered backend with Streamlit dashboard.",
    tech: ["LangGraph", "OpenAI GPT", "Python", "PostgreSQL", "Redis", "Docker", "Streamlit"],
  },
  {
    role: "AI Engineer",
    company: "Emulxion.ai (Remote)",
    period: "Jan 2025 — Jan 2026",
    description:
      "Built an acne detection & segmentation system using YOLO achieving 90%+ accuracy, with React frontend and FastAPI backend. Also engineered an advanced production RAG system with multi-query expansion, query decomposition, RAG fusion, and intelligent re-ranking for real-time query processing.",
    tech: ["YOLO", "Python", "FastAPI", "React", "Docker", "LangChain", "RAG", "PyTorch"],
  },
  {
    role: "Founder & Product Engineer",
    company: "TheBotLab / ConnectXeo",
    period: "May 2025 — Present",
    description:
      "Built and shipped TheBotLab — a full-stack AI chatbot platform for businesses to build, test, and deploy AI agents. RBAC system, multi-tenant architecture, LLM tool integrations, and live sandbox testing. Evolving into ConnectXeo with Shopify-native actions.",
    tech: ["FastAPI", "SQLAlchemy", "LangGraph", "Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    role: "BS Computer Science",
    company: "University of Haripur",
    period: "2022 — June 15, 2026 (Expected)",
    description:
      "Relevant coursework: Machine Learning, Data Structures, Algorithms, Software Engineering.",
    tech: ["Machine Learning", "Data Structures", "Algorithms", "Software Engineering"],
  },
];

export function ExperienceTimeline() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[5px] top-2 bottom-2 w-[2px] hidden md:block bg-accent/10"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {experienceData.map((entry, index) => (
              <div key={index} className="flex gap-8 items-start">
                {/* Dot */}
                <div className="hidden md:flex flex-shrink-0 mt-1.5">
                  <div
                    className="w-3 h-3 rounded-full bg-accent ring-2 ring-surface ring-offset-2 ring-offset-surface"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-xs rounded-full px-3 py-1 font-medium mb-3 bg-accent/10 text-accent">
                    {entry.period}
                  </span>

                  <h3 className="font-bold text-lg leading-snug text-foreground">
                    {entry.role}
                  </h3>
                  <p className="text-base mt-0.5 text-accent">{entry.company}</p>
                  <p className="text-sm mt-2 leading-relaxed text-muted">
                    {entry.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {entry.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded border border-white/[0.08] bg-surface-2 text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
