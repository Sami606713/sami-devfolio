import type { Metadata } from "next";
import { Reveal } from "@/components/site/Reveal";
import { RoleEntry } from "@/components/site/RoleEntry";
import { ContactCTA } from "@/components/site/ContactCTA";
import { shell } from "@/components/site/styles";
import { roles } from "@/content/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Lead AI engineer at Revnix on rext.ai, lead AI architect at TheBotLab, and AI engineer at N6 Solution.",
};

export default function ExperiencePage() {
  return (
    <>
      <section className={`${shell} pt-24 pb-10 md:pb-14`}>
        <Reveal>
          <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-tight">
            Experience
          </h1>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Three roles since 2024: production agents, retrieval, and inference.
          </p>
        </Reveal>
      </section>

      <section className={`${shell} pb-16 md:pb-24`}>
        <div className="flex flex-col gap-16">
          {roles.map((role, index) => (
            <RoleEntry key={role.id} role={role} index={index} />
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
