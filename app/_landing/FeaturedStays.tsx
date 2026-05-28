import { Container } from "@/components/ui/Container";
import { Caption, H2 } from "@/components/ui/Typography";
import { IconArrow } from "@/components/ui/Icon";
import { ListingCard } from "@/components/site/ListingCard";
import { STAYS, stayHref } from "@/lib/stays";

/**
 * FeaturedStays — 4-up grid (or 2-up at md, single column on mobile).
 * Heading is sentence-case and warm — "Places the locals stand by", not
 * "Top picks" or any other ranking-language tropes.
 *
 * Pulls from the shared STAYS catalogue so cards always link to a live
 * detail route. To swap which stays surface here, edit lib/stays.ts.
 */
export function FeaturedStays() {
  return (
    <section className="mt-24 md:mt-28">
      <Container>
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <Caption>Stays</Caption>
            <H2 className="mt-2">Places the locals stand by</H2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1.5 text-[14px] font-semibold text-lagoon-700 hover:text-lagoon-900 no-underline whitespace-nowrap"
          >
            Browse all 92 stays <IconArrow size={15} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STAYS.map((stay) => (
            <ListingCard
              key={stay.id}
              listing={{
                id: stay.id,
                name: stay.name,
                meta: stay.meta,
                price: stay.price,
                rating: stay.rating,
                palette: stay.palette,
                badge: stay.badge,
                kicker: stay.kicker,
              }}
              href={stayHref(stay)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
