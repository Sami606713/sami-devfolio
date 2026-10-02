"use client";

import {
  Brain,
  FileText,
  MagnifyingGlass,
  Rocket,
  ShareNetwork,
  TrendUp,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

const cards = [
  { title: "Enter a keyword", icon: FileText, tone: "blue" },
  { title: "Score difficulty, volume, backlinks, and intent", icon: MagnifyingGlass, tone: "green" },
  { title: "Suggest the titles", icon: ShareNetwork, tone: "blue" },
  { title: "Approve the outline", icon: Brain, tone: "green" },
  { title: "Write the SEO article", icon: TrendUp, tone: "blue" },
  { title: "Publish to WordPress or Shopify", icon: Rocket, tone: "green" },
] as const;

const checks = [
  "Optimal title length",
  "Optimal meta description",
  "Viewport configured for mobile",
  "UTF-8 charset declared",
];

export function RextFlow() {
  const reduce = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-xl bg-white px-3 py-4 text-[#0f172a] sm:px-5 sm:py-6">
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1.05fr)_72px_56px_36px_minmax(280px,0.95fr)] lg:items-center lg:gap-2">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:h-[360px] lg:grid-rows-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.12 * index, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex min-h-[108px] flex-col items-center justify-center rounded-2xl border border-[#d7e4f5] bg-white px-3 py-4 text-center"
              >
                <Icon size={28} weight="regular" color={card.tone === "blue" ? "#3b82f6" : "#10b981"} />
                <p className="mt-3 text-sm font-semibold leading-snug">{card.title}</p>
              </motion.div>
            );
          })}
        </div>

        <svg viewBox="0 0 72 360" className="hidden h-[360px] w-[72px] lg:block" aria-hidden>
          <FlowPath d="M2 56 C 40 56, 36 180, 70 180" delay={0.7} reduce={!!reduce} />
          <FlowPath d="M2 180 H 70" delay={0.85} reduce={!!reduce} />
          <FlowPath d="M2 304 C 40 304, 36 180, 70 180" delay={1} reduce={!!reduce} />
        </svg>

        <motion.img
          src="/visuals/rext-mark.png"
          alt=""
          width={73}
          height={62}
          initial={reduce ? false : { opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: reduce ? 0 : 1.05, duration: 0.4 }}
          className="mx-auto h-14 w-auto"
        />

        <svg viewBox="0 0 36 8" className="hidden h-2 w-9 lg:block" aria-hidden>
          <FlowPath d="M0 4 H 36" delay={1.2} reduce={!!reduce} />
        </svg>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 1.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[24px] bg-[linear-gradient(160deg,#e7f0ff_0%,#e7f7f4_48%,#d8f6ec_100%)] p-3 sm:p-4"
        >
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_148px]">
            <article className="rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgb(15_23_42_/_0.06)]">
              <p className="text-[10px] font-medium tracking-wide text-[#94a3b8]">WORDPRESS  ·  MAINTENANCE  ·  BLOGGING</p>
              <h3 className="mt-2 text-base leading-snug font-semibold">
                Top tips to choose WordPress maintenance services
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                Written after the title is chosen and the outline is approved.
              </p>
              <h4 className="mt-4 text-sm font-semibold">Understanding the service</h4>
              <p className="mt-1 text-xs leading-relaxed text-[#475569]">
                The draft covers what the work includes, what to verify, and how updates are applied.
              </p>
            </article>
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl bg-white p-3 shadow-[0_8px_24px_rgb(15_23_42_/_0.06)]">
                <p className="text-[10px] font-semibold tracking-wide text-[#64748b]">EEAT ASSISTANT</p>
                <p className="mt-2 text-xs text-[#64748b]">Trust score</p>
                <p className="text-2xl font-semibold text-[#10b981]">78.5%</p>
                <p className="text-[11px] text-[#64748b]">Good EEAT signals detected</p>
              </div>
              <div className="rounded-2xl bg-white p-3 shadow-[0_8px_24px_rgb(15_23_42_/_0.06)]">
                <p className="text-sm font-semibold">On-page SEO</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-[#10b981] text-sm font-semibold text-[#10b981]">
                    100
                  </span>
                  <span className="text-xs font-semibold">Perfect SEO</span>
                </div>
                <ul className="mt-2 space-y-1">
                  {checks.map((item) => (
                    <li key={item} className="text-[11px] leading-snug text-[#334155]">
                      <span className="mr-1 text-[#10b981]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <p className="mt-4 text-center font-mono text-[11px] text-[#64748b]">
        LangChain, LangGraph, OpenAI, PostgreSQL, Nomic embeddings
      </p>
    </div>
  );
}

function FlowPath({ d, delay, reduce }: { d: string; delay: number; reduce: boolean }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="#93c5fd"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={reduce ? false : { pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: reduce ? 0 : delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
