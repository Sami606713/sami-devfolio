"use client";

import { useState } from "react";
import { personalInfo } from "@/constants/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "./ui/Card";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

export function Contact() {
    const { elementRef, isVisible } = useScrollAnimation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="contact" className="section py-20 lg:py-60">
            <div
                ref={elementRef}
                className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-20"}`}
            >
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-40 items-start">
                    {/* Left: Big Text */}
                    <div className="space-y-12">
                        <h2 className="section-title !text-left !mb-6 text-accent-gradient uppercase">Contact</h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                            Let's build the <br /> <span className="text-accent">Future</span> together.
                        </h3>
                        <div className="space-y-6">
                            <p className="text-xl text-foreground-muted font-medium">Looking for collaborations, research partnerships, or just want to talk shop about ML?</p>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="inline-flex items-center gap-4 text-2xl font-black uppercase tracking-tighter hover:text-accent transition-colors"
                            >
                                <FaEnvelope className="text-accent" /> {personalInfo.email}
                            </a>
                        </div>
                    </div>

                    {/* Right: Minimal Form */}
                    <Card className="!p-8 md:!p-12 bg-white/[0.02] border-white/5">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors font-bold text-xl"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors font-bold text-xl"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors font-bold text-xl resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full btn-shimmer flex items-center justify-center gap-4 py-6 text-xl"
                            >
                                <FaPaperPlane />
                                {status === "sending" ? "TRANSMITTING..." : "SEND MESSAGE"}
                            </button>

                            {status === "success" && (
                                <p className="text-center text-accent font-black uppercase tracking-widest animate-pulse">
                                    Transmission Successful.
                                </p>
                            )}
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
}
