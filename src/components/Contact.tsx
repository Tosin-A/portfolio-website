import { useState } from "react";
import { profile } from "../data/profile";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || "your site"}`);
    const body = encodeURIComponent(
      `${msg}\n\nFrom ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container-x max-w-3xl mx-auto reveal">
        <div className="glass p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative">
            <div className="eyebrow mb-4 justify-center">07 / Contact</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Got a hard problem?{" "}
              <span className="bg-gradient-to-r from-ink-dim to-accent-glow bg-clip-text text-transparent">
                Let's build.
              </span>
            </h2>
            <p className="mt-6 text-ink-dim">
              I'm open to internships, collaborations, and interesting conversations
              with people building the future.
            </p>

            <form onSubmit={onSubmit} className="mt-10 grid gap-3 text-left max-w-xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="glass px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:outline-none focus:border-accent"
                />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="glass px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:outline-none focus:border-accent"
                />
              </div>
              <textarea
                required
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="What are you building?"
                rows={4}
                className="glass px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:outline-none focus:border-accent resize-none"
              />
              <button type="submit" className="btn-primary justify-self-start mt-2">
                Send message →
              </button>
            </form>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-ghost">
                {profile.email}
              </a>
              <a href={profile.social.github} target="_blank" rel="noreferrer" className="btn-ghost">
                GitHub
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
                LinkedIn
              </a>
              <a href={profile.social.twitter} target="_blank" rel="noreferrer" className="btn-ghost">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
