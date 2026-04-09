import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-16 md:pt-28 pb-24 md:pb-36 overflow-hidden"
    >
      {/* Portrait — atmospheric background layer, sits behind the headline */}
      <div
        className="hero-portrait hidden md:block absolute inset-y-0 right-0 w-[58%] lg:w-[52%] pointer-events-none reveal"
        aria-hidden="true"
        style={{ transitionDelay: '200ms' }}
      >
        <img
          src="/portrait.png"
          alt=""
          width={607}
          height={974}
          loading="eager"
          decoding="async"
          className="hero-portrait-img absolute inset-0 w-full h-full select-none"
          draggable={false}
        />
      </div>

      <div className="wrap relative z-10 grid grid-cols-12 gap-6 md:gap-10">
        {/* Headline — foreground, over the portrait */}
        <div className="col-span-12 md:col-span-10">
          <h1 className="display text-ink text-[clamp(3.25rem,11vw,11rem)] relative">
            <span className="reveal-line">BUILD</span>
            <span
              className="reveal-line"
              style={{ transitionDelay: '140ms' }}
            >
              SHIP AI<span className="text-accent">.</span>
            </span>
            <span
              className="reveal-line text-ink-dim"
              style={{ transitionDelay: '280ms' }}
            >
              REPEAT.
            </span>
          </h1>
        </div>

        {/* Statement + CTAs — column-aligned with headline */}
        <div className="col-span-12 md:col-span-8 mt-8 md:mt-12 grid sm:grid-cols-5 gap-6 md:gap-8 items-end">
          <p
            className="sm:col-span-3 text-ink text-lg md:text-xl leading-snug max-w-xl reveal"
            style={{ transitionDelay: '360ms' }}
          >
            {profile.heroStatement}
          </p>
          <div
            className="sm:col-span-2 flex flex-wrap items-center gap-5 reveal"
            style={{ transitionDelay: '460ms' }}
          >
            <a href="#projects" className="btn-solid">
              See the work<span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="ul-link inline-flex items-center py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-ink-dim hover:text-ink transition-colors"
            >
              Or hire me
            </a>
          </div>
        </div>

        {/* Status dataline — single hairline row, bottom of hero */}
        <div
          className="col-span-12 mt-16 md:mt-24 border-t border-line pt-4 flex items-center justify-between gap-6 reveal"
          style={{ transitionDelay: '600ms' }}
        >
          <span className="ix-ink flex items-center gap-2">
            <span className="dot" aria-hidden="true" /> OPEN TO INTERNSHIPS · LONDON
          </span>
          <span className="ix hidden sm:inline">AI · FULL-STACK · FOUNDER</span>
          <span className="ix">2026</span>
        </div>
      </div>
    </section>
  );
}
