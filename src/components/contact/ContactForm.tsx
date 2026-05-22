"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  service: string;
  description: string;
  budget: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  service: "",
  description: "",
  budget: "",
};

const inputClass =
  "w-full bg-surface-2 border border-white/[0.08] rounded-xl px-4 py-3 text-foreground outline-none focus:border-accent transition-colors text-sm";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://formspree.io/f/mzdwgawv", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email me directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-surface border border-white/[0.08] rounded-2xl p-8 flex flex-col items-center justify-center text-center py-16">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mb-6 bg-accent/10 text-accent"
          aria-hidden="true"
        >
          ✓
        </div>
        <h2 className="text-2xl font-bold mb-2 text-foreground">Message sent!</h2>
        <p className="text-base mb-8 text-muted">
          I&apos;ll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(initialState);
          }}
          className="text-sm font-medium underline underline-offset-2 text-accent hover:opacity-70 transition-opacity"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface border border-white/[0.08] rounded-2xl p-8">
      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-2 text-foreground">
              Service
            </label>
            <select
              id="service"
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className={`${inputClass} ${form.service === "" ? "text-muted" : "text-foreground"}`}
            >
              <option value="" disabled className="text-muted">
                Select a service...
              </option>
              <option value="ml-model">ML Model Development</option>
              <option value="computer-vision">Computer Vision System</option>
              <option value="rag-llm">RAG / LLM Application</option>
              <option value="ai-agent">AI Agent / Automation</option>
              <option value="mlops">MLOps Pipeline</option>
              <option value="fullstack-ai">Full-Stack AI Product</option>
              <option value="consulting">Consulting / Code Review</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2 text-foreground">
              Project Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              placeholder="Describe your project — what problem are you solving, what do you have so far, and what outcome do you need?"
              value={form.description}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Budget Range */}
          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-2 text-foreground">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              required
              value={form.budget}
              onChange={handleChange}
              className={`${inputClass} ${form.budget === "" ? "text-muted" : "text-foreground"}`}
            >
              <option value="" disabled className="text-muted">
                Select budget range...
              </option>
              <option value="under-300">Under $300</option>
              <option value="300-800">$300 – $800</option>
              <option value="800-2000">$800 – $2,000</option>
              <option value="2000-5000">$2,000 – $5,000</option>
              <option value="5000+">$5,000+</option>
              <option value="discuss">Not sure — let&apos;s talk</option>
            </select>
          </div>

          {error && (
            <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl font-semibold text-sm bg-accent text-background hover:bg-accent/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending…" : "Send Message →"}
          </button>
        </div>
      </form>
    </div>
  );
}
