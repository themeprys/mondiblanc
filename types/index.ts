export interface NavItem {
  label: string;
  href: string;
}

export interface Navigation {
  items: NavItem[];
  cta: NavItem;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface Footer {
  tagline: string;
  sections: FooterSection[];
  social: { label: string; href: string }[];
  copyright: string;
}

export interface Hero {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export interface ImpactStat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  description?: string;
}

export interface NexusNode {
  id: string;
  label: string;
  description: string;
}

export interface Nexus {
  title: string;
  subtitle: string;
  center: string;
  nodes: NexusNode[];
}

export interface Alumni {
  id: string;
  slug: string;
  name: string;
  photo: string;
  latestProject: string;
  currentPosition: string;
  bio: string;
  story: string;
  gallery: string[];
  video?: string;
  featured?: boolean;
  graduationYear?: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  category: string;
  publishedAt: string;
  readTime: number;
}

export interface Publication {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  month: string;
  year: number;
  category: string;
  pdfUrl: string;
  publishedAt: string;
}

export interface AnnualReport {
  id: string;
  slug: string;
  title: string;
  year: number;
  summary: string;
  coverImage: string;
  pdfUrl: string;
  highlights: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  group: "head" | "manager" | "coordinator" | "volunteer";
}

export interface Volunteer {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  focus: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
}

export interface EcosystemNode {
  id: string;
  label: string;
  description: string;
  position: { x: number; y: number };
}

export interface Ecosystem {
  title: string;
  subtitle: string;
  center: string;
  nodes: EcosystemNode[];
}

export interface SuccessStory {
  id: string;
  title: string;
  alumniName: string;
  alumniSlug: string;
  excerpt: string;
  image: string;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  caption: string;
  category: string;
}

export interface FeaturedVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

export interface PatronTier {
  id: string;
  name: string;
  amount: string;
  description: string;
  benefits: string[];
  highlighted?: boolean;
}

export interface DonationImpact {
  id: string;
  amount: string;
  impact: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  contactEmail: string;
  address: string;
  socialLinks: { platform: string; url: string }[];
}

export interface Homepage {
  hero: Hero;
  impactStats: ImpactStat[];
  mission: {
    title: string;
    description: string;
    pillars: { title: string; description: string }[];
  };
  nexus: Nexus;
  featuredAlumni: Alumni[];
  latestPublications: Publication[];
  latestBlog: BlogPost[];
  patronCta: {
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
}

export interface AboutPage {
  hero: Hero;
  history: {
    title: string;
    subtitle: string;
    events: TimelineEvent[];
  };
  vision: {
    title: string;
    content: string;
    image: string;
  };
  mission: {
    title: string;
    content: string;
    values: { title: string; description: string }[];
  };
  organization: {
    title: string;
    description: string;
    image: string;
  };
  ecosystem: Ecosystem;
}

export interface ImpactPage {
  hero: Hero;
  alumni: Alumni[];
  successStories: SuccessStory[];
  featuredVideo: FeaturedVideo;
  gallery: GalleryItem[];
  impactStats: ImpactStat[];
}

export interface TeamPage {
  hero: Hero;
  programHead: TeamMember[];
  programManagers: TeamMember[];
  coordinators: TeamMember[];
  volunteers: Volunteer[];
  volunteerCta: {
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
}

export interface PublicationsPage {
  hero: Hero;
  blog: BlogPost[];
  publications: Publication[];
  reports: AnnualReport[];
}

export interface PatronsPage {
  hero: Hero;
  whySupport: {
    title: string;
    reasons: { title: string; description: string; icon: string }[];
  };
  tiers: PatronTier[];
  donationImpact: DonationImpact[];
  faq: FAQ[];
  cta: {
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
}
