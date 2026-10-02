import { person } from "@/content/site";
import { shell } from "./styles";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-12">
      <div className={`${shell} grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end`}>
        <div>
          <p className="text-lg font-medium">{person.name}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{person.role}</p>
          <p className="mt-4 text-sm text-[var(--muted)]">{person.location}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:justify-end">
          <a href={`mailto:${person.email}`}>Email</a>
          <a href={person.phoneHref}>{person.phone}</a>
          <a href={person.github}>GitHub</a>
          <a href={person.linkedin}>LinkedIn</a>
          <a href={person.resume}>Download CV</a>
        </div>
      </div>
    </footer>
  );
}
