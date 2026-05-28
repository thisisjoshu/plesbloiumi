import Image from "next/image";
import { Wordmark } from "@/components/ui/Wordmark";
import { Pijin } from "@/components/ui/Typography";

export type FooterColumn = {
  title: string;
  links: { label: string; href?: string }[];
};

export type FooterProps = {
  columns?: FooterColumn[];
  copyright?: string;
};

const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    title: "Travel",
    links: [
      { label: "All stays" },
      { label: "Diving packages" },
      { label: "Surf trips" },
      { label: "Kastom villages" },
      { label: "WWII history" },
    ],
  },
  {
    title: "Host",
    links: [
      { label: "List your place" },
      { label: "Host handbook" },
      { label: "Wantok program" },
      { label: "Earnings calculator" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About" },
      { label: "Stories" },
      { label: "Sustainability" },
      { label: "Contact" },
      { label: "Press" },
    ],
  },
];

/**
 * Footer — volcano-ink slab, sea-mist text, a faint pattern-shells motif
 * tucked into the top-right corner. Sign-off uses Pijin (Lukim yu).
 */
export function Footer({
  columns = DEFAULT_COLUMNS,
  copyright = "© 2026 Ples Blo Iumi Pte. Ltd. · Honiara, Solomon Islands",
}: FooterProps) {
  return (
    <footer className="relative mt-24 overflow-hidden bg-volcano-900 text-shell-50">
      <Image
        src="/pattern-shells.svg"
        alt=""
        width={380}
        height={280}
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-10 w-[380px] opacity-[0.08]"
      />

      <div className="mx-auto grid max-w-content gap-12 px-6 pt-16 pb-7 md:px-12 lg:px-20 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4">
            <Wordmark size={28} inverse />
          </div>
          <p className="max-w-[320px] text-[14.5px] leading-[1.6] text-shell-50/70">
            A traveller marketplace owned and run from Honiara, connecting
            visitors directly with the families and communities hosting them
            across the Solomons.
          </p>
          <p className="mt-5">
            <Pijin className="!text-reef-300 text-[17px]">Lukim yu.</Pijin>
            <span className="ml-2 text-[13px] text-shell-50/55 font-sans not-italic">
              (see you)
            </span>
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-2.5">
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-shell-50/50">
              {col.title}
            </div>
            {col.links.map((link) => (
              <a
                key={link.label}
                href={link.href ?? "#"}
                className="text-[14px] text-shell-50/85 hover:text-shell-50 no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-content items-center justify-between border-t border-shell-50/10 px-6 py-5 text-[12.5px] text-shell-50/55 md:px-12 lg:px-20">
        <span>{copyright}</span>
        <span className="flex gap-5">
          <a href="#" className="text-shell-50/85 hover:text-shell-50 no-underline">
            Privacy
          </a>
          <a href="#" className="text-shell-50/85 hover:text-shell-50 no-underline">
            Terms
          </a>
          <a href="#" className="text-shell-50/85 hover:text-shell-50 no-underline">
            Host policy
          </a>
        </span>
      </div>
    </footer>
  );
}
