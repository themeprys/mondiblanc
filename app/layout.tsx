import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getNavigation, getFooter } from "@/services/settings";
import { createMetadata, createOrganizationJsonLd } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  titleOnly: true,
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navigation, footer] = await Promise.all([
    getNavigation(),
    getFooter(),
  ]);

  const jsonLd = createOrganizationJsonLd();

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Navbar navigation={navigation} />
        <main className="flex-1">{children}</main>
        <Footer footer={footer} />
      </body>
    </html>
  );
}
