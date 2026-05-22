"use client";

import { useState } from "react";
import { projects, categories, type Category, type Project } from "./projectsData";

// ── Category color map ──────────────────────────────────────────────────────

const categoryClass: Record<Project["category"], string> = {
  "SaaS/Product": "bg-violet-500/20 text-violet-300",
  "LLM/Agents": "bg-accent/10 text-accent",
  MLOps: "bg-orange-500/15 text-orange-300",
  "ML/AI": "bg-green-500/15 text-green-400",
};

// ── ProjectCard ─────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`flex flex-col p-6 rounded-2xl bg-surface transition-colors duration-200 border ${
        hovered ? "border-accent" : "border-white/[0.08]"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row: category pill + badges */}
      <div className="flex items-start justify-between gap-3">
        <span className={`text-xs font-medium px-3 py-1 rounded-full shrink-0 ${categoryClass[project.category]}`}>
          {project.category}
        </span>

        <div className="flex items-center gap-2 flex-wrap justify-end">
          {project.isFeatured && (
            <span className="text-xs px-2 py-1 rounded-full font-medium bg-accent text-background">
              Featured
            </span>
          )}
          {project.isPrivate && (
            <span className="text-xs text-muted">🔒 Private</span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold mt-4 text-white">
        {project.title}
      </h3>

      {/* Problem */}
      <div className="mt-3">
        <p className="text-xs tracking-widest uppercase mb-1 text-accent">
          Problem
        </p>
        <p className="text-sm italic text-muted line-clamp-2">
          {project.problem}
        </p>
      </div>

      {/* Result */}
      <div className="mt-3">
        <p className="text-xs tracking-widest uppercase mb-1 text-accent">
          Result
        </p>
        <p className="text-sm text-foreground line-clamp-2">
          {project.result}
        </p>
      </div>

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

      {/* Bottom row */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.08]">
        <div>
          {project.stars !== undefined ? (
            <span className="text-sm text-muted">⭐ {project.stars}</span>
          ) : (
            <span className="text-xs text-muted" />
          )}
        </div>

        <div>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors duration-150"
              aria-label={`View ${project.title} on GitHub`}
            >
              GitHub →
            </a>
          ) : (
            <span className="text-xs text-muted">Private Repo</span>
          )}
        </div>
      </div>
    </article>
  );
}

// ── Sort helper ─────────────────────────────────────────────────────────────

function sortProjects(list: Project[]): Project[] {
  return [...list].sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return (b.stars ?? 0) - (a.stars ?? 0);
  });
}

// ── ProjectsGrid ────────────────────────────────────────────────────────────

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = sortProjects(
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)
  );

  return (
    <section className="pb-20 md:pb-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Filter tabs */}
        <div
          className="flex flex-wrap gap-3 mb-10 pb-8 border-b border-white/[0.08]"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-150 cursor-pointer border ${
                  isActive
                    ? "bg-accent text-background font-medium border-transparent"
                    : "bg-surface text-muted border-white/[0.08]"
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Count */}
        <p className="text-sm mb-6 text-muted">
          Showing{" "}
          <span className="text-foreground">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "project" : "projects"}
          {activeCategory !== "All" && (
            <>
              {" "}in{" "}
              <span className="text-accent">{activeCategory}</span>
            </>
          )}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
