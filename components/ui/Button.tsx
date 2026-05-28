import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "warm" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
};

const BASE =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold leading-none whitespace-nowrap " +
  "rounded-input border border-transparent cursor-pointer select-none " +
  "transition-[background,color,transform,border-color] duration-150 ease-[var(--ease-out)] " +
  "active:translate-y-px focus-visible:outline-2 focus-visible:outline-lagoon-500 focus-visible:outline-offset-[3px] " +
  "disabled:opacity-40 disabled:cursor-not-allowed disabled:active:translate-y-0";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-lagoon-700 text-white hover:bg-lagoon-800",
  warm: "bg-hibiscus-600 text-white hover:bg-hibiscus-700",
  secondary:
    "bg-transparent text-volcano-900 border-volcano-900 hover:bg-shell-100",
  ghost: "bg-transparent text-volcano-900 hover:bg-shell-100",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-[13px]",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-[16px]",
};

function content(
  leadingIcon: ReactNode,
  trailingIcon: ReactNode,
  children: ReactNode,
) {
  return (
    <>
      {leadingIcon}
      {children}
      {trailingIcon}
    </>
  );
}

export type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  leadingIcon,
  trailingIcon,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        BASE,
        VARIANTS[variant],
        SIZES[size],
        fullWidth && "w-full",
        className,
      )}
      {...rest}
    >
      {content(leadingIcon, trailingIcon, children)}
    </button>
  );
}

export type ButtonLinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({
  variant = "primary",
  size = "md",
  fullWidth,
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        BASE,
        VARIANTS[variant],
        SIZES[size],
        fullWidth && "w-full",
        "no-underline",
        className,
      )}
      {...rest}
    >
      {content(leadingIcon, trailingIcon, children)}
    </a>
  );
}
