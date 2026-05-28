import { Photo, type PhotoPalette } from "@/components/ui/Photo";
import { IconArrow } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type Activity = {
  id?: string;
  name: string;
  /** Kicker label, uppercased — "Diving", "Kastom", "WWII history". */
  kicker: string;
  meta: string;
  price: number;
  palette: PhotoPalette;
  priceSuffix?: string;
};

export type ActivityCardProps = {
  activity: Activity;
  onClick?: () => void;
  className?: string;
};

/**
 * ActivityCard — horizontal 40/60 split. Photo on the left, editorial title
 * + meta + price on the right. Title uses the Instrument Serif display face
 * so it reads like a magazine entry rather than a search result.
 */
export function ActivityCard({ activity, onClick, className }: ActivityCardProps) {
  const suffix = activity.priceSuffix ?? "";
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group block w-full text-left bg-white border border-shell-200 rounded-card overflow-hidden cursor-pointer",
        "grid grid-cols-[40%_1fr] min-h-[160px]",
        "transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease-out)]",
        "hover:-translate-y-0.5 hover:shadow-card hover:border-shell-400/60",
        "focus-visible:outline-2 focus-visible:outline-lagoon-500 focus-visible:outline-offset-[3px]",
        className,
      )}
    >
      <Photo
        palette={activity.palette}
        ratio="auto"
        radius="none"
        className="h-full"
      />
      <div className="flex flex-col justify-between p-5">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-hibiscus-600">
            {activity.kicker}
          </div>
          <h3 className="mt-1.5 m-0 font-display text-[22px] font-normal leading-[1.15] tracking-[-0.01em] text-volcano-900">
            {activity.name}
          </h3>
          <div className="mt-1 text-[13px] text-volcano-500">{activity.meta}</div>
        </div>
        <div className="mt-3 flex items-baseline justify-between text-[13px]">
          <span className="text-volcano-700">
            From{" "}
            <span className="font-display italic text-[18px]">
              SBD {activity.price.toLocaleString()}
            </span>
            {suffix && <span className="ml-1 text-volcano-500">{suffix}</span>}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-lagoon-700">
            See dates <IconArrow size={14} />
          </span>
        </div>
      </div>
    </button>
  );
}
