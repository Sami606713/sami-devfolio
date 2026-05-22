"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Startup", href: "/startup" },
  { label: "Research", href: "/research" },
  { label: "Writing", href: "/blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-12 bg-background transition-all duration-300 ${
        scrolled ? "border-b border-white/[0.08]" : "border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex-shrink-0 text-xl font-bold tracking-tight">
        <span className="text-accent">S.</span>
        <span className="text-foreground">amiullah</span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8 mx-auto">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-foreground ${
                isActive ? "text-accent" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Hire Me button */}
      <Link
        href="/contact"
        className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-accent text-accent rounded-lg hover:bg-accent hover:text-background transition-all ml-auto"
      >
        Hire Me →
      </Link>

      {/* Mobile hamburger */}
      <button
        className="md:hidden ml-auto p-2 text-foreground"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 flex flex-col gap-1 p-4 md:hidden bg-surface border-b border-white/[0.08]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "text-accent bg-accent/10"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-3 text-sm font-medium rounded-lg text-center border border-accent text-accent"
          >
            Hire Me →
          </Link>
        </div>
      )}
    </nav>
  );
}
