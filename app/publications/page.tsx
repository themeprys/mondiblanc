import { getPublicationsPage } from "@/services/blog";
import { PublicationsPageContent } from "@/features/publications/PublicationsPageContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Publications & Accountability",
  description:
    "Blog posts, monthly publications, and annual reports documenting MondiBlanc's work and transparency.",
  path: "/publications",
});

export default async function PublicationsPage() {
  const data = await getPublicationsPage();
  return <PublicationsPageContent data={data} />;
}
