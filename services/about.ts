import { aboutMockData } from "@/data/about";
import type { AboutPage } from "@/types";

export async function getAboutPage(): Promise<AboutPage> {
  return aboutMockData;
}
