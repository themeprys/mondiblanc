import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getBlogPosts } from "@/services/blog";
import { getAlumni } from "@/services/alumni";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, alumni] = await Promise.all([getBlogPosts(), getAlumni()]);

  const staticPages = [
    "",
    "/about",
    "/impact",
    "/team",
    "/publications",
    "/patrons",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogPages = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const alumniPages = alumni.map((a) => ({
    url: `${SITE_URL}/alumni/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...alumniPages];
}
