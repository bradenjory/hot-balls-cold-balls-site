const PHRASE = ["Have a Ball", "Pick a Side", "#GotBalls"];

function Tape({ tone, className }: { tone: "hot" | "cold"; className: string }) {
  const run = (
    <span className="flex shrink-0 items-center">
      {[...PHRASE, ...PHRASE].map((word, i) => (
        <span key={i} className="flex items-center">
          <span className="px-[0.35em]">{word}</span>
          <span className="inline-block size-[0.36em] rounded-full bg-bg" />
        </span>
      ))}
    </span>
  );
  return (
    <div className={`-mx-[5vw] py-1.5 md:py-2 ${tone === "hot" ? "bg-hot" : "bg-cold"} ${className}`}>
      <p
        className={`flex w-max font-display text-[clamp(2.5rem,6.5vw,6rem)] leading-[1.15] font-bold tracking-tight text-bg ${
          tone === "hot" ? "marquee-track" : "marquee-track-back"
        }`}
      >
        {run}
        {run}
      </p>
    </div>
  );
}

/** Two crossing tapes, hot over cold, running opposite ways. Decoration only. */
export function Marquee() {
  return (
    <div aria-hidden="true" className="relative overflow-hidden py-[clamp(28px,4vw,56px)] select-none">
      <Tape tone="cold" className="absolute inset-x-0 top-1/2 -translate-y-1/2 rotate-[2.5deg]" />
      <Tape tone="hot" className="relative -rotate-[1.5deg]" />
    </div>
  );
}
