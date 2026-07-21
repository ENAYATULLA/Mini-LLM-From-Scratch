import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Training Pipeline",
  description: "How Mini LLM From Scratch moves from raw text to a trained, checkpointed model.",
  alternates: { canonical: `${siteConfig.url}/pipeline` },
};

const stages = [
  { name: "Raw text", what: "The starting corpus used to train and evaluate the model." },
  { name: "Tokenizer", what: "Converts text into vocabulary IDs the model can consume." },
  { name: "Batching", what: "Groups sequences into batches for efficient training steps." },
  { name: "Forward pass", what: "Runs a batch through the Transformer to produce next-token predictions." },
  { name: "Loss computation", what: "Compares predictions against the real next tokens." },
  { name: "Backpropagation & optimizer step", what: "Updates model weights to reduce the loss." },
  { name: "Checkpointing", what: "Saves model state so training can resume or be evaluated later." },
];

export default function PipelinePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Pipeline", url: `${siteConfig.url}/pipeline` },
        ]}
      />
      <section className="border-b border-border">
        <div className="mx-auto max-w-content px-6 py-24">
          <p className="mono-label text-signal">Pipeline</p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-medium text-ink md:text-4xl">
            From raw text to a trained model
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
            A structured training loop connects data loading, the forward pass, loss
            computation, and optimization into a repeatable process.
          </p>

          <ol className="mt-14 space-y-0">
            {stages.map((stage, i) => (
              <li key={stage.name} className="flex gap-6 border-l border-border-soft py-6 pl-8 relative">
                <span className="absolute -left-[7px] top-7 h-3.5 w-3.5 rounded-full border-2 border-signal bg-canvas" />
                <div>
                  <p className="mono-label text-ink-faint">Stage {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-1 font-display text-base font-medium text-ink">
                    {stage.name}
                  </h2>
                  <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-ink-muted">
                    {stage.what}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
