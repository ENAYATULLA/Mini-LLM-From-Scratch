import type { Metadata } from "next";
import { siteConfig, author } from "@/lib/site-config";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "Planned direction for Mini LLM From Scratch.",
  alternates: { canonical: `${siteConfig.url}/roadmap` },
};

const roadmap = [
  { status: "Done", label: "Word-level tokenizer" },
  { status: "Done", label: "Decoder-only Transformer implementation" },
  { status: "Done", label: "Training loop with checkpointing" },
  { status: "Done", label: "Autoregressive text generation" },
  { status: "In progress", label: "Expanded documentation and code walkthroughs" },
  { status: "Planned", label: "Additional worked examples in the playground" },
];

export default function RoadmapPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Roadmap", url: `${siteConfig.url}/roadmap` },
        ]}
      />
      <section className="border-b border-border">
        <div className="mx-auto max-w-content px-6 py-24">
          <p className="mono-label text-signal">Roadmap</p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-medium text-ink md:text-4xl">
            Where the project is headed
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
            Progress reflects the current state of the repository. Track updates directly on
            GitHub.
          </p>

          <ul className="mt-12 divide-y divide-border-soft rounded-lg border border-border bg-surface">
            {roadmap.map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-4 px-6 py-4">
                <span className="text-sm text-ink">{item.label}</span>
                <span
                  className={
                    "mono-label rounded-full border px-2.5 py-1 " +
                    (item.status === "Done"
                      ? "border-signal-soft text-signal"
                      : item.status === "In progress"
                      ? "border-attention-soft text-attention"
                      : "border-border-soft text-ink-faint")
                  }
                >
                  {item.status}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={author.repository}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-signal"
          >
            <Github size={16} />
            Follow progress on GitHub
          </a>
        </div>
      </section>
    </>
  );
}
