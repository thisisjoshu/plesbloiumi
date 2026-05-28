import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Photo — placeholder for real photography.
 *
 * We don't ship stock tropical images (they betray the brand). Instead we
 * render warm, painterly colour tiles sampled from real Solomon Islands
 * scenes — lagoon, sunset, jungle, etc. They telegraph "photograph goes
 * here" without pretending to be one.
 *
 * When real imagery ships, swap `src` in via the `src` prop and the tile
 * gradient falls away.
 */

export const PHOTO_PALETTES = {
  marovo:  ["#063A45", "#0E6B7A", "#1FA3B4", "#9CE3DD"],
  lagoon:  ["#0A5260", "#1FA3B4", "#76C9D3", "#DEF6F3"],
  sunset:  ["#7A2818", "#D8442E", "#F2B544", "#FDF1D6"],
  jungle:  ["#0E2A1A", "#2E5D3E", "#4E8A5F", "#DEEDDF"],
  reef:    ["#0E6B7A", "#2BC8B6", "#F2B544", "#FBF6EA"],
  village: ["#3B1E0E", "#8B5A2B", "#D89A2A", "#F4E9D2"],
  storm:   ["#161B1F", "#3B454C", "#0A5260", "#76C9D3"],
  archive: ["#1A1A1A", "#4A4A4A", "#8A8A8A", "#D5D5D5"],
} as const;

export type PhotoPalette = keyof typeof PHOTO_PALETTES;

export type PhotoRadius = "none" | "input" | "card" | "hero" | "pill";

const RADIUS_CLASS: Record<PhotoRadius, string> = {
  none: "rounded-none",
  input: "rounded-input",
  card: "rounded-card",
  hero: "rounded-hero",
  pill: "rounded-pill",
};

export type PhotoProps = {
  palette?: PhotoPalette;
  ratio?: "16/10" | "16/9" | "4/3" | "1/1" | "3/4" | "auto";
  radius?: PhotoRadius;
  /** Show the bottom-up volcano gradient so overlaid text remains legible. */
  overlay?: boolean;
  /** Hibiscus pill badge anchored top-left ("New host", "Sale", etc). */
  badge?: string;
  /** Postcard-style hand caption anchored bottom-left. */
  kicker?: string;
  src?: string;
  alt?: string;
  className?: string;
  children?: ReactNode;
};

const RATIO_CLASS: Record<NonNullable<PhotoProps["ratio"]>, string> = {
  "16/10": "aspect-[16/10]",
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  auto: "",
};

export function Photo({
  palette = "marovo",
  ratio = "16/10",
  radius = "card",
  overlay = false,
  badge,
  kicker,
  src,
  alt = "",
  className,
  children,
}: PhotoProps) {
  const colors = PHOTO_PALETTES[palette];
  const gradient = `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 35%, ${colors[2]} 70%, ${colors[3]} 100%)`;

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        RADIUS_CLASS[radius],
        RATIO_CLASS[ratio],
        className,
      )}
      style={src ? undefined : { background: gradient }}
    >
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {!src && (
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-overlay"
          style={{
            background:
              "radial-gradient(ellipse at 22% 80%, rgba(0,0,0,.32), transparent 55%), radial-gradient(ellipse at 80% 18%, rgba(255,255,255,.18), transparent 50%)",
          }}
        />
      )}

      {overlay && (
        <div
          aria-hidden
          className="absolute left-0 right-0 bottom-0 h-[65%]"
          style={{
            background:
              "linear-gradient(to top, rgba(22,27,31,.7) 0%, rgba(22,27,31,0) 100%)",
          }}
        />
      )}

      {badge && (
        <span className="absolute top-3 left-3 z-10 rounded-chip bg-hibiscus-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}

      {kicker && (
        <span
          className="absolute bottom-3 left-3.5 z-10 font-hand text-[22px] leading-none text-shell-50"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,.4)" }}
        >
          {kicker}
        </span>
      )}

      {children && <div className="absolute inset-0 z-10">{children}</div>}
    </div>
  );
}
