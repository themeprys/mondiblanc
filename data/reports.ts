import type { Publication, AnnualReport } from "@/types";

export const publicationsMockData: Publication[] = [
  {
    id: "1",
    slug: "monthly-brief-may-2025",
    title: "May 2025: Documentary Voices from Eastern Indonesia",
    excerpt:
      "This month's publication highlights emerging documentary talent from Maluku, Papua, and Sulawesi.",
    coverImage: "https://picsum.photos/seed/pub1/400/500",
    month: "May",
    year: 2025,
    category: "Monthly Brief",
    pdfUrl: "/reports/monthly-may-2025.pdf",
    publishedAt: "2025-05-01",
  },
  {
    id: "2",
    slug: "monthly-brief-april-2025",
    title: "April 2025: The Art of Cinematography",
    excerpt:
      "Exploring visual storytelling techniques taught in our spring cinematography intensive.",
    coverImage: "https://picsum.photos/seed/pub2/400/500",
    month: "April",
    year: 2025,
    category: "Monthly Brief",
    pdfUrl: "/reports/monthly-april-2025.pdf",
    publishedAt: "2025-04-01",
  },
  {
    id: "3",
    slug: "monthly-brief-march-2025",
    title: "March 2025: Community & Creative Economy",
    excerpt:
      "How our volunteer network and community programs contribute to Indonesia's creative ecosystem.",
    coverImage: "https://picsum.photos/seed/pub3/400/500",
    month: "March",
    year: 2025,
    category: "Monthly Brief",
    pdfUrl: "/reports/monthly-march-2025.pdf",
    publishedAt: "2025-03-01",
  },
  {
    id: "4",
    slug: "research-note-jan-2025",
    title: "Research Note: Oral Histories in Indonesian Documentary",
    excerpt:
      "A research publication examining methodologies for preserving community narratives on film.",
    coverImage: "https://picsum.photos/seed/pub4/400/500",
    month: "January",
    year: 2025,
    category: "Research",
    pdfUrl: "/reports/research-jan-2025.pdf",
    publishedAt: "2025-01-15",
  },
  {
    id: "5",
    slug: "monthly-brief-dec-2024",
    title: "December 2024: Year in Review",
    excerpt:
      "Reflecting on a year of scholarships, workshops, screenings, and community growth.",
    coverImage: "https://picsum.photos/seed/pub5/400/500",
    month: "December",
    year: 2024,
    category: "Monthly Brief",
    pdfUrl: "/reports/monthly-dec-2024.pdf",
    publishedAt: "2024-12-01",
  },
  {
    id: "6",
    slug: "monthly-brief-nov-2024",
    title: "November 2024: Alumni Festival Roundup",
    excerpt:
      "Celebrating alumni achievements at Film Festival Indonesia and regional showcases.",
    coverImage: "https://picsum.photos/seed/pub6/400/500",
    month: "November",
    year: 2024,
    category: "Monthly Brief",
    pdfUrl: "/reports/monthly-nov-2024.pdf",
    publishedAt: "2024-11-01",
  },
];

export const reportsMockData: AnnualReport[] = [
  {
    id: "1",
    slug: "annual-report-2024",
    title: "Annual Report 2024",
    year: 2024,
    summary:
      "A comprehensive overview of our programs, financial stewardship, and impact across Indonesia's filmmaking community.",
    coverImage: "https://picsum.photos/seed/report2024/400/500",
    pdfUrl: "/reports/annual-report-2024.pdf",
    highlights: [
      "32 scholarship recipients supported across 12 provinces",
      "18 workshops delivered to 240+ participants",
      "6 alumni films selected for international festivals",
      "94% of program funds directed to direct beneficiary services",
    ],
  },
  {
    id: "2",
    slug: "annual-report-2023",
    title: "Annual Report 2023",
    year: 2023,
    summary:
      "Documenting our growth year: expanded mentorship, new community partnerships, and strengthened alumni network.",
    coverImage: "https://picsum.photos/seed/report2023/400/500",
    pdfUrl: "/reports/annual-report-2023.pdf",
    highlights: [
      "28 scholarship recipients from diverse backgrounds",
      "Launch of MondiBlanc Labs production facility",
      "First regional community screening series",
      "Partnership with three international film institutions",
    ],
  },
  {
    id: "3",
    slug: "annual-report-2022",
    title: "Annual Report 2022",
    year: 2022,
    summary:
      "Our recovery and renewal year following global challenges, with renewed focus on emerging filmmakers.",
    coverImage: "https://picsum.photos/seed/report2022/400/500",
    pdfUrl: "/reports/annual-report-2022.pdf",
    highlights: [
      "Return to in-person workshops and screenings",
      "24 scholarship awards granted",
      "Establishment of volunteer program framework",
      "Publication of first transparency report",
    ],
  },
];
