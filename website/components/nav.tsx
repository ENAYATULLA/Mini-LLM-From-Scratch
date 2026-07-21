"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { navigation, author } from "@/lib/site-config";
import { clsx } from "clsx";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-border bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <Link
          href="/"
          className="focus-ring flex items-center gap-2 font-display text-[15px] font-medium tracking-tight text-ink"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-signal-soft text-signal">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
              <circle cx="5" cy="5" r="2" fill="currentColor" />
              <circle cx="19" cy="5" r="2" fill="currentColor" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <circle cx="5" cy="19" r="2" fill="currentColor" />
              <circle cx="19" cy="19" r="2" fill="currentColor" />
              <path
                d="M5 5L12 12L19 5M12 12L5 19M12 12L19 19"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </span>
          Mini LLM From Scratch
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "focus-ring rounded-md px-3 py-2 text-sm transition-colors",
                  active ? "text-ink" : "text-ink-muted hover:text-ink"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={author.repository}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View source on GitHub"
            className="focus-ring text-ink-muted transition-colors hover:text-ink"
          >
            <Github size={18} />
          </a>
          <a
            href={author.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Author on LinkedIn"
            className="focus-ring text-ink-muted transition-colors hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
        </div>

        <button
          className="focus-ring text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-canvas px-6 pb-6 pt-2 md:hidden"
          aria-label="Primary mobile"
        >
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring block rounded-md px-2 py-2.5 text-sm text-ink-muted hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-4 border-t border-border-soft pt-4">
            <a href={author.repository} target="_blank" rel="noreferrer noopener" className="focus-ring flex items-center gap-2 text-sm text-ink-muted">
              <Github size={16} /> GitHub
            </a>
            <a href={author.linkedin} target="_blank" rel="noreferrer noopener" className="focus-ring flex items-center gap-2 text-sm text-ink-muted">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
