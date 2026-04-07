import { useEffect, useRef } from "react";

export default function Background() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = glowRef.current;
      if (!el) return;
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* Fixed grid + radial glows */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/20 blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-accent-glow/15 blur-3xl animate-float-slower" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl animate-float-slow" />
      </div>

      {/* Cursor follow glow */}
      <div ref={glowRef} className="cursor-glow" />
    </>
  );
}
