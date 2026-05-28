import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const FIELD_BASE =
  "w-full font-sans text-[15px] text-volcano-900 placeholder:text-volcano-500 " +
  "bg-white rounded-input border-[1.5px] border-shell-200 " +
  "transition-[border-color,box-shadow] duration-150 ease-[var(--ease-out)] " +
  "focus:outline-none focus:border-lagoon-500 focus:shadow-focus " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

export type FieldProps = {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  id?: string;
  required?: boolean;
  className?: string;
  children?: ReactNode;
};

/**
 * Field — label + hint/error wrapper. Use this around any Input/Textarea/Select
 * so spacing and label colour stay consistent across the system.
 */
export function Field({
  label,
  hint,
  error,
  id,
  required,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label
          htmlFor={id}
          className="text-[12px] font-semibold uppercase tracking-[0.04em] text-volcano-700"
        >
          {label}
          {required && <span className="ml-1 text-hibiscus-600">*</span>}
        </label>
      )}
      {children}
      {error ? (
        <span className="text-[12px] text-hibiscus-700">{error}</span>
      ) : hint ? (
        <span className="text-[12px] text-volcano-500">{hint}</span>
      ) : null}
    </div>
  );
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export function Input({ className, invalid, ...rest }: InputProps) {
  return (
    <input
      className={cn(
        FIELD_BASE,
        "px-3.5 py-3",
        invalid && "border-hibiscus-600 focus:border-hibiscus-600",
        className,
      )}
      {...rest}
    />
  );
}

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export function Textarea({ className, invalid, rows = 4, ...rest }: TextareaProps) {
  return (
    <textarea
      rows={rows}
      className={cn(
        FIELD_BASE,
        "px-3.5 py-3 resize-y leading-[1.5]",
        invalid && "border-hibiscus-600 focus:border-hibiscus-600",
        className,
      )}
      {...rest}
    />
  );
}

export type SelectProps = InputHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
  children?: ReactNode;
};

export function Select({ className, invalid, children, ...rest }: SelectProps) {
  return (
    <select
      className={cn(
        FIELD_BASE,
        "px-3.5 py-3 appearance-none bg-no-repeat bg-[right_14px_center] pr-10",
        invalid && "border-hibiscus-600 focus:border-hibiscus-600",
        className,
      )}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%233B454C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>\")",
      }}
      {...rest}
    >
      {children}
    </select>
  );
}
