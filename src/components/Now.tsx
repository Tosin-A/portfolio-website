import { profile } from "../data/profile";

export default function Now() {
  return (
    <section id="now" className="section">
      <div className="container-x">
        <div className="reveal glass p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/30 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent-glow/20 blur-3xl animate-float-slower" />

          <div className="relative">
            <div className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              06 / Now
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
              What I'm building right now<span className="text-accent">.</span>
            </h2>

            <ul className="space-y-4 max-w-2xl">
              {profile.nowBuilding.map((n, i) => (
                <li key={i} className="flex gap-4 text-ink-dim">
                  <span className="font-mono text-accent text-sm mt-1">
                    0{i + 1}
                  </span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
