"use client";

import { research } from "@/constants/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState, useRef } from "react";
import { FaBrain, FaRocket, FaCogs, FaLayerGroup, FaChartBar, FaTrophy, FaArrowRight, FaStar } from "react-icons/fa";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";

// Animated Counter Hook
function useCounter(end: number, duration: number = 2000, isVisible: boolean) {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
        if (!isVisible) return;

        const startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            countRef.current = Math.floor(end * easeOut);
            setCount(countRef.current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return count;
}

// Icon mapping for breakthroughs
const breakthroughIcons = [FaRocket, FaCogs, FaLayerGroup, HiLightningBolt];

export function Research() {
    const { elementRef, isVisible } = useScrollAnimation();
    const accuracyCount = useCounter(92.6, 2000, isVisible);
    const judgeCount = useCounter(89, 2000, isVisible);

    return (
        <section id="research" className="relative py-32 lg:py-48 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-to-tl from-purple-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full" />

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-cyan-400/30"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 12}%`,
                            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                            animationDelay: `${i * 0.3}s`,
                        }}
                    />
                ))}
            </div>

            <div className="section relative z-10">
                <div
                    ref={elementRef}
                    className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <div className="flex flex-col gap-16 lg:gap-24">
                        {/* Header Section */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm">
                                <HiSparkles className="text-cyan-400 animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Published Research • 2025</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                                <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">The</span>{" "}
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Research</span>
                            </h2>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                                    <FaChartBar className="text-cyan-400" />
                                    <p className="text-sm md:text-base font-bold uppercase tracking-wider text-white/60">Benchmark: SimpleQA (n=1000)</p>
                                </div>
                                <div className="h-[2px] flex-1 bg-gradient-to-r from-white/20 via-cyan-500/30 to-transparent rounded-full" />
                            </div>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Hero Stats Card */}
                            <div className="lg:col-span-2 relative group">
                                {/* Card Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl overflow-hidden shadow-2xl">
                                    {/* Header */}
                                    <div className="relative p-8 md:p-12 border-b border-white/5">
                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                        <div className="relative">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                                        <FaBrain className="text-white text-xl" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">Framework</p>
                                                        <p className="text-lg font-black text-white/80">State-of-the-Art</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-400">Published</span>
                                                </div>
                                            </div>

                                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-6 bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-transparent">
                                                {research.shortTitle || "ODS-M FRAMEWORK"}
                                            </h3>
                                            <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed max-w-3xl">
                                                {research.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
                                        {research.results.map((res, idx) => (
                                            <div
                                                key={idx}
                                                className="relative p-8 space-y-4 hover:bg-white/[0.03] transition-all duration-500 group/stat"
                                                style={{ transitionDelay: `${idx * 100}ms` }}
                                            >
                                                {/* Hover Glow */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500" />

                                                <p className="relative text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 group-hover/stat:text-cyan-400/70 transition-colors duration-300">
                                                    {res.benchmark}
                                                </p>
                                                <div className="relative space-y-3">
                                                    <p className="text-4xl md:text-5xl font-black bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                                                        {idx === 0 ? `${accuracyCount.toFixed(1)}%` : idx === 1 ? `${judgeCount}%` : res.value}
                                                    </p>
                                                    {res.highlight && (
                                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                                                            <FaTrophy className="text-cyan-400 text-[10px]" />
                                                            <span className="text-[9px] font-bold uppercase text-cyan-400 tracking-wider">SOTA Result</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Comparison Sidebar */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-b from-purple-500/20 via-indigo-500/20 to-cyan-500/20 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative h-full rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-xl p-8 shadow-2xl flex flex-col">
                                    <div className="space-y-2 mb-8">
                                        <div className="flex items-center gap-2">
                                            <FaStar className="text-yellow-400 text-sm" />
                                            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Performance Comparison</h4>
                                        </div>
                                        <p className="text-2xl font-black uppercase bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                            Benchmark Leaders
                                        </p>
                                    </div>

                                    <div className="space-y-6 flex-1 flex flex-col justify-center">
                                        {research.comparisons.map((comp, idx) => (
                                            <div
                                                key={idx}
                                                className={`space-y-3 p-4 rounded-xl transition-all duration-500 ${idx === 0 ? "bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20" : "hover:bg-white/[0.02]"}`}
                                                style={{ transitionDelay: `${idx * 150}ms` }}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-2">
                                                        {idx === 0 && <FaTrophy className="text-cyan-400 text-sm" />}
                                                        <p className={`text-xs font-bold uppercase tracking-wider ${idx === 0 ? "text-cyan-400" : "text-white/40"}`}>
                                                            {comp.name}
                                                        </p>
                                                    </div>
                                                    <p className={`text-xl font-black ${idx === 0 ? "text-white" : "text-white/60"}`}>
                                                        {comp.accuracy}
                                                    </p>
                                                </div>
                                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full transition-all duration-1000 rounded-full relative overflow-hidden ${idx === 0 ? "bg-gradient-to-r from-cyan-500 to-blue-500" : "bg-white/10"}`}
                                                        style={{
                                                            width: isVisible ? comp.accuracy : "0%",
                                                            transitionDelay: `${500 + idx * 200}ms`,
                                                        }}
                                                    >
                                                        {idx === 0 && (
                                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Link */}
                                    <div className="mt-8 pt-6 border-t border-white/5">
                                        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-sm uppercase tracking-wider hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 group/btn">
                                            <span>View Full Paper</span>
                                            <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Breakthroughs Grid */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                                    <HiLightningBolt className="text-white text-lg" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    Key Breakthroughs
                                </h3>
                                <div className="h-[2px] flex-1 bg-gradient-to-r from-purple-500/30 to-transparent rounded-full" />
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {research.breakthroughs.map((item, idx) => {
                                    const IconComponent = breakthroughIcons[idx % breakthroughIcons.length];
                                    return (
                                        <div
                                            key={idx}
                                            className="relative group"
                                            style={{ transitionDelay: `${idx * 100}ms` }}
                                        >
                                            {/* Card Glow */}
                                            <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-[24px] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />

                                            <div className="relative h-full p-8 rounded-[22px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-500 overflow-hidden">
                                                {/* Hover Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                <div className="relative">
                                                    {/* Icon */}
                                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-500 shadow-lg shadow-cyan-500/5">
                                                        <IconComponent className="text-cyan-400 text-xl group-hover:text-cyan-300 transition-colors" />
                                                    </div>

                                                    {/* Number Badge */}
                                                    <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                                        <span className="text-xs font-bold text-white/30">0{idx + 1}</span>
                                                    </div>

                                                    <h5 className="text-lg font-black uppercase tracking-tight mb-4 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                                                        {item.title}
                                                    </h5>
                                                    <p className="text-sm text-white/40 font-medium leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Technologies Tags */}
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {research.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-white/50 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
                    50% { transform: translateY(-20px) scale(1.1); opacity: 0.6; }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </section>
    );
}
