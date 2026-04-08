import { profile } from '../data/profile';

type Item = { title: string; org: string; period: string; points: string[] };

function Ledger({ items }: { items: Item[] }) {
  return (
    <div className="border-t border-line">
      {items.map((e, i) => (
        <article
          key={i}
          className="grid grid-cols-12 gap-4 md:gap-8 py-10 border-b border-line reveal"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <div className="col-span-12 md:col-span-3">
            <div className="ix">{e.period}</div>
            <div className="ix mt-2 !text-accent">
              /{String(i + 1).padStart(2, '0')}
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h3 className="display text-3xl md:text-4xl text-ink">
              {e.title}
            </h3>
            <div className="ix-dim mt-1">{e.org}</div>
            <ul className="mt-5 space-y-2 max-w-[62ch]">
              {e.points.map((p, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-ink-dim text-[15px] leading-relaxed"
                >
                  <span className="ix !text-accent pt-1.5">▸</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="ix">§ 04 — Track Record</span>
          <span className="ix">Receipts</span>
        </div>

        <h2 className="display text-[clamp(2.6rem,7vw,6rem)] mt-10 reveal">
          Experience<span className="text-accent">.</span>
        </h2>

        <div className="mt-12">
          <Ledger items={profile.experience} />
        </div>

        <div className="mt-28 flex items-baseline justify-between border-b border-line pb-4 reveal">
          <span className="ix">§ 05 — Education</span>
          <span className="ix">Formal &amp; Self-directed</span>
        </div>

        <h2 className="display text-[clamp(2.6rem,7vw,6rem)] mt-10 reveal">
          Education<span className="text-accent">.</span>
        </h2>

        <div className="mt-12">
          <Ledger items={profile.education} />
        </div>
      </div>
    </section>
  );
}
