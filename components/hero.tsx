import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col gap-8 bg-white px-12 py-56 text-center border-b border-zinc-200">
      <Image
        alt="logo"
        src={"./d20.svg"}
        className="h-24 hover:rotate-360 hover:scale-110 transition-all duration-400"
      />
      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-400">
        RPG dashboard · Closed beta
      </p>

      <h1 className="text-[64px] font-black leading-none tracking-[-0.03em] text-zinc-950">
        All your tools.
      </h1>
      <h2 className="text-[64px] font-black leading-none tracking-[-0.03em] text-zinc-950">
        One tab.
      </h2>

      <p className="mx-auto max-w-sm text-base leading-relaxed text-zinc-500">
        Stop switching between sites mid-session. <br></br>Dice, health,
        initiative, one board, always ready.
      </p>

      <div className="flex justify-center gap-3">
        <a
          href="./dashboard"
          className="rounded-bl-xl rounded-tr-xl bg-zinc-950 px-6 py-3 text-md font-semibold text-white transition hover:bg-zinc-800 hover:scale-110 cursor-pointer active:scale-95"
        >
          Open beta
        </a>
      </div>
    </section>
  );
}
