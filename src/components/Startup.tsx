"use client";

import { startup } from "@/constants/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FaRocket, FaShieldAlt, FaSearch, FaCogs, FaPlay, FaArrowRight, FaDatabase, FaCheck, FaUsers, FaBrain, FaCloudUploadAlt, FaComments, FaChartLine, FaMagic, FaLightbulb, FaGlobe } from "react-icons/fa";
import { HiSparkles, HiLightningBolt, HiCube, HiChip } from "react-icons/hi";

// Simple, friendly feature descriptions for non-technical users
const friendlyFeatures = [
    {
        icon: FaBrain,
        title: "Smart AI Assistants",
        simpleDesc: "Create intelligent helpers that understand your business",
        benefit: "Like having a smart employee available 24/7",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        icon: FaCloudUploadAlt,
        title: "Learn From Your Data",
        simpleDesc: "Upload documents, websites, or files - AI learns from them",
        benefit: "Your AI becomes an expert on YOUR business",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: FaComments,
        title: "Natural Conversations",
        simpleDesc: "Chat with AI like you chat with a colleague",
        benefit: "No complex commands, just talk naturally",
        gradient: "from-green-500 to-emerald-500"
    },
    {
        icon: FaShieldAlt,
        title: "Enterprise Security",
        simpleDesc: "Your data stays private and protected",
        benefit: "Bank-level security for peace of mind",
        gradient: "from-orange-500 to-red-500"
    }
];

// How it works steps - super simple
const howItWorks = [
    { step: "1", title: "Create Your Agent", desc: "Name it, customize it, make it yours", icon: FaMagic },
    { step: "2", title: "Feed It Knowledge", desc: "Upload your docs, PDFs, websites", icon: FaCloudUploadAlt },
    { step: "3", title: "Start Asking", desc: "Chat naturally, get smart answers", icon: FaComments },
    { step: "4", title: "Watch It Work", desc: "Your AI handles queries automatically", icon: FaRocket }
];

// Value propositions for different audiences
const valueProps = [
    { icon: FaUsers, label: "For Teams", value: "Collaborate with AI" },
    { icon: FaLightbulb, label: "For Founders", value: "Scale without hiring" },
    { icon: FaGlobe, label: "For Enterprise", value: "Deploy anywhere" }
];

