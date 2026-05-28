/**
 * Image catalogue — every photo URL used across the site is namespaced here
 * so we can swap individual stays/activities/stories to local /public assets
 * later without hunting through component files.
 *
 * Sources (all free for commercial use):
 *   - Unsplash search "Solomon Islands" — real local imagery
 *   - Unsplash search "tropical / overwater bungalow / scuba" — generic
 *     stand-ins where Solomon-specific photos weren't available
 *   - Pexels free CC license for the hero video
 *
 * NOTE: brand voice says we should "leave room for photography but never
 * fabricate it". Treat all stand-ins as placeholders to swap before launch.
 */

const UNSPLASH = "https://images.unsplash.com";

/** Unsplash CDN URL with sensible defaults for card and hero use. */
export function unsplashUrl(photoId: string, width = 1200, quality = 80) {
  return `${UNSPLASH}/${photoId}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

/* ── Solomon Islands authentic imagery (search returned 15+ photos) ────── */
export const SI = {
  aerialIsland:      "photo-1730149442413-d699650dfbe3",
  peopleInBoat:      "photo-1715940093974-8836926f3f41",
  boatsOnWater:      "photo-1642498232612-a837df233825",
  aerialBoats:       "photo-1518950957614-73ac0a001408",
  beachHut:          "photo-1724258238059-ae4b99f2d566",
  smallIsland:       "photo-1641991340966-7fade1c31e22",
  greenTreesWater:   "photo-1627887419093-bf2fcd9adce6",
  palmBeach:         "photo-1627512729059-fb322f8436f7",
  seashore:          "photo-1519155778036-e89552bc12f2",
  waterfall:         "photo-1520769490916-8c754d52b8e0",
  treeBranchBeach:   "photo-1707977563342-723206c00883",
  mountainRoad:      "photo-1612016834422-ab208e8c9f31",
  palmSeashore:      "photo-1627135613087-bc46c6a2cb52",
  birdOnTree:        "photo-1616038242909-66abf9ccdcd8",
  seaCreature:       "photo-1656736519027-8cb8f45ba19e",
} as const;

/* ── Activity / generic tropical stand-ins ─────────────────────────────── */
export const IMG = {
  divingReef:        "photo-1682687981907-170c006e3744",
  shipwreckCoral1:   "photo-1581011277401-9f2953225051",
  shipwreckCoral2:   "photo-1573553467420-b2a90be8d317",
  shipwreckCoral3:   "photo-1631255117612-0967acbecc93",
  surferWave:        "photo-1731353160468-9bac2e2e894f",
  waterfallForest:   "photo-1641225190106-0b149bfbbba5",
  tropicalLagoon:    "photo-1696580436068-f19c26850e8b",
  overwaterOcean:    "photo-1753190550747-c56d10ff6d35",
  overwaterWalkways: "photo-1753939223042-872934ffda15",
  woodenDockMoorea:  "photo-1579117460782-ffbb1ec4bafe",
  woodenBoatsThai:   "photo-1552465011-b4e21bf6e79a",
  houseOnShore:      "photo-1647971447454-8093ed0f8e3d",
} as const;
