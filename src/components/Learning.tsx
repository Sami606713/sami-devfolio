"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "./ui/Card";
import { FaGithub, FaBook, FaTerminal } from "react-icons/fa";
import { getGitHubService, Project } from "@/services/github";
import { config } from "@/config";
import { learningRepos } from "@/constants/data";

export function Learning() {
    const { elementRef, isVisible } = useScrollAnimation();
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const githubService = getGitHubService(config.github.token);
                const fetchedProjects = await githubService.getFeaturedProjects(learningRepos, 20);
                setProjects(fetchedProjects);
            } catch (error) {
                console.error("Error loading learning repos:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    return (
        <section id="learning" className="section py-20 lg:py-40">
            <div
                ref={elementRef}
                className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-20"}`}
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="section-title !text-left !mb-6 text-accent-gradient uppercase">Learning</h2>
                        <p className="text-xl md:text-2xl font-bold opacity-80 uppercase tracking-tighter">
                            Technical Deep Dives & Knowledge Repositories.
                        </p>
                    </div>
                </div>

                {loading ? (
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-64 rounded-3xl bg-white/5 animate-pulse"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {projects.map((project, index) => (
                            <div key={project.id} className="reveal" style={{ animationDelay: `${index * 100}ms` }}>
                                <Card className="flex flex-col h-full border-white/5 hover:border-accent hover:bg-white/[0.02] transition-all">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl opacity-40 group-hover:opacity-100 group-hover:text-accent group-hover:bg-accent/10 transition-all">
                                            <FaTerminal />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-black uppercase tracking-tighter group-hover:text-accent transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-foreground-muted font-medium text-sm leading-relaxed mb-8 flex-1">
                                        {project.description}
                                    </p>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-foreground-muted hover:text-accent transition-colors"
                                    >
                                        <FaGithub className="text-lg" /> Access Repository
                                    </a>
                                </Card>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
