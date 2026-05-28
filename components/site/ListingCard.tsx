import Link from "next/link";
import { Photo, type PhotoPalette } from "@/components/ui/Photo";
import { Motif } from "@/components/ui/Motif";
import { cn } from "@/lib/cn";

export type Listing = {
  id?: string;
  name: string;
  /** Meta line — "Marovo Lagoon · 8 bungalows · diving on the doorstep" */
  meta: string;
  /** Price in SBD; formatted with thousand-separators automatically. */
  price: number;
  /** 0.0–5.0; rendered against the sun motif (never a star glyph). */
  rating: number;
  /** Coloured fallback if the imageUrl 404s or hasn't loaded yet. */
  palette: PhotoPalette;
  /** Direct image URL (CDN). When absent we fall back to the palette tile. */
  imageUrl?: string;
  /** Hibiscus pill — "New host", "Sale", "Local-run". */
  badge?: string;
  /** Postcard hand-caption overlaid on the photo. */
  kicker?: string;
  /** Override "/ night" suffix — e.g. "/ trip" for activity-style listings. */
  priceSuffix?: string;
};

export type ListingCardProps = {
  listing: Listing;
  compact?: boolean;
  /** When provided, the card renders as a Next Link. */
  href?: string;
  /** Falls back to a <button> if no href is given. */
  onClick?: () => void;
  className?: string;
};

const CARD_BASE =
  "group block w-full text-left bg-white border border-shell-200 rounded-card overflow-hidden " +
  "transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease-out)] " +
  "hover:-translate-y-0.5 hover:shadow-card hover:border-shell-400/60 " +
  "focus-visible:outline-2 focus-visible:outline-lagoon-500 focus-visible:outline-offset-[3px]";

/**
 * ListingCard — stay/lodge card. Photo flush to the card top (no padding),
 * meta + price below. Hover lifts 2px. Rating uses the sun motif instead of
 * a star glyph — that's a brand rule.
 *
 * Renders as a `<Link>` when `href` is set (preferred), or a `<button>` when
 * only `onClick` is provided. Either way the visual treatment is identical.
 */
export function ListingCard({
  listing,
  compact = false,
  href,
  onClick,
  className,
}: ListingCardProps) {
  const ratio = compact ? "4/3" : "16/10";
  const suffix = listing.priceSuffix ?? "/ night";

  const inner = (
    <>
      <Photo
        palette={listing.palette}
        src={listing.imageUrl}
        alt={listing.name}
        ratio={ratio}
        radius="none"
        badge={listing.badge}
        kicker={listing.kicker}
      />
      <div className="px-4 pt-3.5 pb-4">
        <h3 className="m-0 font-sans text-[17px] font-semibold text-volcano-900 tracking-[-0.005em]">
          {listing.name}
        </h3>
        <div className="mt-0.5 text-[13px] text-volcano-500 leading-[1.45]">
          {listing.meta}
        </div>
        <div className="mt-3 flex items-baseline justify-between">
          <span className="text-[13px] text-volcano-700">
            From{" "}
            <span className="font-display italic text-[19px] text-volcano-900">
              SBD {listing.price.toLocaleString()}
            </span>{" "}
            {suffix}
          </span>
          <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-volcano-900">
            <Motif name="sun" size={13} alt="" />
            {listing.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(CARD_BASE, "no-underline", className)}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(CARD_BASE, "cursor-pointer", className)}
    >
      {inner}
    </button>
  );
}
