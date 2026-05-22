"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const TERMINAL_LINES = [
  { prompt: true, text: "model.fit(X_train, y_train)" },
  { prompt: false, text: "Epoch 50/50 — loss: 0.041" },
  { prompt: false, text: "Accuracy: 94.7%" },
  { prompt: true, text: "deploy.run(env='production')" },
  { prompt: false, text: "Building Docker image..." },
  { prompt: false, text: "✓ API endpoint live" },
  { prompt: false, text: "✓ Monitoring active" },
  { prompt: false, text: "✓ Health check passed" },
];

const STATS = [
  { value: "135+", label: "Repositories" },
  { value: "2+", label: "Years Experience" },
  { value: "1", label: "SaaS Shipped" },
  { value: "1", label: "Research Paper" },
];

export function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;
    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 420);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-20 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left col */}
          <div className="flex-1 space-y-6 w-full lg:max-w-[60%]">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 text-sm text-muted">
              <span
                className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                aria-hidden="true"
              />
              <span className="text-xs font-medium">Available for freelance</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
              I Build AI Systems
              <br />
              That Go to
              <br />
              <span className="text-accent">Production.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-muted max-w-xl leading-relaxed">
              From model training to deployment — end-to-end ML engineering,
              LLM apps, and MLOps pipelines.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-accent text-background font-semibold rounded-xl hover:bg-accent/90 transition-all"
              >
                View My Work →
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-accent text-accent rounded-xl hover:bg-accent/10 transition-all"
              >
                Hire Me
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-white/[0.08]">
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-bold text-accent">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right col — terminal card */}
          <div className="hidden lg:flex flex-1 justify-end w-full lg:max-w-[40%]">
            <div className="bg-[#0d1117] rounded-2xl border border-white/[0.08] p-6 w-full max-w-md overflow-hidden shadow-2xl">
              {/* Title bar */}
              <div className="flex gap-2 mb-4 border-b border-white/[0.08] pb-3">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />
                <span className="ml-2 text-xs font-mono text-muted">
                  ml_pipeline.py
                </span>
              </div>

              {/* Terminal body */}
              <div className="font-mono text-sm min-h-[260px]">
                {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className="mb-1.5 flex items-start gap-2">
                    {line.prompt ? (
                      <>
                        <span className="text-accent" aria-hidden="true">&gt;</span>
                        <span className="text-foreground/80">{line.text}</span>
                      </>
                    ) : (
                      <span
                        className={`pl-4 ${
                          line.text.startsWith("✓")
                            ? "text-green-400"
                            : "text-muted"
                        }`}
                      >
                        {line.text}
                      </span>
                    )}
                  </div>
                ))}
                {/* Blinking cursor */}
                {visibleLines < TERMINAL_LINES.length && (
                  <span
                    className="inline-block w-2 h-4 ml-1 animate-pulse bg-accent align-text-bottom"
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
