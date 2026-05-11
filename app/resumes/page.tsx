import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import ResumeGrid from "./ResumeGrid";
import { resumeExamples, categories } from "@/data/resumes";

export const metadata: Metadata = {
  title: "Resume Examples — Browse by Industry & Role",
  description:
    "Browse 12,000+ professional resume examples organized by industry, role, and career level. Find inspiration for software engineers, designers, marketers, nurses, teachers, and more.",
  alternates: { canonical: "https://foliq.online/resumes/" },
  openGraph: {
    title: "Resume Examples — Browse by Industry & Role | Foliq",
    description:
      "Find resume inspiration for any career. Curated examples across 48 industries and all career levels.",
    url: "https://foliq.online/resumes/",
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Professional Resume Examples",
  description: "Curated resume examples across industries and career levels",
  numberOfItems: resumeExamples.length,
  itemListElement: resumeExamples.map((resume, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: resume.title,
    description: resume.description,
  })),
};

export default function ResumesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Nav />
      <main>
        {/* Header */}
        <section className="pt-40 pb-20 px-6 md:px-12 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <AnimateIn>
              <p className="font-sans text-xs uppercase tracking-widest text-muted mb-8">
                + 12,000 curated examples
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1
                className="font-display-italic leading-none tracking-tighter"
                style={{ fontSize: "clamp(56px, 10vw, 140px)" }}
              >
                Resume
                <br />
                Examples
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="font-sans text-base text-muted mt-8 max-w-lg leading-relaxed">
                Hand-picked examples across every industry and career level. Find the
                format, tone, and structure that fits your story.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Filter + Grid — client component */}
        <ResumeGrid resumes={resumeExamples} categories={categories} />
      </main>
      <Footer />
    </>
  );
}
