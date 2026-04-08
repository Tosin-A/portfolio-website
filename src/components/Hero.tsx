import { profile } from '../data/profile';

const TICKER = [
  'AI-NATIVE SOFTWARE',
  'SHIPPED FROM ZERO',
  'HACKATHON BUILT',
  'FULL-STACK',
  'HARDWARE-CURIOUS',
  'OPEN TO INTERNSHIPS',
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-12 md:pt-20 pb-20 md:pb-32 overflow-hidden"
    >
      {/* Top meta strip */}
      <div className="wrap">
        <div className="section-head">
          <span className="ix">EST. 2006 · LONDON</span>
          <span className="ix hidden sm:inline">VOL. 01 / ED. 04</span>
          <span className="ix">FILE — INDEX.HTML</span>
        </div>
      </div>

      {/* Hero grid */}
      <div className="wrap mt-10 md:mt-16 grid grid-cols-12 gap-6 md:gap-10">
        {/* Left meta column */}
        <aside className="col-span-12 md:col-span-3 grid grid-cols-3 md:grid-cols-1 md:justify-between gap-6">
          <div>
            <div className="ix">Subject</div>
            <div className="mt-1 ix-ink">{profile.name}</div>
          </div>
          <div>
            <div className="ix">Role</div>
            <div className="mt-1 ix-ink">AI · Full-Stack · Founder</div>
          </div>
          <div>
            <div className="ix">Status</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent flex items-center gap-2">
              <span className="dot" /> Open
            </div>
          </div>
        </aside>

        {/* Headline */}
        <div className="col-span-12 md:col-span-7">
          <h1 className="display text-ink text-[clamp(3.5rem,11vw,11.5rem)]">
            <span className="reveal-line">BUILD</span>
            <span
              className="reveal-line"
              style={{ transitionDelay: '140ms' }}
            >
              SHIP<span className="text-accent">.</span>
            </span>
            <span
              className="reveal-line text-ink-dim"
              style={{ transitionDelay: '280ms' }}
            >
              REPEAT.
            </span>
          </h1>

          <div className="mt-10 grid sm:grid-cols-2 gap-8 items-end">
            <p className="text-ink-dim text-base md:text-lg leading-relaxed max-w-md reveal">
              {profile.heroStatement}
            </p>
            <div className="flex flex-wrap gap-3 reveal sm:justify-end">
              <a href="#projects" className="btn-solid">
                See the work →
              </a>
              <a href="#contact" className="btn-line">
                Hire me
              </a>
            </div>
          </div>
        </div>

        {/* Portrait — editorial mug shot, hairline + caption */}
        <figure className="hidden md:flex col-span-2 flex-col self-end reveal" style={{ transitionDelay: '420ms' }}>
          <span className="rule mb-3" aria-hidden="true" />
          <img
            src="/portrait.png"
            alt="Tosin Adedokun, photographed in London, 2026"
            loading="eager"
            decoding="async"
            className="portrait-img w-full h-auto select-none"
            draggable={false}
          />
          <figcaption className="mt-3 ix flex items-center justify-between">
            <span>FIG. 01</span>
            <span>LDN · 2026</span>
          </figcaption>
        </figure>
      </div>

      {/* Ticker / marquee strip — full bleed, alternating fill/outline */}
      <div
        className="bleed mt-20 md:mt-32 border-y border-line overflow-hidden"
        aria-hidden="true"
      >
        <div className="marquee-track animate-marquee py-5">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span
              key={i}
              className={`flex items-center gap-7 px-7 font-display tracking-tight text-3xl md:text-5xl whitespace-nowrap ${
                i % 2 === 0 ? 'display-outline' : 'text-ink'
              }`}
            >
              {t}
              <span className="text-accent">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
