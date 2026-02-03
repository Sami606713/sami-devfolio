"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "./ui/Card";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaCheckCircle, FaRocket, FaTerminal } from "react-icons/fa";
import { getGitHubService, Project } from "@/services/github";
import { config } from "@/config";
import { featuredProjects } from "@/constants/data";

export function Projects() {
    const { elementRef, isVisible } = useScrollAnimation();
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const githubService = getGitHubService(config.github.token);
                const fetchedProjects = await githubService.getFeaturedProjects(featuredProjects, 20);
                setProjects(fetchedProjects);
            } catch (error) {
                console.error("Error loading projects:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="section py-20 lg:py-40">
            <div
                ref={elementRef}
                className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-20"}`}
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="section-title !text-left !mb-6 text-accent-gradient drop-shadow-sm uppercase">
                            PROJECTS
                        </h2>
                        <p className="text-xl md:text-2xl font-bold opacity-80">
                            A curated selection of industrial and research-driven AI systems.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-border-muted text-xs font-black uppercase tracking-widest">
                            <FaTerminal className="text-accent" /> Compiled {new Date().toLocaleDateString()}
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="grid md:grid-cols-2 gap-10">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-[400px] rounded-3xl bg-white/5 animate-pulse"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                        {projects.map((project, index) => (
                            <div key={project.id} className="group reveal" style={{ animationDelay: `${index * 150}ms` }}>
                                <Card className="flex flex-col h-full !p-0 border-white/10 group-hover:border-accent group-hover:bg-card-hover transition-all duration-500">
                                    {/* Visual Header */}
                                    <div className="h-2 bg-gradient-to-r from-accent to-transparent transition-all group-hover:h-3"></div>

                                    <div className="p-8 md:p-12 space-y-8 flex-1">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-4">
                                                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter group-hover:text-accent transition-colors">
                                                    {project.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-black tracking-widest uppercase rounded-lg">
                                                        {project.language}
                                                    </span>
                                                    {project.stars > 0 && (
                                                        <span className="px-3 py-1 bg-white/5 text-white/50 text-[10px] font-black tracking-widest uppercase rounded-lg flex items-center gap-2">
                                                            <FaStar className="text-yellow-500" /> {project.stars}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl opacity-20 group-hover:opacity-100 group-hover:text-accent group-hover:rotate-12 transition-all">
                                                <FaRocket />
                                            </div>
                                        </div>

                                        <p className="text-lg text-foreground-muted font-medium leading-relaxed line-clamp-4">
                                            {project.fullDescription || project.description}
                                        </p>

                                        {project.techStack && (
                                            <div className="flex flex-wrap gap-2 pt-4">
                                                {project.techStack.slice(0, 6).map(tech => (
                                                    <span key={tech} className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Footer Links */}
                                    <div className="flex border-t border-white/5 overflow-hidden">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 py-5 flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-colors border-r border-white/5"
                                            >
                                                <FaGithub className="text-xl" /> Code
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 py-5 flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest hover:bg-accent hover:text-black transition-colors"
                                            >
                                                <FaExternalLinkAlt /> Live
                                            </a>
                                        )}
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
