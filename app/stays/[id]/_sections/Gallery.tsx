import { Photo, type PhotoPalette } from "@/components/ui/Photo";
import { IconMenu } from "@/components/ui/Icon";
import { unsplashUrl } from "@/lib/images";

export type GalleryProps = {
  imageIds: string[];
  /** Coloured fallback if an image fails to load. */
  fallbackPalette: PhotoPalette;
  totalPhotoCount?: number;
};

/**
 * Gallery — 2/1/1 grid. Hero photo on the left spans both rows; four
 * thumbnails on the right form a 2×2. The "Show all N photos" pill is
 * pinned to the hero photo's bottom-right corner. On mobile collapses to
 * a single hero with the pill overlaid.
 */
export function Gallery({
  imageIds,
  fallbackPalette,
  totalPhotoCount = 24,
}: GalleryProps) {
  const [hero, ...thumbs] = imageIds;
  const four = thumbs.slice(0, 4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2 gap-2.5 h-[300px] md:h-[480px] rounded-hero overflow-hidden">
      <div className="relative md:row-span-2">
        <Photo
          palette={fallbackPalette}
          src={unsplashUrl(hero, 1600)}
          alt=""
          ratio="auto"
          radius="none"
          className="h-full"
        />
        <button
          type="button"
          className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-pill bg-volcano-900/80 px-3.5 py-2 text-[13px] font-semibold text-white backdrop-blur-sm hover:bg-volcano-900"
        >
          <IconMenu size={14} /> Show all {totalPhotoCount} photos
        </button>
      </div>
      {four.map((id, i) => (
        <Photo
          key={id + i}
          palette={fallbackPalette}
          src={unsplashUrl(id, 800)}
          alt=""
          ratio="auto"
          radius="none"
          className="hidden md:block h-full"
        />
      ))}
    </div>
  );
}
