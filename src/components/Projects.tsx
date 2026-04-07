import { useEffect, useState } from "react";
import { projects, type Project } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
  }, [active]);

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="eyebrow mb-4">02 / Selected work</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Things I've built<span className="text-accent">.</span>
            </h2>
          </div>
          <a
            href="https://github.com/Tosin-A"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline text-sm text-ink-dim link-underline"
          >
            All on GitHub ↗
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              onClick={() => setActive(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(p)}
              className="group relative cursor-pointer rounded-2xl border border-line bg-bg-card p-7 transition-all duration-300 hover:border-accent/60 hover:-translate-y-1 hover:shadow-glow focus:outline-none focus:border-accent"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-ink">{p.title}</h3>
                  <p className="text-xs text-accent mt-1 font-mono">{p.tagline}</p>
                </div>
                <div className="flex gap-2 text-ink-dim" onClick={(e) => e.stopPropagation()}>
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono px-2 py-1 rounded-md border border-line hover:border-accent hover:text-accent transition"
                      aria-label="GitHub"
                      title="View on GitHub"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono px-2 py-1 rounded-md border border-accent/60 text-accent hover:bg-accent hover:text-bg transition"
                      aria-label="Open project"
                      title="Open live project"
                    >
                      Visit ↗
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-5 text-sm text-ink-dim leading-relaxed">
                {p.description}
              </p>

              <div className="mt-5 pt-5 border-t border-line/70">
                <div className="text-xs text-ink-mute uppercase tracking-wider mb-2">
                  Impact
                </div>
                <p className="text-sm text-ink">{p.impact}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-bg-elev border border-line text-ink-dim font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 text-xs font-mono text-ink-mute group-hover:text-accent transition">
                Click for details →
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line bg-bg-card p-8 shadow-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-ink-dim hover:text-accent text-xl"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="eyebrow mb-2">{active.tagline}</div>
            <h3 className="text-2xl font-semibold text-ink mb-4">{active.title}</h3>

            <p className="text-sm text-ink-dim leading-relaxed">
              {active.details?.overview ?? active.description}
            </p>

            {active.details?.highlights && (
              <div className="mt-6">
                <div className="text-xs text-ink-mute uppercase tracking-wider mb-3">
                  Highlights
                </div>
                <ul className="space-y-2 text-sm text-ink-dim">
                  {active.details.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent">›</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {active.details?.techStack && (
              <div className="mt-6">
                <div className="text-xs text-ink-mute uppercase tracking-wider mb-3">
                  Tech stack
                </div>
                <div className="space-y-2">
                  {Object.entries(active.details.techStack).map(([cat, items]) => (
                    <div key={cat} className="flex flex-wrap gap-2 items-center">
                      <span className="text-xs font-mono text-ink-mute w-20">{cat}</span>
                      {items.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-full bg-bg-elev border border-line text-ink-dim font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex gap-3">
              {active.liveUrl && (
                <a
                  href={active.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-accent text-bg text-sm font-medium hover:opacity-90 transition"
                >
                  Visit site ↗
                </a>
              )}
              {active.githubUrl && (
                <a
                  href={active.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-line text-ink-dim text-sm hover:border-accent hover:text-accent transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
