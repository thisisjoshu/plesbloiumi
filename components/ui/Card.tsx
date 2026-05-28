import type { HTMLAttributes, ReactNode, ElementType } from "react";
import { cn } from "@/lib/cn";

export type CardProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  /** Lift 2px + soft shadow on hover. Default true for clickable cards. */
  interactive?: boolean;
  /** Drop padding — use when the first child is a flush-top Photo. */
  flush?: boolean;
  children?: ReactNode;
};

/**
 * Card — white surface on the sea-mist page. The contrast IS the elevation.
 * No shadow at rest; hover lifts 2px with a soft drop shadow. Border darkens
 * to full shell-200 at the same time so the lift reads on cream too.
 */
export function Card({
  as: Tag = "div",
  interactive = false,
  flush = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={cn(
        "bg-white border border-shell-200 rounded-card overflow-hidden",
        "transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease-out)]",
        !flush && "p-5",
        interactive &&
          "cursor-pointer hover:-translate-y-0.5 hover:shadow-card hover:border-shell-400/50",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function CardBody({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-4", className)} {...rest}>
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "px-4 pt-4 pb-3 border-b border-shell-200 flex items-center justify-between gap-3",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "px-4 py-3 border-t border-shell-200 flex items-center justify-between gap-3",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
