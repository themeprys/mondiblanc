import type { Navigation } from "@/types";

export const navigationMockData: Navigation = {
  items: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Impact", href: "/impact" },
    {
      label: "Publications & Accountability",
      href: "/publications",
    },
    { label: "Become a Patron", href: "/patrons" },
  ],
  cta: { label: "Support Us", href: "/patrons" },
};
