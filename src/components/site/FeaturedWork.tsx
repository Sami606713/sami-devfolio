"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";

const storeOps = [
  "Product listings",
  "Order management",
  "Inventory",
  "Refunds and returns",
  "Draft orders",
  "Customer replies",
];

export function FeaturedWork() {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <Reveal className="lg:col-span-7">
        <Link
          href="https://github.com/Sami606713/TheBotLab"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--bg-2)] p-6 transition-colors hover:border-[var(--accent)] md:p-7"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-[var(--muted)]">TheBotLab</p>
              <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">
                A Shopify store, run by an agent
              </h3>
            </div>
            <ArrowUpRight
              size={20}
              className="mt-1 shrink-0 text-[var(--muted)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
            />
          </div>
          <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-[var(--muted)] md:text-base">
            A merchant connects their store and the agent operates it end to end: listings,
            orders, inventory, refunds, and customer replies. Seven agents share one coordinator,
            each with isolated tools and its own error boundary.
          </p>
          <ul className="mt-6 border-y border-[var(--line)]">
            {storeOps.map((op, i) => (
              <li
                key={op}
                className={`py-3.5 text-sm ${
                  i > 0 ? "border-t border-[var(--line)]" : ""
                }`}
              >
                {op}
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-6 font-mono text-xs text-[var(--muted)]">
            FastAPI, LangGraph, PostgreSQL, pgvector, Docker
          </p>
        </Link>
      </Reveal>

      <div className="grid gap-6 lg:col-span-5">
        <Reveal delay={0.08}>
          <Link
            href="https://github.com/Sami606713/Multi-Model-Open-Deep-Search"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-2)] transition-colors hover:border-[var(--accent)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-black">
              <Image
                src="/visuals/ods-m.png"
                alt="ODS-M architecture: middleware separates discovery from analysis"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-[var(--muted)]">Research</p>
                  <h3 className="mt-2 text-xl font-medium tracking-tight">ODS-M</h3>
                </div>
                <ArrowUpRight
                  size={20}
                  className="mt-1 shrink-0 text-[var(--muted)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Published search agents that route tools through middleware. Beat the baseline on
                multi-hop tasks.
              </p>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.16}>
          <Link
            href="https://github.com/Sami606713/agent_cli"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--tint)] p-6 transition-colors hover:border-[var(--accent)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-[var(--muted)]">Open source</p>
                <h3 className="mt-2 text-xl font-medium tracking-tight">
                  langctl, a CLI for shipping agents
                </h3>
              </div>
              <ArrowUpRight
                size={20}
                className="mt-1 shrink-0 text-[var(--muted)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Scaffolds, runs, and deploys LangChain and LangGraph agents. Apache-2.0, 14+ releases
              on PyPI.
            </p>
            <code className="mt-5 overflow-x-auto rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 font-mono text-sm text-[var(--accent)]">
              $ pip install langctl
            </code>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
