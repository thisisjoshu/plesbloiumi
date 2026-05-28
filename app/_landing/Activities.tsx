"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Caption, H2, BodySm } from "@/components/ui/Typography";
import { Chip } from "@/components/ui/Chip";
import { IconArrow } from "@/components/ui/Icon";
import { ActivityCard } from "@/components/site/ActivityCard";
import {
  ACTIVITIES,
  ACTIVITY_CATEGORIES,
  activityImageUrl,
  type ActivityCategory,
} from "@/lib/activities";

type FilterValue = ActivityCategory | "All";

/**
 * Activities — chip filter row above a 2-up ActivityCard grid. Category
 * filter is client-side so the user can flip between Diving/Surf/etc.
 * without a navigation. "All" resets the filter.
 *
 * The landing version caps to four cards to keep scroll length sane — see
 * /activities for the full grid.
 */
export function Activities() {
  const [active, setActive] = useState<FilterValue>("All");
  const visible = (
    active === "All"
      ? ACTIVITIES
      : ACTIVITIES.filter((a) => a.category === active)
  ).slice(0, 4);

  return (
    <section className="mt-24 md:mt-28">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <Caption>Activities</Caption>
            <H2 className="mt-2">Things people actually do here</H2>
            <BodySm className="mt-2 max-w-[60ch]">
              Run by the families and operators who live in the place. No
              air-con coaches, no postcard checklists.
            </BodySm>
          </div>
          <a
            href="/activities"
            className="hidden sm:inline-flex items-center gap-1.5 text-[14px] font-semibold text-lagoon-700 hover:text-lagoon-900 no-underline whitespace-nowrap"
          >
            All {ACTIVITIES.length} activities <IconArrow size={15} />
          </a>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
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
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
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
      </Container>
    </section>
  );
}
