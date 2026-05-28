import { Avatar } from "@/components/ui/Avatar";
import { Motif } from "@/components/ui/Motif";
import type { Review } from "@/lib/stays";

export type ReviewListProps = {
  rating: number;
  reviewCount: number;
  reviews: Review[];
};

/**
 * ReviewList — heading carries the sun motif + rating + count (never a
 * star glyph — that's a brand rule). Each review row puts the reviewer
 * meta in a narrow column on the left and the quoted text in display
 * serif on the right.
 */
export function ReviewList({ rating, reviewCount, reviews }: ReviewListProps) {
  return (
    <div>
      <h2 className="m-0 mb-4 inline-flex items-center gap-2 font-display text-[28px] font-normal tracking-[-0.015em] text-volcano-900">
        <Motif name="sun" size={24} className="text-sun-500" alt="" />
        {rating.toFixed(1)} · {reviewCount} reviews
      </h2>

      <div>
        {reviews.map((review) => (
          <div
            key={review.name + review.date}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-7 py-5 border-b border-shell-200 last:border-b-0"
          >
            <div>
              <div className="flex items-center gap-2.5">
                <Avatar initials={review.name[0]} size={36} tone="lagoon" />
                <div>
                  <div className="text-[14px] font-semibold text-volcano-900">
                    {review.name}
                  </div>
                  <div className="text-[12px] text-volcano-500">
                    {review.from}
                  </div>
                </div>
              </div>
              <div className="mt-2 text-[12px] text-volcano-500">
                {review.date}
              </div>
            </div>
            <p className="m-0 font-display text-[17px] md:text-[18px] leading-[1.55] text-volcano-800 text-pretty">
              &ldquo;{review.text}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
