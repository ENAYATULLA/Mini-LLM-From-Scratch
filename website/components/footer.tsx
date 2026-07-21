import Link from "next/link";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { author, siteConfig } from "@/lib/site-config";

const linkColumns = [
  {
    heading: "Project",
    links: [
      { label: "Documentation", href: "/documentation" },
      { label: "Architecture", href: "/architecture" },
      { label: "Pipeline", href: "/pipeline" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    heading: "Repository",
    links: [
      { label: "GitHub", href: author.repository, external: true },
      { label: "License (MIT)", href: `${author.repository}/blob/main/LICENSE`, external: true },
      { label: "Playground", href: "/playground" },
    ],
  },
  {
    heading: "Author",
    links: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: author.portfolio, external: true },
      { label: "LinkedIn", href: author.linkedin, external: true },
      { label: "Contact", href: `mailto:${author.email}`, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-base font-medium text-ink">{siteConfig.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              Educational implementation of a GPT-style decoder-only Transformer built with
              Python and PyTorch to help learners understand how modern language models work.
            </p>

            <div className="mt-6 space-y-1 text-sm">
              <p className="text-ink-faint mono-label">Created by</p>
              <p className="text-ink">{author.name}</p>
              <ul className="mt-1 space-y-0.5 text-ink-muted">
                {author.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={author.repository}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-muted transition-colors hover:border-signal hover:text-ink"
              >
                <Github size={16} />
              </a>
              <a
                href={author.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-muted transition-colors hover:border-signal hover:text-ink"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={author.portfolio}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Portfolio"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-muted transition-colors hover:border-signal hover:text-ink"
              >
                <Globe size={16} />
              </a>
              <a
                href={`mailto:${author.email}`}
                aria-label="Email"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-muted transition-colors hover:border-signal hover:text-ink"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {linkColumns.map((col) => (
            <div key={col.heading}>
              <p className="mono-label text-ink-faint">{col.heading}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((link) =>
                  "external" in link && link.external ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noreferrer noopener"
                        className="focus-ring text-ink-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="focus-ring text-ink-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border-soft pt-6 text-xs text-ink-faint md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {author.name}. Released under the MIT license.
          </p>
          <p>Built with Python, PyTorch, Next.js, and a passion for learning.</p>
        </div>
      </div>
    </footer>
  );
}
