import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-bg/70 border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-ink">
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-dim">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="link-underline hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.resumeUrl}
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
            <span className={`block h-px w-6 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-bg/95 backdrop-blur-lg">
          <nav className="container-x flex flex-col py-4 gap-3 text-sm">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-ink-dim hover:text-ink py-1"
              >
                {l.label}
              </a>
            ))}
            <a href={profile.resumeUrl} className="btn-ghost w-fit mt-2">
              Resume ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
