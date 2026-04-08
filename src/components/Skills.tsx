import { profile } from '../data/profile';

export default function Skills() {
  const groups = Object.entries(profile.skills);

  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="ix">§ 03 — Toolkit</span>
          <span className="ix">{groups.length} categories</span>
        </div>

        <h2 className="display text-[clamp(2.6rem,7vw,6rem)] mt-10 max-w-4xl reveal">
          The stack
          <br />I reach for<span className="text-accent">.</span>
        </h2>

        {/* Data ledger */}
        <div className="mt-16 border-t border-line">
          {groups.map(([group, items], i) => (
            <div
              key={group}
              className="grid grid-cols-12 gap-4 md:gap-8 py-8 border-b border-line reveal items-start"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="col-span-12 md:col-span-3 flex items-baseline gap-4">
                <span className="ix">/{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-2xl md:text-3xl text-accent">
                  {group}
                </span>
              </div>
              <div className="col-span-12 md:col-span-9 flex flex-wrap gap-x-6 gap-y-3 md:pl-8">
                {items.map((s, j) => (
                  <span
                    key={s}
                    className="font-display text-xl md:text-2xl text-ink hover:text-accent transition-colors"
                  >
                    {s}
                    {j < items.length - 1 && (
                      <span className="text-ink-mute" aria-hidden="true">
                        {' '}·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
