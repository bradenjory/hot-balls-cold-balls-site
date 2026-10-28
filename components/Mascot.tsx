import Image from "next/image";

export const MASCOTS = {
  blaze: {
    src: "/brand/blaze.png",
    width: 1200,
    height: 1267,
    alt: "Blaze, the Team Blaze mascot: an orange ball with a flame on top",
  },
  frost: {
    src: "/brand/frost.png",
    width: 1200,
    height: 1267,
    alt: "Frost, the Team Frost mascot: a teal ball with sunglasses and sparkles",
  },
  symbol: {
    src: "/brand/symbol.png",
    width: 1024,
    height: 1024,
    alt: "The Hot Balls Cold Balls face: half orange, half teal, winking",
  },
} as const;

type Props = {
  who: keyof typeof MASCOTS;
  className?: string;
  sizes: string;
  priority?: boolean;
  /** Seconds to offset the idle bob so neighbours do not move in step. */
  delay?: number;
  /** Pass "" when the mascot is decoration next to text that already names it. */
  alt?: string;
};

/** A mascot with a gentle idle bob and a small squash under the pointer. Pure CSS, no hydration. */
export function Mascot({ who, className = "", sizes, priority, delay = 0, alt }: Props) {
  const m = MASCOTS[who];
  return (
    <div className={`mascot-bob ${className}`} style={{ animationDelay: `${delay}s` }}>
      <div className="mascot-squash">
        <Image
          src={m.src}
          width={m.width}
          height={m.height}
          alt={alt ?? m.alt}
          sizes={sizes}
          priority={priority}
          draggable={false}
          className="pointer-events-none h-auto w-full select-none"
        />
      </div>
    </div>
  );
}
