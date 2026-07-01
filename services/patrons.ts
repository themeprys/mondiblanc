import { patronsMockData } from "@/data/patrons";
import type { PatronsPage } from "@/types";

export async function getPatronsPage(): Promise<PatronsPage> {
  return patronsMockData;
}
