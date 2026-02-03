"use client";

import { personalInfo } from "@/constants/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "./ui/Card";
import Image from "next/image";

export function About() {
    const { elementRef, isVisible } = useScrollAnimation();

    return (
        <section id="about" className="section py-20 lg:py-40">
            <div
                ref={elementRef}
                className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
                <div className="flex flex-col gap-20">
                    <div className="max-w-4xl">
                        <h2 className="section-title !text-left !mb-12 text-gradient">
                            THE <br /> PHILOSOPHY
                        </h2>
                        <p className="text-2xl md:text-4xl font-bold leading-tight opacity-90 mb-10">
                            Engineering intelligence at the intersection of <span className="text-accent">Logic</span> and <span className="text-accent">Scalability</span>.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
                        {/* Profile Card (Large Span) */}
                        <div className="lg:col-span-7">
                            <Card className="h-full flex flex-col md:flex-row gap-10 items-center">
                                <div className="w-full md:w-1/2 aspect-square relative rounded-2xl overflow-hidden border border-border-muted">
                                    <Image
                                        src="/profile.png"
                                        alt={personalInfo.name}
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 space-y-6">
                                    <h3 className="text-3xl font-black italic tracking-tighter uppercase">The Vision</h3>
                                    <p className="text-foreground-muted text-lg leading-relaxed">
                                        {personalInfo.bio}
                                    </p>
                                </div>
                            </Card>
                        </div>

                        {/* Stats Bento Grid */}
                        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {[
                                { label: "Experience", value: `${personalInfo.yearsOfExperience}+ Years`, desc: "In ML & Full-Stack" },
                                { label: "Research", value: "92.6%", desc: "SimpleQA Benchmark" },
                                { label: "Architecture", value: "Cloud-Native", desc: "Docker & Kubernetes" },
                            ].map((stat) => (
                                <Card key={stat.label} className="!p-10 flex justify-between items-center group">
                                    <div className="space-y-2">
                                        <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40 group-hover:text-accent transition-colors">{stat.label}</p>
                                        <p className="text-3xl font-black">{stat.value}</p>
                                        <p className="text-sm text-foreground-muted">{stat.desc}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-border-muted flex items-center justify-center group-hover:border-accent group-hover:rotate-45 transition-all">
                                        →
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
