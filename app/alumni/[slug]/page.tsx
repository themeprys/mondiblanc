import Image from "next/image";
import { notFound } from "next/navigation";
import { getAlumni, getAlumniBySlug } from "@/services/alumni";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/Container";
import { createMetadata } from "@/lib/seo";

interface AlumniPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const alumni = await getAlumni();
  return alumni.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: AlumniPageProps) {
  const { slug } = await params;
  const alumni = await getAlumniBySlug(slug);
  if (!alumni) return {};

  return createMetadata({
    title: alumni.name,
    description: alumni.bio,
    path: `/alumni/${alumni.slug}`,
    image: alumni.photo,
  });
}

export default async function AlumniPage({ params }: AlumniPageProps) {
  const { slug } = await params;
  const alumni = await getAlumniBySlug(slug);
  if (!alumni) notFound();

  return (
    <article>
      <Container className="py-12 md:py-16">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Our Impact", href: "/impact#alumni" },
            { label: alumni.name },
          ]}
        />
        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={alumni.photo}
              alt={alumni.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl">{alumni.name}</h1>
            <p className="mt-2 text-lg text-accent">{alumni.currentPosition}</p>
            {alumni.graduationYear && (
              <p className="mt-1 text-sm text-muted-foreground">
                Scholarship Alumni, Class of {alumni.graduationYear}
              </p>
            )}
            <p className="mt-6 text-lg leading-relaxed">{alumni.bio}</p>
            <div className="mt-6 rounded-sm bg-foreground/5 p-6">
              <p className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                Latest Project
              </p>
              <p className="mt-1 text-xl">{alumni.latestProject}</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl md:text-3xl">Their Story</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {alumni.story}
          </p>
        </div>

        {alumni.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl">Gallery</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {alumni.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-sm"
                >
                  <Image
                    src={img}
                    alt={`${alumni.name} gallery ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {alumni.video && (
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="text-2xl md:text-3xl">Featured Video</h2>
            <div className="relative mt-8 aspect-video overflow-hidden rounded-sm">
              <iframe
                src={alumni.video}
                title={`${alumni.name} featured video`}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
