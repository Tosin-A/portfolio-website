import { profile } from "../data/profile";

type Item = { title: string; org: string; period: string; points: string[] };

function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="relative border-l border-white/10 pl-8 space-y-12">
      {items.map((e, i) => (
        <div key={i} className="relative reveal" style={{ transitionDelay: `${i * 80}ms` }}>
          <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-accent shadow-glow" />
          <span className="absolute -left-[41px] top-[-1px] h-5 w-5 rounded-full bg-accent/30 blur-md" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold text-ink">
              {e.title} <span className="text-ink-dim font-normal">· {e.org}</span>
            </h3>
            <span className="text-xs font-mono text-ink-mute">{e.period}</span>
          </div>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-dim">
            {e.points.map((p, j) => (
              <li key={j} className="flex gap-2">
                <span className="text-accent">›</span> {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <div className="reveal">
          <div className="eyebrow mb-4">04 / Track record</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            Experience<span className="text-accent">.</span>
          </h2>
        </div>

        <Timeline items={profile.experience} />

        <div className="reveal">
          <div className="eyebrow mt-20 mb-4">05 / Education</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            Education<span className="text-accent">.</span>
          </h2>
        </div>

        <Timeline items={profile.education} />
      </div>
    </section>
  );
}
