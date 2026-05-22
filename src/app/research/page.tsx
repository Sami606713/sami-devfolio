import { ResearchHero } from "@/components/research/ResearchHero";
import { ResearchAbstract } from "@/components/research/ResearchAbstract";
import { ResearchArchitecture } from "@/components/research/ResearchArchitecture";
import { ResearchFindings } from "@/components/research/ResearchFindings";
import { ResearchTechStack } from "@/components/research/ResearchTechStack";
import { WritingStub } from "@/components/research/WritingStub";

export const metadata = {
  title: "Research — Samiullah | Multi-Model Open Deep Search",
  description:
    "Research on multi-model LLM orchestration for advanced information retrieval. 92.6% accuracy using LangGraph state machines.",
};

export default function ResearchPage() {
  return (
    <>
      <ResearchHero />
      <ResearchAbstract />
      <ResearchArchitecture />
      <ResearchFindings />
      <ResearchTechStack />
      <WritingStub />
    </>
  );
}
