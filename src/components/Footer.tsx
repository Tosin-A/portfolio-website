import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 mt-10">
      <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-mute font-mono">
        <div>
          © {new Date().getFullYear()} {profile.name}. Built from scratch.
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          Always shipping
        </div>
      </div>
    </footer>
  );
}
