import { useState } from 'react';
import { profile } from '../data/profile';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || 'your site'}`);
    const body = encodeURIComponent(
      `${msg}\n\nFrom ${name}${email ? ` (${email})` : ''}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const field =
    'w-full bg-transparent border-b border-line py-4 text-ink placeholder:text-ink-mute focus:outline-none';

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="ix">§ 07 — Contact</span>
          <span className="ix">Reply guaranteed</span>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12 mt-12">
          <div className="col-span-12 md:col-span-6 reveal">
            <h2 className="display text-[clamp(3rem,9vw,8rem)]">
              Got a hard
              <br />
              problem<span className="text-accent">?</span>
              <br />
              Let&apos;s
              <br />
              build.
            </h2>

            <p className="mt-8 text-ink-dim text-base md:text-lg max-w-md leading-relaxed">
              I&apos;m open to internships, founding-engineer roles,
              collaborations, and interesting conversations with people
              building the future.
            </p>

            <ul className="mt-10 space-y-3">
              {[
                { k: 'Email', v: profile.email, href: `mailto:${profile.email}` },
                { k: 'GitHub', v: '@Tosin-A', href: profile.social.github },
                { k: 'LinkedIn', v: 'Tosin Adedokun', href: profile.social.linkedin },
                { k: 'X', v: '@yxng_tosin', href: profile.social.twitter },
              ].map(({ k, v, href }) => (
                <li key={k} className="flex items-center gap-3">
                  <span className="ix w-16">{k}</span>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="ix-ink ul-link"
                  >
                    {v}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="col-span-12 md:col-span-6 reveal flex flex-col border-t border-line"
          >
            <label className="block field-wrap pt-4">
              <span className="ix">/01 Name</span>
              <input
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                className={field}
              />
            </label>
            <label className="block field-wrap pt-4">
              <span className="ix">/02 Email</span>
              <input
                required
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className={field}
              />
            </label>
            <label className="block field-wrap pt-4">
              <span className="ix">/03 What are you building?</span>
              <textarea
                required
                value={msg}
                onChange={e => setMsg(e.target.value)}
                placeholder="Tell me about it"
                rows={5}
                className={`${field} resize-none`}
              />
            </label>

            <button type="submit" className="btn-solid mt-10 self-start">
              Send transmission →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
