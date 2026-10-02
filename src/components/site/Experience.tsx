import Link from "next/link";
import { Reveal } from "./Reveal";
import { roles } from "@/content/site";

export function Experience() {
  return (
    <div className="flex flex-col">
      {roles.map((role, i) => (
        <Reveal key={role.id} delay={i * 0.08}>
          <Link
            href={`/experience#${role.id}`}
            className="group grid gap-2 border-t border-[var(--line)] py-6 transition-colors last:border-b hover:bg-[var(--bg-2)] md:grid-cols-[200px_1fr] md:gap-6"
          >
            <div>
              <p className="font-mono text-xs text-[var(--muted)]">{role.period}</p>
              <p className="mt-1 text-sm font-medium text-[var(--accent)]">{role.company}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium tracking-tight">{role.role}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                {role.summary}
              </p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
