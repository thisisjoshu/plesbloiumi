import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/ui/Icon";

export type BookingCardProps = {
  nightlyPrice: number;
  /** Default 7 nights, used for the breakdown math. */
  nights?: number;
  /** Optional return boat transfer line. */
  boatTransfer?: number;
};

/**
 * BookingCard — sticky right-rail. Price, summary of dates + guests
 * (placeholder values today; will become live form state once we wire the
 * booking flow), Reserve CTA, then a dashed-rule breakdown below.
 *
 * The Wantok fee (8% — half of competitors') is shown as a line item per
 * brand promise: hosts and guests both see exactly what we take.
 */
export function BookingCard({
  nightlyPrice,
  nights = 7,
  boatTransfer = 0,
}: BookingCardProps) {
  const subtotal = nightlyPrice * nights;
  const wantokFee = Math.round(subtotal * 0.08);
  const total = subtotal + boatTransfer + wantokFee;

  return (
    <aside className="lg:sticky lg:top-24">
      <div className="bg-white border border-shell-200 rounded-hero p-6 md:p-7 shadow-card">
        <div className="flex items-baseline gap-2">
          <span className="font-display italic text-[32px] font-normal text-volcano-900 tracking-[-0.015em]">
            SBD {nightlyPrice.toLocaleString()}
          </span>
          <span className="text-[13px] text-volcano-500">/ night</span>
        </div>

        <div className="mt-5 grid grid-cols-2 border-[1.5px] border-shell-200 rounded-input overflow-hidden">
          <div className="p-3.5 border-r border-shell-200">
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-volcano-500">
              Arrive
            </div>
            <div className="mt-1 text-[14px] font-medium text-volcano-900">
              Tue 14 Jul
            </div>
          </div>
          <div className="p-3.5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-volcano-500">
              Leave
            </div>
            <div className="mt-1 text-[14px] font-medium text-volcano-900">
              Tue 21 Jul
            </div>
          </div>
          <div className="p-3.5 col-span-2 border-t border-shell-200">
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-volcano-500">
              Guests
            </div>
            <div className="mt-1 text-[14px] font-medium text-volcano-900">
              2 adults · 0 kids
            </div>
          </div>
        </div>

        <Button
          variant="warm"
          size="lg"
          fullWidth
          trailingIcon={<IconArrow size={16} />}
          className="mt-4"
        >
          Reserve · pay nothing yet
        </Button>

        <div className="mt-5 pt-4 border-t border-dashed border-shell-200 flex flex-col gap-2 text-[13.5px] text-volcano-700">
          <div className="flex justify-between">
            <span>
              SBD {nightlyPrice.toLocaleString()} × {nights} nights
            </span>
            <span>SBD {subtotal.toLocaleString()}</span>
          </div>
          {boatTransfer > 0 && (
            <div className="flex justify-between">
              <span>Boat transfer (return)</span>
              <span>SBD {boatTransfer.toLocaleString()}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Wantok fee · 8%</span>
            <span>SBD {wantokFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold text-volcano-900 text-[15px] mt-1.5 pt-2.5 border-t border-shell-200">
            <span>Total in SBD</span>
            <span>SBD {total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
