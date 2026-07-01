import Image from "next/image";
import Link from "next/link";
import type { AboutPage } from "@/types";
import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/shared/Section";
import { Timeline } from "@/components/shared/Timeline";
import { EcosystemDiagram } from "@/components/shared/EcosystemDiagram";

interface AboutPageContentProps {
  data: AboutPage;
}

export function AboutPageContent({ data }: AboutPageContentProps) {
  return (
    <>
      <Hero data={data.hero} />

      <Section id="history">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">{data.history.title}</h2>
          <p className="mt-4 text-muted-foreground">{data.history.subtitle}</p>
        </div>
        <div className="mt-16">
          <Timeline events={data.history.events} />
        </div>
      </Section>

      <Section className="bg-foreground/[0.02]" id="vision">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl">{data.vision.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {data.vision.content}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src={data.vision.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section id="mission">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">{data.mission.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {data.mission.content}
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.mission.values.map((value) => (
            <div key={value.title} className="rounded-sm bg-card p-6">
              <h3 className="text-lg">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-foreground/[0.02]" id="organization">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:order-1">
            <Image
              src={data.organization.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:order-2">
            <h2 className="text-3xl md:text-4xl">{data.organization.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {data.organization.description}
            </p>
            <Link
              href="/team"
              className="mt-6 inline-block text-sm text-accent hover:underline"
            >
              Meet our team →
            </Link>
          </div>
        </div>
      </Section>

      <Section id="ecosystem">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">{data.ecosystem.title}</h2>
          <p className="mt-4 text-muted-foreground">
            {data.ecosystem.subtitle}
          </p>
        </div>
        <div className="mt-12">
          <EcosystemDiagram data={data.ecosystem} />
        </div>
      </Section>
    </>
  );
}
