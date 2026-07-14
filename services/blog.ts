import { cosmic } from "@/lib/cosmic";
import { publicationsMockData, reportsMockData } from "@/data/reports";

import type {
  AnnualReport,
  BlogPost,
  Publication,
  PublicationsPage,
} from "@/types";

import type { Hero } from "@/types";

const publicationsHero: Hero = {
  eyebrow: "Publications & Accountability",
  title: "Transparency Through Storytelling",
  subtitle:
    "Explore our blog, monthly publications, and annual reports—documenting our work, impact, and commitment to accountability.",
  image: "https://picsum.photos/seed/hero-publications/1200/800",
};

function calculateReadTime(content: string): number {
  const plainText = content.replace(/<[^>]+>/g, "");
  const words = plainText.trim().split(/\s+/).length;

  return Math.max(1, Math.ceil(words / 200));
}

function mapBlog(post: any): BlogPost {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,

    excerpt: post.metadata?.excerpt ?? "",

    coverImage:
      post.metadata?.cover_image?.imgix_url ??
      post.metadata?.cover_image?.url ??
      "",

    author: post.metadata?.author ?? "",

    category: post.metadata?.category ?? "",

    content: post.metadata?.content ?? "",

    publishedAt:
      post.metadata?.published_at ??
      post.created_at,

    readTime: calculateReadTime(
      post.metadata?.content ?? "",
    ),
  };
}

export async function getPublicationsPage(): Promise<PublicationsPage> {
  return {
    hero: publicationsHero,
    blog: await getBlogPosts(),
    publications: publicationsMockData,
    reports: reportsMockData,
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const { objects } = await cosmic.objects
    .find({
      type: "blogs",
    })
    .depth(1);

  const blogs: BlogPost[] = objects.map(mapBlog);

  blogs.sort((a: BlogPost, b: BlogPost) => {
    return (
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
    );
  });

  return blogs;
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const { objects } = await cosmic.objects.find({
    type: "blogs",
    slug,
  });

  if (!objects.length) {
    return undefined;
  }

  return mapBlog(objects[0]);
}

export async function getPublications(): Promise<Publication[]> {
  return publicationsMockData;
}

export async function getAnnualReports(): Promise<AnnualReport[]> {
  return reportsMockData;
}