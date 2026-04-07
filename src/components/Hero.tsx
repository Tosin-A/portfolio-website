import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center pt-24">
      <div className="container-x">
        <div className="max-w-3xl animate-fade-up">
          <div className="eyebrow mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            {profile.location}
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Building{" "}
            <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
              AI-native
            </span>{" "}
            software<span className="text-accent">.</span>
            <br />
            <span className="text-ink-dim">Shipping fast. Learning faster.</span>
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

          <div className="mt-14 flex flex-wrap gap-6 text-xs text-ink-mute font-mono">
            <span>{"> "}AI · Full-stack · Security</span>
            <span className="hidden sm:inline">{"> "}TypeScript · Python · C</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-mute text-xs tracking-widest animate-fade-in">
        SCROLL ↓
      </div>
    </section>
  );
}
