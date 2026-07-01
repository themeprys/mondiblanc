import {
  Globe,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { PatronsPage } from "@/types";
import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/shared/Section";
import { CTA } from "@/components/shared/CTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  globe: Globe,
  "trending-up": TrendingUp,
  users: Users,
};

interface PatronsPageContentProps {
  data: PatronsPage;
}

export function PatronsPageContent({ data }: PatronsPageContentProps) {
  return (
    <>
      <Hero data={data.hero} />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">{data.whySupport.title}</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {data.whySupport.reasons.map((reason) => {
            const Icon = iconMap[reason.icon] ?? Target;
            return (
              <div key={reason.title} className="rounded-sm bg-card p-6">
                <Icon className="h-8 w-8 text-accent" aria-hidden />
                <h3 className="mt-4 text-xl">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-foreground/[0.02]" id="tiers">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">Patron Tiers</h2>
          <p className="mt-4 text-muted-foreground">
            Choose the level of support that fits your capacity
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "flex flex-col rounded-sm border p-6",
                tier.highlighted
                  ? "border-accent bg-card shadow-lg"
                  : "border-border bg-card",
              )}
            >
              {tier.highlighted && (
                <span className="mb-4 text-xs font-medium tracking-widest text-accent uppercase">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl">{tier.name}</h3>
              <p className="mt-2 text-2xl font-medium text-accent">
                {tier.amount}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {tier.description}
              </p>
              <ul className="mt-6 flex-1 space-y-2">
                {tier.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="text-sm text-muted-foreground before:mr-2 before:content-['•']"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">Your Donation Impact</h2>
          <p className="mt-4 text-muted-foreground">
            See how your contribution makes a difference
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {data.donationImpact.map((item) => (
            <div
              key={item.id}
              className="rounded-sm border border-border bg-card p-6"
            >
              <p className="text-2xl font-medium text-accent">{item.amount}</p>
              <h3 className="mt-2 text-lg">{item.impact}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-foreground/[0.02]" id="faq">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {data.faq.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <CTA
        title={data.cta.title}
        description={data.cta.description}
        cta={data.cta.cta}
        variant="accent"
      />
    </>
  );
}
