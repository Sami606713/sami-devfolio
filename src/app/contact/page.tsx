import { ContactHero } from "@/components/contact/ContactHero";
import { ContactLayout } from "@/components/contact/ContactLayout";

export const metadata = {
  title: "Contact — Samiullah | Hire ML & AI Engineer",
  description:
    "Available for ML development, RAG/LLM apps, MLOps pipelines, and AI agent projects. Fixed-price quotes. Response within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactLayout />
    </>
  );
}
