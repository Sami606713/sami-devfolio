interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: "What's your typical project budget?",
    answer:
      "Projects range from $500 for scoped consulting to $5,000+ for full end-to-end ML systems. I'll give you a fixed quote after understanding your requirements — no hourly billing surprises.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most projects take 2–6 weeks depending on scope. I'll give you a clear timeline upfront and stick to it.",
  },
  {
    question: "Do you work with non-technical clients?",
    answer:
      "Yes. I translate complex ML concepts into business outcomes. You don't need to know what a transformer is — you need to know what problem it solves.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. I've worked as both a solo contractor and embedded within engineering teams. I adapt to your workflow (Slack, GitHub, Jira — whatever you use).",
  },
  {
    question: "What if I just need advice, not a full build?",
    answer:
      "I offer consulting calls for technical architecture reviews, ML strategy, and team guidance. Reach out via the contact form.",
  },
];

export function ServicesFAQ() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Common Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq) => (
            <article
              key={faq.question}
              className="bg-surface border border-white/[0.08] rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-base md:text-lg font-bold mb-3 text-foreground">
                {faq.question}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-muted">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
