import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Architecture",
  description: "How the decoder-only Transformer in Mini LLM From Scratch is structured, layer by layer.",
  alternates: { canonical: `${siteConfig.url}/architecture` },
};

const layers = [
  {
    name: "Input embeddings",
    what: "Converts token IDs into dense vectors and adds positional information so the model knows token order.",
  },
  {
    name: "Masked self-attention",
    what: "Each token attends to itself and every earlier token, weighting them by relevance. The mask prevents attending to future tokens.",
  },
  {
    name: "Feed-forward network",
    what: "A position-wise fully connected network that transforms each token's representation independently.",
  },
  {
    name: "Layer normalization & residuals",
    what: "Stabilizes training and lets gradients flow cleanly through many stacked blocks.",
  },
  {
    name: "Output projection",
    what: "Maps the final hidden state back to vocabulary-sized logits for next-token prediction.",
  },
];

export default function ArchitecturePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Architecture", url: `${siteConfig.url}/architecture` },
        ]}
      />
      <section className="border-b border-border">
        <div className="mx-auto max-w-content px-6 py-24">
          <p className="mono-label text-signal">Architecture</p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-medium text-ink md:text-4xl">
            A decoder-only Transformer, layer by layer
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
            The model follows the same core structure used across modern decoder-only
            language models, implemented directly rather than imported.
          </p>

          <div className="mt-14 space-y-px overflow-hidden rounded-lg border border-border bg-border">
            {layers.map((layer, i) => (
              <div key={layer.name} className="flex gap-6 bg-surface p-6">
                <span className="mono-label mt-1 shrink-0 text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-base font-medium text-ink">{layer.name}</h2>
                  <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-ink-muted">
                    {layer.what}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
