import Link from "next/link";

interface ServiceCard {
  number: string;
  icon: string;
  iconLabel: string;
  title: string;
  problem: string;
  deliverables: string[];
  timeline: string;
  ctaHref: string;
  ctaService: string;
}

const SERVICES: ServiceCard[] = [
  {
    number: "01",
    icon: "🤖",
    iconLabel: "ML chip",
    title: "ML Model Development & Deployment",
    problem:
      "You have data but no way to turn it into decisions. Your team is guessing instead of predicting.",
    deliverables: [
      "Data pipeline & feature engineering",
      "Model training, evaluation & selection",
      "REST API deployment (FastAPI + Docker)",
      "Model monitoring & retraining setup",
      "Full documentation & handover",
    ],
    timeline: "3–6 weeks",
    ctaHref: "/contact?service=ml-development",
    ctaService: "ml-development",
  },
  {
    number: "02",
    icon: "🧠",
    iconLabel: "Brain",
    title: "RAG & LLM Application Development",
    problem:
      "You want AI on your own data — not a generic chatbot that hallucinates and ignores your documents.",
    deliverables: [
      "Document ingestion pipeline (PDF, URL, DOCX)",
      "Vector database setup (Pinecone / pgvector)",
      "Retrieval-augmented generation system",
      "LLM evaluation & accuracy benchmarking",
      "Production API + frontend integration",
    ],
    timeline: "2–5 weeks",
    ctaHref: "/contact?service=rag-llm",
    ctaService: "rag-llm",
  },
  {
    number: "03",
    icon: "⚙️",
    iconLabel: "Gear",
    title: "MLOps Pipeline Setup",
    problem:
      "Your model works on your laptop but nobody can use it. Retraining is manual, deployment is scary.",
    deliverables: [
      "CI/CD pipeline for model training",
      "Experiment tracking with MLflow",
      "Data versioning with DVC",
      "Automated retraining triggers",
      "Monitoring & drift detection",
    ],
    timeline: "2–4 weeks",
    ctaHref: "/contact?service=mlops",
    ctaService: "mlops",
  },
  {
    number: "04",
    icon: "⚡",
    iconLabel: "Lightning bolt",
    title: "AI Agent Development",
    problem:
      "You want automation that actually does things — not a chatbot that just answers questions and does nothing.",
    deliverables: [
      "LangGraph stateful agent architecture",
      "Custom tool integrations (APIs, databases)",
      "Multi-channel deployment (Web, WhatsApp, Slack)",
      "Agent testing & evaluation framework",
      "Production deployment + monitoring",
    ],
    timeline: "3–5 weeks",
    ctaHref: "/contact?service=ai-agents",
    ctaService: "ai-agents",
  },
];

function Card({ service }: { service: ServiceCard }) {
  return (
    <article className="relative flex flex-col bg-surface border border-white/[0.08] border-t-4 border-t-accent rounded-2xl p-8 overflow-hidden">
      {/* Number badge */}
      <span
        className="absolute top-8 right-8 text-xs font-bold tabular-nums text-muted"
        aria-hidden="true"
      >
        {service.number}
      </span>

      {/* Icon */}
      <span className="text-4xl leading-none" role="img" aria-label={service.iconLabel}>
        {service.icon}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold mt-4 mb-6 pr-8 text-foreground">
        {service.title}
      </h3>

      {/* Problem */}
      <div className="mb-4">
        <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5 text-muted">
          The problem
        </p>
        <p className="text-sm italic leading-relaxed text-muted">
          &ldquo;{service.problem}&rdquo;
        </p>
      </div>

      {/* Deliverables */}
      <div className="mb-6 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-muted">
          What I deliver
        </p>
        <ul className="space-y-1.5">
          {service.deliverables.map((item) => (
            <li key={item} className="text-sm flex items-start gap-2 text-foreground">
              <span className="text-accent" aria-hidden="true">→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Timeline pill */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
          Typical: {service.timeline}
        </span>
      </div>

      {/* CTA */}
      <Link
        href={service.ctaHref}
        className="block w-full text-center py-3 rounded-xl text-sm font-semibold border border-accent text-accent hover:bg-accent/10 transition-all"
      >
        Let&apos;s Talk →
      </Link>
    </article>
  );
}

export function ServiceCards() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <Card key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
