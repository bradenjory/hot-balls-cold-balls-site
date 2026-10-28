/**
 * The brand's one motif: a ball split down the middle, hot on the left, cold on the right.
 * Flat fills, drawn in CSS, used from bullet size up to a viewport-cropping disc.
 */
export function SplitBall({
  className = "",
  hot = "bg-hot",
  cold = "bg-cold",
  animate = false,
}: {
  className?: string;
  hot?: string;
  cold?: string;
  animate?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`${/\b(absolute|fixed)\b/.test(className) ? "" : "relative"} block aspect-square rounded-full ${className}`}
    >
      <span
        className={`absolute inset-y-0 left-0 w-1/2 rounded-l-full ${hot} ${animate ? "half-left" : ""}`}
      />
      <span
        className={`absolute inset-y-0 right-0 w-1/2 rounded-r-full ${cold} ${animate ? "half-right" : ""}`}
      />
    </span>
  );
}
