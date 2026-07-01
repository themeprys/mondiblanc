import type { Footer } from "@/types";

export const footerMockData: Footer = {
  tagline:
    "Nurturing Indonesian voices in cinema through education, community, and creative opportunity.",
  sections: [
    {
      title: "Explore",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Impact", href: "/impact" },
        { label: "Team", href: "/team" },
        { label: "Alumni", href: "/impact#alumni" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/publications#blog" },
        { label: "Publications", href: "/publications#publications" },
        { label: "Annual Reports", href: "/publications#reports" },
        { label: "Become a Patron", href: "/patrons" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact", href: "mailto:hello@mondiblanc.org" },
        { label: "Volunteer", href: "/team#volunteers" },
        { label: "Workshops", href: "/publications#blog" },
      ],
    },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/mondiblanc" },
    { label: "YouTube", href: "https://youtube.com/@mondiblanc" },
    { label: "LinkedIn", href: "https://linkedin.com/company/mondiblanc" },
  ],
  copyright: `© ${new Date().getFullYear()} Yayasan MondiBlanc. All rights reserved.`,
};
