"use client";

import { experience } from "@/constants/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FaRocket, FaBriefcase, FaFlask, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";

// Type configurations with colors and icons
const typeConfig: Record<string, { icon: any; gradient: string; color: string; label: string }> = {
    startup: {
        icon: FaRocket,
        gradient: "from-purple-500 to-pink-500",
        color: "purple",
        label: "Startup"
    },
    industry: {
        icon: FaBriefcase,
        gradient: "from-cyan-500 to-blue-500",
        color: "cyan",
        label: "Industry"
    },
    research: {
        icon: FaFlask,
        gradient: "from-green-500 to-emerald-500",
        color: "green",
        label: "Research"
    }
};

export function Experience() {
    const { elementRef, isVisible } = useScrollAnimation();

    return (
        <section id="experience" className="relative py-32 lg:py-48 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: `${3 + (i % 3)}px`,
                            height: `${3 + (i % 3)}px`,
                            background: i % 2 === 0 ? 'rgba(168, 85, 247, 0.3)' : 'rgba(0, 229, 255, 0.3)',
                            top: `${20 + i * 12}%`,
                            left: `${8 + i * 5}%`,
                            animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
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
                    {/* Header */}
                    <div className="text-center mb-20 lg:mb-28">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
                            <HiSparkles className="text-purple-400 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-purple-300">Professional Journey</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">My</span>{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Career</span>
                        </h2>

                        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium">
                            Building the future with AI, one experience at a time
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="max-w-5xl mx-auto relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
                            <div
                                className="w-full h-full bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-green-500/50 rounded-full"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transition: "opacity 1s ease-out 0.5s"
                                }}
                            />
                        </div>

                        <div className="space-y-16 md:space-y-24">
                            {experience.map((exp, index) => {
                                const config = typeConfig[exp.type] || typeConfig.industry;
                                const TypeIcon = config.icon;
                                const isEven = index % 2 === 0;

                                return (
                                    <div
                                        key={exp.id}
                                        className="reveal relative"
                                        style={{ animationDelay: `${index * 200}ms` }}
                                    >
                                        <div className={`flex flex-col md:flex-row gap-8 md:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                                            {/* Timeline Node */}
                                            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0">
                                                <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg`}>
                                                    <TypeIcon className="text-white text-lg" />
                                                    {/* Pulse Ring */}
                                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${config.gradient} animate-ping opacity-20`} />
                                                </div>
                                            </div>

                                            {/* Date Column */}
                                            <div className={`md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                                                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                                    <FaCalendarAlt className="text-white/40 text-sm" />
                                                    <span className="text-lg font-black uppercase tracking-tight text-white/70">
                                                        {exp.period}
                                                    </span>
                                                </div>

                                                {/* Type Badge - Desktop */}
                                                <div className={`hidden md:inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-gradient-to-r ${config.gradient} bg-opacity-10 border border-white/10 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                                    <TypeIcon className="text-white text-sm" />
                                                    <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                                                        {config.label}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content Column */}
                                            <div className={`md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                                                <div className="group relative">
                                                    {/* Card Glow */}
                                                    <div className={`absolute -inset-2 bg-gradient-to-r ${config.gradient} rounded-[28px] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                                                    <div className="relative p-8 rounded-[24px] bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 overflow-hidden">
                                                        {/* Background Pattern */}
                                                        <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${config.gradient} opacity-5 rounded-bl-full`} />

                                                        <div className="relative space-y-6">
                                                            {/* Header */}
                                                            <div className="space-y-3">
                                                                <div className="flex items-start justify-between gap-4">
                                                                    <div className="flex items-center gap-3">
                                                                        {/* Company Initial */}
                                                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white font-black text-lg shadow-lg`}>
                                                                            {exp.company.charAt(0)}
                                                                        </div>
                                                                        <div>
                                                                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight group-hover:text-white transition-colors">
                                                                                {exp.position}
                                                                            </h3>
                                                                            <p className="text-sm font-bold text-white/50 italic">
                                                                                {exp.company}
                                                                            </p>
                                                                        </div>
                                                                    </div>

                                                                    {/* Type Badge - Mobile */}
                                                                    <div className={`md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${config.gradient}`}>
                                                                        <TypeIcon className="text-white text-[10px]" />
                                                                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                                                                            {config.label}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Description */}
                                                            <p className="text-base md:text-lg text-white/50 leading-relaxed font-medium">
                                                                {exp.description}
                                                            </p>

                                                            {/* Bottom Accent */}
                                                            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                                                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${config.gradient}`} />
                                                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                                                                    Experience #{experience.length - index}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Timeline End Node */}
                        <div className="absolute left-0 md:left-1/2 bottom-0 md:-translate-x-1/2 translate-y-8">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                                <HiLightningBolt className="text-white text-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-24 text-center">
                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                                    <FaRocket className="text-white text-sm" />
                                </div>
                                <p className="text-sm font-bold text-white/60">
                                    Open to new opportunities and exciting collaborations
                                </p>
                            </div>
                            <a
                                href="#contact"
                                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                            >
                                <span>Get in Touch</span>
                                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                            </a>
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
            `}</style>
        </section>
    );
}
