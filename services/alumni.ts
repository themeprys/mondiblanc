import { alumniMockData } from "@/data/alumni";
import type { Alumni } from "@/types";

export async function getAlumni(): Promise<Alumni[]> {
  return alumniMockData;
}

export async function getFeaturedAlumni(): Promise<Alumni[]> {
  return alumniMockData.filter((a) => a.featured);
}

export async function getAlumniBySlug(slug: string): Promise<Alumni | undefined> {
  return alumniMockData.find((a) => a.slug === slug);
}
