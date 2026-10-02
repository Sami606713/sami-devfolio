import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { Metrics } from "@/components/site/Metrics";
import { FeaturedWork } from "@/components/site/FeaturedWork";
import { Pipeline } from "@/components/site/Pipeline";
import { Experience } from "@/components/site/Experience";
import { Capabilities } from "@/components/site/Capabilities";
import { ContactCTA } from "@/components/site/ContactCTA";
import { buttonPrimary, buttonQuiet, shell } from "@/components/site/styles";

export default function HomePage() {
  return (
    <>
      <section>
        <div className={`${shell} grid items-center gap-10 pt-24 pb-14 lg:grid-cols-12 lg:gap-12 lg:pb-20`}>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                Senior AI Engineer
              </p>
              <h1 className="mt-5 text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight">
                AI systems that hold up in production.
              </h1>
              <p className="mt-5 max-w-[50ch] text-base leading-relaxed text-[var(--muted)] md:text-lg">
                I&apos;m Samiullah. I design multi-agent systems, retrieval pipelines, and the
                data infrastructure under them.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link className={buttonPrimary} href="/projects">
                  View Projects
                </Link>
                <Link className={buttonQuiet} href="/Samiullah_SeniorAIEngineer.pdf">
                  Resume
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-5" delay={0.12}>
            <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-2)]">
              <Image
                src="/visuals/portrait.jpg"
                alt="Portrait of Samiullah"
                width={848}
                height={1216}
                priority
                className="aspect-[4/5] w-full object-cover object-top sm:aspect-[16/10] lg:aspect-auto lg:h-[520px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--bg-2)]">
        <div className={shell}>
          <Metrics />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className={shell}>
          <Reveal>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Selected work</h2>
            <p className="mt-3 max-w-[46ch] text-[var(--muted)]">
              Production systems, open-source tools, and published research.
            </p>
          </Reveal>
          <div className="mt-10">
            <FeaturedWork />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className={shell}>
          <Pipeline />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className={shell}>
          <Reveal>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Experience</h2>
          </Reveal>
          <div className="mt-10">
            <Experience />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className={shell}>
          <Reveal>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              What I work with
            </h2>
          </Reveal>
          <div className="mt-8">
            <Capabilities />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
