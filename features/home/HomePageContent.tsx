import Link from "next/link";
import type { Homepage } from "@/types";
import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/shared/Section";
import { ImpactCounter } from "@/components/shared/ImpactCounter";
import { EcosystemDiagram } from "@/components/shared/EcosystemDiagram";
import { CTA } from "@/components/shared/CTA";
import { AlumniCard } from "@/components/cards/AlumniCard";
import { PublicationCard } from "@/components/cards/PublicationCard";
import { BlogCard } from "@/components/cards/BlogCard";

interface HomePageContentProps {
  data: Homepage;
}

export function HomePageContent({ data }: HomePageContentProps) {
  return (
    <>
      <Hero data={data.hero} size="large" />

      <Section className="bg-card">
        <ImpactCounter stats={data.impactStats} />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">{data.mission.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {data.mission.description}
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {data.mission.pillars.map((pillar) => (
            <div key={pillar.title} className="text-center md:text-left">
              <h3 className="text-xl">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-foreground/[0.02]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">{data.nexus.title}</h2>
          <p className="mt-4 text-muted-foreground">{data.nexus.subtitle}</p>
        </div>
        <div className="mt-12">
          <EcosystemDiagram data={data.nexus} />
        </div>
      </Section>

      <Section>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl">Featured Alumni</h2>
            <p className="mt-2 text-muted-foreground">
              Filmmakers shaping Indonesian cinema
            </p>
          </div>
          <Link
            href="/impact#alumni"
            className="hidden text-sm text-accent hover:underline md:block"
          >
            View all alumni
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.featuredAlumni.map((alumni) => (
            <AlumniCard key={alumni.id} alumni={alumni} />
          ))}
        </div>
      </Section>

      <Section className="bg-foreground/[0.02]">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl">Latest Publications</h2>
            <p className="mt-2 text-muted-foreground">
              Monthly briefs and research notes
            </p>
          </div>
          <Link
            href="/publications#publications"
            className="hidden text-sm text-accent hover:underline md:block"
          >
            View all
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.latestPublications.map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl">From the Blog</h2>
            <p className="mt-2 text-muted-foreground">
              News, stories, and program updates
            </p>
          </div>
          <Link
            href="/publications#blog"
            className="hidden text-sm text-accent hover:underline md:block"
          >
            View all posts
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.latestBlog.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Section>

      <CTA
        title={data.patronCta.title}
        description={data.patronCta.description}
        cta={data.patronCta.cta}
        variant="accent"
      />
    </>
  );
}
