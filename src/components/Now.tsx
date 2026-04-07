import { lazy, Suspense } from 'react';
import { profile } from '../data/profile';

const ScrollStack = lazy(() => import('./effects/ScrollStack'));
const ScrollStackItem = lazy(() =>
  import('./effects/ScrollStack').then(m => ({ default: m.ScrollStackItem }))
);

export default function Now() {
  return (
    <section id="now" className="section">
      <div className="container-x">
        <div className="reveal">
          <div className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            06 / Now
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
            What I'm building right now<span className="text-accent">.</span>
          </h2>
          <p className="text-ink-dim mb-8">
            Scroll through what's on my desk this week.
          </p>
        </div>

        <div className="h-[80vh] glass overflow-hidden">
          <Suspense
            fallback={<div className="p-10 text-ink-dim">Loading…</div>}
          >
            <ScrollStack
              itemDistance={80}
              itemScale={0.04}
              itemStackDistance={28}
              baseScale={0.88}
              rotationAmount={0}
              blurAmount={1}
            >
              {profile.nowBuilding.map((n, i) => (
                <ScrollStackItem
                  key={i}
                  itemClassName="bg-gradient-to-br from-bg-elev to-bg-card border border-white/10 text-ink"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div className="text-xs font-mono text-accent uppercase tracking-wider">
                      0{i + 1} / Now
                    </div>
                    <div className="text-2xl md:text-3xl font-semibold leading-snug max-w-2xl">
                      {n}
                    </div>
                    <div className="text-xs font-mono text-ink-mute">
                      Tosin Adedokun · {new Date().getFullYear()}
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </Suspense>
        </div>
      </div>
    </section>
  );
}
