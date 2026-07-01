import { homepageMockData } from "@/data/homepage";
import type { Homepage } from "@/types";

export async function getHomepage(): Promise<Homepage> {
  return homepageMockData;
}
