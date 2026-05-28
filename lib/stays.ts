import type { PhotoPalette } from "@/components/ui/Photo";
import { IMG, SI, unsplashUrl } from "@/lib/images";

/**
 * Stays catalogue — single source of truth for the landing grid, the
 * /stays index, and the /stays/[id] detail pages. Add new stays here and
 * they automatically appear everywhere a Stays loop is rendered.
 */

export type AmenityIcon =
  | "wifi"
  | "waves"
  | "coffee"
  | "key"
  | "boat"
  | "compass";

export type Room = {
  name: string;
  meta: string;
  price: number;
  /** Photo ID — fed through unsplashUrl() at render time. */
  imageId: string;
  /** Palette fallback if the image fails to load. */
  palette: PhotoPalette;
};

export type Review = {
  name: string;
  from: string;
  date: string;
  text: string;
};

export type Stay = {
  id: string;
  name: string;
  meta: string;
  location: string;
  area: string;
  capacity: string;
  price: number;
  rating: number;
  reviewCount: number;
  /** Primary card / hero image. */
  imageId: string;
  /** Coloured fallback if the image 404s. */
  palette: PhotoPalette;
  badge?: string;
  kicker?: string;
  hostName: string;
  hostInitial: string;
  hostMeta: string;
  description: string[];
  amenities: { label: string; icon: AmenityIcon }[];
  rooms: Room[];
  reviews: Review[];
  /** Five photo IDs — first is the gallery hero, next four are thumbs. */
  galleryImageIds: string[];
  boatTransfer?: number;
  /** Tags used by the index page's filter chips. */
  tags: string[];
};

