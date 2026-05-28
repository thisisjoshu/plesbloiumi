import { cn } from "@/lib/cn";

export type StepperStep = {
  label: string;
};

export type StepperProps = {
  steps: StepperStep[];
  /** Zero-based index of the active step. Earlier steps render as done. */
  current: number;
  className?: string;
};

/**
 * Stepper — horizontal progress for booking flows. Done steps show a check
 * in a filled lagoon dot; active step shows its number in an outlined dot.
 */
export function Stepper({ steps, current, className }: StepperProps) {
  return (
    <ol className={cn("flex items-center gap-3 w-full", className)}>
      {steps.map((step, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <li
            key={step.label}
            className="flex items-center gap-3 flex-1 last:flex-none"
          >
            <span
              className={cn(
                "flex items-center gap-2 text-[13px] font-medium",
                done && "text-volcano-900",
                active && "text-volcano-900 font-semibold",
                !done && !active && "text-volcano-500",
              )}
            >
              <span
                className={cn(
                  "inline-flex h-[22px] w-[22px] items-center justify-center rounded-full text-[11px] font-semibold border-[1.5px]",
                  done && "bg-lagoon-700 text-white border-lagoon-700",
                  active &&
                    "bg-white text-lagoon-700 border-lagoon-700",
                  !done && !active && "bg-white text-volcano-500 border-shell-200",
                )}
              >
                {done ? "✓" : i + 1}
              </span>
              {step.label}
            </span>
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className={cn(
                  "h-[2px] flex-1 self-center",
                  i < current ? "bg-lagoon-700" : "bg-shell-200",
                )}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
