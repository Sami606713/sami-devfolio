import Image from "next/image";
import Link from "next/link";

export function AboutHero() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left — 60% */}
          <div className="flex-1 md:flex-[3]">
            <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-accent">
              About Me
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
              ML Engineer.{" "}
              <span className="text-accent">AI Builder.</span>{" "}
              Founder.
            </h1>

            <div className="mt-6 space-y-4">
              <p className="text-base leading-relaxed text-muted">
                I&apos;m Samiullah — an AI Engineer & Machine Learning Specialist
                with 16+ months of hands-on experience building and deploying
                production-grade AI solutions across computer vision, NLP, and
                full-stack AI development.
              </p>
              <p className="text-base leading-relaxed text-muted">
                I founded ConnectXeo (formerly TheBotLab) — a no-code AI agent
                platform for Shopify merchants. Building it taught me what
                separates a working notebook from a system that handles real
                customers at 2am.
              </p>
              <p className="text-base leading-relaxed text-muted">
                I&apos;m based in Pakistan and work with clients globally.
                I&apos;m currently available for freelance contracts,
                consulting, and full-time remote opportunities.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm bg-accent text-background hover:bg-accent/90 transition-all"
              >
                Download Resume →
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm border border-accent text-accent hover:bg-accent/10 transition-all"
              >
                Let&apos;s Work Together
              </Link>
            </div>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap gap-6">
              <a
                href="https://github.com/Sami606713"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                aria-label="GitHub profile"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sami-ullah-6326b9265/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn profile"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:sami606713@gmail.com"
                className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                aria-label="Send email"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-.9.01-.6.3-.8L12 13.09 23.7 4.657c.29.2.3-.1.3.8z" />
                </svg>
                Email
              </a>
            </div>
          </div>

          {/* Right — 40% photo card */}
          <div className="w-full md:flex-[2] md:max-w-sm flex flex-col items-center gap-6">
            {/* Circular photo with accent ring */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-br from-accent via-accent/40 to-transparent">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-surface">
                <Image
                  src="/branding/professional_profile.png"
                  alt="Samiullah"
                  fill
                  className="object-cover object-top rounded-full"
                  sizes="288px"
                  priority
                />
              </div>
            </div>

            {/* Info card below photo */}
            <div className="bg-surface border border-white/[0.08] rounded-2xl px-6 py-4 text-center w-full">
              <p className="font-bold text-base text-foreground">Samiullah</p>
              <p className="text-sm mt-0.5 text-muted">AI Engineer & ML Specialist</p>
              <p className="text-xs mt-1 text-accent">📍 Pakistan</p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-xs text-muted">Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
