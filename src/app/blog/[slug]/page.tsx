import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/components/blog/postsData";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.content?.split("\n\n") ?? [];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-6"
        >
          ← Back to Writing
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose-custom">
          {paragraphs.map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="text-xl font-bold text-foreground mt-10 mb-4">
                  {block.slice(3)}
                </h2>
              );
            }
            if (block.startsWith("### ")) {
              return (
                <h3 key={i} className="text-lg font-semibold text-foreground mt-8 mb-3">
                  {block.slice(4)}
                </h3>
              );
            }
            if (block.startsWith("```")) {
              const lines = block.split("\n");
              const code = lines.slice(1, lines.lastIndexOf("```")).join("\n");
              return (
                <pre key={i} className="bg-surface-2 border border-white/[0.08] rounded-xl p-5 overflow-x-auto my-6">
                  <code className="text-sm text-foreground/90 font-mono">{code}</code>
                </pre>
              );
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="list-none flex flex-col gap-2 my-4">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                      <span className="text-accent mt-0.5">→</span>
                      {item.slice(2)}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.startsWith("1. ")) {
              const items = block.split("\n").filter((l) => /^\d+\./.test(l));
              return (
                <ol key={i} className="flex flex-col gap-2 my-4">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                      <span className="text-accent font-bold min-w-[1.2rem]">{j + 1}.</span>
                      {item.replace(/^\d+\.\s*/, "")}
                    </li>
                  ))}
                </ol>
              );
            }
            if (block.trim() === "") return null;
            return (
              <p key={i} className="text-sm leading-relaxed text-muted my-3">
                {block}
              </p>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <p className="text-sm text-muted mb-4">
            Working on something similar? I&apos;m available for consulting and contracts.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-3 rounded-xl text-sm font-semibold bg-accent text-background hover:bg-accent/90 transition-all"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </div>
  );
}
