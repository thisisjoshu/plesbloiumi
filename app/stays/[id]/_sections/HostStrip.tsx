import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

export type HostStripProps = {
  name: string;
  initial: string;
  meta: string;
};

/**
 * HostStrip — avatar + italic display name + meta + Message button.
 * Italic Instrument Serif on the name carries the "warm host" voice; the
 * meta line stays Manrope for legibility.
 */
export function HostStrip({ name, initial, meta }: HostStripProps) {
  return (
    <div className="flex items-center gap-4 py-5 border-b border-shell-200">
      <Avatar initials={initial} size={56} tone="hibiscus" />
      <div className="min-w-0">
        <div className="font-display italic text-[22px] md:text-[24px] text-volcano-900 leading-tight">
          Hosted by {name}
        </div>
        <div className="mt-1 text-[13px] text-volcano-500">{meta}</div>
      </div>
      <div className="ml-auto shrink-0">
        <Button variant="secondary" size="md">
          Message hosts
        </Button>
      </div>
    </div>
  );
}
