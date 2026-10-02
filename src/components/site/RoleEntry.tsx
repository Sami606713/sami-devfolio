"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { projectById, type Role } from "@/content/site";
import { Reveal } from "./Reveal";

export function RoleEntry({ role, index }: { role: Role; index: number }) {
  const linked = role.projectIds
    .map((id) => projectById(id))
    .filter((item) => item !== undefined);

  return (
    <Reveal delay={index * 0.06}>
      <article
        id={role.id}
        className="grid scroll-mt-24 items-start gap-6 border-t border-[var(--line)] pt-10 lg:grid-cols-12 lg:gap-10"
      >
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <p className="font-mono text-sm text-[var(--muted)]">{role.period}</p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            {role.role}
          </h2>
          <p className="mt-2 text-[var(--accent)]">
            {role.href ? (
              <a
                href={role.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:underline"
              >
                {role.company}
                <ArrowUpRight size={16} />
              </a>
            ) : (
              role.company
            )}
          </p>
          {role.stack ? (
            <p className="mt-5 max-w-[36ch] font-mono text-xs leading-relaxed text-[var(--muted)]">
              {role.stack}
            </p>
          ) : null}
        </div>

        <div className="lg:col-span-8">
          <p className="max-w-[62ch] text-lg leading-relaxed md:text-xl">
            {role.summary}
          </p>
          <ul className="mt-6 max-w-[68ch] border-y border-[var(--line)]">
            {role.points.map((point, i) => (
              <li
                key={point}
                className={`py-4 leading-relaxed text-[var(--muted)] ${
                  i > 0 ? "border-t border-[var(--line)]" : ""
                }`}
              >
                {point}
              </li>
            ))}
          </ul>
          {linked.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {linked.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects#${project.id}`}
                  className="text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  {project.title}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}
