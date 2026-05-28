import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { H2, Body, Hand } from "@/components/ui/Typography";
import { IconArrow } from "@/components/ui/Icon";

/**
 * Editorial — 5/7 asymmetric photo+text split (per brand guidance that
 * symmetric 6/6 reads as catalog, asymmetric 5/7 reads as storytelling).
 * The Hand caption sits as a postcard tag on the photo's bottom-left.
 */
export function Editorial() {
  return (
    <section className="mt-28 md:mt-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <Photo palette="storm" ratio="3/4" radius="hero" kicker="Marovo, June" />
          </div>
          <div className="lg:col-span-7 lg:pl-6">
            <Hand>One slow week —</Hand>
            <H2 className="mt-3">
              The lagoon is bigger than your idea of a lagoon.
            </H2>
            <Body className="mt-5 text-volcano-700 max-w-[58ch]">
              Marovo is 700 square kilometres of double-barrier reef, the
              longest saltwater lagoon on Earth. You'll get there on a
              fibreglass banana boat with an outboard that the driver
              probably built himself. The first night you'll think it's
              quiet. By the third you'll realise it isn't — it's just that
              roosters, frogs, kingfishers and the surf on the outer reef
              are the only things making noise.
            </Body>
            <Body className="mt-4 text-volcano-700 max-w-[58ch]">
              The Kelly family at Uepi have hosted divers since 1987. Aaron
              at Zipolo Habu fishes for what you eat that night. None of it
              is staged. That's the whole pitch.
            </Body>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-lagoon-700 hover:text-lagoon-900 no-underline"
            >
              Read the Marovo guide <IconArrow size={16} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
