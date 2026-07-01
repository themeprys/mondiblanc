import type { AboutPage } from "@/types";

export const aboutMockData: AboutPage = {
  hero: {
    eyebrow: "About Us",
    title: "A Foundation Built on Story, Community, and Creative Courage",
    subtitle:
      "Since our founding, Yayasan MondiBlanc has been dedicated to democratizing access to filmmaking education in Indonesia.",
    image: "https://picsum.photos/seed/hero-about/1200/800",
  },
  history: {
    title: "Our History",
    subtitle:
      "From a small workshop series to a nationally recognized foundation supporting Indonesia's creative future.",
    events: [
      {
        id: "1",
        year: 2015,
        title: "The First Workshop",
        description:
          "MondiBlanc began as a grassroots initiative—a single documentary workshop for eight aspiring filmmakers in Jakarta.",
      },
      {
        id: "2",
        year: 2017,
        title: "Foundation Established",
        description:
          "Yayasan MondiBlanc was formally established as a nonprofit, launching our first scholarship program with five recipients.",
      },
      {
        id: "3",
        year: 2019,
        title: "MondiBlanc Labs Opens",
        description:
          "Our production facility opened, providing alumni and workshop participants access to professional editing and post-production resources.",
      },
      {
        id: "4",
        year: 2021,
        title: "Regional Expansion",
        description:
          "Community screening series launched in Yogyakarta, Bandung, and Surabaya, bringing alumni films to audiences nationwide.",
      },
      {
        id: "5",
        year: 2023,
        title: "International Recognition",
        description:
          "Alumni films selected for Sundance, Berlinale, and Busan—putting Indonesian independent cinema on the global map.",
      },
      {
        id: "6",
        year: 2025,
        title: "The Ecosystem Grows",
        description:
          "Today, MondiBlanc encompasses scholarships, workshops, labs, production, and a network of 120+ alumni across Indonesia.",
      },
    ],
  },
  vision: {
    title: "Our Vision",
    content:
      "We envision an Indonesia where every aspiring filmmaker—regardless of background, geography, or economic circumstance—has access to the education, mentorship, and community needed to develop their voice and share their stories with the world. We see a thriving creative ecosystem where Indonesian cinema is recognized globally for its diversity, depth, and humanity.",
    image: "https://picsum.photos/seed/vision/800/600",
  },
  mission: {
    title: "Our Mission",
    content:
      "Yayasan MondiBlanc empowers emerging Indonesian filmmakers through scholarships, workshops, mentorship, and community programs. We are committed to transparency, accessibility, and the belief that great stories can come from anywhere.",
    values: [
      {
        title: "Transparency",
        description:
          "We publish annual reports, monthly updates, and open our processes to the community we serve.",
      },
      {
        title: "Accessibility",
        description:
          "Our programs are designed to reach filmmakers across Indonesia, not just those in major cities.",
      },
      {
        title: "Excellence",
        description:
          "We maintain high standards in education and mentorship, preparing filmmakers for professional careers.",
      },
      {
        title: "Community",
        description:
          "We build lasting connections between filmmakers, mentors, volunteers, and supporters.",
      },
    ],
  },
  organization: {
    title: "Our Organization",
    description:
      "Yayasan MondiBlanc operates as a registered nonprofit foundation in Indonesia. Our governance structure includes a board of advisors drawn from film, education, and civil society. Day-to-day programs are led by our program head and managed by a dedicated team of coordinators, supported by an active volunteer network.",
    image: "https://picsum.photos/seed/organization/800/600",
  },
  ecosystem: {
    title: "Our Ecosystem",
    subtitle:
      "MondiBlanc is not a hierarchy—it is a living network of interconnected parts, each strengthening the whole.",
    center: "Yayasan MondiBlanc",
    nodes: [
      {
        id: "pt",
        label: "PT MondiBlanc",
        description: "Production company creating original content and industry opportunities",
        position: { x: 50, y: 10 },
      },
      {
        id: "labs",
        label: "Labs",
        description: "Post-production and collaborative creative facilities",
        position: { x: 90, y: 35 },
      },
      {
        id: "alumni",
        label: "Scholarship Alumni",
        description: "Filmmakers creating work across Indonesia and beyond",
        position: { x: 80, y: 75 },
      },
      {
        id: "volunteers",
        label: "Volunteers",
        description: "Community members powering events and outreach",
        position: { x: 20, y: 75 },
      },
      {
        id: "community",
        label: "Community",
        description: "Audiences, partners, and patrons who sustain our mission",
        position: { x: 10, y: 35 },
      },
    ],
  },
};
