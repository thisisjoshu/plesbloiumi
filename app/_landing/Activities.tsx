"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Caption, H2, BodySm } from "@/components/ui/Typography";
import { Chip } from "@/components/ui/Chip";
import { ActivityCard, type Activity } from "@/components/site/ActivityCard";

const ACTIVITIES: (Activity & { category: string })[] = [
  {
    id: "marovo-dive",
    category: "Diving",
    kicker: "Diving · 3 days",
    name: "Three days on Marovo's drop-offs",
    meta: "Run by Dive Munda · pickup at your lodge",
    price: 2400,
    palette: "marovo",
    priceSuffix: "/ person",
  },
  {
    id: "skull-island",
    category: "Kastom",
    kicker: "Kastom · half day",
    name: "Skull Island and the war canoes",
    meta: "Roviana Lagoon · with a chief's descendant",
    price: 380,
    palette: "village",
    priceSuffix: "/ person",
  },
  {
    id: "wwii",
    category: "WWII",
    kicker: "WWII history · full day",
    name: "Guadalcanal: a long walk through the campaign",
    meta: "From Honiara · lunch included · vintage Jeep",
    price: 640,
    palette: "archive",
    priceSuffix: "/ person",
  },
  {
    id: "surf",
    category: "Surf",
    kicker: "Surf · 6 days",
    name: "Surf the Three Sisters",
    meta: "Western Province · sleeps 4 · all transfers",
    price: 5400,
    palette: "sunset",
    priceSuffix: "/ trip",
  },
];

const CATEGORIES = ["All", "Diving", "Surf", "Kastom", "WWII", "Bushwalk"] as const;
type Category = (typeof CATEGORIES)[number];

/**
 * Activities — chip filter row above a 2-up ActivityCard grid. Category
 * filter is client-side so the user can flip between Diving/Surf/etc. without
 * a navigation. "All" resets the filter.
 */
export function Activities() {
  const [active, setActive] = useState<Category>("All");
  const visible =
    active === "All"
      ? ACTIVITIES
      : ACTIVITIES.filter((a) => a.category === active);

  return (
    <section className="mt-24 md:mt-28">
      <Container>
        <Caption>Activities</Caption>
        <H2 className="mt-2">Things people actually do here</H2>
        <BodySm className="mt-2 max-w-[60ch]">
          Run by the families and operators who live in the place. No air-con
          coaches, no postcard checklists.
        </BodySm>

        <div className="mt-7 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
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
            <ActivityCard key={a.id} activity={a} />
          ))}
        </div>
      </Container>
    </section>
  );
}
