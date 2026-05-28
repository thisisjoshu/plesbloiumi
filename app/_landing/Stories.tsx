import { Container } from "@/components/ui/Container";
import { Caption, H2, Pijin } from "@/components/ui/Typography";
import { Photo, type PhotoPalette } from "@/components/ui/Photo";
import { IconArrow } from "@/components/ui/Icon";
import { IMG, SI, unsplashUrl } from "@/lib/images";

type Story = {
  id: string;
  pijin: string;
  gloss: string;
  title: string;
  excerpt: string;
  palette: PhotoPalette;
  imageId: string;
  readTime: string;
};

const STORIES: Story[] = [
  {
    id: "wantok",
    pijin: "Wantok",
    gloss: "one-talk, kinsperson",
    title: "How a Honiara market sells eight currencies before lunch",
    excerpt:
      "The unofficial economy of the Solomons runs on family ties — and on the assumption that you'll be back.",
    palette: "village",
    imageId: SI.mountainRoad,
    readTime: "6 min",
  },
  {
    id: "kastom",
    pijin: "Kastom",
    gloss: "custom, tradition",
    title: "The shell money still being minted in Langa Langa Lagoon",
    excerpt:
      "Three families on Malaita carve, grind and string what the rest of the country uses as currency for bride-price.",
    palette: "sunset",
    imageId: SI.boatsOnWater,
    readTime: "8 min",
  },
  {
    id: "saltwater",
    pijin: "Saltwater",
    gloss: "coastal, ocean-people",
    title: "Diving the Iron Bottom Sound at first light",
    excerpt:
      "Seventy years on, the wrecks of Guadalcanal are coral. Sharks live in the radio rooms. You can still read the gauges.",
    palette: "storm",
    imageId: IMG.shipwreckCoral2,
    readTime: "5 min",
  },
];

/**
 * Stories — 3-up editorial card row. Each card leads with a Pijin keyword
 * + English gloss, magazine-style. This is the place we lean hardest into
 * the bilingual voice; the rest of the page stays mostly English.
 */
export function Stories() {
  return (
    <section className="mt-28 md:mt-32">
      <Container>
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <Caption>Journal</Caption>
            <H2 className="mt-2">Stories from the islands</H2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1.5 text-[14px] font-semibold text-lagoon-700 hover:text-lagoon-900 no-underline whitespace-nowrap"
          >
            All stories <IconArrow size={15} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORIES.map((s) => (
            <a
              key={s.id}
              href="#"
              className="group block no-underline"
            >
              <Photo
                palette={s.palette}
                src={unsplashUrl(s.imageId, 800)}
                alt={s.title}
                ratio="4/3"
                radius="card"
                className="transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-0.5"
              />
              <div className="mt-4">
                <p className="text-[13px]">
                  <Pijin className="text-[16px]">{s.pijin}</Pijin>
                  <span className="ml-1.5 text-volcano-500">
                    — {s.gloss}
                  </span>
                </p>
                <h3 className="mt-2 font-display text-[24px] font-normal leading-[1.2] tracking-[-0.015em] text-volcano-900 group-hover:text-lagoon-900 text-balance">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.55] text-volcano-700 text-pretty">
                  {s.excerpt}
                </p>
                <p className="mt-3 text-[12px] uppercase tracking-[0.06em] text-volcano-500">
                  {s.readTime} read
                </p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
