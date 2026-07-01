import type { ImpactPage } from "@/types";
import { alumniMockData } from "./alumni";

export const impactMockData: ImpactPage = {
  hero: {
    eyebrow: "Our Impact",
    title: "Stories That Travel, Voices That Endure",
    subtitle:
      "Meet the filmmakers, see the work, and witness the ripple effect of investing in Indonesian cinema.",
    image: "https://picsum.photos/seed/hero-impact/1200/800",
    cta: { label: "Meet Our Alumni", href: "#alumni" },
  },
  alumni: alumniMockData,
  successStories: [
    {
      id: "1",
      title: "From Scholarship to Sundance",
      alumniName: "Aditya Pratama",
      alumniSlug: "aditya-pratama",
      excerpt:
        "How a documentary about urban displacement became an international festival success story.",
      image: "https://picsum.photos/seed/story1/800/600",
      quote:
        "MondiBlanc didn't just fund my film—they gave me a community that believed in my story before anyone else did.",
    },
    {
      id: "2",
      title: "Theater Roots, Cinematic Vision",
      alumniName: "Sari Wulandari",
      alumniSlug: "sari-wulandari",
      excerpt:
        "Sari's journey from stage performer to award-winning director at MondiBlanc Labs.",
      image: "https://picsum.photos/seed/story2/800/600",
      quote:
        "The mentorship I received here changed how I think about character, pacing, and the emotional truth of a scene.",
    },
    {
      id: "3",
      title: "Light, Land, and Legacy",
      alumniName: "Bima Hakim",
      alumniSlug: "bima-hakim",
      excerpt:
        "A coastal cinematographer whose visual language has captivated audiences worldwide.",
      image: "https://picsum.photos/seed/story3/800/600",
      quote:
        "They saw something in my work that I couldn't see yet. That belief is what every emerging filmmaker needs.",
    },
  ],
  featuredVideo: {
    id: "1",
    title: "MondiBlanc: A Decade of Stories",
    description:
      "A short documentary celebrating ten years of scholarships, workshops, and the filmmakers who define our community.",
    thumbnail: "https://picsum.photos/seed/video-featured/1200/800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "8:42",
  },
  gallery: [
    {
      id: "1",
      title: "Workshop in Session",
      image: "https://picsum.photos/seed/gallery1/800/600",
      caption: "Documentary workshop, Jakarta 2025",
      category: "Workshops",
    },
    {
      id: "2",
      title: "Community Screening",
      image: "https://picsum.photos/seed/gallery2/800/600",
      caption: "Outdoor screening in Yogyakarta",
      category: "Community",
    },
    {
      id: "3",
      title: "Labs at Work",
      image: "https://picsum.photos/seed/gallery3/800/600",
      caption: "Post-production session at MondiBlanc Labs",
      category: "Labs",
    },
    {
      id: "4",
      title: "Festival Premiere",
      image: "https://picsum.photos/seed/gallery4/800/600",
      caption: "Alumni film premiere at Film Festival Indonesia",
      category: "Festivals",
    },
    {
      id: "5",
      title: "Mentorship Circle",
      image: "https://picsum.photos/seed/gallery5/800/600",
      caption: "Monthly mentorship gathering",
      category: "Mentorship",
    },
    {
      id: "6",
      title: "Volunteer Team",
      image: "https://picsum.photos/seed/gallery6/800/600",
      caption: "Summer volunteer orientation",
      category: "Volunteers",
    },
  ],
  impactStats: [
    {
      id: "1",
      value: 120,
      suffix: "+",
      label: "Alumni Supported",
    },
    {
      id: "2",
      value: 85,
      suffix: "%",
      label: "Active in Film Industry",
    },
    {
      id: "3",
      value: 28,
      label: "International Festival Selections",
    },
    {
      id: "4",
      value: 15,
      label: "Awards Won by Alumni",
    },
  ],
};
