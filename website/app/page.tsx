import { Hero } from "@/components/hero";
import { ProjectAtAGlance } from "@/components/project-at-a-glance";
import { WhySection } from "@/components/why-section";
import { LearningJourney } from "@/components/learning-journey";
import { EngineeringHighlights } from "@/components/engineering-highlights";
import { SupportProject } from "@/components/support-project";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectAtAGlance />
      <WhySection />
      <LearningJourney />

      <section className="border-b border-border">
        <div className="mx-auto max-w-content px-6 py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/architecture"
              className="focus-ring group rounded-lg border border-border bg-surface p-8 transition-colors hover:border-signal"
            >
              <p className="mono-label text-signal">Architecture</p>
              <h3 className="mt-3 font-display text-xl font-medium text-ink">
                How the model is structured
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Explore how each component of the decoder-only Transformer works, from embeddings to self-attention and output generation.              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-ink-muted transition-colors group-hover:text-ink">
                Explore architecture
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/pipeline"
              className="focus-ring group rounded-lg border border-border bg-surface p-8 transition-colors hover:border-signal"
            >
              <p className="mono-label text-signal">Pipeline</p>
              <h3 className="mt-3 font-display text-xl font-medium text-ink">
                From raw text to trained model
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                See how data loading, training, and checkpointing connect end to end.
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-ink-muted transition-colors group-hover:text-ink">
                Explore pipeline
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <EngineeringHighlights />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-content px-6 py-20">
          <p className="mono-label text-signal">Documentation</p>
          <h2 className="mt-3 max-w-xl font-display text-2xl font-medium text-ink md:text-3xl">
            Written like documentation, not a wiki
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted">
            Every guide explains what a concept is, why it matters, and how it is
            implemented in this project using clear language and practical examples.
          </p>
          <Link
            href="/documentation"
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-signal"
          >
            Read the documentation
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <SupportProject />
    </>
  );
}
