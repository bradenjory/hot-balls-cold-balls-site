const PHRASE = ["Have a Ball", "Pick a Side", "#GotBalls"];

export function Marquee() {
  const run = (
    <span className="flex shrink-0 items-center">
      {[...PHRASE, ...PHRASE].map((word, i) => (
        <span key={i} className="flex items-center">
          <span className="px-[0.35em]">{word}</span>
          <span className="inline-block size-[0.42em] rounded-full bg-ink" />
        </span>
      ))}
    </span>
  );
  return (
    <div aria-hidden="true" className="overflow-hidden bg-hot py-6 text-ink select-none md:py-8">
      <p className="marquee-track flex w-max font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-none font-bold tracking-tight">
        {run}
        {run}
      </p>
    </div>
  );
}
