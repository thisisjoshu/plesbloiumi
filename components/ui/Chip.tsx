import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ChipVariant = "neutral" | "lagoon" | "warm" | "sun" | "forest";
export type ChipSize = "sm" | "md";

const VARIANTS: Record<ChipVariant, string> = {
  neutral: "bg-shell-100 text-volcano-900 border-shell-200",
  lagoon: "bg-lagoon-100 text-lagoon-900 border-transparent",
  warm: "bg-hibiscus-100 text-hibiscus-700 border-transparent",
  sun: "bg-sun-100 text-[#7A5407] border-transparent",
  forest: "bg-forest-100 text-forest-700 border-transparent",
};

const SIZES: Record<ChipSize, string> = {
  sm: "px-2 py-1 text-[11px] gap-1",
  md: "px-2.5 py-1.5 text-[13px] gap-1.5",
};

export type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: ChipVariant;
  size?: ChipSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};

export function Chip({
  variant = "neutral",
  size = "md",
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...rest
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-sans font-medium rounded-pill border whitespace-nowrap",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...rest}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </span>
  );
}
