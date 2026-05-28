import { cn } from "@/lib/cn";

export type AvatarProps = {
  /** Single character or short initials. */
  initials?: string;
  src?: string;
  alt?: string;
  size?: number;
  /** Brand tint for the fallback fill. Defaults to hibiscus (brand red). */
  tone?: "hibiscus" | "lagoon" | "forest" | "sun" | "ink";
  className?: string;
};

const TONE: Record<NonNullable<AvatarProps["tone"]>, string> = {
  hibiscus: "bg-hibiscus-600 text-white",
  lagoon: "bg-lagoon-700 text-white",
  forest: "bg-forest-500 text-white",
  sun: "bg-sun-500 text-volcano-900",
  ink: "bg-volcano-900 text-shell-50",
};

export function Avatar({
  initials,
  src,
  alt = "",
  size = 34,
  tone = "hibiscus",
  className,
}: AvatarProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold leading-none overflow-hidden ring-1 ring-shell-50/60",
        !src && TONE[tone],
        className,
      )}
      style={{
        width: size,
        height: size,
        fontSize: Math.max(11, Math.round(size * 0.38)),
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        initials
      )}
    </span>
  );
}
