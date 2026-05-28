import type { SVGProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Lucide-style stroke icons (1.75 weight, round caps, round joins).
 * Inlined rather than pulled from a package so they sit comfortably alongside
 * the hand-cut brand motifs in /public/motifs without weight mismatches.
 */

export type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  size?: number;
  strokeWidth?: number;
  children?: ReactNode;
};

export function Icon({
  size = 20,
  strokeWidth = 1.75,
  className,
  children,
  ...rest
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("inline-block align-middle shrink-0", className)}
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

type P = Omit<IconProps, "children">;

export const IconSearch = (p: P) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Icon>
);
export const IconMenu = (p: P) => (
  <Icon {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Icon>
);
export const IconUser = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
  </Icon>
);
export const IconHeart = (p: P) => (
  <Icon {...p}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </Icon>
);
export const IconChevron = (p: P) => (
  <Icon {...p}>
    <path d="m9 18 6-6-6-6" />
  </Icon>
);
export const IconChevronLeft = (p: P) => (
  <Icon {...p}>
    <path d="m15 18-6-6 6-6" />
  </Icon>
);
export const IconChevronDown = (p: P) => (
  <Icon {...p}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
);
export const IconClose = (p: P) => (
  <Icon {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Icon>
);
export const IconCheck = (p: P) => (
  <Icon {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Icon>
);
export const IconArrow = (p: P) => (
  <Icon {...p}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </Icon>
);
export const IconCalendar = (p: P) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </Icon>
);
export const IconUsers = (p: P) => (
  <Icon {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 21c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" />
    <path d="M16 7.5a3.5 3.5 0 0 1 0 7M22 21c0-3-2.5-5.2-6-5.8" />
  </Icon>
);
export const IconPin = (p: P) => (
  <Icon {...p}>
    <path d="M12 22s-8-7.6-8-13a8 8 0 1 1 16 0c0 5.4-8 13-8 13z" />
    <circle cx="12" cy="9" r="3" />
  </Icon>
);
export const IconWaves = (p: P) => (
  <Icon {...p}>
    <path d="M2 6c4-3 6 3 10 0s6 3 10 0M2 12c4-3 6 3 10 0s6 3 10 0M2 18c4-3 6 3 10 0s6 3 10 0" />
  </Icon>
);
export const IconWifi = (p: P) => (
  <Icon {...p}>
    <path d="M5 12.55a11 11 0 0 1 14 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" />
    <circle cx="12" cy="20" r="1" />
  </Icon>
);
export const IconCoffee = (p: P) => (
  <Icon {...p}>
    <path d="M17 8h1a4 4 0 0 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <path d="M6 2v3M10 2v3M14 2v3" />
  </Icon>
);
export const IconKey = (p: P) => (
  <Icon {...p}>
    <circle cx="7.5" cy="15.5" r="4.5" />
    <path d="m11 12 7.5-7.5L21 7l-2 2 2 2-3 3-2-2-2 2" />
  </Icon>
);
export const IconBoat = (p: P) => (
  <Icon {...p}>
    <path d="M2 21c2 1 4 1 6-1s4-2 6 0 4 2 6 0c2 2 2 1 2-1" />
    <path d="M4 17 5 9h14l1 8" />
    <path d="M12 5v4M9 3h6" />
  </Icon>
);
export const IconCompass = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="m14.5 9.5-2 5-5 2 2-5z" />
  </Icon>
);
