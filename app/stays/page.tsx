import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { Caption, Display2, Lead } from "@/components/ui/Typography";
import { STAYS } from "@/lib/stays";
import { StaysGrid } from "./_components/StaysGrid";

export const metadata: Metadata = {
  title: "Stays · Ples Blo Iumi",
  description:
    "All stays across the Solomon Islands — lodges, leaf huts and over-water rooms run by the families who live there.",
};

export default function StaysIndex() {
  return (
    <>
      <Nav current="stays" />

      <main className="flex-1">
        {/* Title block — editorial header on the sea-mist page, no hero photo */}
        <Container className="pt-12 md:pt-16">
          <Caption>All stays</Caption>
          <Display2 className="mt-3">
            {STAYS.length} places, every one with a host on site.
          </Display2>
          <Lead className="mt-5 max-w-[60ch]">
            Filter by island or vibe. Every listing here is family- or
            community-run — no chains, no concierge desks, no all-inclusive
            wristbands.
          </Lead>
        </Container>

        <StaysGrid stays={STAYS} />
      </main>

      <Footer />
    </>
  );
}
