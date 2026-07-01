import { getAboutPage } from "@/services/about";
import { AboutPageContent } from "@/features/about/AboutPageContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about Yayasan MondiBlanc's history, vision, mission, and the ecosystem supporting Indonesian filmmakers.",
  path: "/about",
});

export default async function AboutPage() {
  const data = await getAboutPage();
  return <AboutPageContent data={data} />;
}
