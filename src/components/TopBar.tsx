import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/profile';

const NAV = [
  { n: '01', label: 'About', href: '#about' },
  { n: '02', label: 'Work', href: '#projects' },
  { n: '03', label: 'Stack', href: '#skills' },
  { n: '04', label: 'Record', href: '#experience' },
  { n: '05', label: 'Now', href: '#now' },
  { n: '06', label: 'Contact', href: '#contact' },
];

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState('');
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${p})`;
      }
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
      });
      setTime(`${t} LDN`);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-sm border-b border-line">
      <div ref={progressRef} className="scroll-progress" />
      <div className="wrap flex items-center justify-between h-14">
        <a
          href="#top"
          className="flex items-center gap-3 ix-ink"
        >
          <span className="grid place-items-center h-7 w-7 bg-accent text-bg font-display font-extrabold text-[14px]">
            T
          </span>
          <span className="hidden sm:inline">Tosin&nbsp;Adedokun</span>
          <span className="hidden md:inline ix">— {profile.role}</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="group ix-dim hover:text-ink transition-colors"
            >
              <span className="text-ink-mute group-hover:text-accent transition-colors">
                {item.n}
              </span>
              <span className="ml-1.5">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <span className="ix-dim flex items-center gap-2">
            <span className="dot animate-blink" />
            available
          </span>
          <span className="ix">{time}</span>
        </div>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="lg:hidden flex flex-col items-center justify-center gap-1.5 -mr-2 h-11 w-11"
        >
          <span
            className={`block w-5 h-px bg-ink transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-opacity ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden overflow-hidden border-t border-line transition-[max-height] duration-300 ${open ? 'max-h-[400px]' : 'max-h-0'}`}
      >
        <nav className="wrap py-6 flex flex-col">
          {NAV.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between py-3 border-b border-line/60 font-display text-2xl"
            >
              <span>{item.label}</span>
              <span className="ix">{item.n}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
