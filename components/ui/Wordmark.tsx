import { cn } from "@/lib/cn";

export type WordmarkProps = {
  size?: number;
  className?: string;
  /** Use the inverse colour on dark surfaces (footer, photo overlay). */
  inverse?: boolean;
};

/**
 * The wordmark is the brand. Always lowercase, always italic Instrument Serif.
 * Never recolour outside of the inverse case.
 */
export function Wordmark({ size = 22, className, inverse = false }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-display italic font-normal tracking-tight leading-none",
        inverse ? "text-shell-50" : "text-volcano-900",
        className,
      )}
      style={{ fontSize: size }}
    >
      ples blo iumi
    </span>
  );
}
