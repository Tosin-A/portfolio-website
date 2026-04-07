import { useEffect, useState } from 'react';
import { profile } from '../data/profile';

const nav = [
  { id: 'about', label: 'Who I Am', href: '#about' },
  { id: 'projects', label: "What I've Built", href: '#projects' },
  { id: 'skills', label: 'My Stack', href: '#skills' },
  { id: 'experience', label: 'Track Record', href: '#experience' },
  { id: 'now', label: 'Now', href: '#now' },
  { id: 'contact', label: "Let's Talk", href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('about');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map(n => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-bg/60 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-ink group">
          <span className="bg-gradient-to-r from-ink to-accent-glow bg-clip-text text-transparent">
            {profile.name}
          </span>
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {nav.map(l => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-3 py-1.5 rounded-full transition-all ${
                  isActive
                    ? 'text-ink bg-white/5 border border-white/10'
                    : 'text-ink-dim hover:text-ink'
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute -bottom-px left-1/2 -translate-x-1/2 h-px w-6 bg-gradient-to-r from-transparent via-accent to-transparent" />
                )}
              </a>
            );
          })}
        </nav>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex btn-ghost"
        >
          Resume ↗
        </a>

        <button
          className="md:hidden text-ink-dim hover:text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-6 bg-current transition ${open ? 'translate-y-1.5 rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-current transition ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-current transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-bg/90 backdrop-blur-xl">
          <nav className="container-x flex flex-col py-4 gap-3 text-sm">
            {nav.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-ink-dim hover:text-ink py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost w-fit mt-2"
            >
              Resume ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
