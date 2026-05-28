"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Wordmark } from "@/components/ui/Wordmark";
import { Avatar } from "@/components/ui/Avatar";
import { IconChevronDown, IconHeart } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type NavLink = {
  key: string;
  label: string;
  /** Route href. Required for nav items so deep-links work. */
  href: string;
};

export type NavProps = {
  links?: NavLink[];
  /** Key of the currently-active route — drives the hibiscus underline. */
  current?: string;
  /** Right-aligned cluster — defaults to currency pill, saved pill, avatar. */
  right?: ReactNode;
  className?: string;
};

const DEFAULT_LINKS: NavLink[] = [
  { key: "stays", label: "Stays", href: "/stays" },
  { key: "activities", label: "Activities", href: "/activities" },
  { key: "stories", label: "Stories", href: "#stories" },
  { key: "plan", label: "Plan a trip", href: "#plan" },
];

/**
 * Nav — sticky top bar with a sea-mist backdrop blur. Wordmark on the left,
 * the link cluster centered-ish, account on the right. The hibiscus
 * underline marks the active section. Links use Next Link so client-side
 * navigation stays snappy.
 */
export function Nav({
  links = DEFAULT_LINKS,
  current,
  right,
  className,
}: NavProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-shell-200",
        className,
      )}
      style={{
        background: "rgba(232,240,238,.78)",
        backdropFilter: "blur(16px) saturate(120%)",
        WebkitBackdropFilter: "blur(16px) saturate(120%)",
      }}
    >
      <div className="mx-auto flex max-w-content items-center gap-9 px-6 py-3.5 md:px-12 lg:px-20">
        <Link
          href="/"
          aria-label="Ples Blo Iumi — home"
          className="no-underline"
        >
          <Wordmark size={22} />
        </Link>

        <nav className="hidden md:flex gap-7 text-[14px] font-medium text-volcano-700">
          {links.map((link) => {
            const active = current === link.key;
            return (
              <Link
                key={link.key}
                href={link.href}
                className={cn(
                  "border-b-2 border-transparent py-1.5 no-underline transition-colors duration-150 ease-[var(--ease-out)]",
                  active
                    ? "text-volcano-900 border-hibiscus-600 font-semibold"
                    : "text-volcano-700 hover:text-volcano-900",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          {right ?? (
            <>
              <span className="inline-flex items-center gap-1.5 rounded-pill border border-shell-200 bg-white px-3.5 py-2 text-[13px] font-medium text-volcano-900 cursor-pointer">
                SBD <IconChevronDown size={14} />
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-pill border border-shell-200 bg-white px-3.5 py-2 text-[13px] font-medium text-volcano-900 cursor-pointer">
                <IconHeart size={15} /> Saved
              </span>
              <Avatar initials="A" size={34} tone="hibiscus" />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
