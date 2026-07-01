import { getHomepage } from "@/services/homepage";
import { HomePageContent } from "@/features/home/HomePageContent";

export default async function HomePage() {
  const data = await getHomepage();
  return <HomePageContent data={data} />;
}
