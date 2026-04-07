import { profile } from '../data/profile';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <div className="reveal">
          <div className="eyebrow mb-4">03 / Toolkit</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            The stack I reach for<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(profile.skills).map(([group, items], i) => (
            <div
              key={group}
              className="reveal glass-card p-6"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="text-xs uppercase tracking-wider text-accent font-mono mb-4">
                {group}
              </div>
              <ul className="space-y-2">
                {items.map(s => (
                  <li
                    key={s}
                    className="text-sm text-ink-dim flex items-center gap-2"
                  >
                    <span className="text-accent">{'>'}</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
