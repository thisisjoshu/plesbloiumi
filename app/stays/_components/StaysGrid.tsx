"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";
import { ListingCard } from "@/components/site/ListingCard";
import { stayHref, stayImageUrl, type Stay } from "@/lib/stays";

export type StaysGridProps = {
  stays: Stay[];
};

/**
 * StaysGrid — client-side filterable grid. Tag list is derived from the
 * stays themselves so adding `tags: ["WWII"]` to a stay automatically
 * surfaces a new chip — no separate registry to maintain.
 *
 * Empty state copy follows brand voice ("Nothing here yet. Try a different
 * island.") rather than the generic "No results found".
 */
export function StaysGrid({ stays }: StaysGridProps) {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    stays.forEach((s) => s.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, [stays]);

  const [active, setActive] = useState<string>("All");

  const visible =
    active === "All" ? stays : stays.filter((s) => s.tags.includes(active));

  return (
    <Container className="mt-10 mb-24">
      <div className="flex flex-wrap items-center gap-2 mb-7">
        {allTags.map((tag) => {
          const on = active === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActive(tag)}
              className="appearance-none bg-transparent border-0 p-0 cursor-pointer"
              aria-pressed={on}
            >
              <Chip
                variant={on ? "lagoon" : "neutral"}
                className={on ? "ring-1 ring-lagoon-700/30" : ""}
              >
                {tag}
              </Chip>
            </button>
          );
        })}
        <span className="ml-auto text-[13px] text-volcano-500">
          {visible.length} of {stays.length}
        </span>
      </div>

      {visible.length === 0 ? (
        <div className="bg-white border border-shell-200 rounded-card p-12 text-center">
          <p className="font-display text-[22px] text-volcano-900">
            Nothing here yet.
          </p>
          <p className="mt-2 text-[14px] text-volcano-500">
            Try a different island, or a different tag.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((stay) => (
            <ListingCard
              key={stay.id}
              listing={{
                id: stay.id,
                name: stay.name,
                meta: stay.meta,
                price: stay.price,
                rating: stay.rating,
                palette: stay.palette,
                imageUrl: stayImageUrl(stay, 900),
                badge: stay.badge,
                kicker: stay.kicker,
              }}
              href={stayHref(stay)}
            />
          ))}
        </div>
      )}
    </Container>
  );
}
