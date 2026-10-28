import type { MenuItem } from "@/lib/menu";
import { PlantBased } from "./PlantBased";

/** Item name and description on the left, prices stacked in their own column on the right. */
export function MenuList({ items, accent }: { items: MenuItem[]; accent: "hot" | "cold" }) {
  return (
    <ul className="flex flex-col gap-7 md:gap-9">
      {items.map((item, i) => (
        <li
          key={item.name}
          className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1"
          data-reveal
          style={{ ["--i" as string]: i % 4 }}
        >
          <h3 className="font-display text-[1.5rem] leading-tight font-bold tracking-[-0.02em] md:text-[1.85rem]">
            {item.name}
            {item.plant && <PlantBased className="ml-2 text-[0.8em]" />}
          </h3>
          <p
            className={`row-span-2 text-right font-display text-[1.125rem] leading-snug font-semibold tabular-nums md:text-[1.25rem] ${
              accent === "hot" ? "text-hot" : "text-cold"
            }`}
          >
            {item.prices.map((p) => (
              <span key={p} className="block whitespace-nowrap">
                {p}
              </span>
            ))}
          </p>
          <p className="text-lg">
            {item.descPlantAfter ? (
              <>
                {item.desc.slice(0, item.desc.indexOf(item.descPlantAfter))}
                <span className="whitespace-nowrap">
                  {item.descPlantAfter}
                  <PlantBased className="ml-1" />
                </span>
                {item.desc.slice(item.desc.indexOf(item.descPlantAfter) + item.descPlantAfter.length)}
              </>
            ) : (
              item.desc
            )}
          </p>
        </li>
      ))}
    </ul>
  );
}
