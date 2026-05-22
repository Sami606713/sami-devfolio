"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Sami606713", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sami-ullah-6326b9265/", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:sami606713@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/[0.08] py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <p className="text-xl font-bold mb-1">
              <span className="text-accent">S.</span>
              <span className="text-foreground">amiullah</span>
            </p>
            <p className="text-sm text-muted">
              Building AI systems that go to production.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 transition-all"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="pt-6 text-center text-sm text-muted border-t border-white/[0.08]">
          © 2026 Samiullah. Built with Next.js &amp; Tailwind.
        </div>
      </div>
    </footer>
  );
}
