import { projectFacts, skillsDemonstrated } from "@/lib/site-config";

export function ProjectAtAGlance() {
  return (
    <section className="border-b border-border bg-surface" id="glance">
      <div className="mx-auto max-w-content px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mono-label text-signal">Overview</p>
            <h2 className="mt-3 font-display text-2xl font-medium text-ink md:text-3xl">
              Project at a glance
            </h2>
            <p className="mt-2 max-w-lg text-sm text-ink-muted">
              Everything a recruiter, student, or professor needs in under 30 seconds.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
          {projectFacts.map((fact) => (
            <div key={fact.label} className="bg-surface p-5 transition-colors hover:bg-surface-raised">
              <p className="mono-label text-ink-faint">{fact.label}</p>
              <p className="mt-2 text-sm leading-snug text-ink">{fact.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-border bg-surface p-6">
          <p className="mono-label text-ink-faint">Skills demonstrated</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {skillsDemonstrated.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border-soft bg-surface-raised px-3 py-1 text-xs text-ink-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