export const STAYS: Stay[] = [
  {
    id: "uepi",
    name: "Uepi Island Resort",
    meta: "Marovo Lagoon · 8 bungalows · run by the Kelly family since 1987",
    location: "Marovo Lagoon, Western Province",
    area: "Marovo Lagoon",
    capacity: "8 bungalows · sleeps up to 16",
    price: 1840,
    rating: 4.9,
    reviewCount: 47,
    imageId: SI.beachHut,
    palette: "marovo",
    badge: "Diving",
    hostName: "The Kelly family",
    hostInitial: "K",
    hostMeta: "Marovo Lagoon · since 1987 · usually replies within a day",
    description: [
      "Eight thatched bungalows scattered along a quiet stretch of Marovo's eastern shoreline, on land the Kelly family has lived on for four generations. There's a reef thirty seconds from your door, a lagoon you can swim across in a morning, and a dining hall where everyone eats together when the boat comes in with the day's catch.",
      "Days are slow on purpose. Diving in the morning. Coffee on the deck. Maybe a walk to the neighbouring village to see the carvers at work. Maybe nothing at all.",
    ],
    amenities: [
      { label: "Solar power", icon: "key" },
      { label: "Wifi in lodge", icon: "wifi" },
      { label: "Reef diving on site", icon: "waves" },
      { label: "Three meals included", icon: "coffee" },
      { label: "Airport transfer", icon: "boat" },
      { label: "Guided walks", icon: "compass" },
    ],
    rooms: [
      {
        name: "Garden bungalow",
        meta: "1 queen · ensuite · no AC · ceiling fan",
        price: 1840,
        imageId: SI.beachHut,
        palette: "jungle",
      },
      {
        name: "Lagoon-edge bungalow",
        meta: "1 queen + 1 single · over-water deck · best for sunsets",
        price: 2380,
        imageId: IMG.overwaterOcean,
        palette: "marovo",
      },
      {
        name: "Family hut",
        meta: "2 queens · separate kids room · garden",
        price: 3200,
        imageId: SI.palmBeach,
        palette: "village",
      },
    ],
    reviews: [
      {
        name: "Pia",
        from: "Berlin",
        date: "May 2026",
        text: "We stayed five nights and didn't want to leave. The Kellys feel like family by the second dinner. Take the dawn snorkel — the visibility was unreal.",
      },
      {
        name: "Daniel",
        from: "Sydney",
        date: "Mar 2026",
        text: "Don't come here for fast Wifi. Do come if you want to sit on a deck and hear nothing but the lagoon for a week.",
      },
      {
        name: "Aiko",
        from: "Tokyo",
        date: "Feb 2026",
        text: "The reef walk before breakfast made the trip. Bring water shoes. The kitchen will pack you a coconut for the way.",
      },
    ],
    galleryImageIds: [
      SI.beachHut,
      IMG.divingReef,
      SI.aerialIsland,
      IMG.tropicalLagoon,
      SI.palmBeach,
    ],
    boatTransfer: 600,
    tags: ["Marovo", "Diving", "Family-run"],
  },
  {
    id: "zipolo",
    name: "Zipolo Habu Resort",
    meta: "Munda, Western Province · 6 leaf huts · Aaron meets your boat",
    location: "Munda, Western Province",
    area: "Munda",
    capacity: "6 leaf huts · sleeps up to 12",
    price: 1200,
    rating: 4.8,
    reviewCount: 38,
    imageId: SI.boatsOnWater,
    palette: "lagoon",
    hostName: "Aaron",
    hostInitial: "A",
    hostMeta: "Munda · since 2008 · usually replies within hours",
    description: [
      "Six leaf-and-timber huts strung along a private beach a short boat-ride from Munda airfield. Aaron and his crew run the kitchen, the boats and the dive shop themselves — there isn't really a front desk, more a long table you walk past on the way in.",
      "It's the kind of place where the day's plan gets sketched out at breakfast: a wreck dive, a beach lunch on a deserted island, an early sundowner back at the bar. Then bed by nine because the generator goes off at ten.",
    ],
    amenities: [
      { label: "Wifi at the bar", icon: "wifi" },
      { label: "Wreck diving on site", icon: "waves" },
      { label: "All meals included", icon: "coffee" },
      { label: "Boat from Munda airfield", icon: "boat" },
      { label: "Island-hop day trips", icon: "compass" },
      { label: "Solar + generator power", icon: "key" },
    ],
    rooms: [
      {
        name: "Beachfront leaf hut",
        meta: "1 queen · ocean view · open-air bathroom",
        price: 1200,
        imageId: SI.beachHut,
        palette: "reef",
      },
      {
        name: "Garden hut",
        meta: "1 queen · ceiling fan · 30 sec to the beach",
        price: 950,
        imageId: SI.palmSeashore,
        palette: "jungle",
      },
      {
        name: "Family hut",
        meta: "1 queen + 2 singles · sleeps 4",
        price: 1850,
        imageId: SI.boatsOnWater,
        palette: "lagoon",
      },
    ],
    reviews: [
      {
        name: "Marcus",
        from: "Auckland",
        date: "Apr 2026",
        text: "Did seven wreck dives in five days. Aaron knows every captain on the radio and gets you to the good ones first.",
      },
      {
        name: "Ines",
        from: "Lisbon",
        date: "Feb 2026",
        text: "Not luxurious and that's the whole appeal. Food was unreal — fresh fish every night, papaya for breakfast.",
      },
    ],
    galleryImageIds: [
      SI.boatsOnWater,
      SI.aerialBoats,
      IMG.shipwreckCoral1,
      SI.peopleInBoat,
      SI.seashore,
    ],
    boatTransfer: 280,
    tags: ["Munda", "Diving", "Local-run"],
  },
  {
    id: "tetepare",
    name: "Tetepare Descendants Lodge",
    meta: "Tetepare Island · 4 huts · last uninhabited rainforest in the South Pacific",
    location: "Tetepare Island, Western Province",
    area: "Tetepare",
    capacity: "4 huts · sleeps up to 8",
    price: 980,
    rating: 4.9,
    reviewCount: 24,
    imageId: SI.smallIsland,
    palette: "jungle",
    badge: "Conservation",
    hostName: "The Tetepare Descendants' Association",
    hostInitial: "T",
    hostMeta: "Tetepare · community-run since 2002 · email a week ahead",
    description: [
      "Tetepare is the largest uninhabited island in the South Pacific — and the descendants of its original people have chosen to keep it that way. The lodge is four simple leaf huts and a kitchen, run by association members on rotation. Every dollar you spend funds the marine reserve and the ranger programme.",
      "There is no Wifi, no shop, no generator after 9pm. There is a night ranger patrol you can join, leatherback turtle nesting from November to February, and a rainforest hike to a freshwater lake almost nobody's been to.",
    ],
    amenities: [
      { label: "Ranger-guided walks", icon: "compass" },
      { label: "Turtle nesting (Nov–Feb)", icon: "waves" },
      { label: "Meals from the garden", icon: "coffee" },
      { label: "Boat from Rendova", icon: "boat" },
      { label: "Solar lanterns only", icon: "key" },
    ],
    rooms: [
      {
        name: "Beach hut",
        meta: "1 double · mosquito net · shared bathroom",
        price: 980,
        imageId: SI.greenTreesWater,
        palette: "jungle",
      },
      {
        name: "Forest hut",
        meta: "2 singles · raised on stilts · forest view",
        price: 980,
        imageId: IMG.waterfallForest,
        palette: "jungle",
      },
    ],
    reviews: [
      {
        name: "Hannah",
        from: "Wellington",
        date: "Jan 2026",
        text: "Saw a leatherback lay eggs at 2am. Walked back through the forest with just a torch. Not a tourist experience — a privilege.",
      },
      {
        name: "Owen",
        from: "Melbourne",
        date: "Nov 2025",
        text: "Bring everything you need: bug spray, head torch, snacks for the boat. You won't get any of it on the island. That's the point.",
      },
    ],
    galleryImageIds: [
      SI.smallIsland,
      SI.waterfall,
      SI.greenTreesWater,
      SI.treeBranchBeach,
      SI.birdOnTree,
    ],
    boatTransfer: 450,
    tags: ["Tetepare", "Conservation", "Off-grid"],
  },
  {
    id: "fatboys",
    name: "Fatboys Resort",
    meta: "Mbabanga · 7 over-water rooms · 5 min boat from Gizo",
    location: "Mbabanga Island, Western Province",
    area: "Mbabanga",
    capacity: "7 over-water rooms · sleeps up to 14",
    price: 1450,
    rating: 4.7,
    reviewCount: 62,
    imageId: IMG.overwaterOcean,
    palette: "reef",
    kicker: "saltwater",
    hostName: "The Fatboys crew",
    hostInitial: "F",
    hostMeta: "Mbabanga · 5 min from Gizo · replies same day",
    description: [
      "Seven rooms strung along a jetty over a coral garden. Five minutes by boat from Gizo airfield, but it feels a long way further out. The bar at the end of the jetty is the social centre of the Western Province on a Friday night — and most other nights too.",
      "Snorkel straight off the deck. Free kayaks. Dive shop two doors down. If you can't pick between a desert island and a town, this is the compromise.",
    ],
    amenities: [
      { label: "Snorkel off the jetty", icon: "waves" },
      { label: "Wifi everywhere", icon: "wifi" },
      { label: "Bar + restaurant on site", icon: "coffee" },
      { label: "5 min boat to Gizo", icon: "boat" },
      { label: "Free kayaks", icon: "compass" },
      { label: "24h power", icon: "key" },
    ],
    rooms: [
      {
        name: "Over-water bungalow",
        meta: "1 queen · ocean view · private deck",
        price: 1450,
        imageId: IMG.overwaterOcean,
        palette: "reef",
      },
      {
        name: "Over-water suite",
        meta: "1 king · sitting room · glass floor panel",
        price: 1980,
        imageId: IMG.overwaterWalkways,
        palette: "lagoon",
      },
    ],
    reviews: [
      {
        name: "Sasha",
        from: "Singapore",
        date: "May 2026",
        text: "Snorkelled with reef sharks at sunrise straight off the deck. Then walked to breakfast.",
      },
      {
        name: "Tom",
        from: "London",
        date: "Mar 2026",
        text: "Bit busier than the lagoon places — but the food, drinks and easy Gizo access made it worth it. Loved the bar.",
      },
    ],
    galleryImageIds: [
      IMG.overwaterOcean,
      IMG.overwaterWalkways,
      IMG.houseOnShore,
      SI.aerialBoats,
      SI.palmSeashore,
    ],
    boatTransfer: 180,
    tags: ["Gizo", "Snorkelling", "Over-water"],
  },
];

export function getStay(id: string): Stay | undefined {
  return STAYS.find((s) => s.id === id);
}

export function stayHref(stay: Pick<Stay, "id">): string {
  return `/stays/${stay.id}`;
}

/** Convenience — turn a stay's primary imageId into a full CDN URL. */
export function stayImageUrl(stay: Pick<Stay, "imageId">, width = 1200) {
  return unsplashUrl(stay.imageId, width);
}
