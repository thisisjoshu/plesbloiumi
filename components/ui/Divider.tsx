import { Motif } from "./Motif";
import { cn } from "@/lib/cn";

export type DividerProps = {
  className?: string;
  /** Drop a single brand motif at the centre — used in editorial sections. */
  motif?: "wave" | "shell" | "hibiscus";
};

/**
 * Divider — 1px hairline in shell-200. With `motif`, the rule breaks around
 * a centred woodblock motif. Use the motif variant sparingly — once per page.
 */
export function Divider({ className, motif }: DividerProps) {
  if (!motif) {
    return (
      <hr
        className={cn("border-0 h-px bg-shell-200 my-12", className)}
      />
    );
  }

  return (
    <div className={cn("flex items-center gap-4 my-12", className)}>
      <span className="flex-1 h-px bg-shell-200" />
      <Motif name={motif} size={28} className="text-volcano-500 opacity-70" />
      <span className="flex-1 h-px bg-shell-200" />
    </div>
  );
}
