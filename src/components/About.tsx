import { profile } from '../data/profile';

const stats = [
  { k: '19', v: 'Years old' },
  { k: '5+', v: 'Shipped projects' },
  { k: '∞', v: 'Always shipping' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 reveal">
          <div className="eyebrow mb-4">01 / About</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Student by day.
            <br />
            <span className="bg-gradient-to-r from-ink-dim to-accent-glow bg-clip-text text-transparent">
              Founder in training.
            </span>
          </h2>
        </div>

        <div className="md:col-span-3 space-y-5 text-ink-dim leading-relaxed reveal">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5 mt-8">
            {stats.map(s => (
              <div key={s.v} className="glass p-4">
                <div className="text-2xl font-semibold bg-gradient-to-r from-ink to-accent-glow bg-clip-text text-transparent">
                  {s.k}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-ink-mute mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
