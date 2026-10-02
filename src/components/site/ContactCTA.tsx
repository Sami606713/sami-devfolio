import { Reveal } from "./Reveal";
import { person } from "@/content/site";
import { shell } from "./styles";

const linkQuiet =
  "inline-flex h-11 items-center justify-center whitespace-nowrap rounded-xl border border-[var(--on-accent)] px-5 text-sm font-medium text-[var(--on-accent)] transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98] focus-visible:[outline-color:var(--on-accent)]";

export function ContactCTA() {
  return (
    <section className="bg-[var(--accent)] text-[var(--on-accent)]">
      <div
        className={`${shell} flex flex-col gap-8 py-16 md:py-20 lg:flex-row lg:items-end lg:justify-between`}
      >
        <Reveal className="max-w-[36rem]">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Available for senior AI engineer roles
          </h2>
          <p className="mt-4 text-base leading-relaxed md:text-lg">
            Full-time positions and select consulting work. Email is the fastest way to reach me.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="flex flex-wrap gap-3">
          <a
            href={`mailto:${person.email}`}
            className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-xl bg-[var(--bg)] px-5 text-sm font-medium text-[var(--text)] transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98] focus-visible:[outline-color:var(--text)]"
          >
            Email me
          </a>
          <a className={linkQuiet} href={person.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            className={linkQuiet}
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Reveal>
      </div>
    </section>
  );
}
