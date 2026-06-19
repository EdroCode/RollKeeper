export default function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-zinc-200 bg-white px-8 py-6">
      <p className="text-xs uppercase tracking-widest text-zinc-400">
        RollKeeper
      </p>
      <a
        href="https://edrocode.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-zinc-400 transition hover:text-zinc-900"
      >
        Made by <span className="font-semibold text-zinc-950">Edro</span>
      </a>
    </footer>
  );
}
