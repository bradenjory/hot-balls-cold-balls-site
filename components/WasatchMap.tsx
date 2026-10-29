// A simplified Wasatch Front, drawn from real coordinates. Not to survey accuracy.
const W = { lon: -112.2, lat: 40.86, kx: 1000, ky: 1316 };
const pt = ([lon, lat]: number[]) => [(lon - W.lon) * W.kx, (W.lat - lat) * W.ky].map((n) => n.toFixed(1)).join(",");
const path = (pts: number[][]) => `M${pts.map(pt).join("L")}Z`;

const UTAH_LAKE = [[-111.87, 40.37], [-111.80, 40.33], [-111.74, 40.28], [-111.72, 40.22], [-111.77, 40.15], [-111.83, 40.12], [-111.9, 40.17], [-111.92, 40.25], [-111.89, 40.32]];
const SALT_LAKE = [[-112.2, 40.86], [-112.0, 40.86], [-112.06, 40.8], [-112.14, 40.74], [-112.2, 40.71]];
const WASATCH = [[-111.77, 40.86], [-111.5, 40.86], [-111.5, 40.1], [-111.58, 40.1], [-111.6, 40.24], [-111.68, 40.36], [-111.74, 40.47], [-111.77, 40.62], [-111.79, 40.74]];
const OQUIRRH = [[-112.2, 40.66], [-112.1, 40.66], [-112.08, 40.55], [-112.09, 40.42], [-112.06, 40.34], [-112.2, 40.3]];

const PINS: { name: string; at: number[]; anchor?: "start" | "end" }[] = [
  { name: "Salt Lake City", at: [-111.86, 40.76] },
  { name: "Draper", at: [-111.864, 40.524] },
  { name: "Herriman", at: [-112.033, 40.514], anchor: "end" },
  { name: "Lehi", at: [-111.851, 40.392] },
  { name: "Saratoga Springs", at: [-111.904, 40.35], anchor: "end" },
  { name: "Provo", at: [-111.659, 40.234] },
];

export function WasatchMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 700 1000" className={className} role="img" aria-labelledby="map-title">
      <title id="map-title">
        Map of the Wasatch Front with our six planned spots: Salt Lake City, Draper, Herriman, Lehi, Saratoga Springs and Provo
      </title>
      <rect width="700" height="1000" rx="24" className="fill-raised" />
      <path d={path(WASATCH)} className="fill-raised-2" />
      <path d={path(OQUIRRH)} className="fill-raised-2" />
      <path d={path(SALT_LAKE)} className="fill-cold/25" />
      <path d={path(UTAH_LAKE)} className="fill-cold/25" />
      <text x="500" y="70" className="fill-muted font-sans text-[26px]">Wasatch Range</text>
      <text {...xy([-111.84, 40.21])} className="fill-muted font-sans text-[26px]" textAnchor="middle">Utah Lake</text>
      {PINS.map(({ name, at, anchor = "start" }) => {
        const [x, y] = pt(at).split(",").map(Number);
        const dx = anchor === "end" ? -26 : 26;
        return (
          <g key={name}>
            <circle cx={x} cy={y} r="14" className="fill-hot" />
            <path d={`M${x} ${y - 14}a14 14 0 0 1 0 28z`} className="fill-cold" />
            <text x={x + dx} y={y + 10} textAnchor={anchor} className="fill-ink font-display text-[32px] font-bold">
              {name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function xy(at: number[]) {
  const [x, y] = pt(at).split(",").map(Number);
  return { x, y };
}
