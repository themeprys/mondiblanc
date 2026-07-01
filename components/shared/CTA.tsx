import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";

interface CTAProps {
  title: string;
  description: string;
  cta: { label: string; href: string };
  variant?: "default" | "accent";
  className?: string;
}

export function CTA({
  title,
  description,
  cta,
  variant = "default",
  className,
}: CTAProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        variant === "accent" && "bg-accent text-accent-foreground",
        variant === "default" && "bg-foreground/5",
        className,
      )}
    >
      <Container className="text-center">
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-lg leading-relaxed",
            variant === "accent" ? "text-white/85" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            variant={variant === "accent" ? "outline" : "default"}
            className={
              variant === "accent"
                ? "border-white/40 text-white hover:bg-white/10 hover:text-white"
                : undefined
            }
          >
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
