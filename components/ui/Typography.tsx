import type { ElementType, ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BaseProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
};

/**
 * Display — Instrument Serif, 72/1.0, single weight. Tightest tracking.
 * Use sparingly: hero only. Italic for Pijin or editorial flair.
 */
export function Display({ as: Tag = "h1", className, ...rest }: BaseProps) {
  return (
    <Tag
      className={cn(
        "font-display font-normal text-[clamp(40px,8vw,72px)] leading-[1.0] tracking-[-0.025em] text-balance",
        className,
      )}
      {...rest}
    />
  );
}

/**
 * Headline ramp — Display-2, H1, H2 all use Instrument Serif at 400.
 * H3 / H4 switch to Manrope semibold for tighter UI labelling.
 */
export function Display2({ as: Tag = "h1", className, ...rest }: BaseProps) {
  return (
    <Tag
      className={cn(
        "font-display font-normal text-[clamp(36px,5.5vw,54px)] leading-[1.05] tracking-[-0.02em] text-balance",
        className,
      )}
      {...rest}
    />
  );
}

export function H1({ as: Tag = "h1", className, ...rest }: BaseProps) {
  return (
    <Tag
      className={cn(
        "font-display font-normal text-[40px] leading-[1.12] tracking-[-0.015em] text-balance",
        className,
      )}
      {...rest}
    />
  );
}

export function H2({ as: Tag = "h2", className, ...rest }: BaseProps) {
  return (
    <Tag
      className={cn(
        "font-display font-normal text-[30px] leading-[1.18] tracking-[-0.015em] text-balance",
        className,
      )}
      {...rest}
    />
  );
}

export function H3({ as: Tag = "h3", className, ...rest }: BaseProps) {
  return (
    <Tag
      className={cn(
        "font-sans font-semibold text-[20px] leading-[1.30] tracking-[-0.005em]",
        className,
      )}
      {...rest}
    />
  );
}

export function H4({ as: Tag = "h4", className, ...rest }: BaseProps) {
  return (
    <Tag
      className={cn(
        "font-sans font-semibold text-[16px] leading-[1.30] tracking-[-0.005em]",
        className,
      )}
      {...rest}
    />
  );
}

/**
 * Lead paragraph — Instrument Serif at body weight. Used for opening
 * sentence under a Display headline; mutes to fg-2 deliberately.
 */
export function Lead({ as: Tag = "p", className, ...rest }: BaseProps) {
  return (
    <Tag
      className={cn(
        "font-display text-[24px] leading-[1.4] tracking-[-0.005em] text-volcano-700 text-pretty",
        className,
      )}
      {...rest}
    />
  );
}

export function Body({ as: Tag = "p", className, ...rest }: BaseProps) {
  return (
    <Tag
      className={cn(
        "font-sans text-[16px] leading-[1.55] text-volcano-900 text-pretty",
        className,
      )}
      {...rest}
    />
  );
}

export function BodySm({ as: Tag = "p", className, ...rest }: BaseProps) {
  return (
    <Tag
      className={cn("font-sans text-[14px] leading-[1.50] text-volcano-700", className)}
      {...rest}
    />
  );
}

/** Caption — 12px, semi-uppercase, wider tracking. Tertiary text colour. */
export function Caption({ as: Tag = "span", className, ...rest }: BaseProps) {
  return (
    <Tag
      className={cn(
        "font-sans text-[12px] leading-[1.4] font-medium uppercase tracking-[0.08em] text-volcano-500",
        className,
      )}
      {...rest}
    />
  );
}

/**
 * Hand — Caveat, hibiscus red. Used VERY sparingly, postcard captions on
 * imagery or a section label with a hand-drawn arrow. Never for paragraphs.
 */
export function Hand({ as: Tag = "span", className, ...rest }: BaseProps) {
  return (
    <Tag
      className={cn(
        "font-hand text-[22px] leading-[1.15] font-medium text-hibiscus-600",
        className,
      )}
      {...rest}
    />
  );
}

/**
 * Pijin — italic Instrument Serif, lagoon-700. Inline only.
 * Always pair with an English gloss; never machine-translate sentences.
 */
export function Pijin({ as: Tag = "em", className, ...rest }: BaseProps) {
  return (
    <Tag
      className={cn("font-display italic text-lagoon-700 not-italic-fallback", className)}
      style={{ fontStyle: "italic" }}
      {...rest}
    />
  );
}
