import type { ComponentType } from "react";
import {
  IconWifi,
  IconWaves,
  IconCoffee,
  IconKey,
  IconBoat,
  IconCompass,
  type IconProps,
} from "@/components/ui/Icon";
import type { AmenityIcon } from "@/lib/stays";

const ICONS: Record<AmenityIcon, ComponentType<IconProps>> = {
  wifi: IconWifi,
  waves: IconWaves,
  coffee: IconCoffee,
  key: IconKey,
  boat: IconBoat,
  compass: IconCompass,
};

export type AmenityGridProps = {
  amenities: { label: string; icon: AmenityIcon }[];
};

/**
 * AmenityGrid — 2-column at md+, single column on mobile. Icons render in
 * lagoon-700 to read as functional metadata rather than decoration.
 */
export function AmenityGrid({ amenities }: AmenityGridProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-3.5 list-none p-0 m-0">
      {amenities.map(({ label, icon }) => {
        const Ico = ICONS[icon];
        return (
          <li
            key={label}
            className="flex items-center gap-2.5 text-[14.5px] text-volcano-800"
          >
            <Ico size={20} className="text-lagoon-700" />
            {label}
          </li>
        );
      })}
    </ul>
  );
}
