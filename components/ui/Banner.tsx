import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BannerTone = "success" | "info" | "warning" | "danger";

const TONES: Record<BannerTone, string> = {
  success: "bg-forest-100 border-forest-700/20 text-forest-700",
  info: "bg-lagoon-100 border-lagoon-700/20 text-lagoon-900",
  warning: "bg-sun-100 border-sun-600/30 text-[#7A5407]",
  danger: "bg-hibiscus-100 border-hibiscus-700/25 text-hibiscus-700",
};

export type BannerProps = HTMLAttributes<HTMLDivElement> & {
  tone?: BannerTone;
  title?: ReactNode;
  children?: ReactNode;
};

/**
 * Banner — soft callout used for booking confirmations, host-side notes,
 * cyclone warnings. Sticks to the brand semantic palette; no icons unless
 * the consumer passes them as children (we leave that judgement to the
 * caller — the design treats the coloured dot as the visual cue).
 */
export function Banner({
  tone = "info",
  title,
  className,
  children,
  ...rest
}: BannerProps) {
  return (
    <div
      role={tone === "danger" || tone === "warning" ? "alert" : "status"}
      className={cn(
        "flex items-start gap-3 rounded-[10px] border px-3.5 py-3 text-[14px] leading-[1.45]",
        TONES[tone],
        className,
      )}
      {...rest}
    >
      <span
        aria-hidden
        className="mt-1.5 h-2 w-2 rounded-full shrink-0 bg-current"
      />
      <div>
        {title && <div className="font-semibold mb-0.5">{title}</div>}
        {children && (
          <div className="text-volcano-500 text-[12.5px]">{children}</div>
        )}
      </div>
    </div>
  );
}
