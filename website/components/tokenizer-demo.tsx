"use client";

import { useMemo, useState } from "react";
import { ArrowDown } from "lucide-react";

function hashId(token: string) {
  let h = 0;
  for (let i = 0; i < token.length; i++) {
    h = (h * 31 + token.charCodeAt(i)) >>> 0;
  }
  return h % 5000;
}

export function TokenizerDemo() {
  const [text, setText] = useState("Transformers learn from data");

  const tokens = useMemo(
    () => text.trim().split(/\s+/).filter(Boolean).map((t) => t.replace(/[.,!?]/g, "")),
    [text]
  );

  return (
    <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
      <label htmlFor="tokenizer-input" className="mono-label text-ink-faint">
        Input sentence
      </label>
      <input
        id="tokenizer-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={80}
        className="focus-ring mt-2 w-full rounded-md border border-border bg-canvas px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-faint"
        placeholder="Type a sentence..."
      />

      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="flex flex-wrap justify-center gap-2">
          {tokens.map((t, i) => (
            <span
              key={i}
              className="rounded-md border border-signal-soft bg-signal-soft/40 px-3 py-1.5 text-sm text-ink"
            >
              {t || "…"}
            </span>
          ))}
        </div>

        <ArrowDown size={16} className="text-ink-faint" />

        <div className="flex flex-wrap justify-center gap-2">
          {tokens.map((t, i) => (
            <span
              key={i}
              className="mono-label rounded-md border border-border-soft bg-canvas px-3 py-1.5 text-attention"
            >
              #{hashId(t.toLowerCase())}
            </span>
          ))}
        </div>

        <p className="mt-4 max-w-sm text-center text-xs text-ink-faint">
          IDs shown here are generated in-browser for illustration and do not reflect the
          repository&apos;s trained vocabulary.
        </p>
      </div>
    </div>
  );
}
