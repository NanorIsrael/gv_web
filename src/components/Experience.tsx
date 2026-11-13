import { Reveal } from './ui';
import type { Experience } from '../data/content';

/** Vertical timeline of roles, most recent first. */
export default function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <ol className="relative space-y-5 border-l border-line pl-6 sm:pl-8">
      {items.map((job, i) => {
        const current = job.end === 'Present';
        return (
          <li key={`${job.company}-${job.start}`} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[31px] top-7 h-3 w-3 rounded-full ring-4 ring-canvas sm:-left-[39px] ${
                current ? 'bg-accent' : 'bg-line'
              }`}
            />
            <Reveal delay={i * 0.06}>
              <article className="card p-6 sm:p-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-fg">{job.role}</h3>
                    <p className="mt-1 text-sm text-muted">
                      <span className="font-medium text-fg">{job.company}</span> · {job.location}
                    </p>
                  </div>
                  <p className="flex shrink-0 items-center gap-2 text-sm text-muted">
                    {current && (
                      <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                        Current
                      </span>
                    )}
                    <span>
                      {job.start} – {job.end}
                    </span>
                  </p>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                {job.stack && (
                  <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <li key={s} className="rounded-md border border-line bg-elevated px-2.5 py-1 text-xs text-muted">
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
