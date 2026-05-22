"use client";
import Link from "next/link";
import { FaGithub, FaStar, FaArrowRight } from "react-icons/fa";

interface Project {
  tag: string;
  title: string;
  description: string;
  tech: string[];
  stars: number | null;
  githubUrl: string | null;
  ctaLabel: string;
  ctaHref: string;
  isExternal: boolean;
}

const PROJECTS: Project[] = [
  {
    tag: "ML / Classification",
    title: "Credit Risk Prediction",
    description:
      "End-to-end credit scoring model with feature engineering, model selection, and production API deployment.",
    tech: ["Python", "Scikit-learn", "FastAPI", "Docker"],
    stars: 6,
    githubUrl: "https://github.com/Sami606713/CreditRisk",
    ctaLabel: "View Repo",
    ctaHref: "https://github.com/Sami606713/CreditRisk",
    isExternal: true,
  },
  {
    tag: "MLOps",
    title: "Flight Price MLOps Pipeline",
    description:
      "Production MLOps pipeline with automated retraining, model versioning with DVC, and CI/CD deployment.",
    tech: ["Python", "MLflow", "DVC", "Docker", "Airflow"],
    stars: 5,
    githubUrl: "https://github.com/Sami606713/MLOPS-flight-price-prediction",
    ctaLabel: "View Repo",
    ctaHref: "https://github.com/Sami606713/MLOPS-flight-price-prediction",
    isExternal: true,
  },
  {
    tag: "LLM / Research",
    title: "Open Deep Search System",
    description:
      "Multi-model search system powered by LLMs for advanced information retrieval. Research-grade implementation.",
    tech: ["Python", "LangChain", "LangGraph", "FastAPI"],
    stars: null,
    githubUrl: null,
    ctaLabel: "View Research",
    ctaHref: "/research",
    isExternal: false,
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col p-6 rounded-2xl bg-surface border border-white/[0.08] hover:border-accent transition-all duration-200 group">
      {/* Tag */}
      <span className="self-start text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent mb-4">
        {project.tag}
      </span>

      {/* Title */}
      <h3 className="text-white font-bold text-lg mt-3">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-muted text-sm mt-2 flex-1 leading-relaxed">
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-surface-2 text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/[0.08]">
        <div className="flex items-center gap-1.5">
          {project.stars !== null ? (
            <>
              <FaStar className="text-yellow-400" size={12} aria-hidden="true" />
              <span className="text-xs text-muted">{project.stars}</span>
            </>
          ) : (
            <span className="text-xs text-muted">Private</span>
          )}
        </div>

        {project.isExternal && project.ctaHref ? (
          <a
            href={project.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-muted hover:opacity-80 transition-colors"
            aria-label={`${project.ctaLabel} for ${project.title}`}
          >
            <FaGithub size={13} aria-hidden="true" />
            {project.ctaLabel}
          </a>
        ) : (
          <Link
            href={project.ctaHref}
            className="flex items-center gap-1.5 text-xs font-medium text-accent transition-colors"
            aria-label={`${project.ctaLabel} for ${project.title}`}
          >
            {project.ctaLabel}
            <FaArrowRight size={10} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Featured Work
      </h2>
      <p className="text-muted text-lg mt-3">
        A selection of projects that shipped to production.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/projects"
          className="text-accent hover:underline text-sm inline-block"
        >
          View All Projects →
        </Link>
      </div>
      </div>
    </section>
  );
}
