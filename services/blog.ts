import { blogMockData } from "@/data/blog";
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

export async function getPublicationsPage(): Promise<PublicationsPage> {
  return {
    hero: publicationsHero,
    blog: blogMockData,
    publications: publicationsMockData,
    reports: reportsMockData,
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return blogMockData;
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  return blogMockData.find((p) => p.slug === slug);
}

export async function getPublications(): Promise<Publication[]> {
  return publicationsMockData;
}

export async function getAnnualReports(): Promise<AnnualReport[]> {
  return reportsMockData;
}
