import { getPatronsPage } from "@/services/patrons";
import { PatronsPageContent } from "@/features/patrons/PatronsPageContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Become a Patron",
  description:
    "Support Indonesian cinema through MondiBlanc patron tiers, donation impact, and FAQ.",
  path: "/patrons",
});

export default async function PatronsPage() {
  const data = await getPatronsPage();
  return <PatronsPageContent data={data} />;
}
