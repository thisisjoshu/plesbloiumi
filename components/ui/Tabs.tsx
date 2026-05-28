"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TabItem<T extends string = string> = {
  value: T;
  label: ReactNode;
};

export type TabsProps<T extends string = string> = {
  tabs: TabItem<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  /** Pull the underline flush with content below (no extra bottom padding). */
  flush?: boolean;
};

/**
 * Tabs — hibiscus-red underline on the active tab, hairline rule beneath.
 * Controlled. The whole row scrolls horizontally on narrow screens.
 */
export function Tabs<T extends string = string>({
  tabs,
  value,
  onChange,
  className,
  flush = false,
}: TabsProps<T>) {
  return (
    <div
      role="tablist"
      className={cn(
        "flex gap-7 border-b border-shell-200 overflow-x-auto",
        !flush && "mb-4",
        className,
      )}
    >
      {tabs.map((tab) => {
        const active = tab.value === value;
        return (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.value)}
            className={cn(
              "py-2.5 text-[14px] font-medium border-b-2 border-transparent whitespace-nowrap transition-colors duration-150 ease-[var(--ease-out)]",
              active
                ? "text-volcano-900 border-hibiscus-600 font-semibold"
                : "text-volcano-500 hover:text-volcano-700",
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
