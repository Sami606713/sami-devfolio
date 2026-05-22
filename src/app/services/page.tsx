import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceCards } from "@/components/services/ServiceCards";
import { WhyMe } from "@/components/services/WhyMe";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";
import { ServicesBottomCTA } from "@/components/services/ServicesBottomCTA";

export const metadata = {
  title: "Services — Samiullah | ML & AI Engineering",
  description:
    "ML model development, RAG/LLM apps, MLOps pipelines, and AI agent development. Fixed-price projects. Ships to production.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCards />
      <WhyMe />
      <ServicesFAQ />
      <ServicesBottomCTA />
    </>
  );
}
