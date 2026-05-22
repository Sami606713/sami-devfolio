import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { ProjectsBottomCTA } from "@/components/projects/ProjectsBottomCTA";

export const metadata = {
  title: "Projects — Samiullah | ML & AI Engineering",
  description:
    "14 curated ML, MLOps, LLM, and AI agent projects — each chosen to prove production-grade engineering.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsBottomCTA />
    </>
  );
}
