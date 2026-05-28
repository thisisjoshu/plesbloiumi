import { Photo } from "@/components/ui/Photo";
import type { Room } from "@/lib/stays";
import { unsplashUrl } from "@/lib/images";

export type RoomListProps = {
  rooms: Room[];
};

/**
 * RoomList — one row per room. Small photo on the left, name + meta in the
 * middle, italic display price on the right. The whole row sits in a
 * standard white card so it inherits the system's hover-lift treatment if
 * we later make rooms individually bookable.
 */
export function RoomList({ rooms }: RoomListProps) {
  return (
    <div className="flex flex-col gap-3">
      {rooms.map((room) => (
        <div
          key={room.name}
          className="grid grid-cols-[120px_1fr_auto] md:grid-cols-[180px_1fr_auto] gap-4 md:gap-5 items-center p-4 bg-white border border-shell-200 rounded-card"
        >
          <Photo
            palette={room.palette}
            src={unsplashUrl(room.imageId, 400)}
            alt={room.name}
            ratio="4/3"
            radius="input"
          />
          <div className="min-w-0">
            <h3 className="m-0 font-display text-[20px] md:text-[22px] font-normal text-volcano-900 tracking-[-0.01em]">
              {room.name}
            </h3>
            <div className="mt-1 text-[13px] text-volcano-500">{room.meta}</div>
          </div>
          <div className="text-right shrink-0">
            <div className="font-display italic text-[20px] md:text-[22px] text-volcano-900">
              SBD {room.price.toLocaleString()}
            </div>
            <div className="text-[12px] text-volcano-500">per night</div>
          </div>
        </div>
      ))}
    </div>
  );
}
