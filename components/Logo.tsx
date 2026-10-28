import Image from "next/image";
import Link from "next/link";

/** Header lockup: the half-and-half symbol with the name set in live type. */
export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex items-center gap-2.5 rounded-full"
      aria-label="Hot Balls Cold Balls, home"
    >
      <Image
        src="/brand/symbol.png"
        alt=""
        width={44}
        height={44}
        priority
        className="size-10 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-[-14deg] md:size-11"
      />
      <span className="font-display text-[1.05rem] leading-[0.95] font-bold tracking-[-0.01em] uppercase md:text-[1.15rem]">
        <span className="block text-hot">Hot Balls</span>
        <span className="block text-cold">Cold Balls</span>
      </span>
    </Link>
  );
}
