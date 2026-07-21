import { Github, Star } from "lucide-react";
import { author } from "@/lib/site-config";

export function SupportProject() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20">
        <div className="rounded-xl border border-border bg-surface px-8 py-14 text-center">
          <p className="mono-label text-signal">Support the project</p>
          <h2 className="mx-auto mt-3 max-w-md text-balance font-display text-2xl font-medium text-ink md:text-3xl">
            If this helped you understand how Transformer language models work
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted">
            Consider giving the repository a star on GitHub.
          </p>
          <a
            href={author.repository}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring mt-7 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-canvas transition-transform hover:-translate-y-0.5"
          >
            <Github size={16} />
            Star on GitHub
            <Star size={14} className="text-attention" />
          </a>
        </div>
      </div>
    </section>
  );
}
