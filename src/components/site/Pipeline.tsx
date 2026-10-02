"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";

const steps = [
  "Discover topics",
  "Score relevance",
  "Draft the outline",
  "Approve by hand",
  "Publish to WordPress or Shopify",
];

export function Pipeline() {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg-2)] p-6 md:p-10">
      <Reveal>
        <p className="font-mono text-xs text-[var(--muted)]">rext.ai at Revnix</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
          How a keyword becomes an article
        </h2>
        <p className="mt-3 max-w-[54ch] text-[var(--muted)]">
          The content platform I own end to end. LangGraph runs the stages and keeps state in
          PostgreSQL, and a person approves the outline before anything gets written.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <ol className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          {steps.map((step, i) => (
            <li
              key={step}
              className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3"
            >
              {i > 0 ? (
                <ArrowRight
                  size={16}
                  className="shrink-0 rotate-90 text-[var(--muted)] sm:rotate-0"
                />
              ) : null}
              <span className="rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-2.5 text-sm font-medium">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] pt-6">
          <p className="font-mono text-xs text-[var(--muted)]">
            LangGraph, OpenAI, PostgreSQL, Redis, Docker
          </p>
          <Link
            href="https://rext.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-transform duration-200 hover:-translate-y-px"
          >
            Visit rext.ai
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
