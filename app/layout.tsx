import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foliq.online/"),
  title: {
    default: "Foliq — Resume Inspiration for Every Career",
    template: "%s | Foliq",
  },
  description:
    "Browse 12,000+ curated resume examples by industry and role. Get expert tips, templates, and career advice to land your next job faster.",
  keywords: [
    "resume examples",
    "resume inspiration",
    "resume templates",
    "resume tips",
    "resume writing",
    "CV examples",
    "job resume",
    "professional resume",
    "resume format",
    "ATS resume",
  ],
  authors: [{ name: "Foliq" }],
  creator: "Narendra",
  publisher: "narendra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://foliq.online/",
    siteName: "foliq",
    title: "foliq — Resume Inspiration for Every Career",
    description:
      "Browse 12,000+ curated resume examples. Expert tips and inspiration to craft a resume that actually gets interviews.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Foliq — Resume Inspiration for Every Career",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foliq — Resume Inspiration for Every Career",
    description:
      "Browse 12,000+ curated resume examples. Expert tips to craft a resume that gets interviews.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Foliq",
  url: "https://foliq.online/",
  description:
    "Resume examples, templates, and career writing advice for every industry and level.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://foliq.online/resumes/?category={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="canonical" href="https://foliq.online/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
