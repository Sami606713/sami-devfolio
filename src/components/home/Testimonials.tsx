const testimonials = [
  {
    quote:
      "Samiullah delivered a production RAG system that actually works in the real world — not just a demo. He understood the business context, not just the code.",
    name: "Client",
    role: "Startup Founder",
    initials: "SF",
  },
  {
    quote:
      "The acne detection model he built hit 90%+ accuracy on our validation set. What impressed me more was how quickly he identified that our augmentation strategy was wrong.",
    name: "Team Lead",
    role: "Emulxion.ai",
    initials: "TL",
  },
  {
    quote:
      "Clear communication, fast iteration, and he doesn't disappear after delivery. Rare combination for an AI contractor.",
    name: "Product Manager",
    role: "SaaS Company",
    initials: "PM",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3 text-accent">Feedback</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What People Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-background border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-5"
            >
              {/* Quote mark */}
              <span className="text-4xl leading-none text-accent/30 font-serif select-none">&ldquo;</span>

              <p className="text-sm leading-relaxed text-muted flex-1">{t.quote}</p>

              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-xs font-bold text-accent">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Names anonymized at client request. References available on demand.
        </p>
      </div>
    </section>
  );
}
