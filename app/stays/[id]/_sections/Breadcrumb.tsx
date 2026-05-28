import Link from "next/link";
import { IconChevronLeft } from "@/components/ui/Icon";

export type BreadcrumbProps = {
  area: string;
  name: string;
};

/**
 * Breadcrumb — small back link + path. Middle-dot separators per the
 * Unicode-glyph rule (no ">" or "/" used as separators).
 */
export function Breadcrumb({ area, name }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-[13px] text-volcano-500">
      <Link
        href="/"
        className="inline-flex items-center text-volcano-500 hover:text-volcano-900 no-underline"
        aria-label="Back to stays"
      >
        <IconChevronLeft size={14} />
      </Link>
      <Link href="/" className="text-volcano-500 hover:text-volcano-900 no-underline">
        Stays
      </Link>
      <span aria-hidden>·</span>
      <span>{area}</span>
      <span aria-hidden>·</span>
      <span className="text-volcano-900 font-medium">{name}</span>
    </nav>
  );
}
