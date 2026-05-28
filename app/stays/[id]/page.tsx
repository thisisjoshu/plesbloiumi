import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Motif } from "@/components/ui/Motif";
import { IconHeart, IconArrow, IconPin } from "@/components/ui/Icon";

import { STAYS, getStay } from "@/lib/stays";

import { Breadcrumb } from "./_sections/Breadcrumb";
import { Gallery } from "./_sections/Gallery";
import { HostStrip } from "./_sections/HostStrip";
import { RoomList } from "./_sections/RoomList";
import { AmenityGrid } from "./_sections/AmenityGrid";
import { ReviewList } from "./_sections/ReviewList";
import { BookingCard } from "./_sections/BookingCard";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return STAYS.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const stay = getStay(id);
  if (!stay) return { title: "Stay not found · Ples Blo Iumi" };
  return {
    title: `${stay.name} · ${stay.area} · Ples Blo Iumi`,
    description: stay.description[0],
  };
}

export default async function StayPage({ params }: PageProps) {
  const { id } = await params;
  const stay = getStay(id);
  if (!stay) notFound();

  return (
    <>
      <Nav current="stays" />

      <main className="flex-1">
        <Container className="pt-5">
          <Breadcrumb area={stay.area} name={stay.name} />
        </Container>

        {/* Title block */}
        <Container className="pt-3.5 pb-4">
          <div className="flex flex-col-reverse md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
            <h1 className="m-0 font-display text-[clamp(36px,6vw,56px)] font-normal leading-[1.0] tracking-[-0.025em] text-volcano-900 text-balance">
              {stay.name}
            </h1>
            <div className="flex gap-2 self-start md:self-auto">
              <Button variant="ghost" size="md" leadingIcon={<IconHeart size={16} />}>
                Save
              </Button>
              <Button
                variant="ghost"
                size="md"
                trailingIcon={<IconArrow size={16} />}
              >
                Share
              </Button>
            </div>
          </div>

          <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-volcano-700">
            <span className="inline-flex items-center gap-1.5 font-semibold text-volcano-900">
              <Motif name="sun" size={14} alt="" />
              {stay.rating.toFixed(1)} · {stay.reviewCount} reviews
            </span>
            <span aria-hidden className="text-shell-400">·</span>
            <span className="inline-flex items-center gap-1.5">
              <IconPin size={14} /> {stay.location}
            </span>
            <span aria-hidden className="text-shell-400">·</span>
            <span>{stay.capacity}</span>
          </div>
        </Container>

        {/* Gallery */}
        <Container>
          <Gallery
            imageIds={stay.galleryImageIds}
            fallbackPalette={stay.palette}
            totalPhotoCount={stay.galleryImageIds.length * 5}
          />
        </Container>

        {/* Body: 1.4fr content / 1fr sidebar */}
        <Container className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12">
            <div>
              <HostStrip
                name={stay.hostName}
                initial={stay.hostInitial}
                meta={stay.hostMeta}
              />

              <section className="py-7 border-b border-shell-200">
                <h2 className="m-0 mb-3 font-display text-[28px] font-normal tracking-[-0.015em] text-volcano-900">
                  About this place
                </h2>
                {stay.description.map((para, i) => (
                  <p
                    key={i}
                    className="m-0 mt-3 first:mt-0 font-display text-[19px] leading-[1.55] text-volcano-800"
                  >
                    {para}
                  </p>
                ))}
              </section>

              <section className="py-7 border-b border-shell-200">
                <h2 className="m-0 mb-4 font-display text-[28px] font-normal tracking-[-0.015em] text-volcano-900">
                  Rooms
                </h2>
                <RoomList rooms={stay.rooms} />
              </section>

              <section className="py-7 border-b border-shell-200">
                <h2 className="m-0 mb-4 font-display text-[28px] font-normal tracking-[-0.015em] text-volcano-900">
                  What&rsquo;s included
                </h2>
                <AmenityGrid amenities={stay.amenities} />
              </section>

              <section className="py-7">
                <ReviewList
                  rating={stay.rating}
                  reviewCount={stay.reviewCount}
                  reviews={stay.reviews}
                />
              </section>
            </div>

            <BookingCard
              nightlyPrice={stay.price}
              nights={7}
              boatTransfer={stay.boatTransfer}
            />
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
