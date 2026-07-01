import { impactMockData } from "@/data/impact";
import type { ImpactPage } from "@/types";

export async function getImpactPage(): Promise<ImpactPage> {
  return impactMockData;
}
