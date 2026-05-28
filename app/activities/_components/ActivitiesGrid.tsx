"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";
import { ActivityCard } from "@/components/site/ActivityCard";
import {
  ACTIVITY_CATEGORIES,
  activityImageUrl,
  type Activity,
  type ActivityCategory,
} from "@/lib/activities";

type Filter = ActivityCategory | "All";

export type ActivitiesGridProps = {
  activities: Activity[];
};

/**
 * ActivitiesGrid — 2-up ActivityCard grid with the same chip filter as the
 * landing strip, but unconstrained (shows the full list). Categories come
 * straight from the shared lib so the landing strip and this page can never
 * drift out of sync.
 */
export function ActivitiesGrid({ activities }: ActivitiesGridProps) {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All"
      ? activities
      : activities.filter((a) => a.category === active);

  return (
    <Container className="mt-10 mb-24">
      <div className="flex flex-wrap items-center gap-2 mb-7">
        {ACTIVITY_CATEGORIES.map((cat) => {
          const on = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className="appearance-none bg-transparent border-0 p-0 cursor-pointer"
              aria-pressed={on}
            >
              <Chip
                variant={on ? "lagoon" : "neutral"}
                className={on ? "ring-1 ring-lagoon-700/30" : ""}
              >
                {cat}
              </Chip>
            </button>
          );
        })}
        <span className="ml-auto text-[13px] text-volcano-500">
          {visible.length} of {activities.length}
        </span>
      </div>

      {visible.length === 0 ? (
        <div className="bg-white border border-shell-200 rounded-card p-12 text-center">
          <p className="font-display text-[22px] text-volcano-900">
            Nothing in this category yet.
          </p>
          <p className="mt-2 text-[14px] text-volcano-500">
            We're adding new activities every month — try another tag.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {visible.map((a) => (
            <ActivityCard
              key={a.id}
              activity={{
                id: a.id,
                name: a.name,
                kicker: a.kicker,
                meta: a.meta,
                price: a.price,
                palette: a.palette,
                imageUrl: activityImageUrl(a, 900),
                priceSuffix: a.priceSuffix,
              }}
            />
          ))}
        </div>
      )}
    </Container>
  );
}
