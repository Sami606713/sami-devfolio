import Link from "next/link";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: "🤖",
    title: "ML Model Development",
    description:
      "From data pipelines to trained models — classification, regression, NLP, computer vision.",
  },
  {
    icon: "🧠",
    title: "RAG & LLM Applications",
    description:
      "Production-ready LLM apps with retrieval-augmented generation, fine-tuning, and evaluation.",
  },
  {
    icon: "⚙️",
    title: "MLOps Pipelines",
    description:
      "Automated training, model versioning, CI/CD, monitoring. Your model stays healthy in production.",
  },
  {
    icon: "⚡",
    title: "AI Agent Development",
    description:
      "LangGraph-powered agents that take real actions — not just answer questions.",
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="bg-background border border-white/[0.08] rounded-2xl p-6">
      <span
        className="block text-4xl mb-4 leading-none"
        role="img"
        aria-label={service.title}
      >
        {service.icon}
      </span>
      <h3 className="text-white font-bold mt-4">{service.title}</h3>
      <p className="text-muted text-sm mt-2 leading-relaxed">{service.description}</p>
    </article>
  );
}

export function ServiceTeaser() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          What I Build
        </h2>
        <p className="text-muted text-lg mt-3">
          Specialized AI &amp; ML engineering services for startups and growing companies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-accent hover:underline text-sm inline-block"
          >
            See All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
