import { SplitBall } from "./SplitBall";

/* A flat drawing of the Wasatch Front: Great Salt Lake, Utah Lake, the Wasatch and Oquirrh
   ranges, and the six planned spots. Positions are projected from real latitude and longitude. */
const PINS = [
  { name: "Salt Lake City", x: 57.1, y: 20.6, side: "right" },
  { name: "Herriman", x: 31.4, y: 48.9, side: "left" },
  { name: "Draper", x: 55.7, y: 47.8, side: "right" },
  { name: "Lehi", x: 57.1, y: 62.2, side: "right" },
  { name: "Saratoga Springs", x: 50.0, y: 66.7, side: "left" },
  { name: "Provo", x: 84.3, y: 77.8, side: "below" },
] as const;

export function UtahMap({ active, className = "" }: { active?: string | null; className?: string }) {
  return (
    <figure className={`relative ${className}`}>
      <div className="relative aspect-[1000/1692] w-full overflow-hidden rounded-[var(--radius-card)] bg-bg-raised">
        <svg viewBox="0 0 1000 1692" className="absolute inset-0 size-full" aria-hidden="true">
          <polygon points="543,0 600,282 643,470 671,658 643,846 671,940 757,1071 843,1222 900,1410 886,1692 1000,1692 1000,0" fill="#2a2335" />
          <polygon points="0,432 186,470 229,658 257,846 300,996 329,1128 271,1316 214,1692 0,1692" fill="#2a2335" />
          <polygon points="0,0 386,0 371,94 257,207 171,338 0,414" fill="var(--color-cold-deep)" />
          <polygon points="557,1109 657,1165 729,1278 757,1410 700,1560 643,1654 557,1598 500,1447 471,1297 500,1184" fill="var(--color-cold-deep)" />
        </svg>
        <span className="absolute top-[6%] left-[5%] max-w-[9ch] text-base leading-tight text-ink-soft">Great Salt Lake</span>
        <span className="absolute top-[88%] left-[47%] text-base leading-tight text-ink-soft">Utah Lake</span>
        {PINS.map((p) => {
          const on = active === p.name;
          return (
            <span
              key={p.name}
              className="absolute flex items-center"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <SplitBall
                className={`absolute size-5 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-[var(--ease-out-expo)] md:size-6 ${on ? "scale-[1.9]" : ""}`}
              />
              <span
                className={[
                  "absolute font-display text-base leading-none font-semibold whitespace-nowrap transition-colors duration-300 md:text-lg",
                  p.side === "right" ? "left-4 -translate-y-1/2 md:left-5" : "",
                  p.side === "left" ? "right-4 -translate-y-1/2 md:right-5" : "",
                  p.side === "below" ? "top-4 -translate-x-1/2 md:top-5" : "",
                  on ? "text-hot" : "text-ink",
                ].join(" ")}
              >
                {p.name}
              </span>
            </span>
          );
        })}
      </div>
      <figcaption className="sr-only">
        Map of the Wasatch Front showing the six planned spots: Salt Lake City, Herriman, Draper, Lehi,
        Saratoga Springs and Provo.
      </figcaption>
    </figure>
  );
}
