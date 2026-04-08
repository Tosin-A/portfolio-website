import { useEffect, useMemo, useRef, useState } from 'react';
import { projects, type Project, type ProjectCategory } from '../data/projects';

const FILTERS: ('All' | ProjectCategory)[] = [
  'All',
  ...(Array.from(new Set(projects.map(p => p.category))) as ProjectCategory[]),
];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (active) closeRef.current?.focus();
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
  }, [active]);

  const visible = useMemo(
    () =>
      filter === 'All' ? projects : projects.filter(p => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="ix">§ 02 — Selected Work</span>
          <a
            href="https://github.com/Tosin-A"
            target="_blank"
            rel="noreferrer"
            className="ix-dim hover:text-accent ul-link"
          >
            Index on GitHub ↗
          </a>
        </div>

        <div className="mt-10 flex items-end justify-between flex-wrap gap-6 reveal">
          <h2 className="display text-[clamp(2.6rem,7vw,6rem)] max-w-3xl">
            Things I&apos;ve
            <br />
            built<span className="text-accent">.</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(f => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`font-mono text-[11px] uppercase tracking-[0.16em] px-4 py-3 min-h-[44px] border transition-colors ${
                    isActive
                      ? 'border-accent bg-accent text-bg'
                      : 'border-line text-ink-dim hover:border-ink hover:text-ink'
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project index — magazine ledger style */}
        <ol className="mt-16 border-t border-line">
          {visible.map((p, i) => (
            <li
              key={p.title}
              className="group border-b border-line"
            >
              <button
                onClick={() => setActive(p)}
                className="row-fill w-full grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-10 px-6 md:px-10 -mx-6 md:-mx-10 text-left items-baseline"
              >
                <span className="relative z-[1] col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.16em] opacity-60 group-hover:opacity-100">
                  /{String(i + 1).padStart(2, '0')}
                </span>
                <span className="relative z-[1] col-span-10 md:col-span-5 display text-3xl md:text-5xl">
                  {p.title}
                </span>
                <span className="relative z-[1] col-span-12 md:col-span-4 font-sans text-sm md:text-base leading-snug opacity-80 group-hover:opacity-100">
                  {p.tagline}
                </span>
                <span className="relative z-[1] col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.16em] md:text-right opacity-60 group-hover:opacity-100">
                  {p.category} ↗
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      {/* Detail panel */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-bg/85 backdrop-blur-sm flex items-stretch justify-end"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} — case file`}
        >
          <div
            className="relative w-full md:max-w-2xl h-full overflow-y-auto bg-bg border-l border-line"
            onClick={e => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between bg-bg border-b border-line px-8 py-4">
              <span className="ix">{active.category} / Case file</span>
              <button
                ref={closeRef}
                onClick={() => setActive(null)}
                className="ix-ink hover:text-accent focus:outline-none focus:text-accent"
                aria-label="Close case file"
              >
                Close ✕
              </button>
            </div>

            <div className="px-8 py-10">
              <p className="ix mb-3 !text-accent">{active.tagline}</p>
              <h3 className="display text-5xl md:text-6xl mb-8">
                {active.title}
              </h3>
              <p className="text-ink-dim text-base leading-[1.7] max-w-[58ch]">
                {active.details?.overview ?? active.description}
              </p>

              {active.details?.highlights && (
                <div className="mt-12">
                  <div className="ix mb-4">— Highlights</div>
                  <ul className="space-y-3">
                    {active.details.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-4 text-sm text-ink leading-relaxed border-b border-line pb-3"
                      >
                        <span className="ix pt-1">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {active.details?.techStack && (
                <div className="mt-12">
                  <div className="ix mb-4">— Stack</div>
                  <div className="space-y-3">
                    {Object.entries(active.details.techStack).map(
                      ([cat, items]) => (
                        <div
                          key={cat}
                          className="grid grid-cols-12 gap-3 items-start py-2 border-b border-line"
                        >
                          <span className="col-span-3 ix pt-1">{cat}</span>
                          <div className="col-span-9 flex flex-wrap gap-2">
                            {items.map(t => (
                              <span key={t} className="tag">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              <div className="mt-12 flex flex-wrap gap-3">
                {active.liveUrl && (
                  <a
                    href={active.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-solid"
                  >
                    Visit site ↗
                  </a>
                )}
                {active.githubUrl && (
                  <a
                    href={active.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-line"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
