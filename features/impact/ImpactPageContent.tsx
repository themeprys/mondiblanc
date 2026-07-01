import Image from "next/image";
import Link from "next/link";
import type { ImpactPage } from "@/types";
import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/shared/Section";
import { ImpactCounter } from "@/components/shared/ImpactCounter";
import { ImpactAlumniGrid } from "./ImpactAlumniGrid";

interface ImpactPageContentProps {
  data: ImpactPage;
}

export function ImpactPageContent({ data }: ImpactPageContentProps) {
  return (
    <>
      <Hero data={data.hero} />

      <Section className="bg-card">
        <ImpactCounter stats={data.impactStats} />
      </Section>

      <Section id="alumni">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">Scholarship Alumni</h2>
          <p className="mt-4 text-muted-foreground">
            Meet the filmmakers whose stories began with MondiBlanc
          </p>
        </div>
        <div className="mt-10">
          <ImpactAlumniGrid alumni={data.alumni} />
        </div>
      </Section>

      <Section className="bg-foreground/[0.02]" id="stories">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">Success Stories</h2>
          <p className="mt-4 text-muted-foreground">
            Journeys from scholarship to recognition
          </p>
        </div>
        <div className="mt-12 space-y-16">
          {data.successStories.map((story, i) => (
            <div
              key={story.id}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden rounded-sm ${
                  i % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <Image
                  src={story.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <h3 className="text-2xl md:text-3xl">{story.title}</h3>
                <p className="mt-2 text-sm text-accent">{story.alumniName}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {story.excerpt}
                </p>
                <blockquote className="mt-6 border-l-2 border-accent pl-4 italic text-foreground/80">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <Link
                  href={`/alumni/${story.alumniSlug}`}
                  className="mt-4 inline-block text-sm text-accent hover:underline"
                >
                  Read full story →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="video">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">Featured Video</h2>
        </div>
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-sm bg-foreground/5">
            <iframe
              src={data.featuredVideo.videoUrl}
              title={data.featuredVideo.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-xl">{data.featuredVideo.title}</h3>
            <p className="mt-2 text-muted-foreground">
              {data.featuredVideo.description}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Duration: {data.featuredVideo.duration}
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-foreground/[0.02]" id="gallery">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">Photo Essays</h2>
          <p className="mt-4 text-muted-foreground">
            Moments from workshops, screenings, and community
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.gallery.map((item) => (
            <figure key={item.id} className="group overflow-hidden rounded-sm">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="mt-3">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
