import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Pijin, H2, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Motif } from "@/components/ui/Motif";
import { SI, unsplashUrl } from "@/lib/images";

/**
 * HostCTA — pitch to locals to list their place. Gets the loudest button
 * on the page (hibiscus warm) — only one warm CTA per screen per brand
 * rules, and host acquisition is the most valuable conversion for a
 * two-sided marketplace.
 */
export function HostCTA() {
  return (
    <section className="mt-28 md:mt-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch bg-white border border-shell-200 rounded-hero overflow-hidden">
          <div className="lg:col-span-5 relative min-h-[280px]">
            <Photo
              palette="jungle"
              src={unsplashUrl(SI.aerialBoats, 1200)}
              alt="Aerial view of boats moored just off the village shore"
              ratio="auto"
              radius="none"
              className="h-full"
            >
              <Motif
                name="hibiscus"
                size={120}
                className="absolute bottom-6 right-6 text-sun-300 opacity-80"
                alt=""
              />
            </Photo>
          </div>

          <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-center">
            <p className="text-[13px]">
              <Pijin className="text-[18px]">Wantok program</Pijin>
              <span className="ml-2 text-volcano-500">— for hosts</span>
            </p>
            <H2 className="mt-3 max-w-[22ch]">
              You know the lagoon. Bring guests to it.
            </H2>
            <Body className="mt-5 text-volcano-700 max-w-[54ch]">
              We take 8% — half the going rate — and we do the bookings,
              the messaging, and the foreign payments. You stay focused on
              the people you've invited home. Hosts are paid in SBD weekly,
              direct to BSP or ANZ.
            </Body>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button variant="warm" size="lg">
                List your place
              </Button>
              <Button variant="ghost" size="lg">
                Read the host handbook
              </Button>
            </div>

            <p className="mt-7 text-[13px] text-volcano-500">
              92 hosts already listed · across 9 provinces · 4 newly joined this month
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
