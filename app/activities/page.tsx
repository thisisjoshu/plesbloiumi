import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { Caption, Display2, Lead } from "@/components/ui/Typography";
import { ACTIVITIES } from "@/lib/activities";
import { ActivitiesGrid } from "./_components/ActivitiesGrid";

export const metadata: Metadata = {
  title: "Activities · Ples Blo Iumi",
  description:
    "Dives, surf trips, kastom village visits and WWII history walks — all run by people who live in the place.",
};

export default function ActivitiesIndex() {
  return (
    <>
      <Nav current="activities" />

      <main className="flex-1">
        <Container className="pt-12 md:pt-16">
          <Caption>All activities</Caption>
          <Display2 className="mt-3">
            {ACTIVITIES.length} things people actually do here.
          </Display2>
          <Lead className="mt-5 max-w-[60ch]">
            Diving, surf, kastom, WWII history, rainforest. Pick a category —
            or scroll the whole lot.
          </Lead>
        </Container>

        <ActivitiesGrid activities={ACTIVITIES} />
      </main>

      <Footer />
    </>
  );
}
