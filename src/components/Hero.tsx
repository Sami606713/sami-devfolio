"use client";

import { personalInfo, socialLinks } from "@/constants/data";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaArrowDown, FaPlay } from "react-icons/fa";
import { HiSparkles, HiCode, HiLightningBolt } from "react-icons/hi";
import { useEffect, useState } from "react";

const iconMap: Record<string, any> = {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
};

// Quick stats to showcase
const quickStats = [
    { value: "2+", label: "Years Experience" },
    { value: "50+", label: "Projects Built" },
    { value: "92.6%", label: "Research Accuracy" },
];

// Roles for typewriter effect
const roles = [
    "ML Engineer",
    "AI Developer",
    "Researcher",
    "Problem Solver"
];

export function Hero() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedRole, setDisplayedRole] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Typewriter effect
    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayedRole.length < currentRole.length) {
                    setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayedRole.length > 0) {
                    setDisplayedRole(displayedRole.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayedRole, isDeleting, currentRoleIndex]);

    const scrollToProjects = () => {
        const element = document.querySelector("#projects");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToNext = () => {
        const element = document.querySelector("#skills");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute top-20 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-purple-500/15 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full" />

                {/* Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

                {/* Floating Particles */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: `${4 + (i % 3) * 2}px`,
                            height: `${4 + (i % 3) * 2}px`,
                            background: i % 2 === 0 ? 'rgba(0, 229, 255, 0.4)' : 'rgba(168, 85, 247, 0.4)',
                            top: `${10 + i * 7}%`,
                            left: `${5 + i * 8}%`,
                            animation: `float ${4 + i * 0.3}s ease-in-out infinite`,
                            animationDelay: `${i * 0.2}s`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto w-full pt-32 pb-20">
                <div className="flex flex-col gap-12 reveal">
                    {/* Top: Availability Badge */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-sm group hover:border-green-400/50 transition-all duration-300">
                            <div className="relative">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-400 block animate-pulse" />
                                <span className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
                            </div>
                            <span className="text-sm font-bold text-green-400 tracking-wide">Available for new opportunities</span>
                            <HiSparkles className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Main Name */}
                        <div className="space-y-4">
                            <h1 className="text-[clamp(4rem,12vw,10rem)] leading-[0.85] font-black tracking-tighter">
                                <span className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                                    SAMI
                                </span>
                                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    ULLAH
                                </span>
                            </h1>

                            {/* Animated Role */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
                                <div className="text-2xl md:text-3xl font-bold text-white/80">
                                    <span>{displayedRole}</span>
                                    <span className="inline-block w-[3px] h-7 bg-cyan-400 ml-1 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle: Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 items-end">
                        <div className="space-y-10">
                            {/* Title & Description */}
                            <div className="space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                                    <span className="text-white">{personalInfo.title.split('&')[0]}</span>
                                    <span className="text-cyan-400">&</span>
                                    <span className="text-white">{personalInfo.title.split('&')[1]}</span>
                                </h2>
                                <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed font-medium">
                                    {personalInfo.tagline}
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-6">
                                {quickStats.map((stat, idx) => (
                                    <div
                                        key={idx}
                                        className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-white/[0.08] transition-all duration-300"
                                    >
                                        <span className="text-2xl md:text-3xl font-black bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                            {stat.value}
                                        </span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-white/40 group-hover:text-white/60 transition-colors">
                                            {stat.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={scrollToProjects}
                                    className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden"
                                >
                                    <span className="relative z-10">Explore Work</span>
                                    <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                    {/* Shimmer */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                </button>

                                <a
                                    href={personalInfo.resumeUrl}
                                    className="group px-8 py-4 rounded-2xl bg-white/5 border border-white/20 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-300 font-bold flex items-center gap-3"
                                >
                                    <FaPlay className="text-sm text-cyan-400" />
                                    <span>Resume</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col items-start lg:items-end gap-10">
                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social, idx) => {
                                    const Icon = iconMap[social.icon];
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300"
                                            aria-label={social.name}
                                            style={{ animationDelay: `${idx * 100}ms` }}
                                        >
                                            {/* Glow */}
                                            <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <Icon className="relative text-2xl text-white/60 group-hover:text-cyan-400 transition-colors" />
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Location Badge */}
                            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-1">Based In</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">🇵🇰</span>
                                    <p className="text-xl font-bold text-white">{personalInfo.location}</p>
                                </div>
                            </div>

                            {/* Quick Info Card */}
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm max-w-sm">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                        <HiLightningBolt className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white mb-1">Currently Building</p>
                                        <p className="text-sm text-white/50">TheBotLab - Enterprise AI Agent Platform</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                <button
                    onClick={scrollToNext}
                    className="group flex flex-col items-center gap-2 text-white/30 hover:text-cyan-400 transition-colors"
                >
                    <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
                    <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
                        <div className="w-1.5 h-3 rounded-full bg-current animate-bounce" />
                    </div>
                </button>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
                    50% { transform: translateY(-25px) scale(1.2); opacity: 0.8; }
                }
            `}</style>
        </section>
    );
}
