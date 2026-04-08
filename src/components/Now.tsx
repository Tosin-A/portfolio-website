import { profile } from '../data/profile';

export default function Now() {
  const stamp = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <section id="now" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="ix flex items-center gap-2">
            <span className="dot animate-blink" />§ 06 — Now
          </span>
          <span className="ix">Updated {stamp}</span>
        </div>

        <h2 className="display text-[clamp(2.6rem,7vw,6rem)] mt-10 reveal">
          On my desk
          <br />
          this week<span className="text-accent">.</span>
        </h2>

        {/* Terminal log */}
        <div className="mt-16 border border-line bg-bg-elev/30">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-line ix">
            <span className="dot-lg" />
            <span className="dot-lg !bg-line" />
            <span className="dot-lg !bg-line" />
            <span className="ml-3">~/tosin/now.log</span>
          </div>
          <div className="p-6 md:p-10 font-mono text-sm md:text-[15px] leading-[1.9]">
            {profile.nowBuilding.map((n, i) => (
              <div
                key={i}
                className="reveal flex gap-4"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="text-ink-mute">
                  [{String(i + 1).padStart(2, '0')}]
                </span>
                <span className="text-accent">$</span>
                <span className="text-ink">
                  {n}
                  {i === profile.nowBuilding.length - 1 && (
                    <span className="ml-1 inline-block w-2 h-4 bg-accent align-middle animate-blink" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
