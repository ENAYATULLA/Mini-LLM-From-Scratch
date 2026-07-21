import type { Metadata } from "next";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { author } from "@/lib/site-config";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About the Author",
  description: `Learn more about ${author.name}, the creator of ${siteConfig.name}, an educational open-source project for understanding Transformer language models.`,
  alternates: { canonical: `${siteConfig.url}/about` },
};

const links = [
  { label: "GitHub", href: author.repository, icon: Github },
  { label: "Portfolio", href: author.portfolio, icon: Globe },
  { label: "LinkedIn", href: author.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${author.email}`, icon: Mail },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ]}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-content px-6 py-24">
          <p className="mono-label text-signal">Author</p>

          <h1 className="mt-3 font-display text-3xl font-medium text-ink md:text-4xl">
            About the author
          </h1>

          <div className="mt-12 grid gap-12 md:grid-cols-[1fr_280px]">
            <div className="space-y-5 text-base leading-relaxed text-ink-muted">
              <p className="text-lg text-ink">
                Hi, I&apos;m {author.name}.
              </p>

              {author.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <aside className="h-fit rounded-lg border border-border bg-surface p-6">
              <p className="font-display text-sm font-medium text-ink">
                {author.name}
              </p>

              <ul className="mt-2 space-y-1 text-xs text-ink-muted">
                {author.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <div className="mt-5 space-y-2 border-t border-border-soft pt-5">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer noopener"
                    className="focus-ring flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    <link.icon size={15} />
                    {link.label}
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}