export function Startup() {
    const { elementRef, isVisible } = useScrollAnimation();

    return (
        <section id="startup" className="relative py-32 lg:py-48 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full" />

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/40"
                        style={{
                            top: `${15 + i * 10}%`,
                            left: `${5 + i * 11}%`,
                            animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                            animationDelay: `${i * 0.4}s`,
                        }}
                    />
                ))}
            </div>

            <div className="section relative z-10">
                <div
                    ref={elementRef}
                    className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                >
                    <div className="flex flex-col gap-20 lg:gap-28">
                        {/* Hero Header */}
                        <div className="text-center max-w-4xl mx-auto space-y-8">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
                                <div className="relative">
                                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                                    <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-purple-300">Production Ready • Live Now</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                                <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">THE</span>{" "}
                                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">BOT</span>
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">LAB</span>
                            </h2>

                            {/* Simple Value Proposition */}
                            <div className="space-y-4">
                                <p className="text-2xl md:text-3xl font-bold text-white/80">
                                    Build AI Assistants That <span className="text-cyan-400">Actually Understand</span> Your Business
                                </p>
                                <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
                                    No coding required. Just upload your data, and get a smart AI that knows your business inside out.
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap justify-center gap-6 pt-4">
                                {valueProps.map((prop, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 hover:bg-white/[0.08] transition-all duration-300"
                                    >
                                        <prop.icon className="text-purple-400 text-lg" />
                                        <div className="text-left">
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">{prop.label}</p>
                                            <p className="text-sm font-bold text-white">{prop.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How It Works - Simple Steps */}
                        <div className="space-y-10">
                            <div className="text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                                    <HiLightningBolt className="text-cyan-400" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Super Simple</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                                    How It{" "}
                                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Works</span>
                                </h3>
                            </div>

                            <div className="grid md:grid-cols-4 gap-6">
                                {howItWorks.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="relative group"
                                        style={{ transitionDelay: `${idx * 100}ms` }}
                                    >
                                        {/* Connector Line */}
                                        {idx < howItWorks.length - 1 && (
                                            <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/30 to-transparent z-0" />
                                        )}

                                        <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 hover:from-white/[0.08] transition-all duration-500 text-center">
                                            {/* Step Number */}
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-cyan-500/30">
                                                {item.step}
                                            </div>

                                            {/* Icon */}
                                            <div className="w-16 h-16 mx-auto mt-4 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                                <item.icon className="text-2xl text-cyan-400" />
                                            </div>

                                            <h4 className="text-lg font-black uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-white/50 font-medium">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Main Features - Visual Cards */}
                        <div className="space-y-10">
                            <div className="text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                                    <HiSparkles className="text-purple-400" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-purple-400">What You Get</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                                    Powerful Features,{" "}
                                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Simple to Use</span>
                                </h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                                {friendlyFeatures.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="relative group"
                                        style={{ transitionDelay: `${idx * 100}ms` }}
                                    >
                                        {/* Glow Effect */}
                                        <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-[28px] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

                                        <div className="relative h-full p-8 md:p-10 rounded-[24px] bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500 overflow-hidden">
                                            {/* Background Pattern */}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-50" />

                                            <div className="relative flex flex-col md:flex-row gap-6 items-start">
                                                {/* Icon */}
                                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                                    <feature.icon className="text-2xl text-white" />
                                                </div>

                                                <div className="flex-1 space-y-3">
                                                    <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight group-hover:text-white transition-colors">
                                                        {feature.title}
                                                    </h4>
                                                    <p className="text-lg text-white/70 font-medium">
                                                        {feature.simpleDesc}
                                                    </p>

                                                    {/* Benefit Tag */}
                                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                                        <FaCheck className="text-green-400 text-sm" />
                                                        <span className="text-sm font-bold text-white/60">
                                                            {feature.benefit}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-[32px] blur-xl" />

                            <div className="relative p-10 md:p-16 rounded-[28px] bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden">
                                {/* Background Elements */}
                                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl" />
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-2xl" />

                                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                                    <div className="text-center lg:text-left space-y-4 max-w-2xl">
                                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                                            Ready to{" "}
                                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                                Transform
                                            </span>{" "}
                                            Your Business?
                                        </h3>
                                        <p className="text-lg text-white/50 font-medium">
                                            Join hundreds of businesses already using TheBotLab to automate and scale their operations with AI.
                                        </p>

                                        {/* Trust Indicators */}
                                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                                            {["No Credit Card", "Free Trial", "Setup in 5 mins"].map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <FaCheck className="text-green-400" />
                                                    <span className="text-sm font-bold text-white/60">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href={startup.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black uppercase tracking-wider text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                                        >
                                            <span>Get Started Free</span>
                                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />

                                            {/* Shimmer Effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                        </a>

                                        <a
                                            href={startup.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-8 py-4 rounded-2xl bg-white/5 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <FaPlay className="text-sm" />
                                            <span>Watch Demo</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Tech Stack Footer */}
                                <div className="mt-12 pt-8 border-t border-white/5">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 text-center mb-6">
                                        Powered by industry-leading technology
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        {startup.techStack.map((tech, idx) => (
                                            <div
                                                key={idx}
                                                className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                                            >
                                                <span className="text-xs font-bold uppercase tracking-wider text-white/40 hover:text-white/70 transition-colors">
                                                    {tech}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
                    50% { transform: translateY(-15px) scale(1.1); opacity: 0.7; }
                }
            `}</style>
        </section>
    );
}
