import { Leaf } from "@phosphor-icons/react/dist/ssr";

/** The one plant-based marker, used the same way everywhere. */
export function PlantBased({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex translate-y-[0.12em] items-center ${className}`}>
      <Leaf size="1.1em" weight="fill" aria-hidden="true" />
      <span className="sr-only"> (plant-based)</span>
    </span>
  );
}
