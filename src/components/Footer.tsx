import { profile } from '../data/profile';

const STRIP = ['TOSIN ADEDOKUN', 'BUILD', 'SHIP', 'REPEAT', '2026', '★'];

export default function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-ink/80">
      {/* Massive marquee word */}
      <div
        className="overflow-hidden border-b border-line"
        aria-hidden="true"
      >
        <div className="marquee-track animate-marquee-fast py-6 md:py-10">
          {[...STRIP, ...STRIP, ...STRIP, ...STRIP].map((s, i) => (
            <span
              key={i}
              className="display text-[clamp(3rem,10vw,9rem)] text-ink px-6 whitespace-nowrap"
            >
              {s}
              <span className="text-accent">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="wrap py-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 ix-dim">
          © {new Date().getFullYear()} {profile.name}
          <div className="ix mt-1">Built from scratch · No template</div>
        </div>
        <div className="col-span-6 md:col-span-4 ix-dim flex items-center md:justify-center gap-2">
          <span className="dot animate-blink" />
          Always shipping
        </div>
        <div className="col-span-6 md:col-span-4 ix-dim flex md:justify-end gap-4">
          <a href="#top" className="ul-link">↑ Top</a>
          <a href={profile.resumeUrl} className="ul-link" target="_blank" rel="noreferrer">
            Résumé ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
