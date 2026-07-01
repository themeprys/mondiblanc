"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Hero as HeroType } from "@/types";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";

interface HeroProps {
  data: HeroType;
  size?: "default" | "large";
}

export function Hero({ data, size = "default" }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[70vh] md:min-h-[80vh]">
        <Image
          src={data.image}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
        <Container className="relative flex min-h-[70vh] md:min-h-[80vh] items-end pb-16 pt-32 md:pb-24">
          <motion.div
            className="max-w-3xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {data.eyebrow && (
              <p className="mb-4 text-sm font-medium tracking-widest uppercase text-white/80">
                {data.eyebrow}
              </p>
            )}
            <h1
              className={
                size === "large"
                  ? "text-4xl leading-tight md:text-6xl lg:text-7xl"
                  : "text-4xl leading-tight md:text-5xl lg:text-6xl"
              }
            >
              {data.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              {data.subtitle}
            </p>
            {(data.cta || data.secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {data.cta && (
                  <Button asChild size="lg">
                    <Link href={data.cta.href}>{data.cta.label}</Link>
                  </Button>
                )}
                {data.secondaryCta && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/40 text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link href={data.secondaryCta.href}>
                      {data.secondaryCta.label}
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
