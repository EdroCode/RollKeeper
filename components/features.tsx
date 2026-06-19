import { Component, Zap, Monitor } from "lucide-react";

const features = [
  {
    icon: Component,
    title: "Modular layout",
    description:
      "Add and remove widgets on the fly. Build the exact setup your campaign needs.",
  },
  {
    icon: Zap,
    title: "Instant access",
    description: "No sign-up required. Open the tab and you're ready to play.",
  },
  {
    icon: Monitor,
    title: "Stays out of the way",
    description: "Clean interface that doesn't compete with your VTT.",
  },
];

export default function Features() {
  return (
    <section className="flex flex-col gap-6 bg-zinc-950 px-8 py-20">
      <p className="text-sm uppercase tracking-widest text-zinc-500">
        Why RollKeeper
      </p>
      <h2 className="text-3xl font-black text-white">
        Built for the table, not the browser
      </h2>
      <p className="max-w-xl text-zinc-400">
        Every tool you need is one click away. No accounts, no loading screens,
        just your session, running smoothly.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <Icon size={22} className="text-zinc-50" />
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="text-sm text-zinc-400">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
