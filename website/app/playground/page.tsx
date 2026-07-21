import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { TokenizerDemo } from "@/components/tokenizer-demo";

export const metadata: Metadata = {
  title: "Playground",
  description: "An interactive, illustrative demo of word-level tokenization.",
  alternates: { canonical: `${siteConfig.url}/playground` },
};

export default function PlaygroundPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Playground", url: `${siteConfig.url}/playground` },
        ]}
      />
      <section className="border-b border-border">
        <div className="mx-auto max-w-content px-6 py-24">
          <p className="mono-label text-signal">Playground</p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-medium text-ink md:text-4xl">
            Tokenizer visualizer
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
            Type a sentence to see how the repository&apos;s word-level tokenizer concept
            splits text into tokens and maps them to vocabulary IDs. This is an illustrative,
            in-browser demo of the tokenization step — not the trained model itself.
          </p>

          <div className="mt-12">
            <TokenizerDemo />
          </div>
        </div>
      </section>
    </>
  );
}
