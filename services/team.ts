import { teamMockData, volunteersMockData } from "@/data/team";
import type { TeamMember, TeamPage, Volunteer } from "@/types";
import type { Hero } from "@/types";

const teamPageHero: Hero = {
  eyebrow: "Our Team",
  title: "The People Behind MondiBlanc",
  subtitle:
    "A dedicated team of educators, coordinators, and volunteers committed to nurturing Indonesia's creative future.",
  image: "https://picsum.photos/seed/hero-team/1200/800",
};

export async function getTeamPage(): Promise<TeamPage> {
  return {
    hero: teamPageHero,
    programHead: teamMockData.filter((m) => m.group === "head"),
    programManagers: teamMockData.filter((m) => m.group === "manager"),
    coordinators: teamMockData.filter((m) => m.group === "coordinator"),
    volunteers: volunteersMockData,
    volunteerCta: {
      title: "Join Our Volunteer Community",
      description:
        "Volunteers are the heartbeat of MondiBlanc. Whether you have a few hours a month or want to dive deep into a program area, we welcome your energy and skills.",
      cta: { label: "Apply to Volunteer", href: "mailto:volunteer@mondiblanc.org" },
    },
  };
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return teamMockData;
}

export async function getVolunteers(): Promise<Volunteer[]> {
  return volunteersMockData;
}
