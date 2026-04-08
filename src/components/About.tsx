import { profile } from '../data/profile';

const STATS = [
  { k: '19', v: 'Years on earth' },
  { k: '5+', v: 'Products shipped' },
  { k: '7', v: 'Years on stage / sound' },
  { k: '∞', v: 'Mode: shipping' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="ix">§ 01 — Dossier</span>
          <span className="ix">{profile.location}</span>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5 reveal">
            <h2 className="display text-[clamp(2.6rem,6vw,5.5rem)]">
              Student
              <br />
              by day.
              <br />
              <span className="text-accent">Founder</span>
              <br />
              by night.
            </h2>
          </div>

          <div className="col-span-12 md:col-span-7 reveal">
            <div className="space-y-6 text-ink-dim text-base md:text-[17px] leading-[1.7] max-w-[62ch]">
              {profile.about.map((p, i) => (
                <p key={i}>
                  {i === 0 ? (
                    <>
                      <span className="float-left font-display text-7xl leading-[0.78] text-accent pr-3 pt-2">
                        {p.charAt(0)}
                      </span>
                      {p.slice(1)}
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 border-t border-line divide-x divide-y sm:divide-y-0 divide-line">
              {STATS.map(s => (
                <div key={s.v} className="py-6 px-4 first:pl-0">
                  <div className="font-display text-5xl md:text-6xl text-ink leading-none">
                    {s.k}
                  </div>
                  <div className="mt-3 ix">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
