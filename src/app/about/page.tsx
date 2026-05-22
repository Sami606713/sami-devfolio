import { AboutHero } from "@/components/about/AboutHero";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata = {
  title: "About — Samiullah | ML Engineer & AI Developer",
  description:
    "ML Engineer with 2 years experience. Founder of ConnectXeo. Specializing in end-to-end ML systems, LLM apps, and MLOps pipelines.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SkillsGrid />
      <ExperienceTimeline />
      <AboutCTA />
    </>
  );
}
