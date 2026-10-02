"use client";

import { Brain, Cloud, Cpu, MagnifyingGlass } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";

const groups = [
  {
    icon: Brain,
    title: "Agents and orchestration",
    items:
      "LangGraph, LangChain, coordinator-subagent patterns, tool routing, human review",
  },
  {
    icon: Cpu,
    title: "Models and fine-tuning",
    items: "PyTorch, Hugging Face, PEFT/LoRA, YOLO, classical ML",
  },
  {
    icon: MagnifyingGlass,
    title: "Retrieval and data",
    items:
      "RAG fusion, multi-query expansion, reranking, pgvector, PostgreSQL, Redis, MongoDB, Alembic",
  },
  {
    icon: Cloud,
    title: "Delivery",
    items:
      "Python, FastAPI, Docker, AWS, MLflow, DVC, GitHub Actions, Next.js, React",
  },
];

export function Capabilities() {
  return (
    <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {groups.map((group, i) => {
        const Icon = group.icon;
        return (
          <Reveal key={group.title} delay={i * 0.06}>
            <div className="border-t border-[var(--line)] pt-5">
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-[var(--accent)]" />
                <h3 className="text-base font-medium tracking-tight">{group.title}</h3>
              </div>
              <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-[var(--muted)]">
                {group.items}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
