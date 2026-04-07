import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-x text-center max-w-3xl mx-auto">
        <div className="eyebrow mb-4 justify-center">06 / Contact</div>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Got a hard problem?{" "}
          <span className="text-ink-dim">Let's build.</span>
        </h2>
        <p className="mt-6 text-ink-dim text-lg">
          I'm open to internships, collaborations, and interesting conversations
          with people building the future.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            {profile.email} →
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            LinkedIn
          </a>
          <a
            href={profile.social.twitter}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
