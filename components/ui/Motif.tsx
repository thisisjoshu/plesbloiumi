import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Brand motifs live in /public/motifs as single-colour woodblock SVGs.
 * They are NOT recoloured here — they render as-is so the brand voice
 * stays consistent. Use them as logo-level marks; never inline-edit.
 */

export type MotifName =
  | "canoe"
  | "hibiscus"
  | "shell"
  | "sun"
  | "wave"
  | "frigatebird";

export type MotifProps = {
  name: MotifName;
  size?: number;
  className?: string;
  alt?: string;
};

export function Motif({ name, size = 24, className, alt = "" }: MotifProps) {
  return (
    <Image
      src={`/motifs/${name}.svg`}
      width={size}
      height={size}
      alt={alt}
      className={cn("inline-block align-middle shrink-0", className)}
    />
  );
}
