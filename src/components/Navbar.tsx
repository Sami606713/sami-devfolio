"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/constants/data";

const navLinks = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Startup", href: "startup" },
    { name: "Research", href: "research" },
    { name: "Contact", href: "contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section detection
            const sections = navLinks.map(link => link.href);
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Detect if section is in view
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    if (!mounted) return null;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${scrolled ? "py-4" : "py-10"}`}>
            <div className={`max-w-[1400px] mx-auto flex items-center justify-between transition-all duration-500 ${scrolled ? "" : "border-b border-white/10 pb-8"}`}>
                {/* Logo */}
                <a
                    href="#"
                    className="group"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                >
                    <span className="text-xl md:text-2xl font-black italic tracking-tighter uppercase flex items-center gap-2">
                        {personalInfo.name} <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                    </span>
                </a>

                {/* Desktop Menu - Always centered when scrolled */}
                <div className={`hidden md:flex items-center gap-1 transition-all duration-500 ${scrolled
                        ? "fixed top-6 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-full shadow-2xl z-[60] w-auto max-w-[90vw] justify-center"
                        : "relative"
                    }`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={`#${link.href}`}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className={`px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-full whitespace-nowrap ${activeSection === link.href
                                    ? "bg-accent text-black"
                                    : "text-foreground-muted hover:text-foreground hover:bg-white/5"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right: Contact Trigger */}
                <div className={`hidden md:block transition-all duration-500 ${scrolled ? "opacity-0 translate-x-10 pointer-events-none" : "opacity-100 translate-x-0"}`}>
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, "contact")}
                        className="text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-black transition-all"
                    >
                        Get in touch
                    </a>
                </div>

                {/* Mobile Toggle Placeholder */}
                <div className="md:hidden flex flex-col gap-1.5 p-2">
                    <div className="w-6 h-[2px] bg-accent"></div>
                    <div className="w-4 h-[2px] bg-accent"></div>
                </div>
            </div>
        </nav>
    );
}
