import { Container } from "@/components/ui/Container";
import { Caption } from "@/components/ui/Typography";
import { Motif } from "@/components/ui/Motif";

const STATS = [
  { value: "992", label: "islands" },
  { value: "87", label: "languages" },
  { value: "9", label: "provinces" },
  { value: "1", label: "slow week is usually enough" },
] as const;

/**
 * ByTheNumbers — specific numbers over vague claims (brand rule). Large
 * Instrument Serif display numerals on a deep lagoon slab, with the wave
 * motif as a horizontal rule between sections — the only place we use it
 * on this page (motifs are "once per page" budget).
 */
export function ByTheNumbers() {
  return (
    <section className="mt-28 md:mt-32 bg-lagoon-900 text-shell-50 py-20 md:py-24 relative overflow-hidden">
      <Container className="relative">
        <Caption className="!text-reef-300/80">Hapi Isles</Caption>
        <h2 className="mt-3 font-display text-[clamp(30px,4vw,44px)] leading-[1.15] tracking-[-0.015em] max-w-[28ch]">
          A country you have to want to find.
        </h2>

        <div className="my-12 flex items-center gap-5 text-reef-300/60">
          <span className="flex-1 h-px bg-reef-300/20" />
          <Motif name="wave" size={36} alt="" />
          <span className="flex-1 h-px bg-reef-300/20" />
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-[clamp(48px,7vw,84px)] leading-none tracking-[-0.025em] text-shell-50">
                {s.value}
              </dt>
              <dd className="mt-2 text-[14px] text-shell-50/70 max-w-[20ch]">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
