"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerSize?: "default" | "narrow" | "wide";
  animate?: boolean;
}

export function Section({
  children,
  className,
  id,
  containerSize = "default",
  animate = true,
}: SectionProps) {
  const content = (
    <Container size={containerSize}>{children}</Container>
  );

  if (!animate) {
    return (
      <section id={id} className={cn("py-16 md:py-24", className)}>
        {content}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={cn("py-16 md:py-24", className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {content}
    </motion.section>
  );
}
