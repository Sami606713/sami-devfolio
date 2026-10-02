"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import type { Project } from "@/content/site";
import { Reveal } from "./Reveal";

const groups = ["All", "Production", "Open source", "Research"] as const;
type Filter = (typeof groups)[number];

const rextSteps = [
  "Discover topics",
  "Score relevance",
  "Draft the outline",
  "Approve by hand",
  "Publish",
];

const imageAlt: Record<string, string> = {
  "ods-m": "ODS-M architecture diagram",
};

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const counts = useMemo(() => {
    const result = {} as Record<Filter, number>;
    for (const group of groups) {
      result[group] =
        group === "All"
          ? projects.length
          : projects.filter((project) => project.group === group).length;
    }
    return result;
  }, [projects]);

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.group === filter);
  }, [filter, projects]);

  const production = visible.filter((project) => project.group === "Production");
  const source = visible.filter((project) => project.group === "Open source");
  const research = visible.filter((project) => project.group === "Research");

  return (
    <div>
      <div role="group" aria-label="Project groups" className="flex flex-wrap gap-2">
        {groups.map((group) => {
          const selected = filter === group;
          return (
            <button
              key={group}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(group)}
              className={`inline-flex h-10 items-center gap-2 rounded-xl px-4 text-sm transition-colors active:scale-[0.98] ${
                selected
                  ? "bg-[var(--ink)] font-medium text-[var(--ink-text)]"
                  : "border border-[var(--line)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {group}
              <span
                className={`font-mono text-xs ${
                  selected ? "opacity-70" : "text-[var(--muted)]"
                }`}
              >
                {counts[group]}
              </span>
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 max-w-[65ch] text-[var(--muted)]">
          Nothing in this group yet.
        </p>
      ) : (
        <div className="mt-10 flex flex-col gap-16">
          {production.length > 0 ? (
            <ProductionSection items={production} showHeading={filter === "All"} />
          ) : null}
          {source.length > 0 ? (
            <SourceSection items={source} showHeading={filter === "All"} />
          ) : null}
          {research.length > 0 ? (
            <ResearchSection items={research} showHeading={filter === "All"} />
          ) : null}
        </div>
      )}
    </div>
  );
}

function ProductionSection({
  items,
  showHeading,
}: {
  items: Project[];
  showHeading: boolean;
}) {
  return (
    <section aria-label="Production projects">
      {showHeading ? (
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Production</h2>
      ) : null}
      <div className={`grid gap-6 lg:grid-cols-2 ${showHeading ? "mt-8" : ""}`}>
        {items.map((project, i) => {
          const featured = project.id === "rext";
          return (
            <Reveal
              key={project.id}
              delay={i * 0.05}
              className={featured ? "lg:col-span-2" : undefined}
            >
              <ProjectCard project={project} featured={featured} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  return (
    <article
      id={project.id}
      className={`group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-[var(--line)] transition-colors hover:border-[var(--accent)] ${
        featured ? "bg-[var(--tint)] p-6 md:p-8" : "bg-[var(--bg-2)]"
      }`}
    >
      {project.image ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-black">
          <Image
            src={project.image}
            alt={imageAlt[project.id] ?? project.title}
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}
      <div className={`flex flex-1 flex-col ${project.image || !featured ? "p-6" : ""}`}>
        <p className="font-mono text-xs text-[var(--muted)]">{project.place}</p>
        <h3
          className={`mt-2 font-medium tracking-tight ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-[var(--muted)] md:text-base">
          {project.summary}
        </p>
        {featured ? <StepFlow /> : null}
        <p className="mt-auto pt-5 font-mono text-xs leading-relaxed text-[var(--muted)]">
          {project.stack}
        </p>
        {project.href && project.linkLabel ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-medium text-[var(--accent)]"
          >
            {project.linkLabel}
            <ArrowUpRight size={16} />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function StepFlow() {
  return (
    <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2">
      {rextSteps.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          {i > 0 ? (
            <ArrowRight size={14} className="shrink-0 text-[var(--muted)]" />
          ) : null}
          <span className="rounded-xl border border-[var(--line)] bg-[var(--bg)] px-3 py-1.5 text-xs font-medium">
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}

function SourceSection({ items, showHeading }: { items: Project[]; showHeading: boolean }) {
  return (
    <section aria-label="Open source projects">
      {showHeading ? (
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Open source</h2>
      ) : null}
      <div className={`border-y border-[var(--line)] ${showHeading ? "mt-8" : ""}`}>
        {items.map((project, i) => (
          <Reveal
            key={project.id}
            delay={i * 0.04}
            className="border-t border-[var(--line)] first:border-t-0"
          >
            <article
              id={project.id}
              className="grid scroll-mt-24 gap-3 py-5 transition-colors hover:bg-[var(--bg-2)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] md:gap-8"
            >
              <div>
                <h3 className="text-lg font-medium tracking-tight">{project.title}</h3>
                {project.href && project.linkLabel ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm text-[var(--accent)]"
                  >
                    {project.linkLabel}
                    <ArrowUpRight size={14} />
                  </a>
                ) : null}
              </div>
              <div>
                <p className="text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  {project.summary}
                </p>
                <p className="mt-2 font-mono text-xs leading-relaxed text-[var(--muted)]">
                  {project.stack}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ResearchSection({ items, showHeading }: { items: Project[]; showHeading: boolean }) {
  return (
    <section aria-label="Research projects">
      {showHeading ? (
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Research</h2>
      ) : null}
      <div className={showHeading ? "mt-8" : undefined}>
        {items.map((project) => (
          <Reveal key={project.id}>
            <article
              id={project.id}
              className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <p className="font-mono text-xs text-[var(--muted)]">{project.place}</p>
                <h3 className="mt-2 text-2xl font-medium tracking-tight">{project.title}</h3>
                <p className="mt-3 max-w-[52ch] leading-relaxed text-[var(--muted)]">
                  {project.summary}
                </p>
                <p className="mt-4 font-mono text-xs leading-relaxed text-[var(--muted)]">
                  {project.stack}
                </p>
                {project.href && project.linkLabel ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]"
                  >
                    {project.linkLabel}
                    <ArrowUpRight size={16} />
                  </a>
                ) : null}
              </div>
              {project.image ? (
                <div className="overflow-hidden rounded-2xl border border-[var(--line)] lg:col-span-7">
                  <Image
                    src={project.image}
                    alt={imageAlt[project.id] ?? project.title}
                    width={1600}
                    height={900}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
