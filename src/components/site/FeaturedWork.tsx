"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import { useEffect, useRef, useState, useCallback } from "react";

const storeOps = [
  "Product listings",
  "Order management",
  "Inventory",
  "Refunds and returns",
  "Draft orders",
  "Customer replies",
];

function FlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const reducedMotionRef = useRef(false);
  const dprRef = useRef(1);
  const colorsRef = useRef<{
    accent: string;
    text: string;
    muted: string;
    line: string;
    bg: string;
  } | null>(null);
  const timeRef = useRef(0);
  const [, forceUpdate] = useState(0);

  const nodePositions = {
    merchant: { x: 0.08, y: 0.5, label: "Merchant" },
    botlab: { x: 0.5, y: 0.5, label: "TheBotLab" },
    stores: [
      { x: 0.92, y: 0.2, label: "Store A" },
      { x: 0.92, y: 0.5, label: "Store B" },
      { x: 0.92, y: 0.8, label: "Store C" },
    ],
  } as const;

  const refreshColors = useCallback(() => {
    if (typeof document === "undefined") return;
    const style = getComputedStyle(document.documentElement);
    colorsRef.current = {
      accent: style.getPropertyValue("--accent").trim() || "#f0a830",
      text: style.getPropertyValue("--ink").trim() || "#f0a830",
      muted: style.getPropertyValue("--muted").trim() || "#9ca3af",
      line: style.getPropertyValue("--line").trim() || "#374151",
      bg: style.getPropertyValue("--bg").trim() || "#0b0b0b",
    };
    setTimeout(() => forceUpdate((n) => n + 1), 0);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)" as string);
    reducedMotionRef.current = mediaQuery.matches;
    const handler = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
      forceUpdate((n) => n + 1);
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    dprRef.current = window.devicePixelRatio || 1;
  }, []);

  useEffect(() => {
    refreshColors();
    window.addEventListener("resize", refreshColors);
    return () => window.removeEventListener("resize", refreshColors);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshColors]);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.parentElement?.getBoundingClientRect();
    if (!rect) return;
    canvas.width = rect.width * dprRef.current;
    canvas.height = Math.max(140, rect.height * 0.6) * dprRef.current;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${Math.max(140, rect.height * 0.6)}px`;
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  const drawUserIcon = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    color: string
  ) => {
    ctx.save();
    ctx.translate(x, y);
    const s = size / 24;
    ctx.scale(s, s);
    ctx.fillStyle = color;
    // Head
    ctx.beginPath();
    ctx.arc(0, -6, 5, 0, Math.PI * 2);
    ctx.fill();
    // Body - rounded rectangle
    ctx.beginPath();
    ctx.roundRect(-8, 2, 16, 16, 4);
    ctx.fill();
    ctx.restore();
  };

  const drawBotIcon = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    color: string
  ) => {
    ctx.save();
    ctx.translate(x, y);
    const s = size / 24;
    ctx.scale(s, s);
    ctx.fillStyle = color;
    // Rounded hexagon body
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3 - Math.PI / 6;
      const px = Math.cos(angle) * 10;
      const py = Math.sin(angle) * 10;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    // Eyes - white
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(-3, -2, 1.8, 0, Math.PI * 2);
    ctx.arc(3, -2, 1.8, 0, Math.PI * 2);
    ctx.fill();
    // Pupils
    ctx.fillStyle = "#1a1a1a";
    ctx.beginPath();
    ctx.arc(-3, -2, 0.8, 0, Math.PI * 2);
    ctx.arc(3, -2, 0.8, 0, Math.PI * 2);
    ctx.fill();
    // Antenna
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.lineTo(0, -17);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, -17, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#1a1a1a";
    ctx.stroke();
    ctx.restore();
  };

  const drawShopifyIcon = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    color: string
  ) => {
    ctx.save();
    ctx.translate(x, y);
    const s = size / 24;
    ctx.scale(s, s);
    ctx.fillStyle = color;
    // Official Shopify bag shape - more accurate
    ctx.beginPath();
    // Left side
    ctx.moveTo(-9, -4);
    ctx.lineTo(-9, 8);
    // Bottom left curve
    ctx.bezierCurveTo(-9, 11, -6, 12.5, -3, 12.5);
    // Bottom
    ctx.lineTo(3, 12.5);
    // Bottom right curve
    ctx.bezierCurveTo(6, 12.5, 9, 11, 9, 8);
    // Right side
    ctx.lineTo(9, -4);
    // Top right curve
    ctx.bezierCurveTo(9, -7, 6, -8.5, 3, -8.5);
    // Top
    ctx.lineTo(-3, -8.5);
    // Top left curve
    ctx.bezierCurveTo(-6, -8.5, -9, -7, -9, -4);
    ctx.closePath();
    ctx.fill();
    // Handle - official style
    ctx.strokeStyle = "#0a0a0a";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(-5, -4);
    ctx.bezierCurveTo(-5, -12, 5, -12, 5, -4);
    ctx.stroke();
    ctx.restore();
  };

  const drawNode = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    fillColor: string,
    label: string,
    isCenter: boolean,
    pulse: number,
    iconType: "merchant" | "botlab" | "store"
  ) => {
    const colors = colorsRef.current;
    const dpr = dprRef.current;
    if (!colors) return;
    ctx.save();

    // Outer glow for center node
    if (isCenter && pulse > 0) {
      const accentRgb = colors.accent.startsWith("#")
        ? parseInt(colors.accent.slice(1), 16)
        : 0xf0a830;
      const r = (accentRgb >> 16) & 0xff;
      const g = (accentRgb >> 8) & 0xff;
      const b = accentRgb & 0xff;
      const glowRadius = radius + 20 * pulse;
      const gradient = ctx.createRadialGradient(x, y, radius * 0.5, x, y, glowRadius);
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.18 * pulse})`);
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${0.06 * pulse})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.beginPath();
      ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    // Node background circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = fillColor;
    ctx.fill();

    // Subtle inner highlight
    ctx.beginPath();
    ctx.arc(x, y - radius * 0.3, radius * 0.6, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    ctx.fill();

    // Border
    ctx.strokeStyle = colors.line;
    ctx.lineWidth = 1.5 * dpr;
    ctx.stroke();
    ctx.restore();

    // Draw icon inside node
    const iconSize = radius * 1.1;
    if (iconType === "merchant") {
      drawUserIcon(ctx, x, y, iconSize, colors.bg);
    } else if (iconType === "botlab") {
      drawBotIcon(ctx, x, y, iconSize, colors.bg);
    } else {
      drawShopifyIcon(ctx, x, y, iconSize, colors.bg);
    }

    // Label
    ctx.font = `500 ${12 * dpr}px "Geist", system-ui, sans-serif`;
    ctx.fillStyle = colors.text;
    ctx.textAlign = "center";
    ctx.fillText(label, x, y + radius + 20 * dpr);
  };

  const drawPath = (
    ctx: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const colors = colorsRef.current;
    const dpr = dprRef.current;
    if (!colors) return;
    const cpX = (x1 + x2) / 2;
    const accentRgb = colors.accent.startsWith("#")
      ? parseInt(colors.accent.slice(1), 16)
      : 0xf0a830;
    const r = (accentRgb >> 16) & 0xff;
    const g = (accentRgb >> 8) & 0xff;
    const b = accentRgb & 0xff;

    // Solid base path
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(cpX, y1, cpX, (y1 + y2) / 2);
    ctx.quadraticCurveTo(cpX, y2, x2, y2);
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.18)`;
    ctx.lineWidth = 2.5 * dpr;
    ctx.lineCap = "round";
    ctx.stroke();

    // Animated dashed overlay
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(cpX, y1, cpX, (y1 + y2) / 2);
    ctx.quadraticCurveTo(cpX, y2, x2, y2);
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.45)`;
    ctx.lineWidth = 1.5 * dpr;
    ctx.lineCap = "round";
    ctx.setLineDash([10 * dpr, 14 * dpr]);
    ctx.lineDashOffset = -timeRef.current * 40;
    ctx.stroke();
    ctx.setLineDash([]);
  };

  const drawParticle = (
    ctx: CanvasRenderingContext2D,
    progress: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const colors = colorsRef.current;
    const dpr = dprRef.current;
    if (!colors) return;
    const cpX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    let px, py;
    if (progress < 0.5) {
      const t = progress * 2;
      px = x1 + (cpX - x1) * t;
      py = y1 + (midY - y1) * t;
    } else {
      const t = (progress - 0.5) * 2;
      px = cpX + (x2 - cpX) * t;
      py = midY + (y2 - midY) * t;
    }
    // Particle with trail effect
    const accentRgb = colors.accent.startsWith("#")
      ? parseInt(colors.accent.slice(1), 16)
      : 0xf0a830;
    const r = (accentRgb >> 16) & 0xff;
    const g = (accentRgb >> 8) & 0xff;
    const b = accentRgb & 0xff;

    // Outer glow
    ctx.beginPath();
    ctx.arc(px, py, 8 * dpr, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.25)`;
    ctx.fill();

    // Core
    ctx.beginPath();
    ctx.arc(px, py, 4.5 * dpr, 0, Math.PI * 2);
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fill();

    // Inner highlight
    ctx.beginPath();
    ctx.arc(px - 1.5 * dpr, py - 1.5 * dpr, 1.5 * dpr, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.fill();
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const colors = colorsRef.current;
    const dpr = dprRef.current;
    const reducedMotion = reducedMotionRef.current;
    if (!ctx || !colors) return;

    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, w, h);

    const merchant = {
      x: nodePositions.merchant.x * w,
      y: nodePositions.merchant.y * h,
      r: 24 * dpr,
    };
    const botlab = {
      x: nodePositions.botlab.x * w,
      y: nodePositions.botlab.y * h,
      r: 34 * dpr,
    };
    const stores = nodePositions.stores.map((s) => ({
      x: s.x * w,
      y: s.y * h,
      r: 22 * dpr,
      label: s.label,
    }));

    const pulse = reducedMotion ? 0 : (Math.sin(timeRef.current * 2) + 1) / 2 * 0.5;

    // Draw paths first (behind nodes)
    drawPath(ctx, merchant.x, merchant.y, botlab.x, botlab.y);
    stores.forEach((store) => {
      drawPath(ctx, botlab.x, botlab.y, store.x, store.y);
    });

    // Draw nodes
    drawNode(
      ctx,
      merchant.x,
      merchant.y,
      merchant.r,
      colors.text,
      nodePositions.merchant.label,
      false,
      0,
      "merchant"
    );
    drawNode(
      ctx,
      botlab.x,
      botlab.y,
      botlab.r,
      colors.accent,
      nodePositions.botlab.label,
      true,
      pulse,
      "botlab"
    );
    stores.forEach((store) => {
      drawNode(
        ctx,
        store.x,
        store.y,
        store.r,
        colors.text,
        store.label,
        false,
        0,
        "store"
      );
    });

    // Draw particles on top
    if (!reducedMotion) {
      const cycle = (timeRef.current * 0.1) % 1;
      drawParticle(ctx, cycle, merchant.x, merchant.y, botlab.x, botlab.y);

      stores.forEach((store, i) => {
        const offset = (i * 0.33) % 1;
        const storeProgress = (cycle + offset) % 1;
        if (storeProgress > 0.05) {
          drawParticle(ctx, storeProgress, botlab.x, botlab.y, store.x, store.y);
        }
      });
    }

    timeRef.current += 1 / 60;
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    resize();
    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [resize]);

  return (
    <div
      className="mt-6 rounded-xl border border-[var(--line)] bg-[var(--bg)] p-4 md:p-6"
      style={{ minHeight: 180 }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}

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
          {/* <FlowCanvas /> */}
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
