import { skills } from "@/constants/data";

interface SkillCategory {
  category: string;
  items: string[];
  accent?: string;
}

const additionalCategories: SkillCategory[] = [
  {
    category: "LLM & Agents",
    items: ["LangChain", "LangGraph", "OpenAI API", "Anthropic API", "RAG Systems", "Vector Databases", "Prompt Engineering"],
  },
  {
    category: "Cloud & Deployment",
    items: ["Vercel", "Railway", "AWS EC2", "GitHub Actions", "Docker Compose", "Nginx"],
  },
];

const allCategories: SkillCategory[] = [
  ...skills.map((s) => ({
    category: s.category,
    items: s.items.map((i) => i.name),
  })),
  ...additionalCategories,
];

// Color accent per category
const categoryColors: Record<string, string> = {
  "Machine Learning & AI": "border-cyan-500/40 text-cyan-300 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-500/60",
  "AI Frameworks & Tools": "border-violet-500/40 text-violet-300 bg-violet-500/5 hover:bg-violet-500/10 hover:border-violet-500/60",
  "MLOps & DevOps": "border-orange-500/40 text-orange-300 bg-orange-500/5 hover:bg-orange-500/10 hover:border-orange-500/60",
  "LLM & Agents": "border-accent/40 text-accent bg-accent/5 hover:bg-accent/10 hover:border-accent/60",
  "Cloud & Deployment": "border-green-500/40 text-green-300 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/60",
};

const defaultPillStyle = "border-white/10 text-foreground/80 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20";

export function SkillsGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Skills</h2>
          <p className="mt-2 text-base text-muted">The tools I use to take projects from idea to production.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {allCategories.map((cat) => {
            const pillStyle = categoryColors[cat.category] || defaultPillStyle;
            return (
              <div key={cat.category} className="bg-surface border border-white/[0.08] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-5 rounded-full bg-accent" />
                  <h3 className="font-semibold text-base text-foreground">{cat.category}</h3>
                  <span className="ml-auto text-xs text-muted">{cat.items.length} tools</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium border transition-all duration-150 cursor-default ${pillStyle}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
