"use client";

import { useState } from "react";
import { clsx } from "clsx";

const steps = [
  {
    label: "Tokenization",
    what: "Raw text is split into tokens and mapped to vocabulary IDs.",
  },
  {
    label: "Embeddings",
    what: "Each token ID is converted into a dense vector the model can operate on.",
  },
  {
    label: "Self-attention",
    what: "Every token looks at every other token to decide what's relevant to it.",
  },
  {
    label: "Transformer blocks",
    what: "Attention and feed-forward layers are stacked to build representational depth.",
  },
  {
    label: "Training",
    what: "The model's predictions are compared to real next tokens, and weights are updated.",
  },
  {
    label: "Generation",
    what: "The trained model predicts one token at a time, feeding each prediction back in.",
  },
];

export function LearningJourney() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-content px-6 py-20">
        <p className="mono-label text-signal">Interactive</p>
        <h2 className="mt-3 max-w-xl font-display text-2xl font-medium text-ink md:text-3xl">
          The learning journey
        </h2>
        <p className="mt-2 max-w-lg text-sm text-ink-muted">
          Step through the pipeline a token takes from raw text to generated output.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-[240px_1fr]">
          <div className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
            {steps.map((step, i) => (
              <button
                key={step.label}
                onClick={() => setActive(i)}
                className={clsx(
                  "focus-ring whitespace-nowrap rounded-md border px-4 py-2.5 text-left text-sm transition-colors md:whitespace-normal",
                  active === i
                    ? "border-signal bg-signal-soft text-ink"
                    : "border-border text-ink-muted hover:border-border-soft hover:text-ink"
                )}
              >
                <span className="mono-label mr-2 text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step.label}
              </button>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-canvas p-8">
            <p className="mono-label text-attention">{steps[active].label}</p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink">
              {steps[active].what}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
