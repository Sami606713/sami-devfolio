"use client";

import { skills } from "@/constants/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
    SiPython,
    SiPytorch,
    SiScikitlearn,
    SiNumpy,
    SiPandas,
    SiPlotly,
    SiOpenai,
    SiFastapi,
    SiDocker,
    SiGit,
} from "react-icons/si";
import { FaBrain, FaCode, FaServer, FaCogs, FaRocket } from "react-icons/fa";
import { HiSparkles, HiChip, HiLightningBolt } from "react-icons/hi";

const iconMap: Record<string, any> = {
    SiPython, SiPytorch, SiScikitlearn, SiNumpy, SiPandas, SiPlotly, SiOpenai, SiFastapi, SiDocker, SiGit,
};

// Category configurations with colors and icons
const categoryConfig: Record<string, { icon: any; gradient: string; color: string; description: string }> = {
    "Machine Learning & AI": {
        icon: FaBrain,
        gradient: "from-purple-500 to-pink-500",
        color: "purple",
        description: "Core ML frameworks and data science tools for building intelligent systems"
    },
    "AI Frameworks & Tools": {
        icon: HiChip,
        gradient: "from-cyan-500 to-blue-500",
        color: "cyan",
        description: "Modern AI development stack for production-ready applications"
    },
    "MLOps & DevOps": {
        icon: FaServer,
        gradient: "from-green-500 to-emerald-500",
        color: "green",
        description: "Infrastructure and deployment tools for scalable ML systems"
    },
};

// Proficiency levels (for visual effect)
const proficiencyLevels: Record<string, number> = {
    "Python": 95, "PyTorch": 88, "Scikit-learn": 90, "NumPy": 92, "Pandas": 93,
    "Matplotlib": 85, "Seaborn": 82, "LangChain": 90, "LangGraph": 88, "FastAPI": 92,
    "Docker": 85, "MLOps": 80, "Git": 90, "DVC": 75,
};

export function Skills() {
    const { elementRef, isVisible } = useScrollAnimation();

    return (
        <section id="skills" className="relative py-32 lg:py-48 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: `${3 + (i % 3)}px`,
                            height: `${3 + (i % 3)}px`,
                            background: i % 2 === 0 ? 'rgba(168, 85, 247, 0.3)' : 'rgba(0, 229, 255, 0.3)',
                            top: `${15 + i * 10}%`,
                            right: `${5 + i * 8}%`,
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
                            <span className="text-xs font-bold uppercase tracking-widest text-purple-300">Technical Expertise</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Tech</span>{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Stack</span>
                        </h2>

                        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium">
                            The engineering core powering intelligent solutions
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="space-y-24 lg:space-y-32">
                        {skills.map((category, idx) => {
                            const config = categoryConfig[category.category] || {
                                icon: FaCode,
                                gradient: "from-gray-500 to-gray-600",
                                color: "gray",
                                description: ""
                            };
                            const CategoryIcon = config.icon;

                            return (
                                <div
                                    key={category.category}
                                    className="reveal"
                                    style={{ animationDelay: `${idx * 200}ms` }}
                                >
                                    <div className="flex flex-col gap-12">
                                        {/* Category Header */}
                                        <div className="relative">
                                            <div className={`absolute -inset-4 bg-gradient-to-r ${config.gradient} rounded-3xl blur-2xl opacity-10`} />

                                            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm">
                                                <div className="flex items-center gap-6">
                                                    {/* Category Icon */}
                                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg`}>
                                                        <CategoryIcon className="text-white text-2xl" />
                                                    </div>

                                                    <div>
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                                                                Module 0{idx + 1}
                                                            </span>
                                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-white/40 to-white/20" />
                                                            <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                                                                {category.items.length} Technologies
                                                            </span>
                                                        </div>
                                                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                                                            {category.category}
                                                        </h3>
                                                    </div>
                                                </div>

                                                <p className="text-sm text-white/50 font-medium max-w-sm md:text-right">
                                                    {config.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Skills Grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                            {category.items.map((skill, skillIdx) => {
                                                const Icon = iconMap[skill.icon];
                                                const proficiency = proficiencyLevels[skill.name] || 80;

                                                return (
                                                    <div
                                                        key={skill.name}
                                                        className="group relative"
                                                        style={{ transitionDelay: `${skillIdx * 50}ms` }}
                                                    >
                                                        {/* Card Glow */}
                                                        <div className={`absolute -inset-1 bg-gradient-to-r ${config.gradient} rounded-[24px] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                                                        <div className="relative h-full p-6 rounded-[20px] bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 hover:from-white/[0.08] transition-all duration-500 overflow-hidden">
                                                            {/* Hover Overlay */}
                                                            <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                                            <div className="relative flex flex-col items-center text-center gap-4">
                                                                {/* Icon Container */}
                                                                <div className="relative">
                                                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:border-white/20 transition-all duration-500 shadow-lg`}>
                                                                        {Icon ? (
                                                                            <Icon className="text-3xl text-white/50 group-hover:text-white transition-colors duration-300" />
                                                                        ) : (
                                                                            <FaCode className="text-3xl text-white/50 group-hover:text-white transition-colors duration-300" />
                                                                        )}
                                                                    </div>

                                                                    {/* Floating Badge */}
                                                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-white/20 to-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                        <HiLightningBolt className="text-[10px] text-white" />
                                                                    </div>
                                                                </div>

                                                                {/* Skill Name */}
                                                                <div className="space-y-2">
                                                                    <h4 className="text-sm font-bold uppercase tracking-wider text-white/70 group-hover:text-white transition-colors duration-300">
                                                                        {skill.name}
                                                                    </h4>

                                                                    {/* Proficiency Bar */}
                                                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                                                        <div
                                                                            className={`h-full bg-gradient-to-r ${config.gradient} rounded-full transition-all duration-1000`}
                                                                            style={{
                                                                                width: isVisible ? `${proficiency}%` : '0%',
                                                                                transitionDelay: `${500 + skillIdx * 100}ms`
                                                                            }}
                                                                        />
                                                                    </div>

                                                                    {/* Proficiency Label */}
                                                                    <span className="text-[10px] font-bold text-white/30 group-hover:text-white/50 transition-colors">
                                                                        {proficiency}% Proficiency
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-24 text-center">
                        <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm">
                            <FaRocket className="text-cyan-400" />
                            <p className="text-sm font-bold text-white/60">
                                Always learning, always building with cutting-edge technology
                            </p>
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
