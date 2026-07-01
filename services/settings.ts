import { footerMockData } from "@/data/footer";
import { navigationMockData } from "@/data/navigation";
import { settingsMockData } from "@/data/settings";
import type { Footer, Navigation, SiteSettings } from "@/types";

export async function getNavigation(): Promise<Navigation> {
  return navigationMockData;
}

export async function getFooter(): Promise<Footer> {
  return footerMockData;
}

export async function getSettings(): Promise<SiteSettings> {
  return settingsMockData;
}
