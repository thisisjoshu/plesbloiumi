import type { PhotoPalette } from "@/components/ui/Photo";
import { IMG, SI, unsplashUrl } from "@/lib/images";

/**
 * Activities catalogue — single source of truth for the landing strip and
 * the /activities index page. Categories drive the chip filter row.
 */

export type ActivityCategory =
  | "Diving"
  | "Surf"
  | "Kastom"
  | "WWII"
  | "Bushwalk";

export type Activity = {
  id: string;
  category: ActivityCategory;
  /** Kicker text — shown small-caps above the title, includes duration. */
  kicker: string;
  name: string;
  meta: string;
  price: number;
  imageId: string;
  palette: PhotoPalette;
  priceSuffix?: string;
  location: string;
};

export const ACTIVITIES: Activity[] = [
  {
    id: "marovo-dive",
    category: "Diving",
    kicker: "Diving · 3 days",
    name: "Three days on Marovo's drop-offs",
    meta: "Run by Dive Munda · pickup at your lodge",
    price: 2400,
    imageId: IMG.divingReef,
    palette: "marovo",
    priceSuffix: "/ person",
    location: "Marovo Lagoon, Western Province",
  },
  {
    id: "skull-island",
    category: "Kastom",
    kicker: "Kastom · half day",
    name: "Skull Island and the war canoes",
    meta: "Roviana Lagoon · with a chief's descendant",
    price: 380,
    imageId: SI.peopleInBoat,
    palette: "village",
    priceSuffix: "/ person",
    location: "Roviana Lagoon, Western Province",
  },
  {
    id: "guadalcanal-wwii",
    category: "WWII",
    kicker: "WWII history · full day",
    name: "Guadalcanal: a long walk through the campaign",
    meta: "From Honiara · lunch included · vintage Jeep",
    price: 640,
    imageId: IMG.shipwreckCoral1,
    palette: "archive",
    priceSuffix: "/ person",
    location: "Guadalcanal, Central Province",
  },
  {
    id: "surf-three-sisters",
    category: "Surf",
    kicker: "Surf · 6 days",
    name: "Surf the Three Sisters",
    meta: "Western Province · sleeps 4 · all transfers",
    price: 5400,
    imageId: IMG.surferWave,
    palette: "sunset",
    priceSuffix: "/ trip",
    location: "Western Province",
  },
  {
    id: "tetepare-walk",
    category: "Bushwalk",
    kicker: "Bushwalk · 2 days",
    name: "Tetepare ranger walk + freshwater lake",
    meta: "With an Association ranger · meals included",
    price: 980,
    imageId: SI.waterfall,
    palette: "jungle",
    priceSuffix: "/ person",
    location: "Tetepare Island",
  },
  {
    id: "iron-bottom-sound",
    category: "Diving",
    kicker: "Diving · day trip",
    name: "Iron Bottom Sound: WWII wrecks at first light",
    meta: "From Honiara · two-tank dive · advanced cert.",
    price: 1100,
    imageId: IMG.shipwreckCoral2,
    palette: "storm",
    priceSuffix: "/ person",
    location: "Iron Bottom Sound, Guadalcanal",
  },
  {
    id: "kastom-village",
    category: "Kastom",
    kicker: "Kastom · half day",
    name: "Langa Langa shell money workshop",
    meta: "Malaita · learn from a carver · take a piece home",
    price: 450,
    imageId: SI.boatsOnWater,
    palette: "village",
    priceSuffix: "/ person",
    location: "Langa Langa Lagoon, Malaita",
  },
  {
    id: "munda-snorkel",
    category: "Diving",
    kicker: "Snorkel · half day",
    name: "Snorkel the Shark Point reefs",
    meta: "Munda · safe with reef sharks · gear included",
    price: 320,
    imageId: IMG.tropicalLagoon,
    palette: "reef",
    priceSuffix: "/ person",
    location: "Munda, Western Province",
  },
];

export const ACTIVITY_CATEGORIES: (ActivityCategory | "All")[] = [
  "All",
  "Diving",
  "Surf",
  "Kastom",
  "WWII",
  "Bushwalk",
];

export function activityImageUrl(
  a: Pick<Activity, "imageId">,
  width = 1200,
): string {
  return unsplashUrl(a.imageId, width);
}
