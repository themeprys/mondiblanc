"use client";

import { cn } from "@/lib/utils";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterProps {
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
}

export function Filter({
  options,
  value,
  onChange,
  label = "Filter",
  className,
}: FilterProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <span className="text-sm text-muted-foreground sr-only">{label}</span>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm transition-colors",
            value === option.value
              ? "bg-accent text-accent-foreground"
              : "bg-foreground/5 text-muted-foreground hover:bg-foreground/10",
          )}
          aria-pressed={value === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
