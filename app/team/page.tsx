import { getTeamPage } from "@/services/team";
import { TeamPageContent } from "@/features/team/TeamPageContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Team",
  description:
    "Meet the MondiBlanc team—program leaders, managers, coordinators, and volunteers.",
  path: "/team",
});

export default async function TeamPage() {
  const data = await getTeamPage();
  return <TeamPageContent data={data} />;
}
