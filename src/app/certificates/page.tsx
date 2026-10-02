import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/site/Reveal";
import { ContactCTA } from "@/components/site/ContactCTA";
import {
  buttonPrimary,
  buttonQuiet,
  shell,
} from "@/components/site/styles";
import { awards, person } from "@/content/site";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Awards, the ODS-M publication, a BS in Computer Science, and a downloadable resume.",
};

export default function CertificatesPage() {
  return (
    <>
      <section className={`${shell} pt-24 pb-14 md:pb-20`}>
        <Reveal>
          <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-tight">
            Certificates
          </h1>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Awards, a publication, a degree, and the resume in one place.
          </p>
        </Reveal>
      </section>

      <section
        aria-label="Awards"
        className="border-y border-[var(--line)] bg-[var(--bg-2)]"
      >
        <div className={shell}>
          <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2">
            {awards.map((award, i) => (
              <Reveal
                key={award.title}
                delay={i * 0.06}
                className="bg-[var(--bg-2)] px-5 py-8 md:px-6"
              >
                <p className="font-mono text-5xl tracking-tight text-[var(--accent)] md:text-6xl">
                  1st
                </p>
                <p className="mt-3 text-lg font-medium tracking-tight md:text-xl">
                  {award.title}
                </p>
                {award.year ? (
                  <p className="mt-1 font-mono text-xs text-[var(--muted)]">
                    {award.year}
                  </p>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${shell} py-16 md:py-24`}>
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Publication
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-8 grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-2xl font-medium tracking-tight md:text-3xl">ODS-M</p>
            <p className="mt-3 max-w-[52ch] leading-relaxed text-[var(--muted)]">
              Middleware-controlled autonomous web search agents. The paper reports a
              gain over the baseline on multi-hop reasoning tasks.
            </p>
            <a
              href="https://github.com/Sami606713/Multi-Model-Open-Deep-Search"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm text-[var(--accent)] underline-offset-4 hover:underline"
            >
              View on GitHub
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--line)] lg:col-span-7">
            <Image
              src="/visuals/ods-m.png"
              alt="ODS-M architecture diagram"
              width={1600}
              height={900}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className={`${shell} pb-16 md:pb-24`}>
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Degree</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 grid gap-6 border-t border-[var(--line)] pt-6 md:grid-cols-3">
            <div>
              <p className="text-xl font-medium tracking-tight">BS Computer Science</p>
            </div>
            <div>
              <p className="text-[var(--muted)]">University of Haripur</p>
            </div>
            <div>
              <p className="font-mono text-sm text-[var(--muted)]">
                2022-2026, CGPA 3.5 / 4.0
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={`${shell} pb-16 md:pb-24`}>
        <Reveal>
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--tint)] p-6 md:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[46ch]">
                <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                  Resume
                </h2>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">
                  Two years of production AI work in one PDF: roles, stacks, and what
                  shipped.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  className={buttonPrimary}
                  href={person.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview resume
                </a>
                <a className={buttonQuiet} href={person.resume} download>
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <ContactCTA />
    </>
  );
}
