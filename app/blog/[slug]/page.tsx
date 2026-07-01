import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/services/blog";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { createMetadata, createArticleJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = createArticleJsonLd({
    title: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: post.author,
    image: post.coverImage,
    url: `${SITE_URL}/blog/${post.slug}`,
  });

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container className="py-12 md:py-16">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Publications", href: "/publications#blog" },
            { label: post.title },
          ]}
        />
        <header className="mx-auto mt-8 max-w-3xl">
          <div className="flex items-center gap-3">
            <Badge variant="muted">{post.category}</Badge>
            <span className="text-sm text-muted-foreground">
              {formatDate(post.publishedAt)} · {post.readTime} min read
            </span>
          </div>
          <h1 className="mt-4 text-4xl leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            By {post.author}
          </p>
        </header>
        <div className="relative mx-auto mt-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-sm">
          <Image
            src={post.coverImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
        <div className="prose-custom mx-auto mt-10 max-w-3xl">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-6 leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </article>
  );
}
