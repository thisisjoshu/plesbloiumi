import type { HTMLAttributes, ElementType } from "react";
import { cn } from "@/lib/cn";

export type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
};

/**
 * Container — applies the 1240px content max-width and the responsive
 * gutter ramp (24 mobile / 48 tablet / 80 desktop) used across the site.
 */
export function Container({ as: Tag = "div", className, ...rest }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-content px-6 md:px-12 lg:px-20",
        className,
      )}
      {...rest}
    />
  );
}
