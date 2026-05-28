"use client";

import { Button } from "@/components/ui/Button";
import { IconSearch, IconPin, IconCalendar, IconUsers } from "@/components/ui/Icon";

type FieldProps = {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  /** Drop the right divider — used on the last field. */
  last?: boolean;
};

function FinderField({ label, placeholder, icon, last }: FieldProps) {
  return (
    <div
      className={[
        "flex items-center gap-3 px-5 py-3.5 flex-1 min-w-0",
        !last && "md:border-r md:border-shell-200",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="text-volcano-500">{icon}</span>
      <div className="flex flex-col min-w-0">
        <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-volcano-700">
          {label}
        </span>
        {/* Native input kept un-styled so the bar reads as a single surface */}
        <input
          placeholder={placeholder}
          className="bg-transparent text-[14.5px] text-volcano-900 placeholder:text-volcano-500 focus:outline-none w-full"
        />
      </div>
    </div>
  );
}

/**
 * Finder — primary trip-search bar. White card on the sea-mist page, four
 * fields divided by hairlines, lagoon CTA on the right. On mobile collapses
 * to a vertical stack so each field gets full width.
 */
export function Finder() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col md:flex-row items-stretch bg-white border border-shell-200 rounded-hero md:rounded-pill shadow-card overflow-hidden"
    >
      <FinderField
        label="Where to?"
        placeholder="Marovo, Munda, Gizo…"
        icon={<IconPin size={18} />}
      />
      <FinderField
        label="When"
        placeholder="Add dates"
        icon={<IconCalendar size={18} />}
      />
      <FinderField
        label="Who"
        placeholder="2 travellers"
        icon={<IconUsers size={18} />}
        last
      />
      <div className="p-2 md:p-2.5 md:pl-0">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          leadingIcon={<IconSearch size={18} />}
          className="md:rounded-pill md:h-full md:px-7"
        >
          Find a stay
        </Button>
      </div>
    </form>
  );
}
