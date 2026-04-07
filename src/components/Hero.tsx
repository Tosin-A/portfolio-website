import { profile } from '../data/profile';
import BlurText from './effects/BlurText';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[94vh] flex items-center pt-24 overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <div className="eyebrow mb-6 glass px-3 py-1.5 rounded-full inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            {profile.location}
          </div>

          <div className="text-sm font-mono text-accent mb-3 tracking-widest uppercase">
            {profile.name}
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-ink">
            <BlurText
              text="Building AI-native software."
              delay={120}
              animateBy="words"
              direction="top"
            />
            <span className="text-ink-dim block mt-2">
              <BlurText
                text="Shipping fast. Learning faster."
                delay={90}
                animateBy="words"
                direction="bottom"
              />
            </span>
          </h1>

          <p className="mt-8 text-lg text-ink-dim max-w-2xl leading-relaxed">
            {profile.heroStatement}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              See my work →
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            {['AI', 'Full-stack', 'Hardware-curious', 'Hackathons'].map(t => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1.5 rounded-full glass text-ink-dim"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-mute text-xs tracking-widest animate-fade-in flex flex-col items-center gap-2 z-10">
        <span>SCROLL</span>
        <span className="h-8 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
