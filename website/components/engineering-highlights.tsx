import { engineeringHighlights } from "@/lib/site-config";

export function EngineeringHighlights() {
  return (
    <section className="border-b border-border bg-surface" id="engineering">
      <div className="mx-auto max-w-content px-6 py-20">
        <p className="mono-label text-signal">
          Engineering Overview
        </p>        <h2 className="mt-3 max-w-xl font-display text-2xl font-medium text-ink md:text-3xl">
          Engineering highlights
        </h2>
        <p className="mt-2 max-w-lg text-sm text-ink-muted">
          What each part of the repository demonstrates.
        </p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {engineeringHighlights.map((item) => (
            <div key={item.title} className="bg-surface p-5">
              <h3 className="font-display text-sm font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
