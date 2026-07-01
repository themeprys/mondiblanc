import type { Homepage } from "@/types";
import { alumniMockData } from "./alumni";
import { blogMockData } from "./blog";
import { publicationsMockData } from "./reports";

export const homepageMockData: Homepage = {
  hero: {
    eyebrow: "Yayasan MondiBlanc",
    title: "Nurturing the Next Generation of Indonesian Filmmakers",
    subtitle:
      "Through scholarships, workshops, and a thriving creative community, we empower emerging voices to tell stories that matter.",
    image: "https://picsum.photos/seed/hero-home/1200/800",
    cta: { label: "Explore Our Impact", href: "/impact" },
    secondaryCta: { label: "Become a Patron", href: "/patrons" },
  },
  impactStats: [
    {
      id: "1",
      value: 120,
      suffix: "+",
      label: "Scholarship Alumni",
      description: "Filmmakers supported since our founding",
    },
    {
      id: "2",
      value: 45,
      suffix: "+",
      label: "Workshops Delivered",
      description: "Hands-on learning experiences across Indonesia",
    },
    {
      id: "3",
      value: 28,
      label: "Festival Selections",
      description: "Alumni films recognized internationally",
    },
    {
      id: "4",
      value: 12,
      label: "Provinces Reached",
      description: "Community programs across the archipelago",
    },
  ],
  mission: {
    title: "Our Mission",
    description:
      "We believe every story deserves to be told. MondiBlanc exists to remove barriers for emerging Indonesian filmmakers—providing access to education, mentorship, and the resources needed to develop their craft and share their vision with the world.",
    pillars: [
      {
        title: "Education",
        description:
          "Rigorous workshops and intensives taught by industry professionals, covering every aspect of filmmaking from script to screen.",
      },
      {
        title: "Access",
        description:
          "Scholarships and fellowships that open doors for talented filmmakers regardless of economic background or geographic location.",
      },
      {
        title: "Community",
        description:
          "A supportive network of alumni, mentors, volunteers, and partners who believe in the power of Indonesian cinema.",
      },
    ],
  },
  nexus: {
    title: "The Nexus",
    subtitle:
      "MondiBlanc is more than a foundation—we are an ecosystem connecting creators, industry, and community.",
    center: "Yayasan MondiBlanc",
    nodes: [
      {
        id: "pt",
        label: "PT MondiBlanc",
        description:
          "Our production company arm, creating original content and providing industry pathways for alumni.",
      },
      {
        id: "labs",
        label: "Labs",
        description:
          "State-of-the-art facilities for post-production, editing, and collaborative creative development.",
      },
      {
        id: "alumni",
        label: "Scholarship Alumni",
        description:
          "A growing network of filmmakers creating work that shapes Indonesian and global cinema.",
      },
      {
        id: "volunteers",
        label: "Volunteers",
        description:
          "Passionate supporters who power our events, workshops, and community outreach.",
      },
      {
        id: "community",
        label: "Community",
        description:
          "Audiences, partners, and patrons who believe in the transformative power of film.",
      },
    ],
  },
  featuredAlumni: alumniMockData.filter((a) => a.featured).slice(0, 3),
  latestPublications: publicationsMockData.slice(0, 3),
  latestBlog: blogMockData.slice(0, 3),
  patronCta: {
    title: "Invest in Indonesian Cinema",
    description:
      "Your support directly funds scholarships, workshops, and community programs that nurture the filmmakers who will shape tomorrow's stories.",
    cta: { label: "Become a Patron", href: "/patrons" },
  },
};
