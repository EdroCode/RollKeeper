import { Computer, GitPullRequest } from "lucide-react";

export default function Contribute() {
  return (
    <section className="flex flex-col gap-8 bg-zinc-950 px-8 py-8 ">
      <p className="text-sm uppercase tracking-widest text-zinc-500">
        Open source
      </p>
      <h2 className="text-3xl font-black text-white">Build with us</h2>
      <p className="max-w-xl text-zinc-400">
        RollKeeper is fully open source. Adding a widget takes one component and
        one line in <span className="font-mono text-zinc-300">widgetMap</span>
      </p>

      <div className="flex flex-col gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          How to add a widget
        </p>
        {[
          "Fork the repo on GitHub",
          "Create your component in /app/components",
          "Add it to widgetMap in dashboard",
          "Open a pull request",
        ].map((step, i) => (
          <div key={i} className="flex gap-3 text-sm text-zinc-400">
            <span className="font-mono text-zinc-600">{i + 1}.</span>
            <span>{step}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/EdroCode/rollkeeper"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-zinc-50 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-white active:scale-95"
        >
          <Computer size={16} />
          View on GitHub
        </a>
        <a
          href="https://github.com/EdroCode/rollkeeper/pulls"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl border border-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-200 active:scale-95"
        >
          <GitPullRequest size={16} />
          Open a PR
        </a>
      </div>
    </section>
  );
}
