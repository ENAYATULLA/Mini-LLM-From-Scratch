import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, author } from "@/lib/site-config";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { ArrowRight, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Documentation for Mini LLM From Scratch — tokenization, embeddings, attention, training, and generation, explained.",
  alternates: { canonical: `${siteConfig.url}/documentation` },
};

const topics = [
  {
    title: "Tokenization",
    what: "How raw text becomes vocabulary IDs.",
    why: "Models operate on numbers, not characters — tokenization is the bridge.",
    href: "/playground",
  },
  {
    title: "Embeddings",
    what: "How token IDs become dense vectors.",
    why: "Vectors let the model represent meaning and relationships numerically.",
    href: "/architecture",
  },
  {
    title: "Self-attention",
    what: "How each token weighs the relevance of every other token.",
    why: "Attention is what lets the model use context, not just isolated words.",
    href: "/architecture",
  },
  {
    title: "Training & generation",
    what: "How the model learns, and how it produces text one token at a time.",
    why: "This closes the loop from raw text to a working, generative model.",
    href: "/pipeline",
  },
];

export default function DocumentationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Documentation", url: `${siteConfig.url}/documentation` },
        ]}
      />
      <section className="border-b border-border">
        <div className="mx-auto max-w-content px-6 py-24">
          <p className="mono-label text-signal">Documentation</p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-medium text-ink md:text-4xl">
            Understand every building block
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
            Each topic answers what it is, why it&apos;s needed, and how it&apos;s implemented
            in the repository — in plain language.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {topics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="focus-ring group bg-surface p-6 transition-colors hover:bg-surface-raised"
              >
                <h2 className="font-display text-base font-medium text-ink">{topic.title}</h2>
                <p className="mt-2 text-xs text-ink-faint">
                  <span className="text-ink-muted">What: </span>
                  {topic.what}
                </p>
                <p className="mt-1 text-xs text-ink-faint">
                  <span className="text-ink-muted">Why: </span>
                  {topic.why}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs text-ink-muted transition-colors group-hover:text-ink">
                  Explore
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <a
            href={author.repository}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring mt-10 inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-signal"
          >
            <Github size={16} />
            Read the full source on GitHub
          </a>
        </div>
      </section>
    </>
  );
}
