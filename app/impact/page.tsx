import { getImpactPage } from "@/services/impact";
import { ImpactPageContent } from "@/features/impact/ImpactPageContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Our Impact",
  description:
    "Explore MondiBlanc's impact through alumni stories, success narratives, videos, and photo essays.",
  path: "/impact",
});

export default async function ImpactPage() {
  const data = await getImpactPage();
  return <ImpactPageContent data={data} />;
}
