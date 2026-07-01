"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { ImpactStat } from "@/types";

interface ImpactCounterProps {
  stats: ImpactStat[];
}

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function ImpactCounter({ stats }: ImpactCounterProps) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.id}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <p className="text-4xl font-medium text-accent md:text-5xl">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="mt-2 text-sm font-medium tracking-wide uppercase">
            {stat.label}
          </p>
          {stat.description && (
            <p className="mt-1 text-sm text-muted-foreground">
              {stat.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
