"use client";

import type { TimelineEvent } from "@/types";
import { cn } from "@/lib/utils";

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <div
        className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block"
        aria-hidden
      />
      <div className="space-y-12">
        {events.map((event, i) => (
          <div
            key={event.id}
            className={cn(
              "relative grid gap-4 md:grid-cols-2 md:gap-12",
              i % 2 === 0 ? "md:text-right" : "md:direction-rtl",
            )}
          >
            <div
              className={cn(
                "pl-12 md:pl-0",
                i % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12 md:text-left",
              )}
            >
              <span className="text-sm font-medium tracking-widest text-accent uppercase">
                {event.year}
              </span>
              <h3 className="mt-1 text-xl md:text-2xl">{event.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {event.description}
              </p>
            </div>
            <div
              className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-accent md:left-1/2"
              aria-hidden
            />
          </div>
        ))}
      </div>
    </div>
  );
}
