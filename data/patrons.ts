import type { PatronsPage } from "@/types";

export const patronsMockData: PatronsPage = {
  hero: {
    eyebrow: "Become a Patron",
    title: "Support the Future of Indonesian Cinema",
    subtitle:
      "Join a community of patrons who believe in the power of storytelling and the importance of access to creative education.",
    image: "https://picsum.photos/seed/hero-patrons/1200/800",
    cta: { label: "View Patron Tiers", href: "#tiers" },
  },
  whySupport: {
    title: "Why Support MondiBlanc",
    reasons: [
      {
        title: "Direct Impact",
        description:
          "94% of patron contributions go directly to scholarships, workshops, and community programs. We publish detailed annual reports on every rupiah spent.",
        icon: "target",
      },
      {
        title: "Cultural Preservation",
        description:
          "Indonesian stories deserve global audiences. Your support helps filmmakers document, celebrate, and share the richness of our diverse cultures.",
        icon: "globe",
      },
      {
        title: "Economic Opportunity",
        description:
          "Film education creates career pathways. Our alumni work as directors, cinematographers, editors, and producers across Indonesia's growing creative economy.",
        icon: "trending-up",
      },
      {
        title: "Community Building",
        description:
          "Patrons join a network of filmmakers, educators, and arts advocates who share a commitment to creative excellence and social impact.",
        icon: "users",
      },
    ],
  },
  tiers: [
    {
      id: "1",
      name: "Friend",
      amount: "IDR 500,000 / year",
      description: "Entry-level support for individuals who believe in our mission.",
      benefits: [
        "Quarterly newsletter with impact updates",
        "Invitation to annual patron gathering",
        "Recognition on our website",
      ],
    },
    {
      id: "2",
      name: "Supporter",
      amount: "IDR 2,500,000 / year",
      description: "Meaningful support that directly funds workshop materials and equipment.",
      benefits: [
        "All Friend benefits",
        "Exclusive behind-the-scenes content",
        "Priority access to community screenings",
        "Annual impact report with personalized note",
      ],
      highlighted: true,
    },
    {
      id: "3",
      name: "Champion",
      amount: "IDR 10,000,000 / year",
      description: "Significant support that can fund a partial scholarship or full workshop series.",
      benefits: [
        "All Supporter benefits",
        "Named acknowledgment in annual report",
        "Invitation to alumni showcase premiere",
        "Private meeting with program leadership",
      ],
    },
    {
      id: "4",
      name: "Visionary",
      amount: "IDR 50,000,000+ / year",
      description: "Transformative support enabling major program expansion and endowment growth.",
      benefits: [
        "All Champion benefits",
        "Named scholarship or workshop series",
        "Board advisory consultation opportunity",
        "Custom impact reporting",
      ],
    },
  ],
  donationImpact: [
    {
      id: "1",
      amount: "IDR 500,000",
      impact: "Workshop supplies for one participant",
      description:
        "Covers notebooks, storage media, and materials for a single workshop participant.",
    },
    {
      id: "2",
      amount: "IDR 2,500,000",
      impact: "One week of Labs access",
      description:
        "Provides a filmmaker with a full week of post-production facilities and technical support.",
    },
    {
      id: "3",
      amount: "IDR 10,000,000",
      impact: "Community screening series",
      description:
        "Funds a month of free community screenings in one city, reaching hundreds of audience members.",
    },
    {
      id: "4",
      amount: "IDR 50,000,000",
      impact: "Full scholarship year",
      description:
        "Covers tuition, mentorship, production support, and living stipend for one scholarship recipient.",
    },
  ],
  faq: [
    {
      id: "1",
      question: "How is my donation used?",
      answer:
        "94% of all contributions go directly to program services: scholarships, workshops, labs operations, and community outreach. Administrative costs are kept minimal, and we publish detailed financial reports annually.",
    },
    {
      id: "2",
      question: "Is my donation tax-deductible?",
      answer:
        "Yayasan MondiBlanc is a registered nonprofit foundation in Indonesia. Donors may be eligible for tax benefits under Indonesian nonprofit giving regulations. Please consult your tax advisor for specific guidance.",
    },
    {
      id: "3",
      question: "Can I make a one-time gift instead of annual patronage?",
      answer:
        "Absolutely. While our patron tiers are structured annually, we welcome one-time gifts of any amount. Contact us at hello@mondiblanc.org to discuss your preferred giving structure.",
    },
    {
      id: "4",
      question: "Can my organization become a corporate patron?",
      answer:
        "Yes. We partner with corporations, foundations, and institutions that share our commitment to creative education. Corporate patron packages include customized benefits and impact reporting.",
    },
    {
      id: "5",
      question: "How do I track the impact of my support?",
      answer:
        "All patrons receive quarterly impact updates and an annual report detailing program outcomes, beneficiary stories, and financial stewardship. Champion and Visionary patrons receive additional personalized reporting.",
    },
  ],
  cta: {
    title: "Ready to Make a Difference?",
    description:
      "Every contribution, regardless of size, helps an emerging filmmaker find their voice. Join our community of patrons today.",
    cta: { label: "Contact Us to Become a Patron", href: "mailto:hello@mondiblanc.org" },
  },
};
