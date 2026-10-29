import Image from "next/image";
import { MASCOT_ALT } from "@/lib/site";

type Mascot = keyof typeof MASCOT_ALT;
const SRC: Record<Mascot, string> = {
  blaze: "/brand/hbcb-blaze.png",
  frost: "/brand/hbcb-frost.png",
  symbol: "/brand/hbcb-symbol.png",
};
const SIZE: Record<Mascot, [number, number]> = { blaze: [1200, 1267], frost: [1200, 1267], symbol: [1024, 1024] };

export function Mascot({
  name,
  className = "",
  sizes = "320px",
  priority,
  decorative,
  bob = "bob",
}: {
  name: Mascot;
  className?: string;
  sizes?: string;
  priority?: boolean;
  decorative?: boolean;
  bob?: "bob" | "bob-late" | "";
}) {
  const [w, h] = SIZE[name];
  return (
    <span className={`squash block ${className}`}>
      <Image
        src={SRC[name]}
        alt={decorative ? "" : MASCOT_ALT[name]}
        width={w}
        height={h}
        sizes={sizes}
        priority={priority}
        className={`h-auto w-full ${bob}`}
      />
    </span>
  );
}

const FIELD = { hot: "bg-hot", cold: "bg-cold", raised: "bg-raised", raised2: "bg-raised-2" };

/**
 * The page's one motif: a ball. Holds a photo when one exists; until then a mascot on a flat team field.
 * Pass `photo` (and `alt`) to drop a real picture in. Every call site carries a TODO naming the shot.
 */
export function BallFrame({
  field = "raised",
  mascot,
  photo,
  alt = "",
  className = "",
  sizes = "400px",
}: {
  field?: keyof typeof FIELD;
  mascot?: Mascot;
  photo?: string;
  alt?: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative aspect-square overflow-hidden rounded-full ${FIELD[field]} ${className}`}>
      {photo ? (
        <Image src={photo} alt={alt} fill sizes={sizes} className="object-cover" />
      ) : (
        mascot && (
          <div className="absolute inset-[18%]">
            <Mascot name={mascot} decorative sizes={sizes} bob="" />
          </div>
        )
      )}
    </div>
  );
}

/** Small split dot used as the list bullet. */
export function SplitDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block size-3 shrink-0 rounded-full border-l-[6px] border-r-[6px] border-l-hot border-r-cold ${className}`}
    />
  );
}
