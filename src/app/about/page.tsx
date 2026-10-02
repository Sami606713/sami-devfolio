import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/site/Reveal";
import { ContactCTA } from "@/components/site/ContactCTA";
import { shell } from "@/components/site/styles";
import { toolGroups } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Samiullah owns production AI systems end to end: agents, retrieval, and the infrastructure under them.",
};

const principles = [
  {
    title: "Own the whole path",
    body: "Architecture, deployment, schema migrations, monitoring. I stay responsible from the first diagram to the production deploy.",
  },
  {
    title: "Keep humans in the loop",
    body: "rext.ai pauses for outline approval before a word is written. The parts that need judgment stay with a person.",
  },
  {
    title: "Evaluate before you ship",
    body: "Pipeline evaluation and monitoring are part of the build, not a follow-up task.",
  },
  {
    title: "Patterns over one-offs",
    body: "The agent communication standards I defined at TheBotLab were adopted across every subsystem on the platform.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className={`${shell} pt-24 pb-16 md:pb-24`}>
        <Reveal>
          <h1 className="max-w-[15ch] text-[clamp(2.5rem,5.5vw,4.5rem)] font-medium leading-[1.05] tracking-tight">
            I own AI systems end to end.
          </h1>
          <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-[var(--muted)] md:text-lg">
            I&apos;m Samiullah, a senior AI engineer. Two years of production work across content
            automation, multi-agent commerce, retrieval, and inference.
          </p>
        </Reveal>
      </section>

      <section className={`${shell} pb-16 md:pb-24`}>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-2)]">
              <Image
                src="/visuals/portrait.jpg"
                alt="Portrait of Samiullah"
                width={848}
                height={1216}
                priority
                className="aspect-[3/4] w-full object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="flex max-w-[65ch] flex-col gap-5 text-base leading-relaxed text-[var(--muted)]">
              <p className="text-lg text-[var(--text)] md:text-xl">
                I got into production AI through retrieval and inference. At N6 Solution I built a
                RAG pipeline with multi-query expansion, decomposition, fusion, and reranking, and a
                FastAPI service answering live traffic in sub-second time.
              </p>
              <p>
                Since then I&apos;ve moved up the stack. At Revnix I&apos;m the sole backend
                architect for{" "}
                <a
                  href="https://rext.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  rext.ai
                </a>
                , and at{" "}
                <a
                  href="https://github.com/Sami606713/TheBotLab"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  TheBotLab
                </a>{" "}
                I lead the architecture of a seven-agent Shopify platform, each agent with its own
                tools and error boundary across 40+ live integrations.
              </p>
              <p>
                The common thread is keeping systems alive in production: state in PostgreSQL and
                Redis, retries and error boundaries at the right places, and a human approval step
                where judgment matters.
              </p>
              <p>
                I also write the tooling I need.{" "}
                <a
                  href="https://github.com/Sami606713/agent_cli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  langctl
                </a>{" "}
                is my open-source CLI for scaffolding and deploying LangChain and LangGraph agents,
                on PyPI with 14+ releases. Next up: AgentGenesis, a framework where agents
                configure and spawn other agents.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${shell} pb-16 md:pb-24`}>
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">How I work</h2>
        </Reveal>
        <div className="mt-8 border-y border-[var(--line)]">
          {principles.map((principle, i) => (
            <Reveal
              key={principle.title}
              delay={i * 0.06}
              className="grid gap-2 border-t border-[var(--line)] py-6 first:border-t-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10"
            >
              <h3 className="text-lg font-medium tracking-tight">{principle.title}</h3>
              <p className="max-w-[60ch] leading-relaxed text-[var(--muted)]">
                {principle.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={`${shell} pb-16 md:pb-24`}>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-[var(--line)]">
            <Image
              src="/visuals/still-a.jpg"
              alt="A desk lamp lighting a stack of paper"
              width={1280}
              height={720}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--bg-2)]">
        <div className={`${shell} py-12 md:py-14`}>
          <Reveal>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Stack</h2>
          </Reveal>
          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {toolGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.05}>
                <h3 className="font-mono text-xs text-[var(--accent)]">{group.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {group.items}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${shell} py-16 md:py-24`}>
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Education and recognition
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="border-t border-[var(--line)] pt-6">
              <h3 className="text-lg font-medium tracking-tight">BS Computer Science</h3>
              <p className="mt-2 text-[var(--muted)]">University of Haripur</p>
              <p className="mt-1 font-mono text-sm text-[var(--muted)]">
                2022-2026, CGPA 3.5 / 4.0
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border-t border-[var(--line)] pt-6">
              <h3 className="text-lg font-medium tracking-tight">Recognition</h3>
              <ul className="mt-4 flex flex-col gap-3">
                <li className="flex items-baseline justify-between gap-4">
                  <span>ZABIST AI Cup</span>
                  <span className="shrink-0 font-mono text-xs text-[var(--muted)]">
                    1st place, 2024
                  </span>
                </li>
                <li className="flex items-baseline justify-between gap-4">
                  <span>Thrive Pakistan</span>
                  <span className="shrink-0 font-mono text-xs text-[var(--muted)]">
                    1st place
                  </span>
                </li>
                <li className="flex items-baseline justify-between gap-4">
                  <a
                    href="https://github.com/Sami606713/Multi-Model-Open-Deep-Search"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] underline-offset-4 hover:underline"
                  >
                    ODS-M
                  </a>
                  <span className="shrink-0 font-mono text-xs text-[var(--muted)]">
                    Published paper
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
