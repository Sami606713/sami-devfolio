import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/components/blog/postsData";

export const metadata: Metadata = {
  title: "Writing",
  description: "Technical writing on ML, LLMs, RAG systems, and building AI products in production.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3 text-accent">Writing</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Technical Posts</h1>
          <p className="mt-3 text-base text-muted">
            Practical lessons from building ML systems in production — RAG, agents, MLOps, and AI products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-surface border border-white/[0.08] rounded-2xl p-7 hover:border-accent/30 transition-all"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-lg font-bold text-foreground leading-snug group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
