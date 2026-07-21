const reasons = [
  {
    title: "Abstractions hide the interesting part",
    body: "Calling a pretrained model teaches you how to use a Transformer. Implementing one teaches you how it actually works — tokenization, attention, and gradients included.",
  },
  {
    title: "First principles transfer",
    body: "Once you've written self-attention by hand, every paper, blog post, and production model built on it becomes easier to read.",
  },
  {
    title: "Small enough to hold in your head",
    body: "A minimal implementation removes the scale and infrastructure of production systems, leaving the core mechanics visible end to end.",
  },
];

export function WhySection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20">
        <p className="mono-label text-signal">Motivation</p>
        <h2 className="mt-3 max-w-xl font-display text-2xl font-medium text-ink md:text-3xl">
          Why build an LLM from scratch
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {reasons.map((r, i) => (
            <div key={r.title} className="border-t border-border-soft pt-5">
              <p className="mono-label text-ink-faint">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-lg font-medium text-ink">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
